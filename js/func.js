const example = () => {
    const fromInput = document.getElementById("example").value;
    document.getElementsByTagName("p")[0].innerText = fromInput;
    }
    document.getElementById("action").addEventListener("click", example)