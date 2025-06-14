var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")

}

var sidemenu = document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

function sendMail(event) {
    event.preventDefault(); // stop page reload

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_m7z09uf", "template_d7hl8p9", parms)
        .then(function(response) {
            alert("Email sent successfully!");
            console.log("SUCCESS", response);

            // Optional: clear form
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(function(error) {
            alert("Failed to send email.");
            console.log("FAILED", error);
        });
}
