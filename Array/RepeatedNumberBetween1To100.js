let Start = 0;
let End = 100;
let Pos = 0;
let twice = new Array();

for(let i = Start;i < End; i++)
{
    if(RepeatedDigits(i) == 1)
    {
        twice.push(i);
    }
}
console.log("The Repeated Digits in the Range Between 0 to 100 : " + twice.join(','));

function RepeatedDigits(num)
{
    let arr = new Array();
    while(num != 0)
    {
        let rem = num % 10;
        if(arr.indexOf(rem) != -1)
        {
            return 1; //Repeated 1 if there is any repeated Digit
        }
        arr.push(rem);
        num = Math.floor(num / 10);
    }

    return 0; //Repeate 0 if there is no repeated digits
} 