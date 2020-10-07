window.onload = function() {
    let squares = document.querySelectorAll('#board div'); 
    let state = true;   

    this.createBoard(squares,state)

}

function createBoard(squares, state){

    for(let i = 0; i < squares.length; i++){
        squares[i].classList.add("square")
        squares[i].onmouseover = function(){squares[i].classList.toggle("hover",true)}
        squares[i].onmouseout = function(){squares[i].classList.toggle("hover",false)}

        squares[i].onclick = function(){
            console.log('helloooo');
    
            if(state) {
             if(squares[i].textContent == "X" || squares[i].textContent == "O"){
                  squares[i].textContent = squares[i].textContent
              }
              else {
                  squares[i].classList.add("X");
                  squares[i].textContent="X";
             
              }
            } else {
                if(squares[i].textContent == 'X' || squares[i].textContent == 'O'){
                    squares[i].textContent = squares[i].textContent;
                } else{
                 squares[i].classList.add("O");
                 squares[i].textContent='O';
                
            }
        }
        squares[i].classList.remove("hover");
        state = !state;
    
    } 
    }
}

