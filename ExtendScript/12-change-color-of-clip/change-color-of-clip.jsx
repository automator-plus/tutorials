var COLOR_LABEL_LOOKUP = {
  Violet: 0,
  Iris: 1,
  Caribbean: 2,
  Lavender: 3,
  Cerulean: 4,
  Forest: 5,
  Rose: 6,
  Mango: 7,
  Purple: 8,
  Blue: 9,
  Teal: 10,
  Magenta: 11,
  Tan: 12,
  Green: 13,
  Brown: 14,
  Yellow: 15,
};

var PROJECT_ITEM_MEDIATYPES = {
  Video: 1,
  Audio: 2,
  Both: 4,
};

var seq = app.project.activeSequence; //Get a grip on the active sequence
var trackNr = 0; //We are only looking at clips on track 0 (track 1)
var videoTrack = seq.videoTracks[trackNr]; //Get a grip on our video track
var clips = videoTrack.clips; //Get a grip on all the clips
var nrClips = clips.numItems; //Get the number of clips

// These are additional setting we can set
// if we want the clips we are inserting to
// go to a different track than our source.
// For now we'll just keep them the same
var dstVideoTrackNr = trackNr;
var dstAudioTrackNr = trackNr;

// We'll need the orignal project items, to
// set the clip's to their original color if
// we want to
var originalColors = {};
for (var clipNr = 0; clipNr < nrClips; clipNr++) {
  var clip = clips[clipNr];
  var projItem = clip.projectItem;
  originalColors[projItem.nodeId] = projItem.getColorLabel();
}

// Loop through the clips
for (var clipNr = 0; clipNr < nrClips; clipNr++) {
  var clip = clips[clipNr];
  if (clip) {
    var projItem = clip.projectItem; // Get the projectItem for the trackItem (clip)
    var clipInPoint = clip.inPoint; // Get the inpoint relative to the project item for the current clip
    var clipOutPoint = clip.outPoint; // We need the in and outpoint to adjust the project item before we insert
    var duration = clip.duration.seconds;
    // Below we set the in and out points for the project item, for both the video and audio clip
    projItem.setInPoint(clipInPoint, PROJECT_ITEM_MEDIATYPES["Both"]);
    projItem.setOutPoint(clipOutPoint, PROJECT_ITEM_MEDIATYPES["Both"]);

    // Below we decide what conditions we would like to use to color our clips
    if (duration < 1) {
      projItem.setColorLabel(COLOR_LABEL_LOOKUP["Rose"]);
    } else if (duration >= 1 && duration < 2) {
      projItem.setColorLabel(COLOR_LABEL_LOOKUP["Mango"]);
    } else {
      projItem.setColorLabel(originalColors[projItem.nodeId]);
    }
    // Overwrite the original clip, making it appear that only the color changed
    seq.overwriteClip(projItem, clip.start, dstVideoTrackNr, dstAudioTrackNr);
  }
}

// Lastly we clean up after ourselves by resetting
// the colors and in/out points of the project items
for (var clipNr = 0; clipNr < nrClips; clipNr++) {
  var clip = clips[clipNr];
  var projItem = clip.projectItem;
  projItem.setColorLabel(originalColors[projItem.nodeId]);
  projItem.clearInPoint(PROJECT_ITEM_MEDIATYPES["Both"]);
  projItem.clearOutPoint(PROJECT_ITEM_MEDIATYPES["Both"]);
}