powershell -Command "(gc C:\Python\flaskweb\machinemonitoring-flask\chicken_attack\ui\static\js\AppConfig.js) -replace 'var Debug=false;', 'var Debug=true;' | Out-File C:\Python\flaskweb\machinemonitoring-flask\chicken_attack\ui\static\js\AppConfig.js"
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" http://localhost:5000/
python chicken_attack\app.py
