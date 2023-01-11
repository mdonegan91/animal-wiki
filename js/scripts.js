window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();

        let turtleWiki = document.getElementById("turtle");
        turtleWiki.setAttribute("class", "hidden");
        let pantherWiki = document.getElementById("panther");
        pantherWiki.setAttribute("class", "hidden");
        let koalaWiki = document.getElementById("koala");
        koalaWiki.setAttribute("class", "hidden");

        const animal = document.querySelector("input#animal").value;
        console.log(animal)
        if (animal === "turtle") {
            turtleWiki.removeAttribute("class");
        }
        else if (animal === "panther") {
            pantherWiki.removeAttribute("class");
        }
        else if (animal === "koala") {
            koalaWiki.removeAttribute("class");
        }
        else {
            window.alert("not a real animal!");
        }
    }
}
