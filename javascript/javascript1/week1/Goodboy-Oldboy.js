// A dog age calculator

const dogYearOfBirth = 1980;
const dogYearFuture = 2050;
const dogAge = dogYearFuture - dogYearOfBirth;
shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogAge * 7} dog years old in ${dogYearFuture}.`);
}
else {
    console.log(`Your dog will be ${dogAge} human years old in ${dogYearFuture}.`);
}