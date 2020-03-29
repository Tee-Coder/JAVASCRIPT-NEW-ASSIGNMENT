function myFunction()
{
var x = document.getElementById("year").value;
var y = document.getElementById("century");
var Century;
if (x > 900 && x < 1001)
{
    y.value  = "This is the 10th century";
    /*Century = "This is 11th century"*/
}

/*document.getElementById("demo").innerHTML = "This is 11th century";*/

else if (x > 1000 && x < 1101)
{
    y.value  = "This is the 11th century";
    /*Century = "This is 11th century"*/
}



else if (x > 1500 && x < 1601)
{
    y.value  = "This is the 16th century";
    /*Century = "This is 11th century"*/
}

else if (x > 1600 && x < 1701)
{
    y.value  = "This is the 17th century";
    /*Century = "This is 11th century"*/
}


else if (x > 1700 && x < 1801)
{
    y.value  = "This is the 18th century";
    /*Century = "This is 11th century"*/
}


else if (x > 1800 && x < 1901)
{
    y.value  = "This is the 19th century";
    /*Century = "This is 11th century"*/
}


else if (x > 1900 && x < 2001)
{
    y.value  = "This is the 20th century";
    /*Century = "This is 11th century"*/
}


else if (x > 2000 && x < 2101)
{
    y.value  = "This is the 21th century";
    /*Century = "This is 11th century"*/
}
else
{
    alert ("The century you want wasnt added");
}

}
