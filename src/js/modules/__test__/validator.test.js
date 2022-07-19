import Validator from '../validator';

/*
    Тесты для первой задачи Никнеймы
*/
test.each([
    ['letters', 'Boris', true],
    ['letters, "_" and "-"', 'Bo-Ris_gg', true],
    ['letters, "_", "-" and 2 number', 'Boris-59_JS', true],
    ['letters, "_", "-" and 3 number', 'Bo-Ri_s777g', true],
])(
    ('Validator true "letters, "_", "-" and number"'),
    (level, name, expected) => {
        const result = Validator.validateUsername(name);
        expect(result).toBe(expected);
    },
);

test.each([
    ['beginning number', '1Boris', false],
    ['final number', 'Boris2', false],
    ['beginning "_"', '_Boris', false],
    ['final "_"', 'Boris_', false],
    ['more 3 number', 'Bo0000ris', false],
    ['NULL values', '', false],
])(
    ('Validator false'),
    (level, name, expected) => {
        const result = Validator.validateUsername(name);
        expect(result).toBe(expected);
    },
);

/*
    Тесты для второй задачи Телефоны
*/
test.each([
    ['Russian 8', '8 (927) 000-00-00', '+79270000000'],
    ['Russian 7', '+7 960 000 00 00', '+79600000000'],
    ['other numbers', '+86 000 000 0000', '+860000000000'],
    ['empty value', '', ''],
])(
    ('validatePhoneNumber'),
    (level, tel, expected) => {
        const result = Validator.validatePhoneNumber(tel);
        expect(result).toBe(expected);
    },
);