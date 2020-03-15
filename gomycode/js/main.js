var testInput = document.getElementById("myText")

function makeBold(){
    if(testInput.style.fontWeight== "") {testInput.style.fontWeight="bold"}
    else {
        testInput.style.fontWeight="" }
    
    }

function makeItalic (){
    if(testInput.style.fontStyle=="normal"){testInput.style.fontStyle="italic"}
    else{
        testInput.style.fontStyle="normal" }

}

function makeUnderligne(){
        if(testInput.style.textDecoration=="underline"){testInput.style.textDecoration="none"}
        else{
            testInput.style.textDecoration="underline" }
        
}

document.querySelector('#size').addEventListener('change',function(){
    testInput.style.fontSize = document.querySelector('#size').value
})

document.querySelector('#police').addEventListener('change',function(){
    testInput.style.fontFamily = document.querySelector('#police').value
})





setTimeout(function(){
    



},5000)

setInterval(function(){
    
},3000);

$(".img").hover(function(){
    $(this).css("opacity",0.5)
    $(this).children("button").show();

},function(){
    $(this).css("opacity",1)
    $(this).children("button").hide();
})

