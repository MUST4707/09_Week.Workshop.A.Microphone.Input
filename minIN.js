// Create the AudioContext, which is the main Web Audio environment
const audioContext = new AudioContext();

// Create a DelayNode to delay the incoming audio
const delay = new DelayNode(audioContext, {delayTime: 0.5});


// Create a GainNode to control the feedback amount
// Set feedback level (40% of signal loops back)

const feedback = new GainNode(audioContext, {gain:0.4});

// Create a GainNode to control the final output volume
// Set output volume to 80%
const outputGain = new GainNode(audioContext, {gain: 0.8})


// Connect the delay node into the feedback loop: delay -> feedback -> delay
delay.connect(feedback);
feedback.connect(delay);

// Connect the delayed signal to the output gain (and then to the speakers)
delay.connect(outputGain);
outputGain.connect(audioContext.destination);




// Set up event listeners for the Start and Stop buttons
document.getElementById('start').addEventListener("click", startMic);
document.getElementById('stop').addEventListener("click", stopMic);
