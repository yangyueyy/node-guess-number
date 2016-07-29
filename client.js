'use strict';

const request = require('request');

const option = {
    baseUrl: 'http://localhost:3000',
    url: '/',
    method: 'GET',
    json: true
};

request(option, (err, res, body)=> {
    console.log(body);
    console.log('Welcome!\n');
    const answer = body.toString();
    let chances = 6;
    process.stdin.setEncoding('utf8');
    ask();
    process.stdin.on('data', (input)=> {

        const compare = {
            baseUrl: 'http://localhost:3000',
            url: '/test',
            method: 'POST',
            json: true,
            body: {
                input: input,
                answer: answer
            }
        };
       
        request(compare, (err, res, body)=> {
            if (!validate(input)) {
                console.log('Cannot input duplicate numbers!');
                ask()
            } else if (body === '4A0B') {
                console.log('Congratulations!');
                process.exit();
            } else {
                console.log(body);
                chances--;
                if (isGameOver()) {
                    console.log(`Game Over\nAnswer:${answer}`);
                    process.exit();
                } else {
                    ask()
                }
            }
        });
    });

    function validate(input) {
        return input.split('').every((item, index, array)=> {
            return array.lastIndexOf(item) === index;
        });
    }

    function ask() {
        console.log(`Please input your number(${chances}):`);
    }

    function isGameOver() {
        return chances === 0;
    }
});


