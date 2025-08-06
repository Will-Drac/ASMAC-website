// "lang" should already be declared in calendarCreation.js, which runs before this

const infoDiv = document.getElementById("infoBoxesDiv")
for (let i = 0; i < infoBoxes.length; i++) {
    const content = infoBoxes[i]

    const box = document.createElement("div")
    box.style = `
    margin: 10px;
    border: 4px solid var(--dark);
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    background-color: var(--gray);

    flex: 1 1 300px;
    `
    infoDiv.append(box)

    const titleElm = document.createElement("h1")
    titleElm.innerText = content["title_" + lang]
    box.append(titleElm)

    if (content.image !== undefined) {
        const imageElm = document.createElement("img")
        imageElm.src = content.image
        imageElm.width = 200
        imageElm.style = "margin:auto;"
        box.append(imageElm)
    }

    const textElm = document.createElement("p")
    textElm.innerText = content[lang]
    box.append(textElm)

    for (let i = 0; i < content.buttons.length; i++) {
        const buttonElm = document.createElement("span")
        buttonElm.innerText = content.buttons[i][lang]
        buttonElm.classList.add("infoBoxButton")
        buttonElm.addEventListener("click", function () {
            window.location.href = content.buttons[i].link
        })
        box.append(buttonElm)
    }
}