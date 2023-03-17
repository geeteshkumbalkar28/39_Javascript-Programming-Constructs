let primeFactors = new Array();
let num = 12;

for(let index = 2; index <= num; index++)
{
    while(num % index == 0)
    {
        primeFactors.push(index);
        num /= index;
    }
}

if(num > 2)
{
    primeFactors.push(num);
}

for(let value of primeFactors)
{
    console.log(value);
} 