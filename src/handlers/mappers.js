
const nums = [1,2,3,4,5]

const squared = nums.map(function(item){
    return item * item
})

console.log(squared)


const names = ['joe', 'bob', 'sue', 'jane']
const capitalized = names.map(function(item){
    return item.toUpperCase()
})

console.log(capitalized)

const dinasors = [ "Pterodactyl", "Velociraptor", "Brachiosaurus"]
const pdinasors = dinasors.map((item) => 
{return `<p>${item}</p>`}
)

console.log(pdinasors)