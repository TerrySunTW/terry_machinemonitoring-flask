powershell -Command "(gc C:\Python\flaskweb\machinemonitoring-flask\chicken_attack\ui\static\js\AppConfig.js) -replace 'var Debug=true;', 'var Debug=false;' | Out-File -Encoding UTF8  C:\Python\flaskweb\machinemonitoring-flask\chicken_attack\ui\static\js\AppConfig.js"

powershell -Command "(gc c:\Python\flaskweb\machinemonitoring-flask\chicken_attack\ui\templates\login.html) -replace 'type: \"GET\",', 'type: \"POST\",' | Out-File -Encoding UTF8  c:\Python\flaskweb\machinemonitoring-flask\chicken_attack\ui\templates\login.html"

setup.py sdist