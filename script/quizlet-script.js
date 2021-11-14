var os = require("os");
var fs = require("fs");
// using this string to export data from quizlet
const exportOutputPattern = "\n ---- \n";

// using this string to insert data to quizlet
const insertInputPattern = " >>>>>>> ";

const data = ``;

const newData = data.split("----");
const listQuestion = [];
for (let index = 0; index < newData.length; index += 2) {
        if (newData[index] && newData[index + 1]) {
                if (newData[index].length < newData[index + 1].length) {
                        listQuestion.push({ question: newData[index + 1], answer: newData[index] });
                } else {
                        listQuestion.push({ question: newData[index], answer: newData[index + 1] });
                }
        }
}
const finalString = listQuestion.map((item) => item.answer + " >>>>>>> " + item.question).join(" >>>>>>> ");

function processInput(text) {
        fs.open("./log.txt", "a", 666, function (e, id) {
                fs.write(id, text + os.EOL, null, "utf8", function () {
                        fs.close(id, function () {
                                console.log("file is updated");
                        });
                });
        });
}

processInput(finalString);
