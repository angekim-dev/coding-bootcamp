const readline = require("readline");
const chalk = require("chalk");

console.log(chalk.magenta("hi msg! :)"));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//here nested object
const conversation = {
    q: "Is it Friday yet? ",
    answers: {
        yes: {
            q: "Great! What are your weekend plans?"
        },
        no: "Too bad.. bye!"
    }
};
// console.log(conversation.q);
// console.log(conversation["answers"]["no"]); OR conversation.answers['no']

//here logic
function askQuestion(story) {
    rl.question(chalk.cyan(story.q), answer => {
        //answer is a variable
        console.log("check answer: ", story.answers[answer]); //answer is a variable

        if (story.answers[answer]) {
            //checking if user gives us one of the available answers
            console.log(chalk.green(":("));
            rl.close();
        } else {
            //recursion
            console.log(chalk.red("that's not the right answer... TRY AGAIN"));
            askQuestion(story);
        } //recursion
    });
}
askQuestion(conversation); //already did step 2
