Add-Type -AssemblyName System.Runtime.WindowsRuntime

$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]
$null = [Windows.Storage.Streams.RandomAccessStream, Windows.Storage.Streams, ContentType=WindowsRuntime]
$null = [Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType=WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime]

$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and
    $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1'
})[0]

function Await($WinRtTask, $ResultType) {
    $asTask = $asTaskGeneric.MakeGenericMethod($ResultType)
    $netTask = $asTask.Invoke($null, @($WinRtTask))
    try { $netTask.Wait(30000) | Out-Null } catch { }
    $netTask.Result
}

$path = 'C:\Users\Abdul Rehman\Downloads\price.png'
Write-Output "PATH_EXISTS: $(Test-Path $path)"

$op = [Windows.Storage.StorageFile]::GetFileFromPathAsync($path)
$file = Await $op ([Windows.Storage.StorageFile])
if ($null -eq $file) { Write-Output "FILE_NULL"; exit 1 }
Write-Output "FILE_OK"

$stream = Await ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
$decoder = Await ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
$bitmap = Await ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if ($null -eq $engine) { Write-Output "NO_ENGINE"; exit 1 }

$result = Await ($engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])

foreach ($line in $result.Lines) {
    $x = 999999
    $y = 999999
    foreach ($w in $line.Words) {
        if ($w.BoundingRect.X -lt $x) { $x = $w.BoundingRect.X }
        if ($w.BoundingRect.Y -lt $y) { $y = $w.BoundingRect.Y }
    }
    Write-Output ("LINE|" + [int]$x + "|" + [int]$y + "|" + $line.Text)
}
