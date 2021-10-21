// HINT: You can delete this console.log after you no longer need it!
// We'll use these variables to track the counts of each cookie type
// First, tell us your name
// HINT: Replace this with your own name!


console.log('JavaScript code has loaded!')

let yourName = "Otto Jones" 
document.getElementById('credit').textContent = `Created by ${yourName}`



let gb = 0
let cc = 0     
let sugar = 0  
let total = gb + cc + sugar

// let gingerBreadTotal = document.querySelector('#qty-gb')
// gingerBreadTotal.textContent = gb

// let chocolateChipTotal = document.querySelector('#qty-cc')
// chocolateChipTotal.textContent = cc

// let sugarSprinkleTotal = document.querySelector('#qty-sugar')
// sugarSprinkleTotal.textContent = sugar

// let QuantityTotal = document.querySelector('#qty-total')
// QuantityTotal.textContent = total






document.getElementById('add-gb').addEventListener('click', function() {
    document.querySelector('#qty-gb').textContent = gb + 1
    gb++ 
    document.getElementById("qty-total").textContent =  gb + cc + sugar
    console.log(gb)
})
document.getElementById('minus-gb').addEventListener('click', function() {
    document.querySelector('#qty-gb').textContent = gb - 1
    gb--
    document.getElementById("qty-total").textContent =  gb + cc + sugar
    console.log(gb)
})



document.getElementById('add-cc').addEventListener('click', function() {
    document.querySelector('#qty-cc').textContent = cc + 1
    cc++
    document.getElementById("qty-total").textContent =  gb + cc + sugar
    console.log(cc)
})
document.getElementById('minus-cc').addEventListener('click', function() {
    document.querySelector('#qty-cc').textContent = cc - 1
    cc--
    document.getElementById("qty-total").textContent =  gb + cc + sugar
    console.log(cc)
})



document.getElementById('add-sugar').addEventListener('click', function() {
    document.querySelector('#qty-sugar').textContent = sugar + 1
    sugar++
    document.getElementById("qty-total").textContent =  gb + cc + sugar
    console.log(sugar)
})    
document.getElementById('minus-sugar').addEventListener('click', function() {
    document.querySelector('#qty-sugar').textContent = sugar - 1
    sugar--
    document.getElementById("qty-total").textContent =  gb + cc + sugar
    console.log(sugar)
})




// HINT: You can delete this console.log after you no longer need it!
// TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
// Event listener for clicks on the "+" button for Ginger Bread cookies

// TODO: Hook up event listeners for the rest of the buttons

