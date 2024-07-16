// Generating random number

// 1 -  math (generating random num)
//math.ramdom() -> 0 to 1  
//  // refresh ctrl + r
// let randomNumber = parseInt( Math.random() * 10)

// console.log(randomNumber);

// // 2 - using the rando js 

// console.log(rando(5,10));

let userNumber = document.getElementById('number');

let result = document.getElementById('result');

let btn = document.getElementById('btn');

btn.addEventListener('click',() => {

    if(userNumber.value === ''){
      //  alert('please provide the number')
        return
    }

    let number = parseInt(userNumber.value)

    let randomNumber = parseInt(Math.random() * 10)
    // result.innerHTML = randomNumber
    if(randomNumber >= 7){
       if(Number > 7){
        result.innerHTML = randomNumber + " "+ "You win"
        result.style.color = 'green'
    }else{
         result.innerHTML = randomNumber + " "+ "You loss "
        result.style.color = 'red'
        
    }
}  
else{
       if(Number < 7){
        result.innerHTML = randomNumber + " "+ "You win"
        result.style.color = 'green'
    }else{
    result.innerHTML = randomNumber + " "+ "You Loss"
        result.style.color = 'red'
    }
}
})

