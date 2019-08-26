
var text="";
var i=0;
  while (i<10) {
     text +="The number is" +i+ "</br>";
     i++;
  }
  console.log(text);
//Example 1. Above is an example for the while loop.While the condition is true in a while loop,the code 
//will continue to execute in the while code block.

var text="";
        var i=0;
          do {
             text +="<br>The number is"+i;
             i++;
          }
          while(i<10)
   console.log(text);
//Example 2 above. The difference between the 'do-while' loop and the normal 'while' loop, 
//is that the condition is tested at the end of the block code. This means that you will 
//always be guaranteed that the block of code will be executed at least once.

for (i=0;i<10;i++) {
    text +="The number is" +i+ "</br>";

 }
 console.log(text);
//Example 3 above for-loop. In the for clause, you can specify the initialization, condition
//and incrementer in one statement.
var text="";
        for(i=0;i<3;i++)
        {
        for (j=0;j<2;j++) 
        {
             text +="The number is" +j+ "</br>";
             text +="The number is" +i+ "</br>";
        }
          }
          console.log(text);

//Example 4 above nest loops. We can also nest loops one inside of another.
var text="";
var i=0;
for(;i<5;i++)
{
text+= "The numberis"+i+"</br>"
}
console.log(text);
//Above is the 5th example on how to use a for-loop while omitting the intialization. 

var text="";
var i=0;
for (;i<5;) 
{
    text +="The number is" +i+ "</br>";
i++;
 }
 console.log(text);
 //Above is the 6th example. Use a for loop while omitting the incrementing portion.

var chapters = {1:"Loops", 2:"Decision", 3:"Arrrays"};

var text="";
var i;
for(i in chapters){
    text +=chapters[i];
    text +="</br>";
}
console.log(text);
 //Above is the 7th example of for/in loop. the above Example is used to 
 //showcase how to use for/in loop.

var text="";
for(i=0;i<3;i++)
  {
 text=text+"The valueis"+i;
 text=text+"</br>";
var j=0;
    while(j<2)
    {
text=text+"The value is" +j;
text=text+"</br>";
     j++;
    }
  }

console.log(text);  
//Above is example 8. We can all mix loops by having a whole loop.