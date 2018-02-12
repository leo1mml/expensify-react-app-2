//Object destructuring

// const person = {
//     name: 'Andrew',
//     age: '26',
//     location: {
//         city: 'Philadelphia',
//         temp: 88
//     }
// }

// const {name = 'Anonymous', age} = person

// console.log(`${name} is ${age} years old `);

// const {city, temp: temperature} = person.location

// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName);

//Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensilvania', '19147']

const [street, city, state, zip] = address

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (Hot)', '$2.00', '2.50', '2.75']

const [itemName, , mediumSizePrice] = item

console.log(`A medium ${itemName} is ${mediumSizePrice}`);