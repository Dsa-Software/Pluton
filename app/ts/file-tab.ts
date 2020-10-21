function tab_name() {
    let input = document.getElementById("in").value
    if (input == "") {
        input="file.txt"
    }
    if(input.length >= 7) {
        input = input.slice(0, 7) + "..."
    }
    document.getElementById("file-name").textContent = input
}