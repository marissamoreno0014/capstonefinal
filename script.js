document.getElementById("coffin-image").addEventListener("click", function() {
    this.style.opacity = "0";  

    setTimeout(() => {
        this.style.display = "none";  
        document.getElementById("story-overlay").classList.remove("hidden");  
    }, 1000);  
});

const storySections = document.querySelectorAll('.story-section');
let currentSection = 0;

function showSection(index) {
    storySections.forEach((section, i) => {
        section.classList.remove('active');
        if (i === index) section.classList.add('active');
    });
}

// Click on coffin to go forward
const coffinContainer = document.getElementById('coffin-container');

coffinContainer.addEventListener('click', (e) => {
    const clickX = e.clientX;
    const screenWidth = window.innerWidth;

    if (!storyOverlay.classList.contains('hidden')) {
        if (clickX < screenWidth / 2) {
            if (currentSection > 0) {
                currentSection--;
                showSection(currentSection);
            }
        } else {
            if (currentSection < storySections.length - 1) {
                currentSection++;
                showSection(currentSection);
            }
        }
    }
});

function spawnVampire() {
    let vampire = document.createElement("img");
    vampire.src = "vampire.png"; 
    vampire.classList.add("vampire");
    document.body.appendChild(vampire);

    let startX = Math.random() > 0.5 ? -100 : window.innerWidth + 100;
    let endX = startX > 0 ? -100 : window.innerWidth + 100;
    let startY = Math.random() * window.innerHeight * 0.6;

    vampire.style.top = `${startY}px`;
    vampire.style.left = `${startX}px`;

    vampire.animate([
        { transform: `translateX(${endX - startX}px)` }
    ], {
        duration: 4000 + Math.random() * 2000, 
        easing: "linear"
    });

    setTimeout(() => vampire.remove(), 6000);
}

// Spawn vampires randomly 
setInterval(() => {
    if (document.querySelector("#story-overlay").classList.contains("visible")) {
        spawnVampire();
    }
}, 7000);
document.addEventListener("DOMContentLoaded", function () {
    const shadowTrigger = document.querySelector("#shadow-scene");
    shadowTrigger.addEventListener("mouseenter", function () {
        let shadowLeft = document.createElement("img");
        let shadowRight = document.createElement("img");
        shadowLeft.src = "shadow.png";
        shadowRight.src = "shadow.png";
        shadowLeft.classList.add("shadow-figure", "shadow-left");
        shadowRight.classList.add("shadow-figure", "shadow-right");
        document.body.appendChild(shadowLeft);
        document.body.appendChild(shadowRight);
        setTimeout(() => {
            shadowLeft.remove();
            shadowRight.remove();
        }, 1000);
    });

    // Ghostly Reaper for "The Reaper—hooded and hollow-eyed—had grown weary"
    const reaperTrigger = document.querySelector("#reaper-scene");
    reaperTrigger.addEventListener("mouseenter", function () {
        let reaper = document.createElement("img");
        reaper.src = "reaper.png";
        reaper.classList.add("ghostly-reaper");
        document.body.appendChild(reaper);
        setTimeout(() => {
            reaper.remove();
        }, 2000);
    });

    // Blood Drip Effect for "The killer tilted his head, blade dripping"
    const bloodTrigger = document.querySelector("#blood-scene");
    bloodTrigger.addEventListener("mouseenter", function () {
        let blood = document.createElement("span");
        blood.classList.add("blood-drip");
        bloodTrigger.appendChild(blood);
        setTimeout(() => {
            blood.remove();
        }, 1000);
    });

    // Glitch Effect for "The script stuttered"
    const glitchTrigger = document.querySelector("#glitch-scene");
    glitchTrigger.addEventListener("mouseenter", function () {
        glitchTrigger.classList.add("glitch-text");
        setTimeout(() => {
            glitchTrigger.classList.remove("glitch-text");
        }, 800);
    });

    // Mist 
    const endingTrigger = document.querySelector("#ending-scene");
    endingTrigger.addEventListener("mouseenter", function () {
        let endingMist = document.createElement("div");
        endingMist.classList.add("ending-mist");
        document.body.appendChild(endingMist);
    });
});


