class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/ `

        <div id="navbar">
            <img style="height:75px; padding: 10px; border-radius: 25px" src="../ASMAC Logo.png">
            <div id="navbarLinks">
                <a href="./calendar.html" class="navbarElm en">Calendar & News</a>
                <a href="./calendrier.html" class="navbarElm fr">Calendrier & Actualités</a>

                <div id="membershipDropDownTrigger" class="dropDown navbarElm" onclick="toggleDropDown('membership')">
                    <span class="en">Membership</span>
                    <span class="fr">Adhésion</span>
                    <div id="membershipDropDownHolder" class="dropDownHolder">
                        <a href="./members.html" class="dropDownContent en">Members List</a>
                        <a href="./members.html" class="dropDownContent fr">Liste de membres</a>

                        <a href="./executive-comittee.html" class="dropDownContent en">Executive Committee</a>
                        <a href="./executive-comittee.html" class="dropDownContent fr">Commitée exécutif</a>
                    </div>
                </div>

                <div id="bursariesDropDownTrigger" class="dropDown navbarElm" onclick="toggleDropDown('bursaries')">
                    <span class="en">Bursaries</span>
                    <span class="fr">Bourses</span>
                    <div id="bursariesDropDownHolder" class="dropDownHolder">
                        <a href="./members.html" class="dropDownContent en">Members List</a>
                        <a href="./members.html" class="dropDownContent fr">Liste de membres</a>

                        <a href="./executive-comittee.html" class="dropDownContent en">Executive Committee</a>
                        <a href="./executive-comittee.html" class="dropDownContent fr">Commitée exécutif</a>
                    </div>
                </div>

                <div id="aboutUsDropDownTrigger" class="dropDown navbarElm" onclick="toggleDropDown('aboutUs')">
                    <span class="en">About Us</span>
                    <span class="fr">À propos de nous</span>
                    <div id="aboutUsDropDownHolder" class="dropDownHolder">
                        <a href="./members.html" class="dropDownContent en">Members List</a>
                        <a href="./members.html" class="dropDownContent fr">Liste de membres</a>

                        <a href="./executive-comittee.html" class="dropDownContent en">Executive Committee</a>
                        <a href="./executive-comittee.html" class="dropDownContent fr">Commitée exécutif</a>
                    </div>
                </div>

                <div id="loginDropDownTrigger" class="dropDown navbarElm" onclick="toggleDropDown('login')">
                    <span class="en">Login</span>
                    <span class="fr">Connexion</span>
                    <div id="loginDropDownHolder" class="dropDownHolder">
                        <a href="./member-login.html" class="dropDownContent en">Member Login</a>
                        <a href="./member-login.html" class="dropDownContent fr">Connexion membre</a>

                        <a href="./executive-login.html" class="dropDownContent en">Executive Login</a>
                        <a href="./executive-login.html" class="dropDownContent fr">Connexion exécutif</a>
                    </div>
                </div>

                <a href="../fr/calendrier.html" id="languageSwap" class="navbarElm">Français</a>
            </div>
        </div>

        `
    }
}

customElements.define("nav-cust", Navbar)


let dropDowns = {
    membership: false,
    bursaries: false,
    aboutUs: false,
    login: false
}

function toggleDropDown(name) {
    if (dropDowns[name] == false) {
        document.getElementById(name + "DropDownTrigger").style = "background-color: var(--colour);"
        document.getElementById(name + "DropDownHolder").style = "display: block"
    }
    else {
        document.getElementById(name + "DropDownTrigger").style = ""
        document.getElementById(name + "DropDownHolder").style = "display: none"
    }

    dropDowns[name] = !dropDowns[name]

    // closing all the other ones
    let dropDownKeys = Object.keys(dropDowns)
    for (let i = 0; i < dropDownKeys.length; i++) {
        if (dropDownKeys[i] !== name) {
            document.getElementById(dropDownKeys[i] + "DropDownTrigger").style = ""
            document.getElementById(dropDownKeys[i] + "DropDownHolder").style = "display: none"
            dropDowns[dropDownKeys[i]] = false
        }
    }
}