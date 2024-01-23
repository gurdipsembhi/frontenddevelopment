const URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"


let arryofcuurency;
let data;
const country=async()=>{


    // console.log(fetch(URL))
    const response=await fetch(URL)
    data=await response.json()
    console.log(data)


   const nameOfCurrency=await Object.entries(data);
    arryofcuurency=await Object.values(nameOfCurrency)
//    console.log(await Object.values(nameOfCurrency))
//    console.log(await Object.values(nameOfCurrency))

    console.log(arryofcuurency)
    await choic()





}
country()
const batchTrack=document.getElementById("batchSelect");
const batchTrack1=document.getElementById("batchSelect1");

const choic=async()=>{
    await console.log('this playlist')
    console.log(arryofcuurency)
    for(let i of arryofcuurency){
        // document.getElementById("")
        console.log(i[1])
        const newOption=document.createElement('option');
        newOption.value=i[1];
        newOption.text=i[1];
        const newOption1=document.createElement('option');
        newOption1.value=i[1];
        newOption1.text=i[1];
        batchTrack.appendChild(newOption);
        batchTrack1.appendChild(newOption1);

    };
}
let displayarea=document.getElementById("display1").innerText;
const button1=document.getElementById('bt1').addEventListener('click',hello)
// const button2=document.getElementById('bt1').addEventListener('click',di)
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/crpt.json

let filteredValues;
async function di(){
    displayarea=filteredValues;
}



async function hello(){
    const currencies1=document.getElementById('batchSelect').value;
    const currencies2=document.getElementById('batchSelect1').value;
    console.log(data)
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }
      
      
      const map = data;
    //   console.log(getKeyByValue(map,currencies1));
    const convert=getKeyByValue(map,currencies1);
    const convert1=getKeyByValue(map,currencies2);
    console.log(convert)
    console.log(convert1)
    let URL=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${convert}.json`;
    let response=await fetch(URL);
    let newdata=await response.json();
    console.log(newdata)
    let currenciesof1=Object.entries(newdata)
    console.log(currenciesof1[1][1])
    let price=currenciesof1[1][1]
    console.log(price)
    let final=Object.entries(price).filter(([key, value]) => key.includes(convert1));
    console.log(Object.entries(price).filter(([key, value]) => key.includes(convert1)));
    console.log(final)
    filteredValues = Object.entries(price)
    .filter(([key, value]) => key.includes(convert1))
    .map(([key, value]) => value);
    for(let i of filteredValues){
        console.log(i)
        let button2=document.getElementById('display1')
       
        button2.innerText=i* document.getElementById('num1').value;
        break
      }
    // console.log(filteredValues);
    // // displayarea=filteredValues
    // let button2=document.getElementById('display1')
    // button2.innerText=filteredValues;

    

    
}
