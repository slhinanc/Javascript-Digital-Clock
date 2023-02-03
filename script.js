
// we match the variables with Time.

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let day = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();

// to show "0" before the numbers which are under 10, we use if else.
    
    if (hour < 10) { 
        document.querySelector(".hour").innerText = "0" + hour;
    } else {
        document.querySelector(".hour").innerText = hour;
    }

    if (minute < 10) { 
        document.querySelector(".minute").innerText = "0" + minute;
    } else {
        document.querySelector(".minute").innerText = minute;
    }

    if (second < 10) {
        document.querySelector(".second").innerText = "0" + second;
    } else {
        document.querySelector(".second").innerText = second;
    }

    // to put slash between the sections.

    document.querySelector(".date").innerHTML = day + " / " + month + " / " + year;

}

// we call the function in here and set duration of second. 

setInterval(function () {
    showTime();
}, 1000);