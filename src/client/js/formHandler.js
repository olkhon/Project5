import {
    checkUrl
} from './urlChecker.js'

// sample function for tests
function sum(a, b) {
    return a + b;
}

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById("name").value
    const userInput = document.getElementById("results")
    const errMsgUrl = document.getElementById("errMsgUrl")

    // if response from urlChecker was negative give user response in results field
    if (checkUrl(formText) === false) {
        errMsgUrl.textContent = "Please provide a valid URL!";
        return;
    }

    const dataInput = {
        url: formText
    }

    const res = await postData("http://localhost:3000/sentiment", dataInput);
    userInput.textContent = `Textpolarity is ${res.msg1} and Textpolarity-Confidence is  ${res.msg2}`;

}

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}


export { handleSubmit, sum }