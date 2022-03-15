async function output(){
    try{
        var cc=document.getElementById("main").value;
        console.log(cc);
        var res=await fetch(`https://emojihub.herokuapp.com/api/random/group_${cc}`);
        var res1=await res.json();
        console.log(res1);
    
    }
    catch(error)
        {
            console.log("Please enter correct emoji group");
        }
    }