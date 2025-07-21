let language = "fr"

toggleLanguage()

function toggleLanguage() {
    const english = document.querySelectorAll(`[lang="en"]`)
    const french = document.querySelectorAll(`[lang="fr"]`)

    for (let i = 0; i < english.length; i++) {
        if(language == "en" ) {
            english[i].classList.add("hide")
        }
        else {
            english[i].classList.remove("hide")
        }
    }

    for (let i = 0; i < french.length; i++) {
        if(language == "fr" ) {
            french[i].classList.add("hide")
        }
        else {
            french[i].classList.remove("hide")
        }
    }

    language = language=="en" ? "fr" : "en"
}