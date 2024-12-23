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

const gender = document.querySelectorAll('input[name="gender"]');
const span_gender = document.getElementById('span_gender');

const country = document.getElementById('country');
const span_Country = document.getElementById('span_Country');

// const noDataFound = document.getElementById('noDataFound');


const editImage = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4_383" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
<rect width="18" height="18" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4_383)">
<path d="M2.625 18C2.31825 18 2.05406 17.8904 1.83244 17.6711C1.61081 17.4519 1.5 17.1865 1.5 16.875C1.5 16.5682 1.61081 16.304 1.83244 16.0824C2.05406 15.8608 2.31825 15.75 2.625 15.75H15.375C15.6818 15.75 15.9459 15.8596 16.1676 16.0789C16.3892 16.2981 16.5 16.5635 16.5 16.875C16.5 17.1817 16.3892 17.4459 16.1676 17.6675C15.9459 17.8892 15.6818 18 15.375 18H2.625ZM4.5 12.3101H5.42737L11.6524 6.09654L11.1808 5.61785L10.7136 5.15773L4.5 11.3827V12.3101ZM3.375 12.7571V11.1866C3.375 11.0962 3.39012 11.0102 3.42037 10.9284C3.45075 10.8467 3.501 10.7707 3.57113 10.7004L11.7823 2.50817C11.8909 2.39954 12.0142 2.31735 12.1523 2.2616C12.2901 2.20585 12.4326 2.17798 12.5798 2.17798C12.7317 2.17798 12.8763 2.20585 13.0133 2.2616C13.1502 2.31735 13.2769 2.40342 13.3933 2.51979L14.2946 3.43273C14.411 3.54135 14.4951 3.66535 14.547 3.80473C14.599 3.94423 14.625 4.08992 14.625 4.24179C14.625 4.38129 14.599 4.51998 14.547 4.65785C14.4951 4.79585 14.411 4.92304 14.2946 5.03942L6.10238 13.2317C6.03212 13.3019 5.95619 13.3534 5.87456 13.386C5.79281 13.4187 5.70675 13.4351 5.61637 13.4351H4.053C3.85963 13.4351 3.69831 13.3704 3.56906 13.241C3.43969 13.1118 3.375 12.9505 3.375 12.7571ZM11.6524 6.09654L11.1808 5.61785L10.7136 5.15773L11.6524 6.09654Z" fill="#636363"/>
</g>
</svg>`;

const deleteImage = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4_497" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="15">
<rect width="15" height="15" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4_497)">
<path d="M4.375 13.125C4.03125 13.125 3.73698 13.0026 3.49219 12.7578C3.2474 12.513 3.125 12.2188 3.125 11.875V3.75H2.5V2.5H5.625V1.875H9.375V2.5H12.5V3.75H11.875V11.875C11.875 12.2188 11.7526 12.513 11.5078 12.7578C11.263 13.0026 10.9688 13.125 10.625 13.125H4.375ZM10.625 3.75H4.375V11.875H10.625V3.75ZM5.625 10.625H6.875V5H5.625V10.625ZM8.125 10.625H9.375V5H8.125V10.625Z" fill="#636363"/>
</g>
</svg>`;

var count = 0;

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
                isSportChacked.push(ischacked.value);
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
    const isInputEntered = [];
    if(gender.length > 0 ){
        for (let i = 0; i < gender.length; i++){
            const isEntered = gender[i]

            if (isEntered.checked){
                isInputEntered.push(isEntered.value);
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

        count ++;

        handleTableData(formData);
        Reset();
      }
}

function handleTableData(formData){
        const tr = document.createElement('tr');
        // console.log(tr);

        let id = "list_" + count;
        tr.id = id

        const nameTd = document.createElement('td');
        const emailTd = document.createElement('td');
        const passTd = document.createElement('td');
        const addressTd = document.createElement('td');
        const sportsTd = document.createElement('td');
        const genderTd = document.createElement('td');
        const countryTd = document.createElement('td');

        const editTd = document.createElement('td');
        const deleteTd = document.createElement('td');

        editTd.addEventListener("click",() => {
            editData(id);
        });

        deleteTd.addEventListener("click", () => {
            deleteData(id);
        })

        nameTd.innerHTML = formData.name;
        emailTd.innerHTML = formData.email;
        passTd.innerHTML = formData.password;
        addressTd.innerHTML = formData.address;
        sportsTd.innerHTML = formData.sport;
        genderTd.innerHTML = formData.gender;
        countryTd.innerHTML = formData.country;

        editTd.innerHTML = editImage;
        deleteTd.innerHTML = deleteImage;

        tr.append(
            nameTd,
            emailTd,
            passTd,
            addressTd,
            sportsTd,
            genderTd,
            countryTd,
            editTd,
            deleteTd
        );
            console.log(tr);
            tableBody.appendChild(tr);
}

function Reset(){
    Name.value = '';
    email.value = '';
    pass.value = '';
    address.value = '';
    country.value = '';

    if (sports.length > 0){
        for (let i = 0; i < sports.length; i++) {
            sports[i].checked = false;
        }
    }

    if (gender.length > 0){
        for (let i = 0; i < gender.length; i++) {
            gender[i].checked = false;
        }
    }

}

function editData(id) {
    console.log(id);
}

function deleteData(id){
    const data = document.getElementById(id);

    data.remove();

}

if(tableBody.children.length == 0){
    noDataFound.style.display = "block";
}