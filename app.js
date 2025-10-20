
//consol
console.log ('hello world!');

//intro
const name = "Jared Palmer";

function showGreeting(name){
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

const greetingElement = document.getElementById('greeting');
greetingElement.textContent = showGreeting(name);

//resume register
let hasDownloadedResume = false;

const resumeButton = document.querySelector('.resume-btn');

resumeButton.addEventListener('click', function(){
    if (!hasDownloadedResume){
        alert('Your resume is downloaded successfully!');
        hasDownloadedResume = true;
    }
});

let downloadCount = 0;

function trackDownload() {
    downloadCount++; // increment count
    document.getElementById('download-count').textContent = 
        `Downloaded ${downloadCount} time${downloadCount !== 1 ? 's' : ''}`;
}

//deadline
function daysUntilDeadline(deadline) {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
}


const deadlineElement = document.getElementById('project-deadline');
const deadlineDate = deadlineElement.textContent;

const remainingDays = daysUntilDeadline(deadlineDate);

const daysRemainingElement = document.getElementById('days-remaining');
daysRemainingElement.textContent = remainingDays;

//add prof skill
const addProfessionalBtn = document.getElementById('add-professional-btn');
const newProfessionalInput = document.getElementById('new-professional-skill');
const professionalMessage = document.getElementById('professional-skill-message');

const professionalSkillList = document.querySelectorAll('.Skill-catigory ul')[0];

addProfessionalBtn.addEventListener('click', function() {
    const skill = newProfessionalInput.value.trim();

    if (skill === "") {
        professionalMessage.textContent = "Please enter a skill before adding.";
        professionalMessage.style.color = "red";
        return;
    }

    const newLi = document.createElement('li');
    const newH4 = document.createElement('h4');
    const newP = document.createElement('p');
    newP.textContent = skill;
    newH4.appendChild(newP);
    newLi.appendChild(newH4);
    professionalSkillList.appendChild(newLi);

    professionalMessage.textContent = `"${skill}" added successfully!`;
    professionalMessage.style.color = "green";
    newProfessionalInput.value = "";
});

//add fun skill
const addFunBtn = document.getElementById('add-fun-btn');
const newFunInput = document.getElementById('new-fun-skill');
const funMessage = document.getElementById('fun-skill-message');

const funSkillList = document.querySelectorAll('.Skill-catigory ul')[1];

addFunBtn.addEventListener('click', function() {
    const skill = newFunInput.value.trim();

    if (skill === "") {
        funMessage.textContent = "Please enter a skill before adding.";
        funMessage.style.color = "red";
        return;
    }

    const newLi = document.createElement('li');
    const newH4 = document.createElement('h4');
    const newP = document.createElement('p');
    newP.textContent = skill;
    newH4.appendChild(newP);
    newLi.appendChild(newH4);
    funSkillList.appendChild(newLi);

    funMessage.textContent = `"${skill}" added successfully!`;
    funMessage.style.color = "green";
    newFunInput.value = "";
});

//for upcoming projects
const projectTitles = [
    "Personal Portfolio Website",
    "Simple To-Do App",
    "Invisable Maze Game"
];

const projectDescriptions = [
    "A responsive personal website built with HTML, CSS, and JavaScript that showcases my understanding with programming a website.",
    "A task management app allowing users to add, mark, and remove tasks while learning DOM manipulation.",
    "Program a video game using python that is a maze solving game but you are only told you current position's 4 cardinal directions if there is a wall or if its clear."
];

const projectDeadlines = [
    "2025-12-1",
    "2026-01-15",
    "2026-03-01" 
];

const projectListContainer = document.getElementById('project-list');

const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

for (let i = 0; i < projectTitles.length; i++) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');

    const deadlineDate = new Date(projectDeadlines[i]);
    deadlineDate.setHours(0, 0, 0, 0);

    let statusText = "";
    if (deadlineDate > currentDate) {
        statusText = "Ongoing";
    } else if (deadlineDate < currentDate) {
        statusText = "Completed";
    } else {
        statusText = "Due Today!";
    }

    projectDiv.innerHTML = `
        <h3>${projectTitles[i]}</h3>
        <p><strong>Description:</strong> ${projectDescriptions[i]}</p>
        <p><strong>Deadline:</strong> ${projectDeadlines[i]}</p>
        <p><strong>Status:</strong> ${statusText}</p>
        <hr>
    `;

    projectListContainer.appendChild(projectDiv);
}


//education and experience table
const eduExpData = [
    {
        type: "Elementary School",
        location: "Demugel",
        description: "I participated in the First Lego Robotics League. My team managed to pass the State competition.",
        years: "2011 - 2017 (Kindergarten - 5th Grade)"
    },
    {
        type: "Middle School",
        location: "Signaula",
        description: "I was in the MIT-E Program. This program focuses on Science and Engineering, allowing me to take classes on designing, building, and problem-solving projects.",
        years: "2018 - 2020 (6th - 8th Grade)"
    },
    {
        type: "High School",
        location: "Coconino",
        description: "I was in the High School version of MIT-E known as CIT.",
        years: "2021 - 2024 (9th - 12th Grade)"
    },
    {
        type: "College",
        location: "NAU",
        description: "I am currently studying Computer Science at NAU. I have made programs in both Python and C.",
        years: "2024 - Present"
    }
];

function generateEduExpTable(containerId, data) {
    const container = document.getElementById(containerId);

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'separate';
    table.style.borderSpacing = '1px 40px';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ["Type of School", "Location", "Description", "Years"].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.style.border = "1px solid #0f0404";
        th.style.padding = "10px";
        th.style.backgroundColor = "#bdc3c7";
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        ["type", "location", "description", "years"].forEach(key => {
            const td = document.createElement('td');
            td.textContent = item[key];
            td.style.border = "1px solid #0f0404";
            td.style.padding = "12px";
            td.style.backgroundColor = "#ffffff";
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    container.appendChild(table);
}

generateEduExpTable("edu-exp-table-container", eduExpData);