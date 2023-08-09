var index=0;

function changeColors() {
    var colors=["red", "blue", "orange","purple","yellow","green","black"]

    document.getElementsByTagName("body")[0].style.background=colors[index++];
    var len=colors.length
    if(index>len-1)
    index=0;
}