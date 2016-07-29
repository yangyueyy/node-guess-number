'use strict';
class AnswerGenerator {
    static generate(){
        const digits = [0,1,2,3,4,5,6,7,8,9];
        const result = [];

        while(result.length < 4){
            const num = parseInt(Math.random() * digits.length);
            result.push(digits.splice(num,1));
        }

        return result.join('');
    }
}

module.exports = AnswerGenerator;