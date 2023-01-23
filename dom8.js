function clicked ()
{
    var myname=document.getElementById('name').value
    var myemail=document.getElementById('email').value

    alert("login success")


    var strname=localStorage.setItem("myname",myname)
    var stremail=localStorage.setItem("myemail",myemail)



}