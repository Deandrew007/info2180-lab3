window.onload = function() {
    this.loadBoard()

}

function loadBoard(){
    squares = document.querySelectorAll('#board div');    
    for(let i = 0; i < squares.length; i++){
        squares[i].classList.add("square")
        squares[i].onmouseover = function(){squares[i].classList.toggle("hover",true)}
        squares[i].onmouseout = function(){squares[i].classList.toggle("hover",false)}
     
    }
}