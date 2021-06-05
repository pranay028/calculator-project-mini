const numbersEl = document.querySelectorAll(".numbers");
const operateEl = document.querySelectorAll(".operate");
const buttonsEl = document.querySelectorAll(".btn");
const button = document.querySelector('.btn')

// const oneEl = document.getElementById("one")
// const twoEl = document.getElementById("two")
// const threeEl = document.getElementById("three")
// const fourEl = document.getElementById("four")
// const fiveEl = document.getElementById("five")
// const sixEl = document.getElementById("six")
// const sevenEl = document.getElementById("seven")
// const eightEl = document.getElementById("eight")
// const nineEl = document.getElementById("nine")
// const dotEl = document.getElementById("dot")
// const clearEl = document.getElementById("clear")
// const multiEl = document.getElementById("multi")
// const divideEl = document.getElementById("divide")
// const percentileEl = document.getElementById("percentile")
// const subtractEl = document.getElementById("subtract")
// const addEl = document.getElementById("add")
// const resultEl = document.getElementById("result")

const displayaddEl = document.getElementById("displayadd")

// display....
const displayEl = document.querySelector(".display");

const closeEl = document.querySelector(".close");
const helpEl = document.querySelector(".help");
const instructionEl = document.querySelector(".instructions");

displayEl.textContent = "";
// let x = 0;
// let y = 0;
let totalValue = 0;
let value = 0;
let listOperated = [];
let idArray = [];
let totalArray = []

closeEl.addEventListener("click", function(){
    instructionEl.classList.add("hidden");
    // instructionEl.style.animation = "popdown 400ms 1";
})
document.addEventListener("keydown", function(e){
    if(e.key == "Escape"){
        instructionEl.classList.add("hidden");
        // instructionEl.style.animation = "popdown 400ms 1";
    }
})
helpEl.addEventListener("click", function(){
    
    instructionEl.classList.toggle("hidden");
    
})

    for(let i = 0; i < buttonsEl.length; i++){
        var x;
        var y;
        
        buttonsEl[i].addEventListener("click", function(){
            
            if(buttonsEl[i].id == 'clear'){
                x = 0;
                // listOperated = [];
                displayEl.textContent = "";
                displayaddEl.textContent = "";
                value = 0;
                totalValue = 0;
                idArray = []

            }else if(buttonsEl[i].className.includes("number")){
                // console.log(buttonsEl[i].id);
                // displayEl.textContent = "";
                if(displayEl.textContent == totalValue) {
                    displayEl.textContent = "";
                }
                displayEl.textContent += buttonsEl[i].textContent;
                value = Number(displayEl.textContent);
                
            }else if(buttonsEl[i].className.includes("operate") && buttonsEl[i].id != "result"){
                // x = value;
                                    
                let id = buttonsEl[i].id;
                // let forID = buttonsEl[i].classList.add("active");
                console.log(id);
                
                console.log(listOperated);
                // console.log(idArray[idArray.length - 1]);
                // listOperated.push(value)
                if(idArray.length >= 1){
                    if(buttonsEl[i].id != idArray[idArray.length - 1]){
                        value = 0;
                        displayaddEl.textContent = totalValue;
                        displayEl.textContent = "";
                        newValue = totalValue;
                        
                    }else{
                        newValue = listOperated[listOperated.length - 1];
                        displayaddEl.textContent = newValue;
                        displayEl.textContent = "";
                        listOperated.push(value);
                        
                    }
                }else{
                    listOperated.push(value);
                    newValue = value;
                    
                }
                idArray.push(buttonsEl[i].id); 
                // console.log(idArray[idArray.length - 1]);

                // listOperated.push(value)
                displayaddEl.textContent = newValue;
                displayEl.textContent = "";
                
            }else if(buttonsEl[i].id == 'result'){
                if(idArray[idArray.length - 1] == "add"){
                    
                    totalValue = newValue + value;
                    
                    // displayaddEl.textContent = totalValue
                    
                    // listOperated.push(totalValue)
                }else if(idArray[idArray.length - 1] == "subtract") {
                    
                    totalValue = newValue - value;
                    // displayaddEl.textContent = totalValue
                    // displayEl.textContent = totalValue;
                    // listOperated.push(totalValue)}
                }else if(idArray[idArray.length - 1] == "multi") {
                    console.log(newValue, value);
                    totalValue = newValue * value;
                    console.log(totalValue);

                }else if(idArray[idArray.length - 1] == "divide"){
                  
                    console.log(newValue, value);
                    totalValue = newValue / value;
                    console.log(totalValue);
                }else if(idArray[idArray.length - 1] == "percentile"){
                   
                    console.log(newValue, value);
                    totalValue = newValue % value;
                    console.log(totalValue);
                }
                totalArray.push(totalValue);
                
                // displayEl.textContent = totalValue;
                listOperated.push(totalValue)
                displayaddEl.textContent = totalValue;
                displayEl.textContent = totalValue;

            } 
            if(buttonsEl[i].id == 'lv'){
                document.querySelector(".sidedisplay").innerHTML = totalArray[totalArray.length - 1];
                // document.querySelector(".sidedisplay").innerHTML = totalValue;

            }
                
                // console.log(value);
                // console.log(totalValue);
                // console.log(listOperated);
                    
                
            // console.log(idArray);  
            })
            
            // let id = buttonsEl[i].id;
            // displayEl.textContent += buttonsEl[i].textContent
            //  console.log(displayEl.textContent);
    }
    
