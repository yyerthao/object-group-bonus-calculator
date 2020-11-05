const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// Regular for loop, commented out, just showing Yer.
/*console.log( employees );
for(let i = 0; i < employees.length; i++){
  console.log(`${employees[i].name}`, bonus(employees[i]));
}*/

for(let x of employees){
  console.log(`${x.name}`, bonus(x)); // template literal to access employee names
}


function bonus(employee){
  let bonusPercentage = 0;
  // Used Number() to convert the string to an integer.
  let totalCompensation = Number(employee.annualSalary);
  let totalBonus = 0;
  // This if else to check review rating
  if(employee.reviewRating === 5){
    bonusPercentage = 0.1;
  } else if(employee.reviewRating === 4){
    bonusPercentage = 0.06;
  } else if(employee.reviewRating === 3){
    bonusPercentage = 0.04;
  }
  // Checking employee number
  if(employee.employeeNumber.length === 4){
    bonusPercentage += 0.05;
  }
  // Checking annual income if greater than 65K
  if(employee.annualSalary > 65000 && bonusPercentage > 0){
    bonusPercentage -= 0.01;
  }
  // Check if employee bonus is greater than 13%
  if(bonusPercentage > 0.13){
    bonusPercentage = 0.13;
  }
  // Calculate totalBonus, used round here so we didn't have any straggling decimal points later.
  totalBonus = Math.round(employee.annualSalary * bonusPercentage);
  // Calculate totalCompensation.
  totalCompensation += Number(totalBonus);
  // Return value is an object with name, bonusPercentage,totalCompensation, totalBonus.
  return {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalBonus: totalBonus,
    totalCompensation: totalCompensation
  };
}




// Comments for Yer
// For of loop can be in the open
// function bonus was input into loop to loop through the employee objects
// to run the conditionals, in order to calculate their bonus percentage
// 3 employees are getting bonuses
// 2 had ratings lower than 2, so they get none.



// Yer's RECAP //

/*    

We created a function with  many conditionals inside that will loop through our employee objects to see
if any of them meet the requirements enough to get a bonus. There are many conditions we
must evaluate in order to properly assess which employee gets the bonus and how much of a bonus.

Some takeaways from this pair coding experience:
- I definitely need to practice coding on edabit.com more
- Definitely appreciate working in pairs, having a second eye is great, not to
mention I really wasn't sure on where to start
- I literally didn't even know that we could do for loops in the open lol , I am sure
I've seen it in tier 1 but I could NOT recall it at all and was stumped by the for of loop
when declared but Julian was great and explained things out thoroughly to me


*/
