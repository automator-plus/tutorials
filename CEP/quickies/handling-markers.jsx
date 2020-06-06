
/* ========================================================
        1. Add a bland marker to the active sequence
   ======================================================== 
**/

// Get grip on active sequence
var seq = app.project.activeSequence; 

// Get grip on markers
var markers = seq.markers;

// Add a new marker using the MarkerCollection.createMarker method
var newMarker = markers.createMarker(1);
newMarker.end = 2;

/* ========================================================
        2. Add a more detailed marker to the active sequence
   ======================================================== 
**/

// // Add a new marker using the MarkerCollection.createMarker method
// var newMarker2 = markers.createMarker(3);
// newMarker2.setColorByIndex(1);
// newMarker2.name = '😸marker2';
// newMarker2.comments = 'Here are some comments.';
// newMarker2.end = 4;

/* ========================================================
        3. Looking at the defined markers
   ======================================================== 
**/

// var numMarkers = seq.markers.numMarkers;

// for (var current_marker = markers.getFirstMarker(); current_marker !== undefined; current_marker = markers.getNextMarker(current_marker)) {
//     $.writeln(current_marker.name);
//     $.writeln(current_marker.comments);
//     $.writeln(current_marker.start.seconds);
//     $.writeln(current_marker.end.seconds);
//     $.writeln();
// }


/* ========================================================
        4. Seach and delete a marker
   ======================================================== 
**/

// var markerNameToDelete = '😸marker2';

//  for (var current_marker = markers.getFirstMarker(); current_marker !== undefined; current_marker = markers.getNextMarker(current_marker)) {
//     if(current_marker.name == markerNameToDelete){
//         markers.deleteMarker(current_marker);
//     }
//  }
