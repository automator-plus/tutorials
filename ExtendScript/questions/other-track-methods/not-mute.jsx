// A script showinng the other methods 
// that you can call on a track

// Get video tracks
videoTracks = app.project.activeSequence.videoTracks;

// Loop through video tracks
for (i = 0; i < videoTracks.numTracks; i++) {
  videoTracks[i].setMute(1);
  videoTracks[i].setTargeted(true, true);
  videoTracks[i].setLocked(true);
}


