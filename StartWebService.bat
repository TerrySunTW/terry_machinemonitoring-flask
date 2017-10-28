powershell -Command "(gc C:\Python\flaskweb\machinemonitoring-flask\chicken_attack\ui\static\js\AppConfig.js) -replace 'var Debug=false;', 'var Debug=true;' | Out-File -Encoding ASCII   C:\Python\flaskweb\machinemonitoring-flask\chicken_attack\ui\static\js\AppConfig.js"

powershell -Command "(gc c:\Python\flaskweb\machinemonitoring-flask\chicken_attack\ui\templates\login.html) -replace 'type: \"POST\",', 'type: \"GET\",' | Out-File -Encoding ASCII  c:\Python\flaskweb\machinemonitoring-flask\chicken_attack\ui\templates\login.html"

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" http://localhost:5000/
python chicken_attack\app.py

