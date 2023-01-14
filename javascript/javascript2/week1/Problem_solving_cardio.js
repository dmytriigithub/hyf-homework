//-------------------------------------------------------------- 1.1. Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function shortestWordOfArray(array) {
    array.sort(function(a, b) {
    return a.length - b.length;
    });
    console.log(array[0]);

}

shortestWordOfArray(danishWords); // returns 'ø'

//------------------------------------------------------------- 1.2. Find and count the Danish letters

const danishString = "Jeg har en blå bil",
      danishString2 = "Blå grød med røde bær";

function findDanishLetters(string) {
    string.toLowerCase();
    const danishLetters = {},
          regexp = /[øåæ]/gi,
          matches_array = string.match(regexp);
    danishLetters.total = matches_array.length;

    matches_array.forEach(item => {
        danishLetters[item] = (danishLetters[item] || 0) + 1;
      });

    console.log(danishLetters);
}


findDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
findDanishLetters(danishString); // returns {total: 1, å: 1}