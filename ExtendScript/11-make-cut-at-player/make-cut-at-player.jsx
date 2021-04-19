// Enable Quality Enginering library
app.enableQE();

// Get the active QE sequence
var sqe = qe.project.getActiveSequence();
// We need the playertime, but not in the normal Time() format, but rather in the format "00:00:03:38"
var playerTime = sqe.CTI.timecode;
// QE has a razor method that can be called on a sequence object
sqe.razor(playerTime);

// Next, to illustrate how you might go about working with the
// timecode string let's make a cut on the sequence
// at every 5 frames

// For that we'll need the videoFrameRate
var videoFrameRate = sqe.videoFrameRate;
var cutAtEveryFrame = 5;
// And we'll need to know when to stop,
// so we'll need the end time of the last
// clip on track 1, for that we'll use
// the normal sequence object

var seq = app.project.activeSequence;

var trackNr = 0; //We are only looking at clips on track 0 (track 1)
var videoTrack = seq.videoTracks[trackNr]; //Get a grip on our video track
var clips = videoTrack.clips;
var nrClips = clips.numItems; //Get the number of clips

var lastClip = clips[nrClips - 1];
var endSeconds = lastClip.end.seconds;

var playerSeconds = 0;
var playerFrame = 0;

while (playerSeconds < endSeconds) {
  playerFrame += cutAtEveryFrame;
  if (playerFrame >= videoFrameRate) {
    playerFrame = playerFrame % videoFrameRate;
    playerSeconds += 1;
  }

  var playerSecondsString = playerSeconds.toString();
  var playerFrameString = playerFrame.toString();

  playerSecondsString =
    playerSecondsString.length === 1
      ? "0" + playerSecondsString
      : playerSecondsString;
  playerFrameString =
    playerFrameString.length === 1
      ? "0" + playerFrameString
      : playerFrameString;

  var cti = "00:00:" + playerSecondsString + ":" + playerFrameString;
  $.writeln(cti);
  sqe.razor(cti);
}

// Ok cool, but not very useful - but what if we changed every second clip?
var nrClips = clips.numItems; //Get the number of clips, we've changed the sequennce, so we need to check again

for (var clipNr = 0; clipNr < nrClips; clipNr++ ) {

  if (clipNr % 2 === 0) {
    // Get the source video clip
    var videoClip = videoTrack.clips[clipNr];

    var effects = videoClip.components;
    // Lets change the scale of the first image:
    var currentScale = effects[1].properties[1].getValue();
    // var adjustedScale = currentScale * 1.5;
    var adjustedScale = currentScale * (1+clipNr/nrClips);
    effects[1].properties[1].setValue(adjustedScale, true);
  }
}
