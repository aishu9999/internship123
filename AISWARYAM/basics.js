let tempt = 45
if (tempt < 20)
{
    console.log("cold day")
}
else if (tempt>=20 && tempt<=30)
{
    console.log("Normal day")
}
else 
{
    console.log("Hot day")
}
console.log(tempt)

let veg = ['tomato', 'cucumber', 'onion']
console.log(veg)
veg.push('chilly')
console.log(veg) 
veg.pop(veg[1])
console.log(veg) 


//Nested Objects:
// Array of three people
let people = [
    {
        name: 'Alice',
        age: 25,
        place: {
            city: 'Wonderland',
            country: 'Fairyland'
        }
    },
    {
        name: 'Bob',
        age: 30,
        place: {
            city: 'TechCity',
            country: 'Geekland'
        }
    },
    {
        name: 'Charlie',
        age: 28,
        place: {
            city: 'Artsville',
            country: 'Createland'
        }
    }
    

];

console.log(people[0])
console.log(people[1].name)
console.log(people[0].age = 31)
console.log(people[1].place.city)
