/* ========================================================
                1. Insert Clip at specific time
   ======================================================== 
**/

// Initialise our variables that we will use for this section
var trackNr = 0;
var clipNr = 0;

// Get a grip on our sequence
var seq = app.project.activeSequence; 

// Get a grip on the videotracks
var videoTracks = seq.videoTracks;

// Get the source video track
var videoTrack = videoTracks[trackNr];

// Get the source video clip
var videoClip = videoTrack.clips[clipNr];

// Get the source project item
var projItem = videoClip.projectItem;

// Insert at 0 
// videoTrack.insertClip(projItem, 1);
videoTrack.overwriteClip(projItem, 2);

/* ========================================================
              2. Insert Clip at playhead time
   ======================================================== 
**/

// // Initialise our variables that we will use for this section
// var trackNr = 1;
// var clipNr = 0;

// // Get a grip on our sequence
// var seq = app.project.activeSequence; 

// // Get a grip on the videotracks
// var videoTracks = seq.videoTracks;

// // Get the source video track
// var videoTrack = videoTracks[trackNr];

// // Get the source video clip
// var videoClip = videoTrack.clips[clipNr];

// // Get the source project item
// var projItem = videoClip.projectItem;

// // Get the playhead Time object which has ticks and seconds
// var playheadTime = seq.getPlayerPosition()

// // Extract the and seconds
// var playheadSeconds = playheadTime.seconds;

// // videoTrack.insertClip(projItem, playheadSeconds);
// videoTrack.overwriteClip(projItem, playheadSeconds);

/* ========================================================
        3. Insert Clip with altered in and outpoints
   ======================================================== 
**/

// // Initialise our variables that we will use for this section
// var trackNr = 1;
// var clipNr = 0;

// // Get a grip on our sequence
// var seq = app.project.activeSequence; 

// // Get a grip on the videotracks
// var videoTracks = seq.videoTracks;

// // Get the source video track
// var videoTrack = videoTracks[trackNr];

// // Get the source video clip
// var videoClip = videoTrack.clips[clipNr];

// // Get the source project item
// var projItem = videoClip.projectItem;

// // Get the playhead Time object which has ticks and seconds
// var playheadTime = seq.getPlayerPosition()

// // Extract the ticks and seconds
// var playheadSeconds = playheadTime.seconds;

// // videoTrack.insertClip(projItem, playheadSeconds);
// videoTrack.overwriteClip(projItem, playheadSeconds);

/* ========================================================
        4. Wrapping the insertClip in a function
   ======================================================== 
**/

// function insertVideoClip(clipNr, trackNr, time){

// var seq = app.project.activeSequence; 
// var videoTracks = seq.videoTracks;
// var videoTrack = videoTracks[trackNr];
// var videoClip = videoTrack.clips[clipNr];
// var projItem = videoClip.projectItem;

// videoTrack.insertClip(projItem, time);
// }

// insertVideoClip(0,1,1)