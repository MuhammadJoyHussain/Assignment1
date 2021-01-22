function kilometerToMeter(kilometer){
    var meter;
    if(kilometer<0)
    {
        meter = "Kilometer can't be Negetive";
    }
    else
    {
        meter = kilometer * 1000;
    }
    return meter;
}
var result = kilometerToMeter(16);
console.log(result);



function budgetCalculator(noOfwatch, noOfPhone, noOfLaptop)
 {
     var cost;
     if(noOfwatch<0 || noOfPhone<0 || noOfLaptop<0)
     {
         cost = "Amount can't be less then zero."
     }
     else if(noOfwatch%1!=0 || noOfPhone%1!=0 || noOfLaptop%1!=0)
     {
         cost = "Amount should be integer number";
     }
     else
        cost = 50*noOfwatch + 100*noOfPhone + 500*noOfLaptop;
     return cost;
 }
 var cost = budgetCalculator(5, 10, 15);
 console.log(cost);




 function hotelCost(stay)
 {
     var cost = 0;
     if(stay<0)
     {
         cost = "Noumber of day can't be negetive";
     }
     else
     {
        if(stay>20)
        {
            cost = (stay-20)*50;
            stay = 20;
        }
        if(stay>10)
        {
            cost = cost + (stay-10)*80;
            stay = 10;
        }
        cost = cost + stay*100;
     }
     return cost;
 }
 var hotelCost = hotelCost(21);
 console.log(hotelCost);



 function megaFriend(friendsName)
 {
    var maxName = "";
    var max = 0;
    if(friendsName.length==0)
     return "There is no friends name";
    for(var i=0; i<friendsName.length; i++)
    {
       n = friendsName[i].length;
       for(var j=0; j<n; j++)
       {
           //Check whether the given name is valid or not!
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
 var Name = ["Joynul", "Jafrul", "Rasel", "Salah", "Ashraful", "Kamruzzaman", "Ali"];
 var Fname = megaFriend(Name);
 console.log(Fname);