const arrowFunc = () => {
    console.log("Arrow Function Called");
};

class MyClass {
    constructor() {
        this.myMethod();
    }

    myMethod() {
        externalFunction();
    }
}

function externalFunction() {
    arrowFunc();
}

const myObj = {
    shorthandMethod() {
        arrowFunc();
    }
}
