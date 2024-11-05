$("#nav").load("nav.html")
$("#footer").load("footer.html");

var owl = $('#carousel');
owl.owlCarousel({
    items: 2,

    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false
});


var goToTopBtn = document.getElementById("go-to-top");

function scrolltotop() {
    if (document.documentElement.scrollTop > 500) {
        goToTopBtn.style.display = "block";
    }
    else {
        goToTopBtn.style.display = "none";
    }
}

window.onscroll = function () { scrolltotop() };

$('#sub').click(function () {
    
    var name = document.getElementById("name").value;
    var email = $('#email').val();
    var subject = $('#subject').val();
    var mobile = $('#mobile').val();

    var errorname = document.getElementById("invalid-name");
    if (name.trim() == "") {
        errorname.textContent = "Name is required";
        errorname.style.color = "red";
        errorname.style.display = 'inline-block';
        console.log("no name");
    }
    else {
        errorname.style.display = "none";
        var validname = validateInput(name);
        if (validname == true) {
            console.log(validname);
        }
        else {
            errorname.style.display = 'inline-block';
            errorname.textContent = "Please enter a valid name";
            errorname.style.color = "red";
            console.log("Invalid name");
        }
    }

    if (email.length > 0) {
        var validEmail = validateEmail(email);
        if (validEmail == true) {
            console.log(validEmail);
        }
        else {
            document.getElementById('invalid-mail').style.display = 'inline-block';
        }
    }


    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(mobile);
});

function validateInput(input) {
    return /^[a-zA-Z ]+$/.test(input);
}

function validateEmail(input) {
    return /^[\w\.]+@([\w-]+\.)+[\w-]{2,3}$/.test(input);
}

function validateNumber(input) {
    return /^[0-9]{10}$/.test(input);
}

function submit() {
    var errorname = document.getElementById("invalid-name");
    if (document.getElementById("name").value.trim() == " ") {
        errorname.textContent = "Please enter a valid name";
        errorname.style.color = "red";
    }
    else {
        errorname.display.style = "none";
    }

    var errormail = document.getElementById("invalid-mail");
    if (document.getElementById("email").value == " ") {
        errormail.textContent = "Email Address is required";
        errormail.style.color = "red";
    }
    else {
        errormail.display.style = "none";
    }

    var errorphone = document.getElementById("invalid-mobile");
    if (isNaN(document.getElementById("mobile").value)) {
        errorphone.textContent = "Invalid Mobile number";
        errorphone.style.color = "red";
    }
    else {
        errorphone.display.style = "none";
    }
}