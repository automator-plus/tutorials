// Get video tracks
videoTracks = app.project.activeSequence.videoTracks;

// Loop through video tracks
for(i=0;i<videoTracks.numTracks;i++){

  // Set each track's mute state to true
  videoTracks[i].setMute(true);
  $.writeln("Muted track " + i)
}