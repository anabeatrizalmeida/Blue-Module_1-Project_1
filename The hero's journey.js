var prompt  = require(`prompt-sync`)();

// Background story.
console.log('The hero\'s journey');
console.log('Hello!!! Welcome to the hero\'s journey, or better a heroine\'s journey.\nA heroine doesn\'t need to have superpowers to be extraordinary.\nAna is a teacher who runs the beautiful and dangerous city of Rio de Janeiro to pay her bills.\nIn addition, Ana studies and need to do her household chores. Having a routine like Ana\'s only with superpowers.\nHowever, her greatest power is being a mother.Therefore, all this do Ana a heroine\n');
console.log( );
console.log('Help Ana complete her main goals for the day and finally be able to rest peacefully.');
console.log( );

const continuing = prompt ('PRESS ENTER TO HELP ANA.');
console.log(continuing);

console.log('Then you will have to answer with yes or no to 5 questions.\nIf Ana did the task, answer yes, if she couldn\'t, answer no.\nAt the end we will know if Ana will have her well-deserved rest');
console.log( );

const answers = prompt ('PRESS ENTER TO ANSWERS THE QUESTIONS.');
console.log(answers);

//Questions for the user to answer.
question1 = prompt(`1- Did Ana pick up your child from school? `);
question2 = prompt(`2- Did Ana go to the supermarket? `);
question3 = prompt(`3- Did Ana make dinner? `);
question4 = prompt(`4- Did Ana correct the tests? `);
question5 = prompt(`5- Did Ana plan tomorrow's class? `);

console.log( );

//Counter for answers.
let countYes = 0;
let countNo = 0;

//Conditionals for each question.
if (question1 === `yes`){
    countYes ++
} else {
    countNo ++
}
if (question2 === `yes`){
    countYes ++
} else {
    countNo ++
}
if (question3 === `yes`){
    countYes ++
} else {
    countNo ++
}
if (question4 === `yes`){
    countYes ++
} else {
    countNo ++
}
if (question5 === `yes`){
    countYes ++
} else {
    countNo ++
}

//Conditionals for  YES or NO answers. Depending on the number of YES or NO returns a different message.
if (countYes == 0){
    console.log(`Ana failed miserably.`);
} else if (countYes == 1 || countYes == 2){
    console.log(`Ana failed, but she escaped the situation.`);
} else if (countYes == 3){
    console.log(`Ana came close to achieving her goal, but ended up missing just a little.`);
} else if (countYes == 4){
    console.log(`After a lot of effort Ana achieved her goal, although not perfectly.`);
} else{
    console.log(`Ana have unquestionably triumphed and tomorrow she will have a more peaceful day.`);
}


