var videoTrackNr = 0;
var audioTrackNr = 0;
var overwrite = false;

var project = app.project;
var sequence = project.activeSequence;

var videoTracks = sequence.videoTracks;
var track = videoTracks[videoTrackNr];
var clips = track.clips;
var thisClip = clips[0];
var nextClip = clips[2];
var nextClipAudio = sequence.audioTracks[audioTrackNr].clips[2];

var thisClipEnd = thisClip.end;

var nextClipProjectItem = nextClip.projectItem;

if (overwrite) {
  sequence.overwriteClip(
    nextClipProjectItem,
    thisClipEnd,
    videoTrackNr,
    audioTrackNr
  );
} else {
  sequence.insertClip(
    nextClipProjectItem,
    thisClipEnd,
    videoTrackNr,
    audioTrackNr
  );
}

nextClip.remove(false, true); // inRipple, inAlignToVideo
nextClipAudio.remove(false, true); // inRipple, inAlignToVideo
