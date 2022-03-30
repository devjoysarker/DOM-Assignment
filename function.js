
/**
 * Age Calculator
 * @param {*} name 
 * @param {*} age 
 * @returns 
 */
function ageCal(name,age) {

    let data       = new Date();

    let agepilam   = data.getFullYear() - age;

    let agestutus  = checkAgesatus(agepilam);


    return `
      <p class = "alert alert-${agestutus.status}">Hi ${name} , Your are ${agepilam} Years olds and you are ${agestutus.name}.</p>

    `;
    
}

/**
 * age varation
 * @param {*} age 
 * @returns 
 */
function checkAgesatus (age) {

    if (age >0 && age <10) {

        return{
        name   : 'Babu',
        status : 'success' ,
        };
    }
    else if(age >10 && age <18){

        return{
            name   : 'Kishor',
            status : 'info',
            };
    }
    
    else if(age >18 && age <35){

        return{
            name   : 'Jobok',
            status : 'danger', 
            };
    }
    else if(age >35 && age <55){

        return{
            name   : 'Mid age',
            status : 'primary', 
            };
    }
    else if(age >55 && age <155){

        return{
            name   : 'Jin/Bhoot',
            status : 'dark', 
            };
    }
    
}
