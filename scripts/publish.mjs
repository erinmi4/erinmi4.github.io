import { spawnSync } from "node:child_process";

const message = process.argv[2] || "post";
const isWindows = process.platform === "win32";

function run(description, command, args, options = {}) {
  console.log(`\n==> ${description}`);

  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: false,
    ...options
  });

  if (typeof result.status === "number" && result.status !== 0) {
    process.exit(result.status);
  }

  if (result.error) {
    throw result.error;
  }
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

if (isWindows) {
  run("Building site", "cmd.exe", ["/d", "/s", "/c", "npm run build"]);
} else {
  run("Building site", "npm", ["run", "build"]);
}

const branch = capture("git", ["branch", "--show-current"]);
if (!branch) {
  throw new Error("Could not determine the current git branch.");
}

const statusOutput = captureLines("git", ["status", "--porcelain"]);

if (statusOutput.length > 0) {
  run("Staging changes", "git", ["add", "-A"]);

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
  run(`Pulling latest changes from ${upstream}`, "git", ["pull", "--rebase"]);
  run(`Pushing to ${upstream}`, "git", ["push"]);
} else {
  run(`Pushing and setting upstream origin/${branch}`, "git", ["push", "-u", "origin", branch]);
}

console.log("\nPublish workflow completed.");
