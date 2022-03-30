
const submit   = document.querySelector('#age_check');

const namee     = document.querySelector('#namee');

const age      = document.querySelector('#age');

const outputt   = document.querySelector('#output');



submit.addEventListener( 'click', () => {

outputt.innerHTML = ageCal(namee.value, age.value);

name.value = '';
age.value  = '';

 

});



const  sinUp   = document.querySelector('#signup_from');
const  name    = document.querySelector('#name');
const  email   = document.querySelector('#email');
const  uname   = document.querySelector('#user_name');
const output   = document.querySelector('.output');


sinUp.onsubmit = (e) => {   

e.preventDefault();

name.style.border  = (name.value == '') ? '1px solid red' : '1px solid black';

email.style.border =(email.value == '') ? '1px solid red' : '1px solid black';
uname.style.border =(uname.value == '') ? '1px solid red' : '1px solid black';

if (name.value == '' || email.value == '' || uname == '') {
    
    output.innerHTML = `
    <p class = "alert alert-danger" >All Fields are Required</p>
    `

} else {
    output.innerHTML = `
    <p class = "alert alert-success">Data Stable</p>
    `;   
}

};

