// Code your solution in this file!


function array (number = null){
  
let drivers = [
    "Antonia",
    "Nuru",
    "Amari",
    "Mo",
]
return drivers[number]

};


function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}

returnFirstTwoDrivers();

function returnLastTwoDrivers(drivers){
    return drivers.slice(2,4)
}

function selectDifferentDrivers(driversofArray, func){
   return func(driversofArray)
     }



/*
function selectingDrivers(which) {
    let drivers = [
    returnFirstTwoDrivers(),
    returnLastTwoDrivers(),
]
   return drivers[which]
   

  let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
  ]

  
  


function createFareMultiplier(ride){
   return function faremultiplier (fairQuintiplier){
      return  fairQuintiplier * ride 
   } 
   
} /* doubt on the function part*/


const fareDoubler  = createFareMultiplier(2)  /*cheatingmaking fair=1*/



const fareTripler  = createFareMultiplier(3)  /*cheatingmaking fair=1*/


/*
function selectDifferentDrivers (
      drivers = [ "Antonia",  "Nuru",  "Amari",  "Mo", ] , returnFirstTwoDrivers){
 return drivers = [ "Antonia",  "Nuru",  "Amari",  "Mo", ]


      }

      */

      
const gifts =[
        `teddybear`,
          `pizza`,
          `album`,
        ]
      function wrapgifts(people){
        for (let i =0; i<people.length; i++){
        console.log(`The ${people[i]} is wrapped, next!`)
          
        }
        return(people);
      }
      
      wrapgifts(gifts);



 function selectDifferentDrivers(drivers){
    if (drivers == "first" ){
        return returnFirstTwoDrivers();
     } else if (drivers == "last"){
        return returnLastTwoDrivers()
        ();
     }

}


/*
function fareDoubler(fair){
    let total = fair * 2
    return total
}
*/




/*
function returnFirstTwoDrivers(drivers){
    return (array(0),array(1))
    )
};

*/


