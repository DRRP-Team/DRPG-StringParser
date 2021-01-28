# DRPG-StringParser

DooM RPG Strings Parser

> *[Extraction from DRRP Wiki](https://github.com/DRRP-Team/DRRP/wiki/rus-devtools)*

### newstringparser.js

- Разработчики: PROPHESSOR
- Язык разработки: JavaScript
- Запускать с помощью: `node newstringparser.js <input.str> <output.LANGUAGE> <режим: eng/rus> <префикс, например, SEC1>`

Утилита, написанная в 2018 году и заменяющая собой stringparser.cpp и stringparser.js. В отличии от них, генерирует полноценный LANGUAGE файл, который можно потом использовать в скриптах. Поддерживает 2 режима: eng и rus. В первом текст сохраняется напрямую, а в режиме rus, местный транслит преобразовывается в русские символы. Префикс служит для задания названия уровня, согласно [стандарту LANGUAGE файлов проекта DRRP](https://github.com/DRRP-Team/DRRP/wiki/DEV-LANGUAGE_rus). Сейчас для генерации строк **используйте именно эту утилиту.**

### stringparser.cpp [DEPRECATED]

- Разработчики: UsernameAK
- Язык программирования: C++
- Запускать с помощью: `g++ -g stringparser.cpp -o stringparser && ./stringparser <input.str> <output.txt>`

Ещё одна утилита из 2017 года, написанная Синкрементом (UsernameAK). Достаёт текстовые строки из бинарных .str файлов английской версии Doom RPG и сохраняет их в текстовом виде. **На данный момент не используется.**

### stringparser.js [DEPRECATED]

- Разработчики: PROPHESSOR
- Язык разработки: JavaScript
- Запускать с помощью: `node stringparser.js <input.txt> <output.acs>`

Утилита, которая позволяет перевести текстовые файлы, сгенерированные прошлой утилитой в .acs скрипты. **На данный момент не используется.**
