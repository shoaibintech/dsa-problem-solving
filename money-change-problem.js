// 


const changeProblem=(amount )=>{

   const change = []


      var reminder = amount;
      console.log("change:", reminder)



       while(reminder !=  0){
console.log("rem", reminder)
        if(reminder >= 5000 && reminder % 5000 > 0 ){
console.log("rem in 5000" , reminder % 5000)
       change.push({
        note:5000,
        quantity: reminder / 5000, })
        reminder = reminder % 5000

        }else if( reminder >= 1000  && reminder % 1000 > 0 ){

          change.push({
            note:1000,
            quantity: reminder / 1000, })
            reminder = reminder % 1000

        }else if( reminder >= 500 && reminder % 500 >= 0 ){

          change.push({
            note:500,
            quantity: reminder / 500, })
            reminder = reminder % 500
        }else if(reminder >= 100 &&  reminder % 100 >= 0 ){
          change.push({
            note:100,
            quantity: reminder / 100, })
            reminder = reminder % 100

        }else if( reminder >= 50 && reminder % 50 >= 0 ){
          change.push({
            note:50,
            quantity: reminder / 50, })
            reminder = reminder % 50

        }else if(reminder >= 20 && reminder % 20 >= 0 ){
          change.push({
            note:20,
            quantity: reminder / 20, })
            reminder = reminder % 20

        }else if(reminder >= 10 && reminder % 10 >= 0 ){

   change.push({
            note:10,
            quantity: reminder / 10, })
            reminder = reminder % 10
        }else if(reminder >= 5 && reminder % 5 >= 0 ){
          change.push({
            note:5,
            quantity: reminder / 5, })
            reminder = reminder % 5
        }else if(reminder >= 1 && reminder % 1 >= 0 ){
          change.push({
            note:1,
            quantity: reminder / 1, })
            reminder = reminder % 1
        }


       
        


       }

       console.log("change:", change)

    }


  console.log("change problem:", changeProblem(6525))