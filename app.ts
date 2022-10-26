const num1=document.getElementById('num1') as HTMLInputElement;
const num2=document.getElementById('num2') as HTMLInputElement
const buttonElement=document.querySelector('button')!;
const numResults:Array<number>=[]
type NumOrString=number|string
function addNumber(num1:NumOrString,num2:NumOrString){
    if(typeof num1 ==='number' && typeof num2==='number')
    {
        return num1+num2;
    }
   else if(typeof num1 ==='string' && typeof num2==='string'){
    return num1+' '+num2;
   }
   else{
    return +num1 + +num2;
   }
}
function printResult(resultObj:{ val:number;timestamp:Date}){
    console.log(resultObj.val,resultObj.timestamp)
}
buttonElement.addEventListener('click',()=>{
    const num1Value=num1.value;
    const num2Value=num2.value;
    console.log(addNumber(num1Value,num2Value));
    const numresult=addNumber(+num1Value,+num2Value);
    console.log(numresult);
    numResults.push(numresult as number)
    printResult({val:numresult as number,timestamp:new Date()})
    console.log(numResults)
})

const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("It worked")
    },1000)
})
myPromise.then((result)=>{
    console.log(result);
})

