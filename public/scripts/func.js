//LOGIN
document.getElementById('loginForms').addEventListener('submit', checkCredentials)

function checkCredentials(event) {
    event.preventDefault(); 

    const email = document.getElementById('loginMail').value; 
    const password = document.getElementById('loginPass').value;
    const feedback = document.getElementById('feedback');

    feedback.textContent = ''; 

    const existingData = JSON.parse(localStorage.getItem('cacheCad')) || [];
    console.log("Existing Data:", existingData); 

    const emailExists = existingData.some(e => e.mail === email); 

    const matches = existingData.some(e => {
        if (e.mail === email && e.password === password) {
            document.getElementById('loginForms').reset();
            login(); 
            return true; 
        }
        return false; 
    });
    
    if (!emailExists) {
        feedback.textContent = "Invalid Email.";
    } else if (!matches) {
        feedback.textContent = "Invalid password or Email.";
    }
}



function login(){
    console.log("Redirecting to userPage.html");
    window.location.href = "/userPage.html"; 
}


document.getElementById('registrationForm').addEventListener('submit', confirmPass);

function confirmPass(event) {
    event.preventDefault(); 
    const pass = document.getElementById('regPass').value;
    const confpass = document.getElementById('confPass').value;
    const email = document.getElementById('regMail').value;
    const feedback = document.getElementById('feedback1');

    feedback.textContent = '';

    if (!email) {
        feedback.textContent = "Email must not be empty!";
    } else if (!pass || !confpass) {
        feedback.textContent = "Passwords must not be empty!";
    } else if (pass !== confpass) {
        feedback.textContent = "Passwords do not match!";
    } else {    
        submit(pass, email);
    }
}

document.getElementById('admMode2').addEventListener('click', () => {
    console.log("Redirecting to admPage.html");
    window.location.href = "/admPage.html";
});

document.getElementById('admMode').addEventListener('click', () => {
    console.log("Redirecting to admPage.html");
    window.location.href = "/admPage.html";
});

function submit(pass, email) {
    let data = {
        mail: email,
        password: pass
    };

    const existingData = JSON.parse(localStorage.getItem('cacheCad')) || [];
    const emailExists = existingData.some(e => e.mail === data.mail);

    if (emailExists) {
        document.getElementById('feedback1').textContent = "This email is already in our database.";
    } else {
        existingData.push(data);
        localStorage.setItem('cacheCad', JSON.stringify(existingData));    
        console.log(existingData);
        
        document.getElementById('registrationForm').reset();

        console.log("Redirecting to userPage.html");
        window.location.href = "/userPage.html"; 
    }
}
