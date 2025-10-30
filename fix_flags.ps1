# PowerShell script to fix broken flag references
$filePath = "js\puzzles.js"
$content = Get-Content $filePath -Encoding UTF8

# Replace broken flag emojis with proper image filenames
$replacements = @{
    "GREECE.*flag.*hint" = "{ name: 'GREECE', flag: 'gr.png', hint: 'Birthplace of democracy and Olympics' },"
    "THAILAND.*flag.*hint" = "{ name: 'THAILAND', flag: 'th.png', hint: 'Known for temples and spicy food' },"
    "POLAND.*flag.*hint" = "{ name: 'POLAND', flag: 'pl.png', hint: 'Heart of Europe with medieval cities' },"
    "CHILE.*flag.*hint" = "{ name: 'CHILE', flag: 'cl.png', hint: 'Long, narrow country along Pacific coast' },"
    "VIETNAM.*flag.*hint" = "{ name: 'VIETNAM', flag: 'vn.png', hint: 'Famous for pho soup and motorcycles' },"
    "PHILIPPINES.*flag.*hint" = "{ name: 'PHILIPPINES', flag: 'ph.png', hint: 'Island nation with over 7,000 islands' },"
    "KENYA.*flag.*hint" = "{ name: 'KENYA', flag: 'ke.png', hint: 'Home to safari animals and Maasai people' },"
    "ISRAEL.*flag.*hint" = "{ name: 'ISRAEL', flag: 'il.png', hint: 'Holy land with ancient history' },"
    "MALAYSIA.*flag.*hint" = "{ name: 'MALAYSIA', flag: 'my.png', hint: 'Twin towers and tropical rainforests' },"
}

foreach ($pattern in $replacements.Keys) {
    $replacement = $replacements[$pattern]
    $content = $content -replace ".*$pattern.*", "                $replacement"
}

# Save the file
$content | Set-Content $filePath -Encoding UTF8

Write-Host "Flag emojis replaced with image files successfully!"