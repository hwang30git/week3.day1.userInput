titleInput = document.getElementById("title_input");
mainTitle = document.getElementById("main_title");

submitButton = document.getElementById("submit_button");

titleInput.onkeyup = function(){
    mainTitle = titleInput
}

inputs = document.getElementsByTagName("input");

function submit (event) {
    console.log(event);

    event.preventDefault();

    for (let input of inputs) {
        if (input.value == "") {
            alert("Please fill in all fields");
            break;
        }
    }

    let noun = document.getElementById("noun").value;
    let verb = document.getElementById("verb").value;
    let adjective = document.getElementById("adjective").value;
    let adlib = "Last night I ate a " + noun + ", and today I just had to "+ verb + ". What a "+ adjective + " day!";

    console.log(adlib);
    let formContainer = document.getElementsByClassName("form_container")[0];
    formContainer.style.display = "none";

    let storyResult = document.getElementById("story_result");
    storyResult.innerHTML = adlib;
}

submitButton.onclick = submit;