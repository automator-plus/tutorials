
/* ========================================================
        1. Add a bland marker to the active sequence
   ======================================================== 
**/

// Get grip on active sequence
var seq = app.project.activeSequence; 

// Get grip on markers
var makers = seq.markers;

// Add a new marker using the MarkerCollection.createMarker method
var newMarker = makers.createMarker(1);
newMarker.end = 2;

/* ========================================================
        2. Add a more detailed marker to the active sequence
   ======================================================== 
**/

// Add a new marker using the MarkerCollection.createMarker method
// var newMarker2 = markers.createMarker(3);
// newMarker2.setColorByIndex(2);
// newMarker2.name = '😅marker2';
// newMarker2.comments = 'Here are some comments.';
// newMarker2.end = 4;

/* ========================================================
        3. Looking at the defined markers
   ======================================================== 
**/

// var numMarkers = seq.markers.numMarkers;

// for(var i = 0; i < 10; i++){
//         var _ = markers.createMarker(i);
//         _.setColorByIndex(i%8);
//         _.name = "Marker #"+i;
// }

// for (var current_marker = markers.getFirstMarker(); 
//         current_marker !== undefined; 
//         current_marker = markers.getNextMarker(current_marker)) {
//     $.write(current_marker.name + ', ');
//     $.write(current_marker.comments + ', ');
//     $.write(current_marker.start.seconds + ', ');
//     $.write(current_marker.end.seconds + ', ');
//     $.writeln();
// }


/* ========================================================
        4. Seach and delete a marker
   ======================================================== 
**/

// var markerNameToDelete = 'Marker #1';

//  for (var current_marker = markers.getFirstMarker(); 
//         current_marker !== undefined; 
//         current_marker = markers.getNextMarker(current_marker)) {

//         if(current_marker.name == markerNameToDelete){
//                 markers.deleteMarker(current_marker);
//         }

//  }
