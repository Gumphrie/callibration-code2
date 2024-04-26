import * as fs from 'fs';
import * as helpers from './helpers';

// attempt to read in the puzzle input data
fs.readFile('ckmb52fldxkseven3fkjgcbzmnr7.txt','utf8', (err, data:string) => {
    if (err) {
        console.error('Error reading the file: ' + err);
        return;
    }
    // we need to examine each line
    const lines: Array<string> = data.split('\n');
    // store the incremental result
    let result:number = 0;

    lines.forEach((line: string, index: number) => {
        const numbers: string = helpers.getNumbers(line);
        result += helpers.getCode(numbers);
    });

    console.log('Result:', result);
});
