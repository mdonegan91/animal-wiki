window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();

        let turtleWiki = document.getElementByID("turtle");
        turtleWiki.setAttritube("class", "hidden");
        let pantherWiki = document.getElementById("panther");
        pantherWiki.setAttribute("class", "hidden");
        let koalaWiki = document.getElementById("koala");
        koalaWiki.setAttribute("class", "hidden");

        const animal = document.querySelector("input#animal").value;

        if (animal === turtle) {
            turtleWiki.remoteAttribute("class");
        }
        else if (animal === panther) {
            pantherWiki.remoteAttribute("class");
        }
        else if (animal === koala) {
            koalaWiki.remoteAttribute("class");
        }
        else {
            window.alert("not a real animal!");
        }
    }
}
