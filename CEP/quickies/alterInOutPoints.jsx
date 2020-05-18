var ONE_SECOND_IN_TICKS = 254016000000;

// Audio clips' in and out point
var tracks = app.project.activeSequence.videoTracks;
var clips = tracks[0].clips;
var clip = clips[0];

// clip.inPoint = 2
// clip.outPoint = 10

srcProjItem.setInPoint(srcClipInPoint.toString());
srcProjItem.setOutPoint(srcClipOutPoint.toString());

// Video clips' in and out point

// ProjectItem in and out point

