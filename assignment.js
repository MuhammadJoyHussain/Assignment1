function kilometerToMeter(kilometer){
    var meter;
    if(kilometer < 0)
    {
        meter = "Kilometer can't be Negetive";
    }
    //1 kilometer = 1000 meter
    else
    {
        meter = kilometer * 1000;
    }
    return meter;
}




//2
function budgetCalculator(numOfwatch, numOfPhone, numOfLaptop)
 {
     if(numOfwatch < 0 || numOfPhone < 0 || numOfLaptop < 0)
     {
         cost = "Amount can't be less then zero."
     }
     // Modulus of a number by 1 because if answer is 0 then it indicate the number is integer.
     else if(numOfwatch %1!= 0 || numOfPhone %1!= 0 || numOfLaptop %1!= 0)
     {
         cost = "Amount should be integer number";
     }
     else
        cost = 50 * numOfwatch + 100 * numOfPhone + 500 * numOfLaptop;
     return cost;
 }




//3
 function hotelCost(stay)
 {
     var cost = 0;
     if(stay < 0)
     {
         cost = "Noumber of day can't be negetive";
     }
     // If the given input is valid then calculated the result.
     else
     {
          /*
            1. Firstly, calculate the cost for greater then 20 days (if the day is >20).
            2. Secondly, calculate the cost for greater then 10 days (if the day is >10).
            3.Finaly, calculate the cost for less then or equal to 10 days (if the day is <=10).
         */
        if(stay > 20)
        {
            cost = (stay-20) * 50;
            stay = 20;
        }
        if(stay > 10)
        {
            cost = cost + (stay-10) * 80;
            stay = 10;
        }
        cost = cost + stay * 100;
     }
     return cost;
 }





//4
 var Name = ["Joynul", "Jafrul", "Rasel", "Salah", "Ashraful", "Kamruzzaman", "Ali"];
 function megaFriend(friendsName)
 {   
    var maxName = "";
    var max = 0;
    
    if(friendsName.length==0)
  
    return "There is no friends name";
    
     for(var i = 0; i < friendsName.length; i++){
       n = friendsName[i].length;
       //nested loop used for access character by character of a string.
       for(var j = 0; j < n; j++)
       {
           //Check whether the given name is valid or not!
           //valid name is always an alphabet(a-z,A-Z) following by space between two separator so check this sequence.
           if( !( (friendsName[i][j]>='a' && friendsName[i][j]<='z')  || (friendsName[i][j]>='A' && friendsName[i][j]<='Z') || friendsName[i][j]==' ') )
           {
               return "Name should contain alphabet";
           }

       }
       if(n > max)
       {
           max = n;
           maxName = friendsName[i];
       }
    }
    return maxName;
 }
 
