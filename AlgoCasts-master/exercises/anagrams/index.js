// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
const aCharMap = buildCharMap(stringA);
const bCharMap = buildCharMap(stringB);

  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for(let char in aCharMap) {
    if(aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;4758

}

function buildCharMap(str) {
  const charMap = {};

  for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap
}

module.exports = anagrams;

/* function anagrams(stringA, stringB) {
    let changedStringA = stringA.replace(/[^\w]/g, "");
    let changedStringB = stringB.replace(/[^\w]/g, "");
    const charMapA = {};
    const charMapB = {};

    for (let char of changedStringA) {
        if (!charMapA[char]) {
            charMapA[char] = 1;
        } else {
            charMapA[char]++;
        }
    }

    for (let char of changedStringB) {
        if (!charMapB[char]) {
            charMapB[char] = 1;
        } else {
            charMapB[char]++;
        }
    }

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }

    for (let chars in charMapA) {
        console.log(charMapB[chars]);
        if (charMapA[chars] !== charMapB[chars]) {
            return false;
        }
    }
    return true;
} */
