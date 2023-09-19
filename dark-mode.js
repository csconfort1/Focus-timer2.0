export default function DarkMode ({
    body,
    buttonSun,
    buttonMoon,
    timerDisplay,
    timerControls,
    soundCards
}){

    function turnOn () {
        body.style.background = "#121214"
        buttonSun.classList.add("hide")
        buttonMoon.classList.remove("hide")
        
        timerDisplay.classList.add("dark-mode")
        timerControls.classList.add("dark-mode")
        
        soundCards.classList.add("dark-mode")
    }
    
    function turnOff() {
        body.style.background = "white"
        buttonSun.classList.remove("hide")
        buttonMoon.classList.add("hide")
        
        timerDisplay.classList.remove("dark-mode")
        timerControls.classList.remove("dark-mode")
        
        soundCards.classList.remove("dark-mode")
    }

    return {
        turnOn,
        turnOff
    }
}