import { spawnSync } from "node:child_process";

const isWindows = process.platform === "win32";
const sshOriginUrl = "git@github.com:erinmi4/erinmi4.github.io.git";
const httpsOriginUrl = "https://github.com/erinmi4/erinmi4.github.io.git";
const publishIgnoredPaths = [
  "src/content/.obsidian/workspace.json",
  "src/content/.obsidian/plugins/recent-files-obsidian/data.json",
  "src/content/.obsidian/plugins/editing-toolbar/data.json"
];

function parseArgs(argv) {
  const messageParts = [];
  const options = {
    build: process.env.PUBLISH_BUILD === "1",
    verify: process.env.PUBLISH_VERIFY !== "0",
    pull: process.env.PUBLISH_PULL !== "0"
  };

  for (const arg of argv) {
    if (arg === "--build") {
      options.build = true;
      continue;
    }

    if (arg === "--skip-build") {
      options.build = false;
      continue;
    }

    if (arg === "--no-verify") {
      options.verify = false;
      continue;
    }

    if (arg === "--no-pull") {
      options.pull = false;
      continue;
    }

    messageParts.push(arg);
  }

  return {
    message: messageParts.join(" ").trim() || "post",
    options
  };
}

const { message, options } = parseArgs(process.argv.slice(2));

function run(description, command, args, runOptions = {}) {
  console.log(`\n==> ${description}`);

  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: false,
    ...runOptions
  });

  if (typeof result.status === "number" && result.status !== 0) {
    process.exit(result.status);
  }

  if (result.error) {
    throw result.error;
  }
}

function runNpmScript(description, scriptName) {
  if (isWindows) {
    run(description, "cmd.exe", ["/d", "/s", "/c", `npm run ${scriptName}`]);
  } else {
    run(description, "npm", ["run", scriptName]);
  }
}

function runNodeScript(description, scriptPath) {
  run(description, process.execPath, [scriptPath]);
}

function capture(command, args) {
  const result = spawnSync(command, args, {
    encoding: "utf8",
    shell: false
  });

  if (result.error) {
    throw result.error;
  }

  if (typeof result.status === "number" && result.status !== 0) {
    process.exit(result.status);
  }

  return result.stdout.trim();
}

function captureLines(command, args) {
  const output = capture(command, args);
  return output ? output.split(/\r?\n/).filter(Boolean) : [];
}

function unstagePublishIgnoredPaths() {
  const result = spawnSync("git", ["restore", "--staged", "--", ...publishIgnoredPaths], {
    stdio: "ignore",
    shell: false
  });

  if (result.status === 0) {
    console.log("\n==> Leaving local Obsidian workspace noise unstaged");
  }
}

function ensureHttpsOrigin() {
  const originUrl = capture("git", ["remote", "get-url", "origin"]);

  if (originUrl === httpsOriginUrl) {
    return;
  }

  if (originUrl === sshOriginUrl) {
    run("Switching origin remote to HTTPS", "git", ["remote", "set-url", "origin", httpsOriginUrl]);
    return;
  }

  throw new Error(`Unexpected origin remote: ${originUrl}`);
}

ensureHttpsOrigin();

if (options.build) {
  runNpmScript("Building site locally", "build");
} else if (options.verify) {
  runNodeScript("Validating frontmatter, slugs, and local image links", "./scripts/validate-content.mjs");
  runNpmScript("Checking Astro and TypeScript without local build", "check");
  console.log("\n==> Skipping local Astro build; GitHub Actions will build and deploy after push.");
  console.log("    Use `npm run publish:build -- \"message\"` or `npm run publish -- --build \"message\"` for the old full local build.");
} else {
  console.log("\n==> Skipping local verification and Astro build because --no-verify was passed.");
}

const branch = capture("git", ["branch", "--show-current"]);
if (!branch) {
  throw new Error("Could not determine the current git branch.");
}

const statusOutput = captureLines("git", ["status", "--porcelain"]);

if (statusOutput.length > 0) {
  run("Staging changes", "git", ["add", "-A"]);
  unstagePublishIgnoredPaths();

  const stagedFiles = captureLines("git", ["diff", "--cached", "--name-only"]);
  if (stagedFiles.length > 0) {
    run(`Creating commit '${message}'`, "git", ["commit", "-m", message]);
  } else {
    console.log("\n==> No staged changes to commit");
  }
} else {
  console.log("\n==> Working tree is clean, skipping commit");
}

const upstreamProbe = spawnSync("git", ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}"], {
  encoding: "utf8",
  shell: false
});

if (upstreamProbe.error) {
  throw upstreamProbe.error;
}

const upstream = upstreamProbe.status === 0 ? upstreamProbe.stdout.trim() : "";

if (upstream) {
  if (options.pull) {
    run(`Pulling latest changes from ${upstream}`, "git", ["pull", "--rebase"]);
  } else {
    console.log(`\n==> Skipping pull from ${upstream} because --no-pull was passed.`);
  }

  run(`Pushing to ${upstream}`, "git", ["push"]);
} else {
  run(`Pushing and setting upstream origin/${branch}`, "git", ["push", "-u", "origin", branch]);
}

console.log("\nPublish workflow completed.");
