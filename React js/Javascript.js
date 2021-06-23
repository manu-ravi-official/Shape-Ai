function welcome(name,age,address)
{   
alert("Your Name is : " + name + " nice to meet you");
alert("Your age is : " + age );
alert("Your Address is : "+address);
var dogyears=age/15;
return dogyears;
}
var name=prompt("enter name : ");
var age=prompt("enter age : ");
var address=prompt("enter address : ");
var dog=welcome(name,age,address);
alert("Your Age in Dog Years : " + dog);
