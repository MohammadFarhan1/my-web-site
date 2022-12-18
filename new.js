function palindrome(){
    var x = document.getElementById("1").value;
    var y="";
    for(i=x.length-1;i>=0;i--)
    {
        y+=x[i];
    }
    if(x==y)
    {
        alert("This is Palindrome");
    }
    else
     {
        alert("This is not Palindrome");
     }
}