function addMist() {
    let mist = document.createElement("div");
    mist.id = "mist";
    document.body.appendChild(mist);
}

window.onload = addMist;
function showMist() {
    let mist = document.createElement("div");
    mist.classList.add("mist");
    mist.style.position = "fixed";
    mist.style.bottom = "0";
    mist.style.left = "0";
    mist.style.width = "100%";
    mist.style.height = "150px";
    mist.style.backgroundImage = "url('mist.png')"; 
    mist.style.backgroundSize = "cover";
    mist.style.opacity = "0.7";
    mist.style.zIndex = "900"; 
    document.body.appendChild(mist);
}

function showReaper() {
    let reaper = document.createElement("img");
    reaper.src = "reaper.png"; 
    reaper.classList.add("reaper");
    reaper.style.position = "fixed";
    reaper.style.top = "20%";
    reaper.style.left = "40%";
    reaper.style.width = "150px";
    reaper.style.opacity = "0.8";
    reaper.style.zIndex = "9999";

    document.body.appendChild(reaper);
    
    setTimeout(() => { reaper.remove(); }, 3000);
}

function showShadow() {
    let shadow = document.createElement("img");
    shadow.src = "shadow.png"; 
    shadow.classList.add("shadow-figure");
    shadow.style.position = "fixed";
    shadow.style.top = Math.random() * 80 + "%";
    shadow.style.left = Math.random() * 80 + "%"; 
    shadow.style.width = "150px";
    shadow.style.opacity = "0.8";
    shadow.style.zIndex = "9999";
    
    shadow.style.filter = "drop-shadow(0px 0px 10px white)";

    document.body.appendChild(shadow);
    
    setTimeout(() => { shadow.remove(); }, 2000);
}

window.onload = function() {
    showMist();
    setTimeout(showReaper, 5000); 
    setInterval(showShadow, 7000); 
};
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".story-section");
    let currentSection = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = i === index ? "block" : "none";
        });
    
        const currentText = sections[index].innerText;
    
        if (currentText.includes("blade dripping")) {
            sections[index].classList.add("drip-effect");
        }
    
        if (currentText.includes("The Reaper—hooded and hollow-eyed—had grown weary")) {
            showReaper();
        }
    
        if (currentText.includes("script stuttered")) {
            sections[index].classList.add("glitch-text");
            setTimeout(() => {
                sections[index].classList.remove("glitch-text");
            }, 800);
        }
    
        //  Mist for Ending
       // if (currentText.includes("vanishing into the mist-draped dawn")) {
           // showMist();
        //}
    
        // Shadow Knives
        //if (currentText.includes("shadows had sharpened their knives")) {
           // showShadow();
       // }
    }
    
    showSection(currentSection);

    document.addEventListener("click", function () {
        if (currentSection < sections.length - 1) {
            currentSection++;
            showSection(currentSection);
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const coffinImage = document.getElementById("coffin-image");
    const storyOverlay = document.getElementById("story-overlay");
    const storySections = document.querySelectorAll(".story-section");
    const openCoffin = document.getElementById("open-coffin");

    let currentSectionIndex = 0;

    function showNextSection() {
        if (currentSectionIndex < storySections.length - 1) {
            storySections[currentSectionIndex].classList.remove("active");
            currentSectionIndex++;
            storySections[currentSectionIndex].classList.add("active");

            if (currentSectionIndex === 8) {
                document.getElementById("reaper-shadow").classList.add("visible");
            }
        }
    }

    coffinImage.addEventListener("click", function () {
        coffinImage.style.opacity = 0;
        setTimeout(() => {
            coffinImage.style.display = "none";
            storyOverlay.classList.remove("hidden");
        }, 1000);
    });

    document.querySelectorAll(".next-btn").forEach(button => {
        button.addEventListener("click", showNextSection);
    });

    storyOverlay.addEventListener("click", function (e) {
        if (e.target.classList.contains("next-btn")) return;
        if (!storySections[currentSectionIndex].querySelector(".next-btn")) {
            showNextSection();
        }
    });
});
