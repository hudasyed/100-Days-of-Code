var firstValue = null;
var secondValue = null;
var operation = null;

function enterOperation(operation) {
    if (this.secondValue !== null) {
        this.submit();
        this.secondValue = null;
    }
    this.operation = operation;
}

// Numbers
function enterNumber(number) {
    if (this.operation === null) {
        if (this.firstValue === null) {
            this.firstValue = number;
        } else {
            this.firstValue = this.firstValue + '' + number;
        }
        document.getElementById("screen").innerHTML = this.firstValue;
    } else {
        if (this.secondValue === null) {
            this.secondValue = number;
        } else {
            this.secondValue = this.secondValue + '' + number;
        }
        document.getElementById("screen").innerHTML = this.secondValue;
    }
}

// Clear
function clear() {
    this.firstValue = null;
    this.secondValue = null;
    this.operation = null;
    document.getElementById("screen").innerHTML = 0;
}

function submit() {
    var newVal;
    if (this.operation !== null && this.secondValue !== null) {
        if (this.operation === 'add') {
            newVal = parseInt(firstValue) + parseInt(secondValue);
        }

        if (this.operation === 'subtract') {
            newVal = parseInt(firstValue) - parseInt(secondValue);
        }

        if (this.operation === 'multiply') {
            newVal = parseInt(firstValue) * parseInt(secondValue);
        }

        if (this.operation === 'divide') {
            newVal = parseInt(firstValue) / parseInt(secondValue);
        }
        this.firstValue = newVal;
    }
    document.getElementById("screen").innerHTML = this.firstValue;
}