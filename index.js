// Check if Linked or not - Starts Here

// console.log("Everything is working fine");
// document.getElementsByTagName("body")[0].innerHTML =
//     "<p>This is paragraph rendered from the index.js file</p>";

// Check if Linked or not - Ends Here


// Actual code - Starts Here
const root = document.getElementById("root");
// console.log(root);

let outputElement = "<div class='border bg-[#fff] p-2 rounded-sm' > <style id='css-output'></style> <div id='html-output'></div> <script id='js-output'></script>  </div>"

root.innerHTML += outputElement;


// Dynamic CSS Injector - Starts Here
const backgroundColorInjector = async () => {
    const bgElements = document.getElementsByTagName("*");
    // console.log(bgElements);

    for (let i = 0; i < bgElements.length; i++) {
        // console.log(bgElements[i].classList);
        // console.log("\n");

        // See if any class has bg-[*] type things then update background color of that 
        let classListOfBgElement = bgElements[i].classList;
        for (let j = 0; j < classListOfBgElement.length; j++) {
            // console.log("Class is - " +classListOfBgElement[j]);

            if (classListOfBgElement[j].includes("bg-[")) {
                // console.log("Yo Yo We found it");
                // console.log(bgElements[i]);
                const prevStyle = (bgElements[i].getAttribute("style")) || "";
                bgElements[i].style = prevStyle + "background: " + classListOfBgElement[j].slice(4, -1);
            }
        }

    };
};


const gridColumnInjector = async () => {
    const gridElements = document.getElementsByTagName("*");
    for (let i = 0; i < gridElements.length; i++) {

        // See if any class has grid-cols-[*] type things then update background color of that 
        let classListOfGridElement = gridElements[i].classList;
        for (let j = 0; j < classListOfGridElement.length; j++) {
            // console.log(
            //     "Class is - " +
            //     classListOfGridElement[j]
            // );

            if (classListOfGridElement[j].includes("grid-cols-[")) {
                // console.log("Yo Yo We found it " + classListOfGridElement[j] + " " + parseInt(classListOfGridElement[j].slice(11,-1)));


                // const noOfGrids = `${classListOfGridElement[j].slice(11, -1)} + 'fr'` * parseInt(classListOfGridElement[j].slice(11, -1));
                // console.log("For ");
                // console.log(gridElements[i]);
                // console.log(classListOfGridElement[j]);
                // console.log("WE GOT: " + noOfGrids);

                let noOfGrids = "";
                for (let k = 0; k < parseInt(classListOfGridElement[j].slice(11, -1)); k++) {
                    // console.log("Inside loop");

                    noOfGrids += " 1fr";
                }
                // console.log("WE GOT: " + noOfGrids);


                // console.log(gridElements[i]);
                const prevStyle = (gridElements[i].getAttribute("style")) || "";
                gridElements[i].style = prevStyle + "grid-template-columns: "
                    + noOfGrids + ";";
            }
        }

    };
};

// Dynamic CSS Injector - Ends Here


// Animations - Starts Here
function animateButton(buttonType) {
    const button = document.getElementById(buttonType);
    
    // Temporarily add the grow-shrink animation
    button.style.animation = "grow-shrink 1s ease-in-out";

    // Wait for the animation to complete (1 second here)
    setTimeout(() => {
        button.style.animation = ""; // Remove the animation
    }, 1000); // Match the duration of the animation
}

// Animations - Ends Here


// User's HTML Code Injector - Starts Here
const injectHtmlCode = async (e) => {
    const htmlCode = document.getElementById("html-code");
    // console.log("In HTML");

    // console.log(htmlCode);
    // console.log(htmlCode.value);

    document.getElementById('html-output').innerHTML = htmlCode.value;
    
};
// User's HTML Code Injector - Ends Here


// User's CSS Code Injector - Starts Here
const injectCssCode = async () => {
    const cssCode = document.getElementById("css-code");
    // console.log("In CSS");
    // console.log(cssCode);

    // console.log(cssCode.value);
    document.getElementById('css-output').innerHTML = cssCode.value;
    
};
// User's CSS Code Injector - Ends Here


// User's Js Code Injector - Starts Here
const injectJsCode = async () => {
    const jsCode = document.getElementById("js-code");
    // console.log("In Js");
    // console.log(jsCode);
    
    // console.log(jsCode.value);
    
    const existingScript = document.getElementById("js-output");
    if (existingScript) {
        existingScript.remove();
    }

    // Create a new script element
    const script = document.createElement("script");
    script.id = "js-output";
    script.type = "text/javascript";
    script.text = jsCode.value;

    // Append the script to the body
    document.body.appendChild(script);
};
// User's Js Code Injector - Ends Here



// All functioning - Starts Here
async function changeCodeInput(codeType) {
    animateButton(codeType + "-nav-button");
    // console.log("I am runnning to change the input to " + codeType);
    
    let htmlCode = document.getElementById('html' + '-' + 'code');
    let cssCode = document.getElementById('css' + '-' + 'code');
    let jsCode = document.getElementById('js' + '-' + 'code');

    let htmlNavButton = document.getElementById('html' + '-' + 'nav-button');
    let cssNavButton = document.getElementById('css' + '-' + 'nav-button');
    let jsNavButton = document.getElementById('js' + '-' + 'nav-button');
    
    // Deactivate All Code Input Section
    htmlCode.toggleAttribute("active", false)
    cssCode.toggleAttribute("active", false)
    jsCode.toggleAttribute("active", false)

    // Activate Desired Code Input Section
    document.getElementById(codeType + '-' + 'code').toggleAttribute("active", true)

    // Hide All Elements who are not active and show which is active
    if ((htmlCode.getAttribute('active')) === null) {
        // console.log("De-Active HTML");
        // console.log(htmlCode.getAttribute('active'));
        // console.log(cssCode.getAttribute('active'));
        // console.log(jsCode.getAttribute('active'));
        
        htmlCode.classList.remove("display-block");
        htmlCode.classList.add("display-none");
        htmlNavButton.classList.remove("active-border");
        htmlNavButton.classList.add("inactive-border");
    }
    else{
        // console.log("Active HTML");
        
        htmlCode.classList.remove("display-none");
        htmlCode.classList.add("display-block");
        htmlNavButton.classList.remove("inactive-border");
        htmlNavButton.classList.add("active-border");
    }
    
    if ((cssCode.getAttribute('active')) === null) {
        cssCode.classList.remove("display-block");
        cssCode.classList.add("display-none");
        cssNavButton.classList.remove("active-border");
        cssNavButton.classList.add("inactive-border");
    }
    else{
        cssCode.classList.remove("display-none");
        cssCode.classList.add("display-block");
        cssNavButton.classList.remove("inactive-border");
        cssNavButton.classList.add("active-border");
    }
    
    if ((jsCode.getAttribute('active')) === null) {
        jsCode.classList.remove("display-block");
        jsCode.classList.add("display-none");
        jsNavButton.classList.remove("active-border");
        jsNavButton.classList.add("inactive-border");
    }
    else{
        jsCode.classList.remove("display-none");
        jsCode.classList.add("display-block");
        jsNavButton.classList.remove("inactive-border");
        jsNavButton.classList.add("active-border");
    }
    
    
}

async function applyDynamicCSS() {
    await backgroundColorInjector();
    await gridColumnInjector();
}

async function applyUserCode() {
    // console.log("I am running script.js ");
    await injectHtmlCode();
    await injectCssCode();
    await injectJsCode();

}

applyDynamicCSS()
applyUserCode()
// All functioning - Ends Here


