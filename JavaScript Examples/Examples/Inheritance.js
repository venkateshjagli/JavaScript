'use scrict'
// The methods are all defined on the constructor's prototype.
function person(first, last, age, gender, interests ) {
    this.name = {
        first,
        last
    }
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}
person.job = false;
console.log(person);
