const picEl = document.getElementById("pic");
const loaderEl = document.querySelector(".loader");
const generateBtn = document.getElementById("generate-btn"); 

generateBtn.addEventListener("click", async function(){
    try {
        picEl.style.display = "none"
        generateBtn.disabled = true;
        generateBtn.innerText = "loading...";
        loaderEl.style.display = "block";
        const response = await fetch("https://dog.ceo/api/breed/husky/images/random")
        const data = await response.json();
        generateBtn.disabled = false;
        generateBtn.innerText = "Generate Image";
        loaderEl.style.display = "none";
        picEl.style.display = "block";
        picEl.src = data.message;
    } catch (error) {
        console.log(error)
    }
});


    
        
