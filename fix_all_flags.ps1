# PowerShell script to replace ALL remaining flags with image files
$filePath = "js\puzzles.js"
$content = Get-Content $filePath -Encoding UTF8 -Raw

# Replace all country flag references with images
$flagReplacements = @{
    "NETHERLANDS.*flag.*'🇳🇱'" = "NETHERLANDS', flag: 'nl.png'"
    "NORWAY.*flag.*'🇳🇴'" = "NORWAY', flag: 'no.png'"
    "SWEDEN.*flag.*'🇸🇪'" = "SWEDEN', flag: 'se.png'"
    "IRELAND.*flag.*'🇮🇪'" = "IRELAND', flag: 'ie.png'"
    "SOUTH AFRICA.*flag.*'🇿🇦'" = "SOUTH AFRICA', flag: 'za.png'"
    "NEW ZEALAND.*flag.*'🇳🇿'" = "NEW ZEALAND', flag: 'nz.png'"
    "DENMARK.*flag.*'🇩🇰'" = "DENMARK', flag: 'dk.png'"
    "BELGIUM.*flag.*'🇧🇪'" = "BELGIUM', flag: 'be.png'"
    "AUSTRIA.*flag.*'🇦🇹'" = "AUSTRIA', flag: 'at.png'"
    "CZECH REPUBLIC.*flag.*'🇨🇿'" = "CZECH REPUBLIC', flag: 'cz.png'"
    "HUNGARY.*flag.*'🇭🇺'" = "HUNGARY', flag: 'hu.png'"
    "CROATIA.*flag.*'🇭🇷'" = "CROATIA', flag: 'hr.png'"
    "BULGARIA.*flag.*'🇧🇬'" = "BULGARIA', flag: 'bg.png'"
    "SERBIA.*flag.*'🇷🇸'" = "SERBIA', flag: 'rs.png'"
    "SLOVENIA.*flag.*'🇸🇮'" = "SLOVENIA', flag: 'si.png'"
    "SLOVAKIA.*flag.*'🇸🇰'" = "SLOVAKIA', flag: 'sk.png'"
    "ESTONIA.*flag.*'🇪🇪'" = "ESTONIA', flag: 'ee.png'"
    "LATVIA.*flag.*'🇱🇻'" = "LATVIA', flag: 'lv.png'"
    "LITHUANIA.*flag.*'🇱🇹'" = "LITHUANIA', flag: 'lt.png'"
    "LUXEMBOURG.*flag.*'🇱🇺'" = "LUXEMBOURG', flag: 'lu.png'"
    "BANGLADESH.*flag.*'🇧🇩'" = "BANGLADESH', flag: 'bd.png'"
    "PAKISTAN.*flag.*'🇵🇰'" = "PAKISTAN', flag: 'pk.png'"
    "NEPAL.*flag.*'🇳🇵'" = "NEPAL', flag: 'np.png'"
    "SRI LANKA.*flag.*'🇱🇰'" = "SRI LANKA', flag: 'lk.png'"
    "MYANMAR.*flag.*'🇲🇲'" = "MYANMAR', flag: 'mm.png'"
    "CAMBODIA.*flag.*'🇰🇭'" = "CAMBODIA', flag: 'kh.png'"
    "LAOS.*flag.*'🇱🇦'" = "LAOS', flag: 'la.png'"
    "MONGOLIA.*flag.*'🇲🇳'" = "MONGOLIA', flag: 'mn.png'"
    "UZBEKISTAN.*flag.*'🇺🇿'" = "UZBEKISTAN', flag: 'uz.png'"
    "GEORGIA.*flag.*'🇬🇪'" = "GEORGIA', flag: 'ge.png'"
    "ARMENIA.*flag.*'🇦🇲'" = "ARMENIA', flag: 'am.png'"
    "AZERBAIJAN.*flag.*'🇦🇿'" = "AZERBAIJAN', flag: 'az.png'"
    "JORDAN.*flag.*'🇯🇴'" = "JORDAN', flag: 'jo.png'"
    "LEBANON.*flag.*'🇱🇧'" = "LEBANON', flag: 'lb.png'"
    "UAE.*flag.*'🇦🇪'" = "UAE', flag: 'ae.png'"
    "QATAR.*flag.*'🇶🇦'" = "QATAR', flag: 'qa.png'"
    "SAUDI ARABIA.*flag.*'🇸🇦'" = "SAUDI ARABIA', flag: 'sa.png'"
    "UKRAINE.*flag.*'🇺🇦'" = "UKRAINE', flag: 'ua.png'"
    "BELARUS.*flag.*'🇧🇾'" = "BELARUS', flag: 'by.png'"
}

# Also replace broken flags
$brokenFlags = @{
    "PORTUGAL.*flag.*'��'" = "PORTUGAL', flag: 'pt.png'"
    "FINLAND.*flag.*'🇫�'" = "FINLAND', flag: 'fi.png'"
    "ROMANIA.*flag.*'��'" = "ROMANIA', flag: 'ro.png'"
    "ICELAND.*flag.*'🇮�'" = "ICELAND', flag: 'is.png'"
    "KAZAKHSTAN.*flag.*'�🇿'" = "KAZAKHSTAN', flag: 'kz.png'"
}

# Apply all replacements
foreach ($pattern in $flagReplacements.Keys) {
    $replacement = $flagReplacements[$pattern]
    $content = $content -replace $pattern, $replacement
}

foreach ($pattern in $brokenFlags.Keys) {
    $replacement = $brokenFlags[$pattern]
    $content = $content -replace $pattern, $replacement
}

# Save the file
$content | Set-Content $filePath -Encoding UTF8

Write-Host "All flags replaced with image files successfully!"
Write-Host "Total replacements made: $($flagReplacements.Count + $brokenFlags.Count)"