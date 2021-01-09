/* ========================================================
        1. Random clip start on track 1
   ======================================================== 
**/
var seq = app.project.activeSequence; //Get the "normal" active sequence

var trackNr = 0; //We are only looking at clips on track 0 (track 1)
var videoTrack = seq.videoTracks[trackNr]; //Get a grip on our video track
var nrClips = videoTrack.clips.numItems; //Get the number of clips
var startTicks = []; //declare array to hold all of the start ticks

// Loop through all the clips to get the start ticks of each clip
for (var clipNr = 0; clipNr < nrClips; clipNr++) {
  var clip = videoTrack.clips[clipNr]; //Get a grip on the current clip
  var clipStartTicks = clip.start.ticks; //Get the start ticks
  startTicks.push(clipStartTicks); //Add the current clip's start ticks to the array
}

var rand = Math.random(); //We can use Math.random to genreate a random number between 0 and 1
// However, a decimal number between 0 and 1 isn't that useful, so we use the function below to
// generate a number between min and max
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Get a random number between 0 and the number of start ticks we've pushed to the startTicks array (startTicks.length - 1)
var randClipIndx = getRandomNumberBetween(0, startTicks.length - 1);

seq.setPlayerPosition(startTicks[randClipIndx]); //Set the playhead to the random clip's start position

/* ========================================================
        2. Random clip start on multiple tracks
   ======================================================== 
**/

// var startTicks = []; //declare array to hold all of the start ticks
// var nrTracks = seq.videoTracks.numTracks;
// for (var trackNr = 0; trackNr < nrTracks; trackNr++) {
//   var videoTrack = seq.videoTracks[trackNr]; //Get a grip on our video track
//   var nrClips = videoTrack.clips.numItems; //Get the number of clips

//   // Loop through all the clips to get the start ticks of each clip
//   for (var clipNr = 0; clipNr < nrClips; clipNr++) {
//     var clip = videoTrack.clips[clipNr]; //Get a grip on the current clip
//     var clipStartTicks = clip.start.ticks; //Get the start ticks
//     startTicks.push(clipStartTicks); //Add the current clip's start ticks to the array
//   }
// }

// //Get a random number between 0 and the number of start ticks we've pushed to the startTicks array (startTicks.length - 1)
// var randClipIndx = getRandomNumberBetween(0, startTicks.length - 1);

// seq.setPlayerPosition(startTicks[randClipIndx]); //Set the playhead to the random clip's start position
