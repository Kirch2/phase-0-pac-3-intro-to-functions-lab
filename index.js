function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log('hello'.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
    //check if string is all lowercase
    //check if the string is all uppercase
    //check if the string is equal to i love you grandma
    //return empty string
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    }
    if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }
    if (string === "I love you, Grandma.")
        return "I love you, too."
}


