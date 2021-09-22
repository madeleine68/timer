//No numbers are provided: Easy.
//An input is a negative number:
//An input is not a number:
const input = process.argv.slice(2).filter(i => i >=0);
if (input !== NaN) {
 input.forEach((i) => {
    setTimeout (() => {
        process.stdout.write('\x07');
    }, i*1000);   
 }); 
}  

