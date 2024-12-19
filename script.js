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

const country = document.getElementById('country');
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
    const isSportChacked = []
    if(sports.length > 0){
      
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
    const isInputEntered = []
    if(gender.length > 0 ){
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

    if (!country.value) {
        span_Country.style.display = "block";
        // country.style.borderColor = "red" 
      } else {
        span_Country.style.display = "none";
        country.style.borderColor = "#6c757d";
      }


      // Validation

    if (
        Name.value &&
        email.value &&
        address.value &&
        country.value &&
        pass.value &&
        pass.value.length > 4 &&
        pass.value.length < 12 &&
        isSportChacked.length !=0 &&
        isInputEntered.length !=0
      ){
        const formData = {
            name: Name.value,
            email: email.value,
            password: pass.value,
            address: address.value,
            sport: isSportChacked,
            gender: isInputEntered,
            country: country.value,
        };
        handleTableData(formData);
        Reset();
      }
}

function handleTableData(formData){
        const tr = document.createElement('tr');
        // console.log(tr);
        const nameTd = document.createElement('td');
        const emailTd = document.createElement('td');
        const passTd = document.createElement('td');
        const addressTd = document.createElement('td');
        const sportsTd = document.createElement('td');
        const genderTd = document.createElement('td');
        const countryTd = document.createElement('td');

        nameTd.innerHTML = formData.name;
        emailTd.innerHTML = formData.email;
        passTd.innerHTML = formData.password;
        addressTd.innerHTML = formData.address;
        sportsTd.innerHTML = formData.sport;
        genderTd.innerHTML = formData.gender;
        countryTd.innerHTML = formData.country;

        tr.append(
            nameTd,
            emailTd,
            passTd,
            addressTd,
            sportsTd,
            genderTd,
            countryTd
        );
            console.log(tr);
            tableBody.appendChild(tr);
}

function Reset(){
    Name.value = '';
    email.value = '';
    address.value = '';
    sports.value = '';
    gender.value = '';
    country.value = '';
}