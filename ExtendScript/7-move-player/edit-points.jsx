/* ========================================================
        1. Moving to left and right edit point
   ======================================================== 
**/

var seq = app.project.activeSequence; //Get the "normal" active sequence
var startTicks = []; //declare array to hold all of the start ticks
var nrTracks = seq.videoTracks.numTracks;
for (var trackNr = 0; trackNr < nrTracks; trackNr++) {
  var videoTrack = seq.videoTracks[trackNr]; //Get a grip on our video track
  var nrClips = videoTrack.clips.numItems; //Get the number of clips

  // Loop through all the clips to get the start ticks of each clip
  for (var clipNr = 0; clipNr < nrClips; clipNr++) {
    var clip = videoTrack.clips[clipNr]; //Get a grip on the current clip
    var clipStartTicks = clip.start.ticks; //Get the start ticks
    startTicks.push(clipStartTicks); //Add the current clip's start ticks to the array
  }
}

// Get the current position of the player
var curPlayerPos = seq.getPlayerPosition().ticks;

// Calculate the difference between each edit point and the current player position
var differenceArr = startTicks.map(function (value) {
  return Number(value) - Number(curPlayerPos);
});

// Set the direction we want to move
var direction = "Right";

if (direction === "Left") {
  // If the edit point is to the left then the difference will be negative
  // so we filter for only the negative value
  var editPointsToTheLeft = differenceArr.filter(function (v) {
    return v < 0;
  });
  // We would like to nearest value to the player position, so we would like to sort
  // but as the values are negative we need to sort decending to get the closest value
  editPointsToTheLeft = editPointsToTheLeft.sort(function (a, b) {
    return b - a;
  });
  //   Use the 0'th difference and add the current player position again
  var editPointToMoveTo = editPointsToTheLeft[0] + Number(curPlayerPos);
} else {
  // If the edit point is to the right then the difference will be negative
  // so we filter for only the negative value
  var editPointsToTheRight = differenceArr.filter(function (v) {
    return v > 0;
  });

  // We would like to nearest value to the player position, so we would like to sort
  // here the values are positive so we use the default ascending order of javascript
  editPointsToTheRight = editPointsToTheRight.sort(function (a, b) {
    return a - b;
  });
  //   Use the 0'th difference and add the current player position again
  var editPointToMoveTo = editPointsToTheRight[0] + Number(curPlayerPos);
}

seq.setPlayerPosition(editPointToMoveTo.toString());

/* ========================================================
        2. Wrapping it in a function
   ======================================================== 
**/

moveToEditPoint = function (direction) {
  var seq = app.project.activeSequence;
  var startTicks = [];
  var nrTracks = seq.videoTracks.numTracks;
  for (var trackNr = 0; trackNr < nrTracks; trackNr++) {
    var videoTrack = seq.videoTracks[trackNr];
    var nrClips = videoTrack.clips.numItems;

    for (var clipNr = 0; clipNr < nrClips; clipNr++) {
      var clip = videoTrack.clips[clipNr];
      var clipStartTicks = clip.start.ticks;
      startTicks.push(clipStartTicks);
    }
  }

  var curPlayerPos = seq.getPlayerPosition().ticks;

  var differenceArr = startTicks.map(function (value) {
    return Number(value) - Number(curPlayerPos);
  });

  if (direction === "Left") {
    var editPointsToTheLeft = differenceArr.filter(function (v) {
      return v < 0;
    });
    editPointsToTheLeft = editPointsToTheLeft.sort(function (a, b) {
      return b - a;
    });
    var editPointToMoveTo = editPointsToTheLeft[0] + Number(curPlayerPos);
  } else {
    var editPointsToTheRight = differenceArr.filter(function (v) {
      return v > 0;
    });
    editPointsToTheRight = editPointsToTheRight.sort(function (a, b) {
      return a - b;
    });
    var editPointToMoveTo = editPointsToTheRight[0] + Number(curPlayerPos);
  }

  seq.setPlayerPosition(editPointToMoveTo.toString());
};
