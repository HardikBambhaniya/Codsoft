const display = document.querySelector('input');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const back = document.querySelector('.back');


//select all numbers and display them on the screen
 document.querySelectorAll('.number').forEach(number => {
    
number.addEventListener('click' , function(){
    
    display.value += this.innerText;
    display.scrollLeft = display.scrollWidth; //scroll left when display is full

})
});



//select all operatores and display them on the scrren
document.querySelectorAll('.operators').forEach(operators => {
    operators.addEventListener('click' , function(){
        display.value += this.innerText;
    })
});


//perform operation by help of math.js library
equal.addEventListener('click' , function () {
    display.value = math.evaluate(display.value);
})


//clear button
clear.addEventListener('click' , function(){
    display.value = '';
})

//back button
back.addEventListener('click' , function() {
    display.value = display.value.slice(0,-1); 
})

