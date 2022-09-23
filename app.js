const Input = document.querySelector("#inpot");
const Output = document.querySelector("#output");
const Button = document.querySelector("#btn");
const Box1 = document.querySelector("#box1")

let serverURL = "https://api.funtranslations.com/translate/dolan.json"

const setserverURL = (text) => {
    return serverURL + "?" + "text=" + text
}

const errorHandle = (error) => {
    Output.innerHTML = "Error, see ya beck L8r"
    console.log("Error ho gaya", error);
}

const  getserverURL = () => {
    Box1.innerHTML = `<img src="dolan-triggered.gif" alt="dulon" width="600px">` 
    let translation = Input.value;

    fetch(setserverURL(translation))
    .then(res => res.json())
    .then(json => {

        let translatedText = json.contents.translated;

        Output.innerHTML = translatedText;

    })
    .catch(errorHandle)
}

Button.addEventListener("click", getserverURL)