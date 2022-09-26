getId("generateBtn").addEventListener("click", function(){
    getId("generateInput").value= Math.ceil(Math.random() * Math.pow(10,8));
    getId("inputSection").style.display= "block";
    getId("tryLeft").innerText= 3;
    getId("disableBtn").style.display= "none";
    getId("submitBtn").style.display= "block";
    getId("try").style.display= "block";
});

for (let index = 0; index < 10; index++) {
    button("" + index);
    
}

function button(buttonId){
    getId(buttonId).addEventListener("click", function(){
        getId("typeInput").value= getId("typeInput").value + buttonId;
    }); 
}
getId("submitBtn").addEventListener("click", function(){
    if(parseFloat(getId("tryLeft").innerText) <= 1){
        getId("didNOtMatch").style.display= "block";
        getId("matched").style.display= "none";
        getId("try").style.display= "none";
        getId("disableBtn").style.display= "block";
        getId("submitBtn").style.display= "none";
    }
    else{
        if(parseFloat(getId("typeInput").value) == parseFloat(getId("generateInput").value)) {
            getId("try").style.display= "none";
            getId("matched").style.display= "block";
            getId("didNOtMatch").style.display= "none";
            getId("disableBtn").style.display= "block";
            getId("submitBtn").style.display= "none";

        }
        else{
            getId("tryLeft").innerText= parseFloat(getId("tryLeft").innerText)-1;
            getId("didNOtMatch").style.display= "block";
            getId("matched").style.display= "none";
            getId("disableBtn").style.display= "none";
            getId("submitBtn").style.display= "block";
        }
    }
});
function getId(id) {
    return document.getElementById(id);
}