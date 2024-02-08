export const Items = [
    {Name:"Арматура" , Price:400 , Quantity:1},
    {Name:"Арматура" , Price:250 , Quantity:2},
    {Name:"Арматура" , Price:25.5 , Quantity:3},
];

function  name(Items) {
    Items = Items.slice(1);
    console.log(Items);
    return Items
}
name(Items)
console.log(Items);