// holds user command-line arguements
const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('===================');

//     profileDataArr.forEach(profileItem =>
//         console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// extract arguements and store them in distinct variables
const name = profileDataArgs[0];
const github = profileDataArgs[1];

const generatePage = (userName, githubName) => {
    return `
        Name: ${userName}
        Github: ${githubName}
    `;
};

console.log(generatePage(name, github));