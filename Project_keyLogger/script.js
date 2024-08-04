// select all elements
const logDiv = document.querySelector('#log')
const stateDiv = document.querySelector('#state')
const startBtn = document.querySelector('#start-btn')
const stopBtn = document.querySelector('#stop-btn')

startBtn.addEventListener('click', () => {
    // function checks ki key kya press ki gyi hai
    document.addEventListener('keydown', handleDown)
    document.addEventListener('keyup', handleUp)
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener('click', () => {
    // function checks ki key kya press ki gyi hai
    document.removeEventListener('keydown', handleDown)
    document.removeEventListener('keyup', handleUp)
    logDiv.textContent = ""
    stateDiv.textContent = " "
    startBtn.disabled = false;
    stopBtn.disabled = true;
})

function handleDown(e) {
    logDiv.textContent = `Key ${e.key} pressed down`
    stateDiv.textContent = `Key is down`
}

function handleUp(e) {
    logDiv.textContent = `Key ${e.key} pressed Up`
    stateDiv.textContent = `Key is Up`
}