
/**
 * Returns all numbers given an input string.
 * @param {string} any string
 * @returns {string} only numeric values of the original string
 */
export function getNumbers(input: string): string {

    let numArr:Array<string> = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let rplArr:Array<string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let idxArr:Array<number> = [];

    while (numArr.length > 0) {

        for (let idx:number = 0; idx < numArr.length; idx++) {
            let num:string = numArr[idx];
            let index:number = input.indexOf(num);
            if (index === -1) {
                // can be removed
                numArr.splice(idx, 1);
                rplArr.splice(idx, 1);
                idx--;
            } else {
                idxArr.push(index);
            }
        }

        // re-order arrays based on index
        numArr.sort((a, b) => {
            return idxArr[numArr.indexOf(a)] - idxArr[numArr.indexOf(b)];
        });
        rplArr.sort((a, b) => {
            return idxArr[rplArr.indexOf(a)] - idxArr[rplArr.indexOf(b)];
        });

        if (numArr.length > 0) {
            // the -1 on the third param is required as the correct answer is replacing OVERLAPPING numbers
            // for example 'oneight' should return '18'
            input = input.substring(0, input.indexOf(numArr[0])) +
                rplArr[0] +
                input.substring(input.indexOf(numArr[0]) + numArr[0].length - 1, input.length);

            // reset for next loop
            numArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
            rplArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            idxArr = [];
        }
    }

    return input.replace(/[^0-9]+/g, '');
}

/**
 * Converts a string to a two digit number,
 * comprising the first and last digit in the original string
 * @param {string} any string comprising of numeric digits only
 * @returns {number} the output value or 'code'
 */
export function getCode(input: string): number {
    return input.length > 0 ? parseInt(input[0] + input[input.length-1]) : 0;
}
