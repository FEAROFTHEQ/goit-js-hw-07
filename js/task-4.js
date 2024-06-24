const form = document.querySelector(".login-form");

const submitEvent= (event)=>{
    event.preventDefault();
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email.trim() !== "" && password.trim() !== "") {
        const inputNamePassword = form.elements.password.name;
        const inputNameEmail = form.elements.email.name;
        console.log({[inputNameEmail] : email.trim(), [inputNamePassword] : password.trim()});
    }

    else{window.alert("All form fields must be filled in");}

    form.reset();
};

form.addEventListener("submit", submitEvent);
