const fs = require('fs');

// const languages = fs.readdirSync(process.argv[2] || '.').filter(x => x.toUpperCase().includes('LANGUAGE'));

const PRIMARY = 'LANGUAGE.ENU';
const LOCALS = [
    {
        file: 'LANGUAGE.RUS.UTF', // Преобразуйте сначала CP1251 в UTF-8
        lang: 'ru',
        // charset: 'cp1251'
    }
];

function main() {
    const output = {}; // key: { primary, «lang...» }

    const primary = parseLanguageFile(PRIMARY);

    for (const id in primary) {
        output[id] = { primary: primary[id], locals: {} };
    }

    for (const locale of LOCALS) {
        const localFile = parseLanguageFile(locale.file);

        for (const id in localFile) {
            output[id].locals[locale.lang] = localFile[id];
        }
    }

    const sorted_languages = LOCALS.map(x => x.lang);

    let language_csv = 'default,' + generateCsvRow('Identifier', 'Remarks', 'Filter', ...sorted_languages);
    // В GZDoom 4.x захардкожено чтение поля default без кавычек :)

    for (const id in output) {
        const string = output[id];

        language_csv += generateCsvRow(string.primary, id, '', '', ...sorted_languages.map(l => string.locals[l] || string.primary));
    }

    language_csv = language_csv.replace(/\\"/g, '""');

    fs.writeFileSync('LANGUAGE.CSV', language_csv, 'utf-8');

    console.info('OK!');

    return output;
}

/** Парсит содержимое LANGUAGE файла в объёкт формата key: value
 * @param  {String} data='' - Содержимое LANGUAGE файла
 * @returns {Object}
 */
function parseLanguage(data = '') {
    const REGEX = /\s*([A-Z_0-9]+)\s*=\s*"(.*)";/g;
    
    const output = {};

    let instance = null;


    while (instance = REGEX.exec(data)) {
        const [_, key, value] = instance;

        output[key] = value;//`"${value}"`;
    }

    return output;
}

/** Парсит LANGUAGE файл в объёкт формата key: value
 * @param  {String} file - Путь к LANGUAGE файлу
 * @returns {Object}
 */
function parseLanguageFile(file) {
    return parseLanguage(fs.readFileSync(file, 'utf-8'));
}

function generateCsvRow(...row) {
    return row.map(x => `"${x}"`).join(',') + '\n';
}

main();
