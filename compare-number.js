'use strict';

class CompareNumber{
    static compare(answer,input){
        const answers = answer.split('');
        const inputs = input.split('');
        const rightNumber = answers.filter(a => inputs.some(b => b===a)).length;
        const x = answers.filter(a => answers.indexOf(a)===inputs.indexOf(a)).length;
        const y = rightNumber -x;

        return `${x}A${y}B`;
    }
}

module.exports = CompareNumber;