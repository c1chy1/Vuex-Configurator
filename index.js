const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use( cors() );
app.use( bodyParser.json() );

app.get("/questions", function(req, res) {

    const questions = require("./data/questions.json")
        .map(q => ({
            id: q.id,
            question: q.question,
            answers: q.answers
        }));

    res.json(questions);

});

app.post("/check", function(req, res) {

    const questions = require("./data/questions.json");
    const answers = req.body.answers;

    let result = questions.map(question => {
        const answer = answers[question.id];

        return {
            id: question.id,
            correct: answer === question.correct,
            question: question.question,
            yourAnswer: question.answers[answer],
            correctAnswer: question.answers[question.correct]
        };
    });

    res.json(result);

});

/*app.listen(3000, () => console.log("Serwer został uruchomiony pod adresem http://localhost:3000")); */


http.createServer(app).listen(process.env.PORT);