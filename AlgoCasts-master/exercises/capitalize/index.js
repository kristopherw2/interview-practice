// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const capitalizedStr = str
        .split(" ")
        .map((str) => {
            const slicedStr = str.slice(1);
            return str[0].toUpperCase().concat(slicedStr);
        })
        .join(" ");

    return capitalizedStr;
}

module.exports = capitalize;
