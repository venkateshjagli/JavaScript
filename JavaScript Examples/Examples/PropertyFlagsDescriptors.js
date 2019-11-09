console.log('************ Property Flag ***************');
let user = {
    name: ' Venky'
};
// The method Object.getOwnPropertyDescriptor allows to query the full information about a property.
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor));


// To change the flags, we can use Object.defineProperty.
// Object.defineProperty(obj, propertyName, descriptor)

let user1 = {};
Object.defineProperty(user1, 'name', {
    value: 'Jeglee'
});
let descriptor1 = Object.getOwnPropertyDescriptor(user1, 'name')
console.log(JSON.stringify(descriptor1));
