function myFunction()
{
var x = document.getElementById("year").value;
var y = document.getElementById("century").value;

if (x > 1000 && x < 1101)
{
    document.getElementById("century").innerHTML = "This is the 11th a  century";
}

else
{
    alert("not a century");

}
}
