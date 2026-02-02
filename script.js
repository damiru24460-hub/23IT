function sendName() {
    let name = document.getElementById("name").value;

    fetch("message?name=" + name)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerText = data;
        });
}
