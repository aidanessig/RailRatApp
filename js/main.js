document.getElementById("trainForm").onsubmit = function(event) {
    event.preventDefault();

    var trainNumber = document.getElementById("trainNumber").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    console.log("train number:", trainNumber)
    console.log("phone number:", phoneNumber)

    // AJAX request to backend
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/submit", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ trainNumber: trainNumber, phoneNumber: phoneNumber }));

    xhr.onload = function() {
        alert("message sent (main)");
    }
}

document.getElementById("testButton").onclick = function(event) {
    console.log(railRatURL("94"));
}