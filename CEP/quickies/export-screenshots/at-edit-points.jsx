app.enableQE(); //Enable Quality Engineering API - not supported by Adobe and a deep rabbit hole
var sqe = qe.project.getActiveSequence();  //Get the QE active sequence object

var seq = app.project.activeSequence; //Get the "normal" active sequence

var trackNr = 0; //We are only looking at clips on track 0 (track 1) 
var videoTrack = seq.videoTracks[trackNr]; //Get a grip on our video track
var nrClips = videoTrack.clips.numItems; //Get the number of clips

// Loop through all the clips
    // Set the playhead to the start of each clip
    // Export a screenshot
for(var clipNr = 0; clipNr < nrClips; clipNr++){
    var clip = videoTrack.clips[clipNr]; //Get a grip on the current clip
    var clipStartTicks = clip.start.ticks; //Get the start ticks

    seq.setPlayerPosition(clipStartTicks); //Set the playhead to the clip's start position

    var playheadTime = sqe.CTI.timecode; // CTI = Current Time Indicator of playhead
    var outputPath = new File("~/Desktop"); //Get the full filepath of a folder
    var outputFileName = outputPath.fsName + '/file_' + clipNr + '.png'; //Add the filename to the filepath

    sqe.exportFramePNG(playheadTime, outputFileName); //Export the frame at the playhead
}
