function myFunction()
{
var x = document.getElementById("year").value;
/*var y = document.getElementById("century");*/

if (x > 1000 && x < 1101)
{
    document.getElementById("demo").innerHTML = "This is a new value";
}
else
{
    alert("not a century");

}
}
