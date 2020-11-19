// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, counter = 1) {
    if (counter >= n) {
        return;
    }

    let hash = "#";
    let space = " ";

    let stairs = hash.repeat(counter).concat(space.repeat(n - counter));
    console.log(stairs);
    //steps(n, counter = counter)
}

module.exports = steps;

/* function steps(n) {
    const hash = "#";
    const space = " ";

    for (let i = 1; i <= n; i++) {
        let steps = hash.repeat().concat(space.repeat(n - i));
        console.log(steps);
    }
} */

/* function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = "";

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += "#";
            } else {
                stair += " ";
            }
        }
        console.log(stair);
    }
} */
