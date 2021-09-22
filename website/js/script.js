document.addEventListener("DOMContentLoaded", function () {

    const stage = document.getElementById("slider");
    const arr = stage.getElementsByTagName("img");
    const fadeComplete = function () { stage.appendChild(arr[0]); };

    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
    }
}, false);