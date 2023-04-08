// Toggle class active

const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik

document.querySelector('#hamburger-menu').onclick = ( ) => {

    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk menhilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


// Kirim pesan

const form = document.querySelector("form"),
statusTxt = form.querySelector(".btn");

form.onsubmit = (e)=>{
    e.preventDefault(); //prevent form submitting
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "message.php", true); //sending post request to message.php file
    xhr.onload = ()=>{ //once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){  //if ajax response status is 200 and ready status is 4 means there is no any error
            let response = xhr.response; //storing ajax response in a response variable
            if(response.indexOf("Email dan pesan harus terisi") != -1 || response.indexOf("Masukkan email yang valid!") || response.indexOf("Maaf, gagal mengirim pesan.")){
                //statusTxt.style.color = "red";  
            }
                else{
                    form.reset();
                }
            //console.log(response);
            statusTxt.innerText = response //buat nampilin tulisan yang diilangin
        }
    }
    let formData = new FormData(form); //creating new FormData object. This object is used to send form data
    xhr.send(formData); //sending form data
}
