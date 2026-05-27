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
<!DOCTYPE html>
<html>

<head>
    <title>Calculator</title>
</head>

<body>

<input type="number" id="num1">

<input type="number" id="num2">

<br><br>

<button id="addBtn">Add</button>

<button id="subBtn">Subtract</button>
<button id="mul">multipy</button>

<h2 id="res">Result:</h2>

<script>

let bi = document.querySelector("#addBtn");

let bis = document.querySelector("#subBtn");

let res = document.querySelector("#res");
let s=document.querySelector("#mul");
if (num1=="") {
    res.innerHTML="error";
}



function add(a,b){

    return a+b;

}



function sub(a,b){

    return a-b;

}
function mul(a,b){
    return a*b;
}
s.addEventListener("click",function(){
    let num1=Number(document.querySelector("#num1").value);
    let num2=Number(document.querySelector("#num2").value);
    if (num1==""||num2=="") {
    res.innerHTML="error";
}
else{

    let result=mul(num1,num2);
    res.innerHTML= result;
}
});


bi.addEventListener("click", function(){

    let num1 = Number(document.querySelector("#num1").value);

    let num2 = Number(document.querySelector("#num2").value);

    let result = add(num1, num2);

    res.innerHTML = "Result: " + result;

});



bis.addEventListener("click", function(){

    let num1 = Number(document.querySelector("#num1").value);

    let num2 = Number(document.querySelector("#num2").value);

    let result = sub(num1, num2);

    res.innerHTML = "Result: " + result;

});

</script>

</body>

</html>
