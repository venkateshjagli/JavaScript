// 'use strict'
// console.log('*************** Prototypecal Inhertance ******************');
// // So if animal has a lot of useful properties and methods, then they become automatically available in rabbit. Such properties are called “inherited”.
// // If we have a method in animal, it can be called on rabbit:

// let animal = {
//     eat: true
// }

// let rabbit = {
//     jump: true
// }
// // By the specification, __proto__ must only be supported by browsers,
// //rabbit.__proto__ = animal; //sets animal to be a prototype of rabbit.


// // we can find both properties in rabbit now
// // console.log(rabbit.eats);
// // console.log(rabbit.jump);


// let animal1 = {
//     eats: true,
//     walk() {
//         console.log('Animal Walking slow');
//     }
// };

// let rabbit1 = {
//     jumps: true,
//     __proto__: animal1
// };

// // walk is taken from the prototype
// // console.log(rabbit1.walk());
// // console.log(rabbit1.eats);
// // console.log(rabbit1.jumps);


// console.log('*************** prototype chain can be longer: *****************');

// // The prototype chain can be longer:
// // There are only two limitations:
// // 1)The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// // 2)The value of __proto__ can be either an object or null. Other types are ignored.
// let animal2 = {
//     eats1: true,
//     walk2() {
//         console.log('Animal Walk');
//     }
// }

// let rabbit2 = {
//     jumps1: true,
//     __proto__: animal2
// }

// let longEar = {
//     earLong: 10,
//     __proto__: rabbit2
// }

// // walk is taken from the prototype chain
// // console.log(longEar.earLong);
// // console.log(longEar.jumps1);
// // console.log(longEar.walk2());


// console.log('**************** Writing doesn’t use prototype *******************');
// // Writing doesn’t use prototype
// // The prototype is only used for reading properties.
// // Write/delete operations work directly with the object.
// // In the example below, we assign its own walk method to rabbit:
// let animal3 = {
//     eats2: true,
//     walk() {
//         /* this method won't be used by rabbit */
//     }
// };

// let rabbit3 = {
//     __proto__: animal3
// };

// rabbit3.walk2 = function () {
//     console.log('Rabbit! Bounce-bounce!');
// }

// console.log(rabbit3.walk2());




// let user = {
//     name: 'Venky',
//     surName: 'Jeglee',

//     set fullName(value) {
//         [this.name, this.surName] = value.split(' ');
//     },
//     get fullName() {
//         return `${this.name} ${this.surName}`
//     }
// };

// let admin = {
//     __proto__: user,
//     isAdmin: true
// }

// // the property admin.fullName has a getter in the prototype user
// console.log(admin.fullName);

// // setter triggers!
// // the property has a setter in the prototype, so it is called.
// admin.fullName = 'Chandu Jegle';
// console.log(admin.fullName);


// console.log('************** The value of “this” ************');
'use strict'
console.log('*************** Prototypecal Inhertance ******************');
// So if animal has a lot of useful properties and methods, then they become automatically available in rabbit. Such properties are called “inherited”.
// If we have a method in animal, it can be called on rabbit:

let animal = {
    eat: true
}

let rabbit = {
    jump: true
}
// By the specification, __proto__ must only be supported by browsers,
//rabbit.__proto__ = animal; //sets animal to be a prototype of rabbit.


// we can find both properties in rabbit now
// console.log(rabbit.eats);
// console.log(rabbit.jump);


let animal1 = {
    eats: true,
    walk() {
        console.log('Animal Walking slow');
    }
};

let rabbit1 = {
    jumps: true,
    __proto__: animal1
};

// walk is taken from the prototype
// console.log(rabbit1.walk());
// console.log(rabbit1.eats);
// console.log(rabbit1.jumps);


console.log('*************** prototype chain can be longer: *****************');

// The prototype chain can be longer:
// There are only two limitations:
// 1)The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// 2)The value of __proto__ can be either an object or null. Other types are ignored.
let animal2 = {
    eats1: true,
    walk2() {
        console.log('Animal Walk');
    }
}

let rabbit2 = {
    jumps1: true,
    __proto__: animal2
}

let longEar = {
    earLong: 10,
    __proto__: rabbit2
}

// walk is taken from the prototype chain
// console.log(longEar.earLong);
// console.log(longEar.jumps1);
// console.log(longEar.walk2());


console.log('**************** Writing doesn’t use prototype *******************');
// Writing doesn’t use prototype
// The prototype is only used for reading properties.
// Write/delete operations work directly with the object.
// In the example below, we assign its own walk method to rabbit:
let animal3 = {
    eats2: true,
    walk() {
        /* this method won't be used by rabbit */
    }
};

let rabbit3 = {
    __proto__: animal3
};

rabbit3.walk2 = function () {
    console.log('Rabbit! Bounce-bounce!');
}

console.log(rabbit3.walk2());

//Setter and Getter
let user = {
    name: 'Venky',
    surName: 'Jeglee',

    set fullName(value) {
        [this.name, this.surName] = value.split(' ');
    },
    get fullName() {
        return `${this.name} ${this.surName}`
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
}

// the property admin.fullName has a getter in the prototype user
console.log(admin.fullName);

// setter triggers!
// the property has a setter in the prototype, so it is called.
admin.fullName = 'Chandu Jegle';
console.log(admin.fullName);


console.log('************** The value of “this” ************');
let animal4 = {
    walk3() {
        if (!this.isSleeping) {
            console.log('Walk');
        }
    },
    sleep() {
        this.isSleeping = true
    }
};
let rabbit4 = {
    name: 'White Rabbit',
    __proto__: animal4
};

rabbit4.sleep();
console.log(rabbit4.name);
console.log(rabbit4.isSleeping); // true
console.log(animal4.isSleeping); // undefined (no such property in the prototype)

console.log('********** for in loop *************');
let animal5 = {
    name: 'animals',
    eats3: true
}

let rabbit5 = {
    jumps2: true,
    __proto__: animal5
}
// for..in loops over both own and inherited keys
for(let prop in rabbit5){
    let isOwn = rabbit5.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`our : ${prop}`);
    }
    else{
        console.log(`Inherited : ${prop}`);
    }
};
// console.log(prop);