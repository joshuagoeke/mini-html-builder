const inquirer = require('inquirer');
const fs = require('fs');

const mybogusHTML = ({username, skill1, skill2, skill3, person, location }) `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>HTML-builder</title>
    <link rel="stylesheet" type="text/css" href="./assets/css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css"/>
</head>

<body>
    <header>
        <h1>Welcome to ${username}'s ugly portfolio</h1>
    </header>
    <main>
        <div>
            <section><!--Put some classes or id's in here-->
                <h2>Skills</h2>
                <ul id="skills">
                    <li>${skill1}</li>
                    <li>${skill2}<r</li>
                    <li>${skill3}</li>
                </ul>
                <h3>Where is this ${person}?</h3>
                <p class="location"> ${location}</p>
            </section>
        </div>
    </main>
<script src=".index.js"></script>
<script src="./assets/script.js"></script>
</body>

</html>
`

inquirer
.prompt([
{
    type:'input',
    message: 'What is your name?',
    name: 'username',
},
{
    type:'input',
    message: 'What is a thing you can do?',
    name: 'Skill1',
},
{
    type:'input',
    message: 'What is is something else you do sometimes?',
    name: 'Skill2',
},
{
    type:'input',
    message: 'What is just one more skill you have?',
    name: 'Skill3',
},
{
    type:'input',
    message: 'Do you identify as a man or woman or something else?',
    name: 'person',
},
{
    type:'input',
    message: 'What is your hometown?',
    name: 'location',
},
])
.then((response) => {
    console.log("Nice work "+ response.username)
    fs.writeFile(`index.html`, JSON.stringify(response, null,), (err)=>
    err ? console.log(err) : console.log("Got it logged."))
})
