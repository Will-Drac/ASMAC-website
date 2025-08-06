const lang = window.location.href.includes("en") ? "en" : "fr"

const div = document.getElementById("calendarBody")
for (let i = 0; i < calendar.length; i++) {
    const row = document.createElement("tr")

    const date = document.createElement("td")
    if (calendar[i].date.link !== undefined) {
        const dateLink = document.createElement("a")
        dateLink.innerText = calendar[i].date[lang]
        dateLink.href = calendar[i].date.link
        date.append(dateLink)
    }
    else {
        date.innerText = calendar[i].date[lang]
    }
    row.append(date)

    const event = document.createElement("td")
    if (calendar[i].event.link !== undefined) {
        const eventLink = document.createElement("a")
        eventLink.innerText = calendar[i].event[lang]
        eventLink.href = calendar[i].event.link
        event.append(eventLink)
    }
    else {
        event.innerText = calendar[i].event[lang]
    }
    row.append(event)

    const location = document.createElement("td")
    if (calendar[i].location.link !== undefined) {
        const locationLink = document.createElement("a")
        locationLink.innerText = calendar[i].location[lang]
        locationLink.href = calendar[i].location.link
        location.append(locationLink)
    }
    else {
        location.innerText = calendar[i].location[lang]
    }
    row.append(location)

    div.append(row)
}