Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("f:\Websites\N\nirmala-foundation-demo\nirmala_reaudit.docx")
$entry = $zip.Entries | Where-Object { $_.FullName -eq "word/document.xml" }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$content = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()
$clean = $content -replace '<[^>]+>',' ' -replace '\s+',' '
$clean | Out-File -FilePath "f:\Websites\N\nirmala-foundation-demo\reaudit.txt" -Encoding utf8
