function fetchLinks() {
    fetch("/data/links.json").then((j) =>
        j.json().then(displayLinks))
}

function displayLinks(links) {
    let list = document.getElementById("lnks")
    foreach(links, (link) => {
        let item = document.createElement('li')
        item.innerHTML = `<a href="${link.link}" target="${link.target}">${link.title}</a>`
        list.appendChild(item)
    })

}

function foreach(items, fn) {
    for (let i = 0; i < items.length; i++) {
        fn(items[i]);
    }
}

function ready() {
    showTime();
    fetchLinks()
}

function showTime() {
    var date = new Date();

    document.getElementById('date').innerText = dateFormat(date, "ddd dd.mm.yyyy");
    document.getElementById("clock").innerText = dateFormat(date, "HH:MM:ss");

    setTimeout(showTime, 1000);

}


document.addEventListener('DOMContentLoaded', ready);
