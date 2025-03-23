/*
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    Weight: '52kg'
};

// Using document.write to display person details
document.write("First Name: " + person.firstName + "<br>");
document.write("Last Name: " + person.lastName + "<br>");
document.write("Age: " + person.age + "<br>");
document.write("Eye Color: " + person.eyeColor + "<br>");





const car = {
    maker: "Toyota",
    model: "Corolla",
    start() {
        console.log("Car started");
    }
};

*/



function Person(Name, Surname, age, weight, Height) {
    this.firstName = Name;
    this.lastName = Surname;
    this.age = age;
    this.weight = weight;
    this.Height = Height;
    this.greet = function() {

    };
    this.toString = function() {
        return "Name: " + this.firstName + " " + this.lastName + 
               ", Age: " + this.age + 
               ", Weight: " + this.weight + 
               ", Height: " + this.Height + "<br>";
    };
}

const Alice = new Person("Alice", "Smith", 25, "52.6kg", "6.2inches");
const Bob = new Person("Bob", "Johnson", 30, "73kg", "5.2inches");
const John = new Person("John", "Robby", 17, "39kg", "5.9inches");

// Output details of person1
document.write(person1.toString());

