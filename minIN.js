// Create the AudioContext, which is the main Web Audio environment
const audioContext = new AudioContext();

// Create a DelayNode to delay the incoming audio
const delay = audioContext.createDelay();
delay.delayTime.value = 0.5; // Set delay time to 0.5 seconds

// Create a GainNode to control the feedback amount
const feedback = audioContext.createGain();
feedback.gain.value = 0.4; // Set feedback level (40% of signal loops back)

// Create a GainNode to control the final output volume
const outputGain = audioContext.createGain();
outputGain.gain.value = 0.8; // Set output volume to 80%

// Connect the delay node into the feedback loop: delay -> feedback -> delay
delay.connect(feedback);
feedback.connect(delay);

// Connect the delayed signal to the output gain (and then to the speakers)
delay.connect(outputGain);
outputGain.connect(audioContext.destination);




// Set up event listeners for the Start and Stop buttons
document.getElementById('start').addEventListener("click", startMic);
document.getElementById('stop').addEventListener("click", stopMic);
