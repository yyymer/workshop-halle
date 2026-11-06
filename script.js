const text = "Ich träumte, ich bestellte im Internet einen Zweig mit Wespen darauf."

const container = document.getElementById("container")

const listOfWords = text.split(" ")

const anticipatedWordWidth = 200

console.log(listOfWords)


listOfWords.forEach(word => {
    
const wordElement = document.createElement("span")
wordElement.innerHTML = word

container.appendChild(wordElement)

})