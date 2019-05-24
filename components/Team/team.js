const teamMembers = [{"first_name":"Ben","last_name":"Tsao","role":"Project Lead","github_link":"","linkedin_link":""},
{"first_name":"Mikis","last_name":"Woodwinter","role":"UI Developer","github_link":"https://github.com/Miikis","linkedin_link":"https://www.linkedin.com/in/miikis/"},
{"first_name":"Vijay","last_name":"Das","role":"FE Developer","github_link":"https://github.com/vijaydas","linkedin_link":"https://www.linkedin.com/in/vijaytdas/"},
{"first_name":"Melvine","last_name":"Awa","role":"UI Developer","github_link":"https://github.com/AwaMelvine","linkedin_link":"https://www.linkedin.com/in/awa-melvine-472764102/"},
{"first_name":"Erik","last_name":"Sandoval","role":"FE Developer","github_link":"https://github.com/erik-sandoval","linkedin_link":"https://www.linkedin.com/in/erikfsandoval/"},
{"first_name":"Chris","last_name":"Dalao","role":"UI Developer","github_link":"https://www.github.com/chrisdalao","linkedin_link":"https://www.linkedin.com/in/chrisdalao/"}];

let firstName = [];
teamMembers.forEach(teamMembers => firstName.push(teamMembers.first_name));

let role = [];
teamMembers.forEach(teamMembers => role.push(teamMembers.role));

let gitHub = [];
teamMembers.forEach(teamMembers => gitHub.push(teamMembers.github_link));

let linkedIn = [];
teamMembers.forEach(teamMembers => linkedIn.push(teamMembers.linkedin_link));

let firstNameElement = document.querySelectorAll('.team-member-name');
let roleElement = document.querySelectorAll('.team-member-role');
let gitHubElement = document.querySelectorAll('.team-member-github');
let linkedInElement = document.querySelectorAll('.team-member-linkedin');



for (let n = 0; n < firstNameElement.length; n++) {
    firstNameElement[n].textContent = firstName[n];
}

for (let r = 0; r < roleElement.length; r++) {
    roleElement[r].textContent = role[r];
}


for (let g = 0; g < gitHubElement.length; g++) {
    gitHubElement[g].setAttribute("href", gitHub[g]);
}


for (let l = 0; l < linkedInElement.length; l++) {
    linkedInElement[l].setAttribute("href", linkedIn[l]);
}