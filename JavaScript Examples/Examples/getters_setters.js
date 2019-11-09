console.log('********** Getter *************');
// getter, the code executed on getting obj.propName
let user = {
    name: 'Venky',
    surName: 'Jeglee',
    
    get fullName(){
        return `${this.name} ${this.surName}`;
 }
};
 console.log(user.fullName);
 
console.log('*************** Setter *****************');
let user1 = {
    firstName: 'Chandu',
    lastName: 'Jeglee',

    get fullName1(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName1(value){
        [this.firstName, this.lastName] = value.split(' ');
    }
};
user1.fullName1 = 'Naresh Jeglee';
console.log('Display FullName : ' + user1.fullName1);
console.log('Display firstName : ' + user1.firstName);
console.log('Display firstName : ' + user1.lastName);

console.log('************* Accessor descriptors *****************');
let user2 = {
    fname: 'Vasu',
    lname: 'Jeglee'
};
   Object.defineProperty(user2, 'fullName2', {
            get(){
                return `${this.fname} ${this.lname}`
            },
            set (value){
                [this.fname, this.lname] = value.split(' ');
            }
    });
console.log(user2.fullName2);
for(let key in user2){
    console.log(key);
 }

 console.log('*************** Smarter getters/setters ****************');
 let user3 = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };
  
  user3.name = "Ramu";
  console.log(user3.name);// Ramu
  
  user3.name = ""; // Name is too short...