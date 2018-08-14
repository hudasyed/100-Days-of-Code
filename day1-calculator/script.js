var firstValue = null;
var secondValue = null;
var operation = null;

function enterOperation(operation) {
    if(this.secondValue !== null)
    {
        this.submit();
        this.secondValue = null;
    }
    this.operation = operation;
}

// Numbers
function enterNumber(number){
    if(firstValue === null || operation === null){
        firstValue = number;
    }
    else{
        secondValue = number;        
    }
    document.getElementById("screen").innerHTML = number;
}

// Switch Sign
function switchValue() {
    this.firstValue = -this.firstValue;
}

// Clear
function clear() {
    this.firstValue = null;
    this.secondValue = null;
    this.operation = null;
    document.getElementById("screen").innerHTML = 0;
}


// Remove 

function submit(){
    var newVal;
    if(this.operation !== null && this.secondValue !== null)
    {
        if(this.operation === 'add')
        {
            newVal = firstValue + secondValue;
        }

        if(this.operation === 'subtract')
        {
            newVal = firstValue - secondValue;
        }

        if(this.operation === 'multiply')
        {
            newVal = firstValue * secondValue;
        }

        if(this.operation === 'divide')
        {
            newVal = firstValue / secondValue;
        }
        this.firstValue = newVal;
    }
    document.getElementById("screen").innerHTML = this.firstValue;
}