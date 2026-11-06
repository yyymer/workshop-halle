const text = "Ich träumte, ich bestellte im Internet einen Zweig mit Wespen darauf."

const container = document.getElementById("container")

const listOfWords = text.split(" ")

console.log(listOfWords)


listOfWords.forEach(word => {

    const wordElement = document.createElement("span")

    wordElement.style.fontSize = 100 * Math.random() + "px"

    wordElement.innerHTML = word + " "

    container.appendChild(wordElement)

})

container.innerHTML = text
container.style.backround = "black"
container.style.color = "white"
