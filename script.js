const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]');

let currentOperand=''
let previousOperand=''
let operator=''


function clear(){
currentOperand=''
previousOperand=''
operator=''
}

function updateDisplay(){
    
        previousOperandTextElement.innerText=previousOperand
        currentOperandTextElement.innerText=currentOperand
    
    
    
}

function appendNumber(text){
    if( text=='.'){
        if(!currentOperand.includes(".")){
            currentOperand+=text 
         }
    }
    else{
        currentOperand+=text 
    }
    
}

function chooseOpearation(operatorText){
   
    if((operatorText =='-' || operatorText=='+') && currentOperand==''){
        currentOperand=operatorText+currentOperand
        previousOperand=''
    }
    else if((operatorText =='/' || operatorText=='*') && (currentOperand=='' && previousOperand=='')){
        alert('please select the operands properly')
        return
    }
    else{
        previousOperand=currentOperand+operatorText
        currentOperand=''
        operator=operatorText
    }
    updateDisplay()
}

function compute(){
    
    switch(operator){
        case '+': temp=currentOperand
                  currentOperand=+Number(previousOperand.substring(0,previousOperand.length-1))+Number(currentOperand)
                  updateDisplay()
                  previousOperand=previousOperand+temp
                  break
        case '-': temp=currentOperand
                  currentOperand=+Number(previousOperand.substring(0,previousOperand.length-1))-Number(currentOperand)
                  updateDisplay()
                  previousOperand=previousOperand+temp
                  break
        case '*': temp=currentOperand
                  currentOperand=+Number(previousOperand.substring(0,previousOperand.length-1))*Number(currentOperand)
                  updateDisplay()
                  previousOperand=previousOperand+temp
                  break
        case '/': temp=currentOperand
                  currentOperand=+Number(previousOperand.substring(0,previousOperand.length-1))/Number(currentOperand)
                  updateDisplay()
                  previousOperand=previousOperand+temp
                  break
        default:alert('no operation'+' at operator '+operator)
}}
allClearButton.addEventListener('click',event=>{
    clear()
    updateDisplay()
})

numberButtons.forEach(button=>{
        button.addEventListener('click', ()=>{
            appendNumber(button.innerHTML)
            updateDisplay()
        })
    } 
)

operationButtons.forEach(operationButton=>{
    operationButton.addEventListener('click',()=>{
        chooseOpearation(operationButton.innerHTML)
    })
})

equalsButton.addEventListener('click',event=>{
        if(previousOperand=='' || currentOperand==''){
            alert('please select the operands properly')
            return
        }
        compute()
        updateDisplay()
})

deleteButton.addEventListener('click',event=>{
       currentOperand=currentOperand.substring(0,currentOperand.length-1)
       updateDisplay()
})