/* global prompt:true */
var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var pets = [], people = [], goats = [], dogs = [],lemurs = [], cats = [], mice = [];

var person1 = {name:'bob', age: 10, pets:[]};
var person2 = {name:'sam', age: 5, pets:[]};
var person3 = {name:'jill', age: 7, pets:[]};

people.push(person1, person2, person3);

var input = prompt('Enter (g)oat, (d)og, (l)emur, (c)at, (m)ouse, or (q)uit: ');

while(input !== 'q') {
  switch(input){
    case 'g':
      var name = prompt('Enter name: ');
      var age = prompt('Enter age: ');
      age = parseFloat(age);
      var gender = prompt('Enter gender (m/f): ');
      var fainting = prompt('Is it a fainting goate? (y/n) ');
      var goat = {name:name, age:age, gender:gender, fainting:fainting};
      goats.push(goat);
      break;
    case 'd':
      name = prompt('Enter name: ');
      age = prompt('Enter age: ');
      age = parseFloat(age);
      gender = prompt('Enter gender (m/f): ');
      var breed = prompt('Enter breed: ');
      var dog = {name:name, age:age, gender:gender, breed:breed};
      dogs.push(dog);
      break;
    case 'l':
      name = prompt('Enter name: ');
      age = prompt('Enter age: ');
      age = parseFloat(age);
      gender = prompt('Enter gender (m/f): ');
      var type  = prompt('Enter type: ');
      var lemur = {name:name, age:age, gender:gender, type:type};
      lemurs.push(lemur);
      break;
    case 'c':
      name = prompt('Enter name: ');
      age = prompt('Enter age: ');
      age = parseFloat(age);
      gender = prompt('Enter gender (m/f): ');
      var color = prompt('Enter color: ');
      var cat = {name:name, age:age, gender:gender, color:color};
      cats.push(cat);
      break;
    case 'm':
      name = prompt('Enter name: ');
      age = prompt('Enter age: ');
      age = parseFloat(age);
      gender = prompt('Enter gender (m/f): ');
      var mouse = {name:name, age:age, gender:gender,};
      mice.push(mouse);
      break;
  }
  
    input = prompt('Enter (g)oat, (d)og, (l)emur, (c)at, (m)ouse, or (q)uit: ');
}

input = prompt('(b)ob, (s)am, (j)ill, or (q)uit: ');
while(input !== 'q'){
  for(var i = 0, i < people.length, i++){
    if(people[i].name[0] === input){
      var client = people[i];
      break;
      }
    }
  }

  var animals;
  console.log('Client: ',client);

  var choice = prompt('What type of pet? (g)oat, (d)og, (l)emur, (c)at, (m)ouse: ');
    switch(choice){
      case 'g':
        console.log('Goats: ',goats);
        animals = goats;
        break;
      case 'd':
        console.log('Dogs: ',dogs);
        animals = dogs;
        break;
      case 'l';
        console.log('Lemurs: ',lemurs);
        animals = lemurs
        break;
      case 'c';
        console.log('Cats: ',cats);
        animals = cats;
        break;
      case 'm';
        console.log('Mice: ',mice);
        animals = mice;
        break;
    }

  name = prompt('What is the name of the animal you want to adopt? ');

  for(i = 0; i < animals.length; i++){
    if(animals[i].name === name){
      var animal = animals[i];
      var index = i;
      break;
    }
  }
console.log('Animal:',animal);

animals.splice(index, 1);
client.pets.push(animal);
console.log('After adoption:',client);
console.log('Animals array:',animals);

option = prompt('(b)ob, (s)am, (j)ill or (q)uit: ');

}
}

console.log('goats:',goats);
console.log('dogs:',dogs);
console.log('lemurs:',lemurs);
console.log('cats:',cats);
console.log('mice:',mice);
