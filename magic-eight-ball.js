let userName = 'Jupiter';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello');

var userQuestion = "Does True Love Exist?";

console.log(userQuestion);

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = '';

switch (randomNumber){
    case 0:
        eightBall = 'It is certain'
        break;
    case 1:
        eightBall = 'It is decidedly so'
        break;
    case 2:
        eightBall = 'Reply hazy try again'
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break; 
    case 4:
        eightBall = 'Don\'t count on it'
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs Point to yes';
        break;
}

console.log(eightBall);

