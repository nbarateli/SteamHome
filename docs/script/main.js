let KEY_MAP = {};

function ready() {
    showTime();
    let items = document.getElementsByTagName('a');
    foreach(items, a => {
        if (a.hasAttribute('data-key'))
            KEY_MAP[a.getAttribute('data-key')] = {
                key: a.getAttribute('data-key'),
                href: a.getAttribute('href')
            };
    })
    
}

function foreach(items, fn) {
    for (let i = 0; i < items.length; i++) {
        fn(items[i]);
    }
}

function showTime() {
    var date = new Date();

    document.getElementById('date').innerText = dateFormat(date, "ddd dd.mm.yyyy");
    document.getElementById("clock").innerText = dateFormat(date, "HH:MM:ss");

    setTimeout(showTime, 1000);

}


document.addEventListener('DOMContentLoaded', ready);
