var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

console.log(tablinks)

function opentab(tabname){
    console.log(tabname);
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-250px";
}


// Deployment ID
// AKfycbx1oF_Ro8jjxgjWFnYqnuFXhwRUxx6FmbnG8JrefCk38CEMbMVAfiEMyC1qk0-1BKez

// Web App Url
// https://script.google.com/macros/s/AKfycbx1oF_Ro8jjxgjWFnYqnuFXhwRUxx6FmbnG8JrefCk38CEMbMVAfiEMyC1qk0-1BKez/exec

// See how to use google sheets to send the data
// https://github.com/jamiewilson/form-to-google-sheets

const scriptURL = "https://script.google.com/macros/s/AKfycbx1oF_Ro8jjxgjWFnYqnuFXhwRUxx6FmbnG8JrefCk38CEMbMVAfiEMyC1qk0-1BKez/exec"
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then((response) => {
        alert("Succesfuly submitted the form");
        document.getElementById('submit-to-google-sheet').reset();
        console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message))
})