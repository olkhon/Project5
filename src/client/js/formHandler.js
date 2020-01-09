async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById("name").value
    const userInput = document.getElementById("results")



    const dataInput = {
        url: formText
    }

    const res = await postData("/sentiment", dataInput);
    userInput.textContent = `Textpolarity is ${res.msg1} and Textpolarityconfidence is  ${res.msg2}`;

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


export { handleSubmit }