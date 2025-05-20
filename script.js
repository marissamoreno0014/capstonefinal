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

// Click on left/right side of coffin to go backward/forward
const coffinContainer = document.getElementById('coffin-container');

coffinContainer.addEventListener('click', (e) => {
    const clickX = e.clientX;
    const screenWidth = window.innerWidth;

    if (!storyOverlay.classList.contains('hidden')) {
        if (clickX < screenWidth / 2) {
            // Left side = previous
            if (currentSection > 0) {
                currentSection--;
                showSection(currentSection);
            }
        } else {
            // Right side = next
            if (currentSection < storySections.length - 1) {
                currentSection++;
                showSection(currentSection);
            }
        }
    }
});

// Function to create flying vampire images
function spawnVampire() {
    let vampire = document.createElement("img");
    vampire.src = "vampire.png";  // Make sure you have a vampire PNG
    vampire.classList.add("vampire");
    document.body.appendChild(vampire);

    let startX = Math.random() > 0.5 ? -100 : window.innerWidth + 100; // Start off-screen
    let endX = startX > 0 ? -100 : window.innerWidth + 100; // End off-screen
    let startY = Math.random() * window.innerHeight * 0.6; // Random height

    vampire.style.top = `${startY}px`;
    vampire.style.left = `${startX}px`;

    vampire.animate([
        { transform: `translateX(${endX - startX}px)` }
    ], {
        duration: 4000 + Math.random() * 2000, // Random speed
        easing: "linear"
    });

    setTimeout(() => vampire.remove(), 6000); // Remove after animation
}

// Spawn vampires randomly during the story
setInterval(() => {
    if (document.querySelector("#story-overlay").classList.contains("visible")) {
        spawnVampire();
    }
}, 7000);
document.addEventListener("DOMContentLoaded", function () {
    // Shadow Figures for "shadows had sharpened their knives"
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
        blood.innerText = "滴滴"; // Dripping effect
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

    // Mist Rolls in for the Ending
    const endingTrigger = document.querySelector("#ending-scene");
    endingTrigger.addEventListener("mouseenter", function () {
        let endingMist = document.createElement("div");
        endingMist.classList.add("ending-mist");
        document.body.appendChild(endingMist);
    });
});
function spawnVampire() {
    let vampire = document.createElement("img");
    vampire.src = "vampire.png"; // Ensure "vampire.png" is in the same folder as index.html
    vampire.classList.add("vampire");

    // Choose a random spawn position: left, right, or top
    let spawnSide = Math.floor(Math.random() * 3); 
    let startX, startY, endX, endY;

    if (spawnSide === 0) { 
        // Left side
        startX = "-10%";
        startY = Math.random() * 80 + "%";
        endX = "110%";
        endY = Math.random() * 80 + "%";
    } else if (spawnSide === 1) { 
        // Right side
        startX = "110%";
        startY = Math.random() * 80 + "%";
        endX = "-10%";
        endY = Math.random() * 80 + "%";
    } else { 
        // Top side
        startX = Math.random() * 80 + "%";
        startY = "-10%";
        endX = Math.random() * 80 + "%";
        endY = "110%";
    }

    vampire.style.position = "fixed";
    vampire.style.left = startX;
    vampire.style.top = startY;

    // Set animation dynamically
    vampire.style.transition = `all ${Math.random() * 4 + 3}s linear`;
    document.body.appendChild(vampire);

    setTimeout(() => {
        vampire.style.left = endX;
        vampire.style.top = endY;
        vampire.style.opacity = "1";
    }, 50); 

    // Remove vampire after animation ends
    setTimeout(() => vampire.remove(), 5000);
}

// Spawn a vampire at random intervals (every 5-12 seconds)
setInterval(spawnVampire, Math.random() * 7000 + 5000);

function addMist() {
    let mist = document.createElement("div");
    mist.id = "mist";
    document.body.appendChild(mist);
}

// Wait for the page to load, then add mist
window.onload = addMist;
// Function to create the mist effect
function showMist() {
    let mist = document.createElement("div");
    mist.classList.add("mist");
    mist.style.position = "fixed";
    mist.style.bottom = "0";
    mist.style.left = "0";
    mist.style.width = "100%";
    mist.style.height = "150px";
    mist.style.backgroundImage = "url('mist.png')"; // Ensure mist.png is correct
    mist.style.backgroundSize = "cover";
    mist.style.opacity = "0.7";
    mist.style.zIndex = "900"; // Ensure it's above background but below text
    document.body.appendChild(mist);
}

// Function to create the Reaper effect
function showReaper() {
    let reaper = document.createElement("img");
    reaper.src = "reaper.png"; // Ensure this file exists
    reaper.classList.add("reaper");
    reaper.style.position = "fixed";
    reaper.style.top = "20%";
    reaper.style.left = "40%";
    reaper.style.width = "150px";
    reaper.style.opacity = "0.8";
    reaper.style.zIndex = "9999";

    document.body.appendChild(reaper);
    
    setTimeout(() => { reaper.remove(); }, 3000); // Remove after 3 sec
}


// Function to create the shadow effect
function showShadow() {
    let shadow = document.createElement("img");
    shadow.src = "shadow.png"; // Make sure the file exists and path is correct
    shadow.classList.add("shadow-figure");
    shadow.style.position = "fixed";
    shadow.style.top = Math.random() * 80 + "%"; // Random vertical position
    shadow.style.left = Math.random() * 80 + "%"; // Random horizontal position
    shadow.style.width = "150px"; // Adjust as needed
    shadow.style.opacity = "0.8";
    shadow.style.zIndex = "9999";
    
    // White outline for visibility
    shadow.style.filter = "drop-shadow(0px 0px 10px white)";

    document.body.appendChild(shadow);
    
    setTimeout(() => { shadow.remove(); }, 2000); // Remove after 2 sec
}

// Call the functions when the page loads (or at specific times)
window.onload = function() {
    showMist(); // Mist should always be visible
    setTimeout(showReaper, 5000); // Show Reaper after 5 seconds
    setInterval(showShadow, 7000); // Show shadows every 7 seconds
};
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".story-section");
    let currentSection = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = i === index ? "block" : "none";
        });
    
        const currentText = sections[index].innerText;
    
        // 🔪 Blade Drip Effect
        if (currentText.includes("blade dripping")) {
            sections[index].classList.add("drip-effect");
        }
    
        // ☠️ Reaper Effect
        if (currentText.includes("The Reaper—hooded and hollow-eyed—had grown weary")) {
            showReaper();
        }
    
        // ⏳ Glitch Effect
        if (currentText.includes("script stuttered")) {
            sections[index].classList.add("glitch-text");
            setTimeout(() => {
                sections[index].classList.remove("glitch-text");
            }, 800);
        }
    
        // 🌫️ Mist for Ending
       // if (currentText.includes("vanishing into the mist-draped dawn")) {
           // showMist();
        //}
    
        // ⚠️ Shadow Knives
        //if (currentText.includes("shadows had sharpened their knives")) {
           // showShadow();
       // }
    }
    
    // Initially show the first section
    showSection(currentSection);

    // Add click event for navigation
    document.addEventListener("click", function () {
        if (currentSection < sections.length - 1) {
            currentSection++;
            showSection(currentSection);
        }
    });
});
