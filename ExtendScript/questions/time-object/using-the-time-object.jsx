var videoTrackNr = 0;
var seq = app.project.activeSequence;
var videoTrack = seq.videoTracks[videoTrackNr];
var clips = videoTrack.clips;
var clip = clips[0];
var clipStartTime = clip.start;

clipStartTime.seconds = clipStartTime.seconds + 5;

videoTrack.insertClip(clip.projectItem, clipStartTime.ticks);
