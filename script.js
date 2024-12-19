const Name = document.getElementById('Name');
const span_name = document.getElementById('span_name');

const email = document.getElementById('email');
const span_email = document.getElementById('span_email');

const pass = document.getElementById('pass');
const span_pass = document.getElementById('span_pass');

const address = document.getElementById('address');
const span_add = document.getElementById('span_add');

const sports = document.querySelectorAll('input[name="sports"]');
const span_sport = document.getElementById('span_sport');

var gender = document.querySelectorAll('input[name="gender"]');
const span_gender = document.getElementById('span_gender');

const country = document.querySelectorAll('input[name="country"]');
const span_Country = document.getElementById('span_Country');


function Save(){

    // Name Span

    if(!Name.value){
        span_name.style.display = 'block';  
        Name.style.borderColor = "red"
    }
    else{
        span_name.style.display = 'none';
        Name.style.borderColor = "#6c757d";
    }

    // Email Span

    if(!email.value){
        span_email.style.display = 'block';
        email.style.borderColor = "red" 
    }
    else{
        span_email.style.display = 'none';
        email.style.borderColor = "#6c757d";
    }

    //Pass Span

    if(!pass.value){
        span_pass.style.display = 'block'; 
        pass.style.borderColor = "red" 
    }
    else if(pass.value.length < 4 || pass.value.length > 12){
        span_pass.style.display = 'block';
        pass.style.borderColor = "red" 
    }
    else{
        span_pass.style.display = 'none';
        pass.style.borderColor = "#6c757d";
    }

    //Address Span

    if(!address.value){
        span_add.style.display = 'block';  
        address.style.borderColor = "red" 
    }
    else{
        span_add.style.display = 'none';
        address.style.borderColor = "#6c757d";
    }

    // Sports Span

    if(sports.length > 0){
        const isSportChacked = []
        for (let i = 0; i < sports.length; i++) {
            // console.log(sports[i]);
            const ischacked = sports[i]

            if (ischacked.checked){
                // console.log(ischacked);
                isSportChacked.push(true);
            }

        }

        console.log(isSportChacked);

        if(isSportChacked.length == 0){
            span_sport.style.display = "block";
        }
        else{
            span_sport.style.display = "none";
        }

    }

    // Gender Span

    if(gender.length > 0 ){
        const isInputEntered = []
        for (let i = 0; i < gender.length; i++){
            const isEntered = gender[i]

            if (isEntered.checked){
                isInputEntered.push(true);
            }
        }

        console.log(isInputEntered);

        if(isInputEntered.length == 0){
            span_gender.style.display = "block";
        }

        else{
            span_gender.style.display = "none";
        }

    }


    // Country Span

    // if (!country.value) {
    //     span_Country.style.display = "block";
    //     // country.style.borderColor = "red" 
    //   } else {
    //     span_Country.style.display = "none";
    //     country.style.borderColor = "#6c757d";
    //   }


    if (
        Name.value &&
        email.value &&
        pass.value &&
        address.value &&
        // country.value &&
        isSportChacked.length != 0 &&
        isInputEntered.length != 0
      ){
        alert("Done");
        console.log("done");
      }



}

function Reset(){
    Name.value = '';
    email.value = '';
    address.value = '';
    sports.value = '';
    gender.value = '';
    country.value = '';
}