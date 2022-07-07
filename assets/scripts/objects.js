const person = {
    'name' : "abhay",
    'age' : 20,
    'hobbies' : ['sports','cooking'],
    'greet' : () => {console.log(`hello ${person.name}`)}
};



delete person.age; // deletes the property from the object

//person.age = undefined; // sets the property equal to undefined

console.log(person);

console.log(person[0]);