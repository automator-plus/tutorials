/* ========================================================
        1. Saving and setting player position
   ======================================================== 
**/

var seq = app.project.activeSequence; //Get the "normal" active sequence
var savedPosition = seq.getPlayerPosition(); //Save the position
seq.setPlayerPosition(savedPosition.ticks); //Set the position

/* ========================================================
    2. Saving and setting player position using functions
   ======================================================== 
**/


function savePos(){
    $.savedPosition = seq.getPlayerPosition();
}

function setPos(){
    seq.setPlayerPosition($.savedPosition.ticks); //Set the position
}