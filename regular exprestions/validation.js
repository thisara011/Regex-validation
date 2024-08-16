function validateForm() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var profilePicture = document.getElementById("profilePicture").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var dob = document.getElementById("dob").value;

    // Regular expressions for validation
    var nameRegex = /^[A-Za-z'-]+(?:\s[A-Za-z'-]+)*$/;
    var usernameRegex = /^[a-z0-9][a-z0-9_]{4,19}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mobileRegex = /^\d{10}$/;
    var allowedExtensions = /\.(jpg|jpeg|png|gif)$/i;
    var passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@#$!%?&])[A-Za-z\d@#$!%?&]{8,}$/;

    // Error messages placeholders
    var nameError = document.getElementById("nameError");
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var profilePictureError = document.getElementById("profilePictureError");
    var passwordError = document.getElementById("passwordError");
    var genderError = document.getElementById("genderError");
    var mobileNumberError = document.getElementById("mobileNumberError");
    var dobError = document.getElementById("dobError");

    // Flag to track form validity
    var isValid = true;

    // Validation logic for each field
    if (name.trim() === "" || !nameRegex.test(name)) {
        nameError.textContent = "Name must contain capital and simple letters. Spaces allowed";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

if (username.trim() === "" || !usernameRegex.test(username)) {
    usernameError.textContent = "Username must contain simple letters and numbers. Only _ can use as special character";
    isValid = false;
} else {
    usernameError.textContent = "";
}

if (email.trim() === "" || !emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
} else {
    emailError.textContent = "";
}

if (profilePicture.trim() === "") {
    profilePictureError.textContent = "Please upload a profile picture";
    isValid = false;
} else {
    if (!allowedExtensions.test(profilePicture)) {
        profilePictureError.textContent = "Please select a valid profile picture (jpg, jpeg, png, gif)";
        isValid = false;
    } else {
        profilePictureError.textContent = "";
    }
}

if (!passwordRegex.test(password)) {
    passwordError.textContent = "Password does not meet requirements.";
    isValid = false;
} else {
    passwordError.textContent = "";
}

if (gender.trim() === "") {
    genderError.textContent = "Please select a gender";
    isValid = false;
} else {
    genderError.textContent = "";
}

if (mobileNumber.trim() === "" || !mobileRegex.test(mobileNumber)) {
    mobileNumberError.textContent = "Please enter a valid mobile number (10 digits)";
    isValid = false;
} else {
    mobileNumberError.textContent = "";
}
if(dob.trim() === "") {
    dobError.textContent = "Date of birth is required";
    isValid = false;
}
else {
    dobError.textContent = "";
}
return isValid;
}