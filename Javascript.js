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
