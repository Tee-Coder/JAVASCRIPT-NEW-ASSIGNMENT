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
}

else if (x > 1100 && x < 1201)
{
    y.value  = "This is the 12th century";
}

else if (x > 1200 && x < 1301)
{
    y.value  = "This is the 13th century";
}

else if (x > 1300 && x < 1401)
{
    y.value  = "This is the 14th century";
}

else if (x > 1400 && x < 1501)
{
    y.value  = "This is the 15th century";
}

else if (x > 1500 && x < 1601)
{
    y.value  = "This is the 16th century";
    
}

else if (x > 1600 && x < 1701)
{
    y.value  = "This is the 17th century";
}


else if (x > 1700 && x < 1801)
{
    y.value  = "This is the 18th century";
}


else if (x > 1800 && x < 1901)
{
    y.value  = "This is the 19th century";
}


else if (x > 1900 && x < 2001)
{
    y.value  = "This is the 20th century";
}


else if (x > 2000 && x < 2101)
{
    y.value  = "This is the 21th century";
}
else
{
    alert ("The century you want wasn't added");
}

}
