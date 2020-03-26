const readline = require("readline");
const chalk = require("chalk");

// console.log(chalk.magenta("hi msg! :)"));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//here nested object
const story = {
    q: "Are you up for a Frida Kahlo challenge? yes or no? ",
    answers: {
        yes: {
            q:
                "Great! How many of her 143 paintings were self-portraits? 55 or 32? ",
            answers: {
                55: {
                    q:
                        "Correct! 55 of her 143 paintings are self-portraits, which is perhaps understandable when thinking about how much time she spent on her own while recovering from a variety of health issues. Her introspective work is made all the more impactful by her use of the self-portrait to express her internal struggles as well as psychical and mental suffering. ARE YOU ready for the next question? Hell yeah! or NO? ",
                    answers: {
                        "Hell yeah!": {
                            q:
                                "Did Frida Kahlo ever lie about her age? yes or no? ",
                            answers: {
                                yes: {
                                    q:
                                        "SHE LIED ABOUT HER AGE, BUT FOR A GOOD REASON. At age 6, Frida contracted polio. Not only did this cause her right leg to be shorter and thinner than her left — something long skirts helped her disguise — but it kept her out of school for quite some time. After joining the elite National Preparatory School in 1922, she became immersed in indigenismo, a new sense of Mexican cultural pride. Thus, to show her commitment to Mexican culture — and disguise the fact that she was older — she shaved three years off her age. For the rest of her life, she declared that she was born on July 7, 1910—the year the Mexican Revolution started. DID YOU enjoy this Quizz? yes or yes? ",
                                    answers: {
                                        yes: "You better!"
                                    }
                                },
                                no: "Incorrect! Adios amigo!"
                            }
                        },
                        NO: "Too bad! Byebye!"
                    }
                },
                32: "This was not the right choice. Goodbye!"
            }
        },
        no: "Too bad.. bye!"
    }
};
// console.log(conversation.q);
// console.log(conversation["answers"]["no"]); OR conversation.answers['no']

//here logic
function askQuestion(frida) {
    rl.question(chalk.cyan(frida.q), answer => {
        //answer is a variable

        if (typeof frida.answers[answer] == "object") {
            askQuestion(frida.answers[answer]);
        } else if (frida.answers[answer]) {
            console.log(chalk.green(frida.answers[answer]));
            rl.close();
        } else {
            //recursion
            console.log(chalk.red("This is not a valid answer =("));
            askQuestion(frida);
        } //recursion
    });
}
askQuestion(story); //already did step 2
