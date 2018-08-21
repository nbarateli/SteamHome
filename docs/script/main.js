function showTime() {
    var date = new Date();

    document.getElementById('date').innerText = dateFormat(date, "ddd dd.mm.yyyy");
    document.getElementById("clock").innerText = dateFormat(date, "hh:MM:ss");

    setTimeout(showTime, 1000);

}

document.addEventListener('DOMContentLoaded', showTime);