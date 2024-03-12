function speak() {
    var textToSpeak = document.getElementById("textToSpeak").value;

    // Create an instance of SpeechSynthesisUtterance
    var msg = new SpeechSynthesisUtterance();

    // Set the text to be spoken
    msg.text = textToSpeak;

    // Set speech properties such as volume, rate, pitch, etc.
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 1; // From 0 to 2

    // Speak the text
    window.speechSynthesis.speak(msg);
}
