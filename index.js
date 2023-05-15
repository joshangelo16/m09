//console.log('test')

/*
    Objects
        - an object is a daa type that is used to 
        represent real world object
        - it is a collection of realated data
         and/or functionalities
        - information stored in objects that
        are represented "key:value" pair

        syntax:
            let/const objectName = 
            {
                keyA : valueA,
                keyB : valueB
            }

*/
let cellphone = {
    name: '8008135',
    manufactureDate: 2000
}
console.log(cellphone)

/*create object using 
constructor function

-creates a reusable function to create several
objects that have the same data structure
-useful for creating multiple instances of stufflol
-an instance is a concrete occurance of any object
which emphasizes on the distinct/unique identity

syntax:
    function objectName(keyA, keyB){
    this.keyA = keyA;
    this.keyB = keyB;
    }
- this keyword assigns a new object to properties 
by associating them with the values recieve from
the constructor from the functon's parameter
*/

function Laptop(name, date){
    this.name = name;
    this.date = date;
}
// this is a uniqu instance of laptop object

let laptop = new Laptop('Lenovo',2000)
console.log(`Resulting from creating objects using
    object constructor ${laptop}`)
console.log(laptop)
//` - backtip is alt + 96``````

let mylaptop = new Laptop('PC',2000)
console.log(`Result: `)
console.log(mylaptop)

/*
Object methods
- method is a function whic is a property of an object
-they are also function and one of the key diff is that
they have methods that are functions that are related to 
specific objects
*/
let person = {
    name: 'Joshua',
    greet: function(){
        console.log(this.name + 'Rabino');
    } //anonymous functions cause no name
}
console.log(person)
person.greet()

person.walk = function(){
    console.log(this.name + ' is walking around');
}
person.walk()
//methods are useful for creating reusable functionns
//that perform tasks related to objects

let friend = {
    fname: 'Joshua',
    lname: 'Rabino',
    address: {
        city: 'MM',
        country: 'Philippines'
    },
    email: ['201911992@feualabang.edu.ph'],
    introduce: function(){
        console.log('hello' + this.fname + this.lname);
    } 
};

friend.introduce()

/*
using object literals to create multiple kinds of pokemon 
*/
let myPokemon = {
    name: "Snorlax",
    level: 10,
    health: 100,
    attack: 80,
    tackle: function(){
        console.log("Tackled something");
        console.log("Opponent took damage");
    },
    faint: function(){
        console.log("Pokemon fainted");
    }
}
console.log(myPokemon)

//created an object constructor
function Pokemon(name, level, health, attack){
    //properties
    this.name = name;
    this.level = level;
    this.health = 5 + health;
    this.attack = level;

    //methods
    this.tackle = function(target){
        console.log(this.name + ' tackled ' + target.name);
        console.log("Opponent took damage");
    };
    this.faint = function(){
        console.log(this.name + ' fainted');
    }
}
// new instances of pokemonobject with their unique properties

let snivy = new Pokemon('snivy', 10);
let tepig = new Pokemon('tepig', 10);

snivy.tackle(tepig);
snivy.faint(tepig);

let trainer = {
    name: "Joshua",
    age: 22,
    pokemon: [],
    friends: {
        "Dawn": ["Fortree City", "Rock-type gym leader"],
        "Samuel": ["Virbank City", "Water-type gym leader"]
    },
    talk: function() {
        console.log("Pikachu! I choose you!");
    }
};

let pikachu = new Pokemon("Pikachu", 10, 20, 10);
let charmander = new Pokemon("Charmander", 10, 20, 10);
let squirtle = new Pokemon("Squirtle", 10, 20, 10);
trainer.pokemon.push(pikachu, charmander, squirtle);

console.log(trainer.name);
console.log(trainer.age);
console.log(trainer["friends"]);

trainer.talk();

function Pokemon(name, level, health, attack) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.attack = 10 + level;
 
    this.tackle = function(target) {
        console.log(this.name + " tackled " + target.name);
        console.log("Opponent took damage");
        console.log(this.health - this.attack);
        target.health -= this.attack;
        if (target.health <= 0) {
            this.faint(target);
        }
    };

    this.faint = function() {
        console.log(this.name + " has fainted.");
    };
}

let bulbasaur = new Pokemon("Bulbasaur", 10, 100, 10);
let jigglypuff = new Pokemon("Jigglypuff", 10, 100, 10);
let zubat = new Pokemon("Zubat", 10, 100, 10);

pikachu.tackle(bulbasaur);
bulbasaur.faint(bulbasaur);


 