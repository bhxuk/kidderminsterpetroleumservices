# Downloads every image the new site uses from the current live site into assets/img/
# Run from the repo root:  powershell -ExecutionPolicy Bypass -File scripts\get-images.ps1
# Then in assets/js/site.js change the IMG line to:  var IMG = window.KPS_IMG || "assets/img/";

$base = "https://www.kidderminsterpetroleumservices.com/wp-content/uploads/"
$root = Split-Path -Parent $PSScriptRoot
$list = Get-Content (Join-Path $PSScriptRoot "images.txt")

foreach ($rel in $list) {
    if (-not $rel.Trim()) { continue }
    $dest = Join-Path $root ("assets/img/" + $rel)
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $dest) | Out-Null
    try {
        Invoke-WebRequest -Uri ($base + $rel) -OutFile $dest -UseBasicParsing
        Write-Host "OK   $rel"
    } catch {
        Write-Warning "FAIL $rel"
    }
}
