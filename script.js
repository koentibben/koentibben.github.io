const btn = document.querySelector('#btn');

btn.addEventListener("click", verstuurContactFormulier);

function verstuurContactFormulier() {
    let naamVerzender = document.querySelector("#naamVerzender").value;
    let emailVerzender = document.querySelector("#emailVerzender").value;
    let berichtVerzender = document.querySelector("#berichtVerzender").value;

    console.log(naamVerzender, emailVerzender, berichtVerzender);

    let green = '#339966';
    let red = "#ff6666";
    let naamErrorMessage = "Je naam moet zowel een voornaam als achternaam bevatten en minstens 5 karakters bevatten";
    let emailErrorMessage = "Je emailadres is niet valide";
    let berichtLengthErrorMessage = "Je bericht moet minstens 10 karakters bevatten";

    function hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    let naamHasWhiteSpace = hasWhiteSpace(naamVerzender);
    let validEmail = validateEmail(emailVerzender);

    // check naam
    if (naamHasWhiteSpace === false) {
        document.getElementById("naamVerzender").style.backgroundColor = red;
        document.getElementById("naamVerzender").innerText = naamErrorMessage;
        console.log(naamVerzender + ' bevat geen spatie en dus geen achternaam');
    } else if (naamVerzender.length <= 4) {
        document.getElementById("naamVerzender").style.backgroundColor = red;
        document.getElementById("naamVerzender").innerText = naamLengthErrorMessage;
        console.log(naamVerzender + ' bevat minder dan 5 karakters en dus geen achternaam');
    } else if (naamVerzender === "Je naam moet zowel een voornaam als achternaam bevatten en minstens 5 karakters bevatten") {
        document.getElementById("naamVerzender").style.backgroundColor = red;
        document.getElementById("naamVerzender").innerText = naamLengthErrorMessage;
    } else {
        document.getElementById("naamVerzender").style.backgroundColor = green;
    }

    // check email
    if (validEmail === true) {
        document.getElementById("emailVerzender").style.backgroundColor = green;
    } else {
        document.getElementById("emailVerzender").style.backgroundColor = red;
        document.getElementById("emailVerzender").innerText = emailErrorMessage;
        console.log(emailVerzender + ' is geen valide emailadres');
    }

    // check bericht
    if (berichtVerzender.length <= 9) {
        document.getElementById("berichtVerzender").style.backgroundColor = red;
        document.getElementById("berichtVerzender").innerText = berichtLengthErrorMessage;
        console.log(berichtVerzender + ' bevat minder dan 9 karakters en kan dus geen inhoudelijke boodschap bevatten');
    } else if (berichtVerzender === "Je bericht moet minstens 10 karakters bevatten") {
        document.getElementById("berichtVerzender").style.backgroundColor = red;
        document.getElementById("berichtVerzender").innerText = berichtLengthErrorMessage;
    } else {
        document.getElementById("berichtVerzender").style.backgroundColor = green;
    }

    let successHeader = document.querySelector("h4");

    function changeSuccessHeaderText(string) {
        successHeader.innerHTML = string;
    }

    if (naamHasWhiteSpace === true && naamVerzender.length >= 5 && validEmail === true && berichtVerzender.length >= 10) {
        changeSuccessHeaderText("Bedankt voor je bericht! Ik kom er zo snel mogelijk bij je op terug. Wie weet kunnen we iets voor elkaar betekenen. Een bakkie koffie kan nooit kwaad! :-)");
    }
}

