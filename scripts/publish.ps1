param(
    [Parameter(Position = 0)]
    [string]$Message = "post"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Invoke-CheckedCommand {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Description,
        [Parameter(Mandatory = $true)]
        [scriptblock]$Action
    )

    Write-Host ""
    Write-Host "==> $Description" -ForegroundColor Cyan
    & $Action
    if ($LASTEXITCODE -ne 0) {
        throw "$Description failed with exit code $LASTEXITCODE."
    }
}

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
Push-Location $repoRoot

try {
    Invoke-CheckedCommand "Building site" { npm run build }

    $branch = ([string](& git branch --show-current)).Trim()
    if (-not $branch) {
        throw "Could not determine the current git branch."
    }

    $statusOutput = @(& git status --porcelain)
    if ($LASTEXITCODE -ne 0) {
        throw "git status failed with exit code $LASTEXITCODE."
    }

    if ($statusOutput.Count -gt 0) {
        Invoke-CheckedCommand "Staging changes" { git add -A }

        $stagedFiles = @(& git diff --cached --name-only)
        if ($LASTEXITCODE -ne 0) {
            throw "git diff --cached failed with exit code $LASTEXITCODE."
        }

        if ($stagedFiles.Count -gt 0) {
            Invoke-CheckedCommand "Creating commit '$Message'" { git commit -m $Message }
        } else {
            Write-Host ""
            Write-Host "==> No staged changes to commit" -ForegroundColor Yellow
        }
    } else {
        Write-Host ""
        Write-Host "==> Working tree is clean, skipping commit" -ForegroundColor Yellow
    }

    $upstream = ([string](& git rev-parse --abbrev-ref --symbolic-full-name "@{u}" 2>$null)).Trim()
    if ($LASTEXITCODE -eq 0 -and $upstream) {
        Invoke-CheckedCommand "Pulling latest changes from $upstream" { git pull --rebase }
        Invoke-CheckedCommand "Pushing to $upstream" { git push }
    } else {
        Invoke-CheckedCommand "Pushing and setting upstream origin/$branch" { git push -u origin $branch }
    }

    Write-Host ""
    Write-Host "Publish workflow completed." -ForegroundColor Green
} finally {
    Pop-Location
}
