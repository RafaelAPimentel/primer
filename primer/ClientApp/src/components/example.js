
class myData {
    constructor(){
        this.name = "Adam";
        this.weather = "Sunny";
    }
    printMessage = () => {
        console.log(`Hello ${this.name}.`);
        console.log(`Today is ${this.weather}`);
    }
}

const SayHello = (a) => `Hello ${a()}.`;   

const printName = (nameFunction, printFunction) => printFunction(SayHello(nameFunction))

printName(()=>"Rafael",console.log) 

