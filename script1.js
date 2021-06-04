const numbersEl = document.querySelectorAll(".numbers");
const operateEl = document.querySelectorAll(".operate");
const buttonsEl = document.querySelectorAll(".btn");
const button = document.querySelector('.btn')

const oneEl = document.getElementById("one")
const twoEl = document.getElementById("two")
const threeEl = document.getElementById("three")
const fourEl = document.getElementById("four")
const fiveEl = document.getElementById("five")
const sixEl = document.getElementById("six")
const sevenEl = document.getElementById("seven")
const eightEl = document.getElementById("eight")
const nineEl = document.getElementById("nine")
const dotEl = document.getElementById("dot")
const clearEl = document.getElementById("clear")
const multiEl = document.getElementById("multi")
const divideEl = document.getElementById("divide")
const percentileEl = document.getElementById("percentile")
const subtractEl = document.getElementById("subtract")
const addEl = document.getElementById("add")
const resultEl = document.getElementById("result")

const displayaddEl = document.getElementById("displayadd")

// display....
const displayEl = document.querySelector(".display");


// console.log(buttonEl)

// displayEl.textContent = "";
// for(let i =0; i <numbersEl.length; i++){
//     numbersEl[i].addEventListener("click", function(){
        
//         // console.log(buttonEl[i])
//         displayEl.textContent += numbersEl[i].textContent
        
//     })
//     // buttonEl.style.background = "";
// }

// console.log(clearEl.id);

displayEl.textContent = "";
// let x = 0;
// let y = 0;
let totalValue = 0;
let totalArray = [0];
let first = 0;
let second = 0;
let listOperated = [0];
let classArray = [];
let operatorText = [""];
let firstArray = [];
let secondArray = [];
let valuesStore = [];


for(let i = 0; i < buttonsEl.length; i++){
  
    
    buttonsEl[i].addEventListener("click", function(){
      
        
        if(buttonsEl[i].id == 'clear'){
            
            listOperated = [0, 0]
            displayEl.textContent = "";
            displayaddEl.textContent = "";
            value = 0;

        }else if(buttonsEl[i].className.includes("number")){
            // console.log(buttonsEl[i].id);
            
            displayEl.textContent += buttonsEl[i].textContent;
            value = Number(displayEl.textContent);
            
            
        }else if(buttonsEl[i].className.includes("operate") && buttonsEl[i].id != "result"){
            
            operatorText.push(buttonsEl[i].textContent);
            console.log(operatorText);
            
            first = listOperated[listOperated.length -2];
            second = listOperated[listOperated.length -1];
            console.log(listOperated); 
            // console.log(value);
            
            displayEl.textContent = "";
            displayaddEl.textContent = (totalArray[totalArray.length - 1] + value);
        }else if(buttonsEl[i].id == 'result'){
            if(operatorText[operatorText.length - 1] == "+"){
                totalValue = calcAdd(first, second);
                totalArray.push(totalValue)
                // value = 0;
                console.log(totalValue);
                displayEl.textContent = totalValue;
                displayaddEl.textContent = totalValue;

                
            }else if(operatorText[operatorText.length - 1] == "-") {
                console.log(operatorText[operatorText.length - 1]);
                
        }
        
        // displayEl.textContent = totalValue;
        console.log(totalValue);        
        }
        if(buttonsEl[i].id == "lv"){
            displayEl.textContent = totalArray[totalArray.length - 1];
            document.querySelector(".sidedisplay").textContent = totalArray[totalArray.length - 1];
            
        } 
        // console.log(buttonsEl[i].className.includes("operate"))
        classArray.push(buttonsEl[i].className)
        console.log(classArray);
})
}

// console.log(totalArray[totalArray.length - 1]);

