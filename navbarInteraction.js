
let dropDowns = {
    membership: { open: false, hovering: false },
    bursaries: { open: false, hovering: false },
    aboutUs: { open: false, hovering: false },
    login: { open: false, hovering: false },
}

function openDropDown(name) {
    console.log('opening')

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
    console.log('closing')

    document.getElementById(name + "DropDownTrigger").style = ""
    document.getElementById(name + "DropDownHolder").style = "display: none"

    dropDowns[name].open = false
}

// setting up event listeners for all navbar categories
let dropDownKeys = Object.keys(dropDowns)
for (let i = 0; i < dropDownKeys.length; i++) {
    const key = dropDownKeys[i]

    document.getElementById(key+"DropDownTrigger").addEventListener("click", function (e) {
        if (dropDowns[key].open == true && !dropDowns[key].hovering) {
            closeDropDown(key)
        }
        else {
            openDropDown(key)
        }
    })

    document.getElementById(key+"DropDownTrigger").addEventListener("mouseenter", function (e) {
        openDropDown(key)
        dropDowns[key].hovering = true
    })

    document.getElementById(key+"DropDownTrigger").addEventListener("mouseleave", function (e) {
        closeDropDown(key)
        dropDowns[key].hovering = false
    })

}

