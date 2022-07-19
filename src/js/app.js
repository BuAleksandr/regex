import Validator from './modules/validator';

/*
проверка для первой задачи - Никнеймы
*/
const userNumber = [
    'Boris',
    '1Boris',
    'Boris7',
    '_Boris',
    'Boris_',
    'Bo-Ris_gg',
    'Boris-59_JS',
    'Bo-Ri_s777g',
    'Bo0000ris',
];

for (let i = 0; i < userNumber.length; i += 1) {
    console.log(`%s => ${Validator.validateUsername(userNumber[i])}`, userNumber[i]);
}

/*
проверка для второй задачи - Телефоны
*/
const phoneNumber = [
    '8 (927) 000-00-00',
    '+7 960 000 00 00',
    '+86 000 000 0000',
];

for (let i = 0; i < phoneNumber.length; i += 1) {
    console.log(`%s => ${Validator.validatePhoneNumber(phoneNumber[i])}`, phoneNumber[i]);
}