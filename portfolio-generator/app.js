<<<<<<< HEAD
console.log('Hello Node!');
=======
const profileDataArgs = process.argv.slice(2, process.argv.lenfth);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }

    console.log('================');

    profileDataArr.forEach(profileItem => console.log(profileItem));
};
>>>>>>> develop
