// Relation entre le HTML et le JS / Affichage des questions
const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 10,
            questions: [
                {
                    question : "What means U.S.A. ?",
                    answers : {a: "United Societies of America", b: "United States of America", c: "Union Socialist of America", d: "Union and Solidarity in America"},
                    correctAnswer :'b'
                },

                {
                    question : "Who was the first President of the U.S.A. ?",
                    answers : {a: "George Wasington", b: "Grover Cleveland", c: "James Madison", d: "William McKinley"},
                    correctAnswer :'a'
                },

                {
                    question : "What is the federal capital of the U.S.A. ?",
                    answers : {a: "New York City", b: "Philadelphia", c: "Los Angeles", d: "Washington"},
                    correctAnswer :'d'
                },

                {
                    question : "What is the date of the Declaration of Independance ?",
                    answers : {a: "July 4, 1776", b: "March 1, 1781", c: "September 3, 1783", d: "June 21, 1788"},
                    correctAnswer :'a'
                },

                {
                    question : "What is the most populated state ?",
                    answers : {a: "California", b: "Florida", c: "New York", d: "Texas"},
                    correctAnswer :'a'
                },

                {
                    question : "Who assassinated the 16th President of the U.S.A, Abraham Lincoln, on April 14, 1865 ?",
                    answers : {a: "James Earl Ray", b: "John Wilkes Booth", c: "Lee Harvey Oswald", d: "Sirhan Sirhan"},
                    correctAnswer :'b'
                },

                {
                    question : "Who is the author of The Adventures of Huckleberry Finn ?",
                    answers : {a: "John Steinbeck", b: "William Faulkner", c: "Mark Twain", d: "Ernest Hemingway"},
                    correctAnswer :'c'
                },

                {
                    question : "I played for two different football teams with which i won at least one Super Bowl. Born and raised in California, i am ...",
                    answers : {a: "Aaron Rodgers", b: "Drew Brees", c: "Peyton Manning", d: "Tom Brady"},
                    correctAnswer :'d'
                },

                {
                    question : "What is the most common last name in the U.S.A ?",
                    answers : {a: "Brown", b: "Johnson", c: "Smith", d: "Williams"},
                    correctAnswer :'c'
                },

                {
                    question : "Three films have won the most Academy Awards (11) by a single film : which movies are they ?",
                    answers : {
                        a: "Gone with the Wind, Mary Poppins, La La Land",
                        b: "All About Eve, One Flew Over the Cuckoo's Nest, Moonlight",
                        c: "The Grapes of Wrath, The Silence of the Lambs, Forrest Gump",
                        d: "Ben-Hur, Titanic, The Lord of the Rings - The Return of the King"},
                    correctAnswer :'d'
                },
            ]
        }
    },
    methods: {
        answered(e){
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++;
            console.log(this.correctAnswer + " " + this.wrongAnswer)
        },
        nextQuestion(){
            this.index++
            this.selectedAnswer =''
        },
        showResults(){
            this.index++
        },
        resetQuiz(){
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }
})
// Appel de l'id app
app.mount('#app')