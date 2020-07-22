const createPassword = function (word) {
    let word = process.argv[2],
        array = [];

    for (letters of word) {
        switch (letters) {
            case 'a':
                array.push(4);
                break;
            case 'e':
                array.push(3);
                break;
            case 'o':
                array.push(0);
                break;
            case 'l':
                array.push(1);
                break;
            default:
                array.push(letters)
        }
    }
    return array.join('');
}
console.log(createPassword(word));


//*------------------- Same Result ------------------- \\
//     if (word[i] === 'a') {
//         arr.push(4)
//     } else if (word[i] === 'e') {
//         arr.push(3)
//     } else if (word[i] === 'o') {
//         arr.push(0)
//     } else if (word[i] === 'l') {
//         arr.push(1)
//     } else {
//         arr.push(word[i])
//     }
// }