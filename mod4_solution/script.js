(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i in names) {
        var currentName = names[i];
        var firstLetter = currentName.charAt(0);
        
        if (firstLetter.toLowerCase() === 'j') {
            byeSpeaker.speak(currentName);
        } else {
            helloSpeaker.speak(currentName);  
        }
    }
})();

