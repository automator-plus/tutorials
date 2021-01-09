/* ========================================================
        1. Moving to left and right markers
        See https://raw.githubusercontent.com/automator-plus/tutorials/master/ExtendScript/9-move-player/edit-points.jsx 
        for comments on how the below code works
   ======================================================== 
**/

var seq = app.project.activeSequence;
var markers = seq.markers;
var startTicks = [];

for (
  var current_marker = markers.getFirstMarker();
  current_marker !== undefined;
  current_marker = markers.getNextMarker(current_marker)
) {
  startTicks.push(current_marker.start.ticks);
}

var curPlayerPos = seq.getPlayerPosition().ticks;

var differenceArr = startTicks.map(function (value) {
  return Number(value) - Number(curPlayerPos);
});

var direction = "Right";

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

/* ========================================================
        2. Wrapping it in a function
   ======================================================== 
**/
moveToMarker = function (direction) {
  var seq = app.project.activeSequence;
  var markers = seq.markers;
  var startTicks = [];

  for (
    var current_marker = markers.getFirstMarker();
    current_marker !== undefined;
    current_marker = markers.getNextMarker(current_marker)
  ) {
    startTicks.push(current_marker.start.ticks);
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
