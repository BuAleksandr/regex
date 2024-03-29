export default class Validator {
    /* Первая задача Никнеймы */
    static validateUsername(name) {
        if (!name) {
            return false;
    }

    /*
        валидация на отсутсвие цифр, "_" и "-" в начале и конце строки;
    */
    const conditionOne = /^[^\d_-][\w-]*[^\d_-]$/.test(name);

    /*
        валидация на содержание только латиницы;
    */
    const conditionTwo = /^[\w-]+$/.test(name);
    /*
        валидация на количество символов от 4 и выше
    */
    const conditionThree = /\d{4,}/.test(name);

    return (conditionOne && conditionTwo && !conditionThree);
    }

    /*
        вторая задача Телефоны
    */
    static validatePhoneNumber(tel) {
        if (!tel) {
            return '';
    }

    /* забираем цифры из телефона */
    const numberTel = tel.replace(/[^\d]/g, '');

    /*
        если номер из 11 цифр и первая цифра 8,
        то меняем её на 7 и добавляем спереди +,
        иначе просто добавляем спереди плюс.
    */
    if (numberTel.length === 11 && numberTel.indexOf(8) === 0) {
        return `+7${numberTel.slice(1, 11)}`;
    }
    return (`+${numberTel}`);
    }
}
