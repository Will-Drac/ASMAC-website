
let dropDowns = {
    membership: { open: false, hovering: false },
    bursaries: { open: false, hovering: false },
    aboutUs: { open: false, hovering: false },
    login: { open: false, hovering: false },
}

function openDropDown(name) {
    document.getElementById(name + "DropDownTrigger").style = "background-color: var(--colour);"
    document.getElementById(name + "DropDownHolder").style = "display: block"

    dropDowns[name].open = true

    // closing all the other ones
    let dropDownKeys = Object.keys(dropDowns)
    for (let i = 0; i < dropDownKeys.length; i++) {
        if (dropDownKeys[i] !== name) {
            document.getElementById(dropDownKeys[i] + "DropDownTrigger").style = ""
            document.getElementById(dropDownKeys[i] + "DropDownHolder").style = "display: none"
            dropDowns[dropDownKeys[i]].open = false
        }
    }
}

function closeDropDown(name) {
    document.getElementById(name + "DropDownTrigger").style = ""
    document.getElementById(name + "DropDownHolder").style = "display: none"

    dropDowns[name].open = false
}

// setting up event listeners for all navbar categories
let dropDownKeys = Object.keys(dropDowns)
for (let i = 0; i < dropDownKeys.length; i++) {
    const key = dropDownKeys[i]

    document.getElementById(key + "DropDownTrigger").addEventListener("click", function (e) {
        if (dropDowns[key].open == true && !dropDowns[key].hovering) {
            closeDropDown(key)
        }
        else {
            openDropDown(key)
        }
    })

    document.getElementById(key + "DropDownTrigger").addEventListener("mouseenter", function (e) {
        openDropDown(key)
        dropDowns[key].hovering = true
    })

    document.getElementById(key + "DropDownTrigger").addEventListener("mouseleave", function (e) {
        closeDropDown(key)
        dropDowns[key].hovering = false
    })

}

if (this.window.innerWidth < 932) {
    setupCollapseNav()
}
else {
    setupFullNav()
}

addEventListener("resize", function () {
    if (this.window.innerWidth < 932) {
        setupCollapseNav()
    }
    else {
        setupFullNav()
    }
})

function setupCollapseNav() {
    document.getElementById("navCollapse").classList.remove("HIDE")
    document.getElementById("navbarLinks").classList.add("HIDE")
}

function setupFullNav() {
    document.getElementById("navCollapse").classList.add("HIDE")
    document.getElementById("navbarLinks").classList.remove("HIDE")

    document.getElementById("navbarLinks").classList.remove("vertical")
    document.getElementById("navbar").classList.remove("vertical")

    let navbarElements = document.getElementsByClassName("navbarElm")
    for (let elm of navbarElements) {
        elm.classList.remove("vertical")
    }

    let dropDownHolderElements = document.getElementsByClassName("dropDownHolder")
    for (let elm of dropDownHolderElements) {
        elm.classList.remove("vertical")
    }

    let dropDownContentElements = document.getElementsByClassName("dropDownContent")
    for (let elm of dropDownContentElements) {
        elm.classList.remove("vertical")
    }
}

let navCollapsed = true
document.getElementById("navCollapse").addEventListener("click", function () {
    console.log("clicked")
    if (navCollapsed) {
        document.getElementById("navbarLinks").classList.remove("HIDE")
        document.getElementById("navbarLinks").classList.add("vertical")
        document.getElementById("navbar").classList.add("vertical")

        let navbarElements = document.getElementsByClassName("navbarElm")
        for (let elm of navbarElements) {
            elm.classList.add("vertical")
        }

        let dropDownHolderElements = document.getElementsByClassName("dropDownHolder")
        for (let elm of dropDownHolderElements) {
            elm.classList.add("vertical")
        }

        let dropDownContentElements = document.getElementsByClassName("dropDownContent")
        for (let elm of dropDownContentElements) {
            elm.classList.add("vertical")
        }
    }
    else {
        document.getElementById("navbarLinks").classList.add("HIDE")
        document.getElementById("navbarLinks").classList.remove("vertical")
        document.getElementById("navbar").classList.remove("vertical")

        let navbarElements = document.getElementsByClassName("navbarElm")
        for (let elm of navbarElements) {
            elm.classList.remove("vertical")
        }

        let dropDownHolderElements = document.getElementsByClassName("dropDownHolder")
        for (let elm of dropDownHolderElements) {
            elm.classList.remove("vertical")
        }

        let dropDownContentElements = document.getElementsByClassName("dropDownContent")
        for (let elm of dropDownContentElements) {
            elm.classList.remove("vertical")
        }
    }

    navCollapsed = !navCollapsed
})