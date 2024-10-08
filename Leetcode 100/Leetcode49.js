//3136. Valid Word EASY
var isValid = function (word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let reg = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;
    let reg1 = /[a-zA-Z 0-9]/g;
    if (word.length >= 3  && reg1.test(word) && vowels.some(char => word.includes(char) && reg.test(word))) {
        return true;
    } else {
        return false;
    }
};

