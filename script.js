//abh sochenge ki mode kaise pta chalega so go to 
// 1.codemirror clike on google
//2.get all the mime types defined

//for theme go to theme folder and then dracula.css and copy the path
var editor= CodeMirror.fromTextArea(document.getElementById("editor"),{
    mode: "text/x-c++src",
    theme: "dracula",
    lineNumbers:true,
    autoCloseBrackets:true,
})
var width=window.innerWidth
editor.setSize(0.9*width,"600")

var option=document.getElementById("inlineFormSelectPref")
option.addEventListener("change",function(){
    if(option.value=="Java"){
        editor.setOption("mode","text/x-java")
    }
    else if(option.value=="python"){
        editor.setOption("mode","text/x-python")
    }
    else{
        editor.setOption("mode","text/x-c++")
    }
})