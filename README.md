# Discord BOT Example
Przykład Discordowego bota z jedną komendą oraz Command Hanlderem.

1. Jak to wgrać dla komputera z systemem Windows?<br>
a) Zainstaluj środowisko uruchomieniowe o nazwie Node.js na swój komputer. https://nodejs.org/en<br>
b) Pobierz pliki z tego repozytorium i stwórz jakiś tam katalog, następnie je przenieś do niego.<br>
c) Przejdź następnie do swojego katalogu z botem, potem kliknij jeden raz na pasek z lokalizacją folderu. Wpisz następnie **cmd**.<br>
d) Wpisz polecenie **npm init** i odpowiedz na pytania.
```
Press ^C at any time to quit.
package name: // Wpisz tutaj np. nazwę twoje bota. Bez spacji oraz wielkich znaków.
version: (1.0.0) // Kliknij enter
description: // Opisz swojego bota w kilku słowach. Nie jest to wymagane - bo tak i tak nikt nie będzie tego czytać.
entry point: (index.js) // Kliknij enter
test command: // Kliknij enter
git repository: // Kliknij enter
keywords: // Kliknij enter
author: // Wpisz tutaj swój nick
license: (ISC)  // Kliknij enter
About to write to C:\Users\Użytkownik\package.json:

{
  "name": "moj-bot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes

C:\Users\Użytkownik>
```
I teraz powinien Ci się stworzyć plik package.json w lokalizacji projektu twojego bota.<br>
e) Wprowadź następujące polecenie do konsoli.<br>
**npm install discord.js@latest**<br>
Jeśli twoja konsola nie rozpoznaje takiego polecenia, uruchom ponownie komputer. Jeśli nadal występuje błąd, źle zainstalowałeś Node.js'a — albo w ogóle tego nie zrobiłeś. Przejdź do podpunktu A.<br>
f) Otwórz plik config.json. Wypełnij go. Podaj prefix swojego bota oraz jego token z https://discord.com/developers/applications<br>
g) Uruchom bota, wpisując polecenie **node .** lub **node index.js** w wierszu poleceń.<br>
Gotowe! Jeśli masz problem ze stworzeniem swojego pierwszego bota, skontaktuj się ze mną!