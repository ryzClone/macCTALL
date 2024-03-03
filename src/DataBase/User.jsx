import Img from '../photo/png/layout/armatura-img.png';

export let Users = [];

if(JSON.parse(localStorage.getItem('myUsers'))){
    Users = JSON.parse(localStorage.getItem('myUsers'))
}else{
    Users = [
        {id:1 , active:true , Name:"Арматура" , Price:14 , Quantity:1, Img:Img},
        {id:2 , active:true , Name:"Труба" , Price:20 , Quantity:1, Img:Img},
    ];
}