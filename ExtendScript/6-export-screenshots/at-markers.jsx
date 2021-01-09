

app.enableQE(); //Enable Quality Engineering API -not supported by Adobe
var sqe = qe.project.getActiveSequence();  //Get the QE active sequence object

var seq = app.project.activeSequence; //Get the "normal" active sequence
var markers = seq.markers; //Get all the markers

// Loop through all the markers
    // Set the playhead to the start of each marker
    // Export a screenshot
 for (var current_marker = markers.getFirstMarker();    
        current_marker !== undefined; 
        current_marker = markers.getNextMarker(current_marker)) {

        var markerStartTicks = current_marker.start.ticks; //Get the start ticks for the marker

        seq.setPlayerPosition(markerStartTicks); //Set the playhead position to the marker's start ticks

        var playheadTime = sqe.CTI.timecode; // CTI = Current Time Indicator of playhead
        var outputPath = new File("~/Desktop"); //Get the full filepath of a folder
        var outputFileName = outputPath.fsName + '/file_' + markerStartTicks + '.png'; //Add the filename to the filepath

        sqe.exportFramePNG(playheadTime, outputFileName); //Export the frame at the playhead

 }
