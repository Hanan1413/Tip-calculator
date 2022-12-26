

// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)


// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value)
//   console.log(bill)


  // get the tip from user & convert it into a percentage (divide by 100)
   const tipPercentage = Number(tipInput.value) /100

  // get the total tip amount
  const tipAmount  = bill * tipPercentage


  // calculate the total (tip amount + bill)
   const total = tipAmount + bill

  // calculate the per person total (total divided by number of people)
        const perPersonTotal = total / numberOfPeople


    
      
  // update the perPersonTotal on DOM & show it to user
     // perPersonTotalDiv.innerHTML = perPersonTotal
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`





}

calculateBill()







const increasePeople = () =>{

      // increment the amount of people 
     numberOfPeople +=1
    numberOfPeopleDiv.innerText = numberOfPeople 

    //Calculate the bill based on the new number of people
     //cal the functiion calcuateBill and it will handle the new number
    calculateBill()
}


// decreasePeople()



const decreasePeople = () =>{
      // pervent the number of people to go below 1

      if( numberOfPeople <= 1){
            return alert('You can not go below 1' )
      }

      // decrement the amount of people 

    numberOfPeople -=1

//     update inner text of numberOfPeopleDiv
    numberOfPeopleDiv.innerText = numberOfPeople 

    //     Calculate the bill based on the new number of people
//     cal the functiion calcuateBill and it will handle the new number
    calculateBill()
}
