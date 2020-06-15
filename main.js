//Completed with the help of Mavis Acheampong & Barbara Workman
const mainElement = document.querySelector('main')

const kata1heading = document.createElement('h2')
const kata1result = document.createElement('h3')

const kata2heading = document.createElement('h2')
const kata2result = document.createElement('h3')

const kata3heading = document.createElement('h2')
const kata3result = document.createElement('h3')

const kata4heading = document.createElement('h2')
const kata4result = document.createElement('h3')

const kata5heading = document.createElement('h2')
const kata5result = document.createElement('h3')

const kata6heading = document.createElement('h2')
const kata6result = document.createElement('h3')

const kata7heading = document.createElement('h2')
const kata7result = document.createElement('h3')

const kata8heading = document.createElement('h2')
const kata8result = document.createElement('h3')

const kata9heading = document.createElement('h2')
const kata9result = document.createElement('h3')

const kata10heading = document.createElement('h2')
const kata10result = document.createElement('h3')

const kata11heading = document.createElement('h2')
const kata11result = document.createElement('h3')

const kata12heading = document.createElement('h2')
const kata12result = document.createElement('h3')

const kata13heading = document.createElement('h2')
const kata13result = document.createElement('h3')

const kata14heading = document.createElement('h2')
const kata14result = document.createElement('h3')

const kata15heading = document.createElement('h2')
const kata15result = document.createElement('h3')

const kata16heading = document.createElement('h2')
const kata16result = document.createElement('h3')

const kata17heading = document.createElement('h2')
const kata17result = document.createElement('h3')

const kata18heading = document.createElement('h2')
const kata18result = document.createElement('h3')

//KATA 1
kata1heading.append('Kata 1')
mainElement.append(kata1heading)

for (let counter = 1; counter <= 20; counter++) {
    kata1result.append(counter + ' ')
    mainElement.append(kata1result)
}

//KATA 2
kata2heading.append('Kata 2')
mainElement.append(kata2heading)

for (counter = 2; counter <= 20; counter += 2) {
    kata2result.append(counter + ' ')
    mainElement.append(kata2result)
}

//KATA 3
kata3heading.append('Kata 3')
mainElement.append(kata3heading)

for (counter = 1; counter < 20; counter += 2) {
    kata3result.append(counter + ' ')
    mainElement.append(kata3result)
}


//KATA 4
kata4heading.append('Kata 4')
mainElement.append(kata4heading)

for (counter = 5; counter <= 100; counter += 5) {
    kata4result.append(counter + ' ')
    mainElement.append(kata4result)
}

//KATA 5
kata5heading.append('Kata 5')
mainElement.append(kata5heading)

for (counter = 1; counter <= 10; counter++) {
    kata5result.append((counter * counter) + ' ')
    mainElement.append(kata5result)
}

//KATA 6
kata6heading.append('Kata 6')
mainElement.append(kata6heading)

for (counter = 20; counter >= 1; counter -= 1) {
    kata6result.append(counter + ' ')
    mainElement.append(kata6result)
}

//KATA 7
kata7heading.append('Kata 7')
mainElement.append(kata7heading)

for (counter = 20; counter >= 1; counter -= 2) {
    kata7result.append(counter + ' ')
    mainElement.append(kata7result)
}

//KATA 8
kata8heading.append('Kata 8')
mainElement.append(kata8heading)

for (counter = 19; counter >= 1; counter -= 2) {
    kata8result.append(counter + ' ')
    mainElement.append(kata8result)
}

//KATA 9
kata9heading.append('Kata 9')
mainElement.append(kata9heading)

for (counter = 100; counter >= 1; counter -= 5) {
    kata9result.append(counter + ' ')
    mainElement.append(kata9result)
}


//KATA 10
kata10heading.append('Kata 10')
mainElement.append(kata10heading)

for (counter = 10; counter >= 1; counter -= 1) {
    kata10result.append((counter * counter) + ' ')
    mainElement.append(kata10result)
}

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]

//KATA 11
kata11heading.append('Kata 11')
mainElement.append(kata11heading)

for (counter = 0; counter < sampleArray.length; counter += 1) {
    kata11result.append(sampleArray[counter] + ' ')
    mainElement.append(kata11result)
}

//KATA 12
kata12heading.append('Kata 12')
mainElement.append(kata12heading)

for (counter = 0; counter < sampleArray.length; counter += 1) {
    if (sampleArray[counter] % 2 == 0) {
        kata12result.append(sampleArray[counter] + ' ')
        mainElement.append(kata12result)
    }
}

//KATA 13
kata13heading.append('Kata 13')
mainElement.append(kata13heading)

for (counter = 0; counter < sampleArray.length; counter += 1) {
    if (sampleArray[counter] % 2 != 0) {
        kata13result.append(sampleArray[counter] + ' ')
        mainElement.append(kata13result)
    }
}

//KATA 14
kata14heading.append('Kata 14')
mainElement.append(kata14heading)

for (counter = 0; counter < sampleArray.length; counter += 1) {
    let currentItem = sampleArray[counter]
    kata14result.append((currentItem * currentItem) + ' ')
    mainElement.append(kata14result)
}

//KATA 15
kata15heading.append('Kata 15')
mainElement.append(kata15heading)

let x = 0
for (counter = 1; counter <= 20; counter += 1) {
    x = x + counter
}
kata15result.append(x + (' '))
mainElement.append(kata15result)

//KATA 16
kata16heading.append('Kata 16')
mainElement.append(kata16heading)

let y = 0
for (counter = 0; counter < sampleArray.length; counter += 1) {
    y = y + sampleArray[counter]
}
kata16result.append(y)
mainElement.append(kata16result)

//KATA 17 
kata17heading.append('Kata 17')
mainElement.append(kata17heading)

let lowestNumber = []
for (let outer = 0; outer < sampleArray.length; outer += 1) {
    lowestNumber.push(sampleArray[outer])
    if (lowestNumber.length > 1) {
        for (let inner = 0; inner < lowestNumber.length; inner += 1) {
            if (lowestNumber[0] > lowestNumber[1]) {
                lowestNumber.splice(0, 1)
            } else {
                lowestNumber.splice(1, 1)
            }
        }
    }
}
kata17result.append(lowestNumber[0])
mainElement.append(kata17result)

//KATA 18
kata18heading.append('Kata 18')
mainElement.append(kata18heading)

let highestNumber = []
for (let outer = 0; outer < sampleArray.length; outer += 1) {
    highestNumber.push(sampleArray[outer])
    if (highestNumber.length > 1) {
        for (let inner = 0; inner < highestNumber.length; inner += 1) {
            if (highestNumber[0] < highestNumber[1]) {
                highestNumber.splice(0, 1)
            } else {
                highestNumber.splice(1, 1)
            }
        }
    }
}
kata18result.append(highestNumber[0])
mainElement.append(kata18result)