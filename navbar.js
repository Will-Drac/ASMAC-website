let dropDowns = {
    members: false,
    bursaries: false,
    aboutUs: false
}

function toggleDropDown(name) {
    if (dropDowns[name] == false) {
        document.getElementById(name + "DropDownTrigger").style = "background-color: var(--red);"
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