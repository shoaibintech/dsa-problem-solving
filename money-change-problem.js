const changeProblem=(amount )=>{

  const change = []

const notes =[5000,1000,500,100,50,20,10,5,1 ]
     var reminder = amount;
     var i =0;
     console.log("change:", reminder)



      while(reminder !=  0){
console.log("rem", reminder)
       if(reminder >= notes[i] && reminder % notes[i] > 0 ){

      change.push({
       note: notes[i],
       quantity:  parseInt(reminder / notes[i]), })
       reminder = reminder % notes[i]
       i++;

       }


      
       


      }

    return change

   }


 console.log("change :", changeProblem(9999))