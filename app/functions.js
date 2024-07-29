//Alert function

const setAlert = (msg, type = 'danger') => {
 return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss="alert" class= "btn-close"></button></p>`;
}

//check value is number or not
const numberCheck = (num) => {
    let agepattern = /^[0-9]{1,3}$/;
    return agepattern.test (num);
}

// Marrage age calculator
const marriageAgeCheck = (name, age, gender) => {

    if(gender == 'Male'){

        let marriage_age = 21;
        if(age >= marriage_age){
            return setAlert(`Hi ${name} vaiya, Your age is okay for marrage`,'success');
        }else{
            return setAlert(`Hi ${name} vaiya, Your age is not okay for marrage, You hsve to wait ${marriage_age - age} year`);
        }
        
    }else{
        let marriage_age = 18;
        if(age >= marriage_age){
            return setAlert(`Hi ${name} apu, Your age is okay for marrage`,'success');
        }else{
            return setAlert(`Hi ${name} apu, Your age is not okay for marrage, you have to wait ${marriage_age - age} year`);
        }
    }
}