// alert('ciao')
let age = parseInt(prompt('your age'));
let km = parseInt(prompt('how many km you want to travel'));
const priceOnKm = 0.21;
let price = priceOnKm * (km);
let discount; 

if (age < 18){
    
    a = price * 20;
    b = a / 100;
    discount = price - b;
}
else if  (age > 64){
    
    a = price * 40;
    b = a / 100;
    discount = price - b;
}

else {
    discount = price;
}

document.getElementById('ticket').innerHTML = 'price' +  Math.floor( discount );

