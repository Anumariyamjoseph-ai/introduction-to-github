<body>
    <button id="in">increase</button>
    <button id="de">decrease</button>
    <button id="re">reset</button>
    <h1 id="count">0</h1>
    <script type="text/javascript" charset="utf-8">
    let coun=0;
    let inc=document.querySelector("#in");
    let dec=document.querySelector("#de");
    let cou=document.querySelector("#count");
    let res=document.querySelector("#re");
    inc.addEventListener("click",function(){
        coun++;
        cou.innerHTML=coun;
        
        
    });
    dec.addEventListener("click",function(){
        coun--;
        cou.innerHTML=coun;
    });
    res.addEventListener("click",function(){
        coun=0;
        cou.innerHTML=coun;
    });
        
    </script>
</body>


<!DOCTYPE html>
<html>
<head>
    <title>Form Validation</title>
</head>

<body>

<h1>Simple Form</h1>

<input type="text" id="na" placeholder="Enter name">

<input type="password" id="pa" placeholder="Enter password">

<input type="number" id="age" placeholder="Enter age">

<button id="bu">Submit</button>

<p id="para"></p>

<script>

let sub = document.querySelector("#bu");

let mes = document.querySelector("#para");

sub.addEventListener("click", function(){

    let name = document.querySelector("#na").value;

    let age = document.querySelector("#age").value;

    let pass = document.querySelector("#pa").value;

    if(name == ""){
        mes.innerHTML = "Enter name please";
    }

    else if(pass == ""){
        mes.innerHTML = "Enter password";
    }

    else if(age < 18){
        mes.innerHTML = "Age not accepted";
    }

    else{
        mes.innerHTML = "Successful Login";
    }

});

</script>

</body>
</html>
