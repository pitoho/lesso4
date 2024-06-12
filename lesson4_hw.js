//task1

class Animal {
    constructor(name){
        this.name = name
    }
}

class canWalk extends Animal {
    walk(){
        console.log(`${this.name} can walk`)
    }
}

class canFly extends Animal{
    fly(){
        console.log(`${this.name} can fly`)
    }
}

class canSwim extends Animal{
    swim(){
        console.log(`${this.name} can swim`)
    }
}

class Dog extends canWalk {
    walk(){
        super.walk()
    }
}

class Whale extends canSwim{
    swim(){
        super.swim()
    }
}

class Bird extends canFly{
    fly(){
        super.fly()
    }
}

let dog = new Dog('doggie')
let whale = new Whale('Wally')
let bird = new Bird('Birdy')

dog.walk()

//task2

let head = {
    glasses: 1
};
  
let table = {
    pen: 3,
    __proto__: head
};
  
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
  
let pockets = {
    money: 2000,
    __proto__: bed
};
  
console.log( pockets.pen ); // 3
console.log( bed.glasses ); // 1
console.log( table.money ); // undefined