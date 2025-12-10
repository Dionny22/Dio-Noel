# Vérification des fichiers
$files = Get-ChildItem -Path .\
Write-Host "Fichiers dans le dossier :"
$files | Select-Object Name, Length, LastWriteTime | Format-Table -AutoSize

# Vérification du fichier index.html
$indexPath = ".\index.html"
if (Test-Path $indexPath) {
    Write-Host "`nTentative d'ouverture de l'application..." -ForegroundColor Green
    
    # Essayer d'ouvrir avec Edge
    try {
        Start-Process "microsoft-edge:file:///$((Get-Item $indexPath).FullName.Replace('\', '/'))"
        Write-Host "L'application devrait s'ouvrir dans Microsoft Edge." -ForegroundColor Green
    }
    catch {
        Write-Host "Impossible d'ouvrir avec Edge. Essai avec le navigateur par défaut..." -ForegroundColor Yellow
        try {
            Start-Process $indexPath
        }
        catch {
            Write-Host "Échec de l'ouverture. Essayez de faire un clic droit sur index.html et sélectionnez 'Ouvrir avec' puis choisissez votre navigateur." -ForegroundColor Red
        }
    }
} else {
    Write-Host "Erreur : Le fichier index.html est introuvable dans le dossier actuel." -ForegroundColor Red
    Write-Host "Assurez-vous d'exécuter ce script depuis le même dossier que index.html" -ForegroundColor Yellow
}

# Garder la fenêtre ouverte
Write-Host "`nAppuyez sur une touche pour quitter..."
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')

