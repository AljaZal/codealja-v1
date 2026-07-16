/* ==========================================
   CODEALJA v1.0
   AI TERMINAL
========================================== */

const terminal = document.getElementById("terminal");

const lines = [

    "codealja@ai:~$ initialize",
    
    "",
    
    "Initializing Neural Core......",
    
    "",
    
    "████████████████████ 100%",
    
    "",
    
    "✓ AI Employees",
    
    "✓ Linux Infrastructure",
    
    "✓ Cybersecurity",
    
    "✓ Automation",
    
    "✓ Knowledge Systems",
    
    "",
    
    "System Status: READY",
    
    "",
    
    "Mission: Build secure AI business systems.",
    
    "",
    
    "Welcome to CodeAlja.",
    
    ];
let lineIndex = 0;
let charIndex = 0;
let output = "";

function typeLine() {

    if (lineIndex >= lines.length) {

        output += "\n\n▌";

        terminal.textContent = output;

        blinkCursor();

        return;

    }

    const current = lines[lineIndex];

    if (charIndex < current.length) {

        output += current.charAt(charIndex);

        terminal.textContent = output;

        charIndex++;

        setTimeout(typeLine, 22);

    }

    else{

        output += "\n";

        lineIndex++;

        charIndex = 0;

        setTimeout(typeLine,120);

    }

}

function blinkCursor(){

    setInterval(()=>{

        if(terminal.textContent.endsWith("▌")){

            terminal.textContent=terminal.textContent.slice(0,-1);

        }

        else{

            terminal.textContent+="▌";

        }

    },500);

}

typeLine();