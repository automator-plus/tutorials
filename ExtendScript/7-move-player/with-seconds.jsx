/* ========================================================
        1. Moving to defined seconds
   ======================================================== 
**/

// Get active sequence
var seq = app.project.activeSequence;

// Get the current player position in seconds
var curPlayerPosSeconds = seq.getPlayerPosition().seconds;

// Set the seconds we want to move, negative if we want to move backwards
var secondsToMove = 4;

// Calculate the new player position in seconds
var newPlayerPosSeconds = curPlayerPosSeconds + secondsToMove;

// Create a new Time object so that we can convert our seconds to ticks
var newPlayerPos = new Time();

// Set the seconds attribute of our Time object
newPlayerPos.seconds = newPlayerPosSeconds;
// Use the Time object's .ticks attribute to set the new player position
seq.setPlayerPosition(newPlayerPos.ticks);

/* ========================================================
        2. Wrapping it in a function
   ======================================================== 
**/

moveWithSeconds = function (secondsToMove) {
  var seq = app.project.activeSequence;
  var curPlayerPosSeconds = seq.getPlayerPosition().seconds;
  var newPlayerPosSeconds = curPlayerPosSeconds + secondsToMove;
  var newPlayerPos = new Time();
  newPlayerPos.seconds = newPlayerPosSeconds;
  seq.setPlayerPosition(newPlayerPos.ticks);
};
