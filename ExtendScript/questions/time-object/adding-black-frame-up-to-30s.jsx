var seq = app.project.activeSequence;
var blackClipProjItem = seq.videoTracks[1].clips[0].projectItem;
var videoTrackNr = 0;
var videoTrack = seq.videoTracks[videoTrackNr];
var clips = videoTrack.clips;
var clip = clips[0];
var clipEndTime = clip.end;

// We use the modules (%) operator to give us the seconds after we remove all the minutes
// if the seconds where 183, then 183 % 60 = 3,
// if the secods where 179, then 179 % 60 = 59
var secondsModulus60 = clipEndTime.seconds % 60;
// we can then use the `secondsModulus60` variable to determine
// if we are before or after the 30s mark
var isBefore30s = secondsModulus60 < 30;

// This might be the ingrediant you were needing,
// you can initialise a new Time object and set the seconds
// and the ticks will update automatically, this way you
// don't have to worry about converting between the 2.
// Plus, if you do normal math on the seconds, which are Integers,
// the the ticks, which are Strings, reflect this
var durationTime = new Time();

// Below we calculate how long our black clip needs to be
// If before 30s, then we only fill up to the next minute
// If after 30s, then we fill all the way to the next minute
if (isBefore30s) {
  durationTime.seconds = 60 - secondsModulus60;
} else {
  durationTime.seconds = 60 + (60 - secondsModulus60);
}

// Since there is no way to set the duration of our clip,
// we need to alter the endPoint, this can be done using
// the setOutPoint method on our black clip's project item
// the ProjectItem.setOutPoint method takes 2 arguments:
// time: in ticks as a String
// mediaType: as an integer that represents a lookup of Video: 1, Audio: 2, Both: 4,
blackClipProjItem.setOutPoint(durationTime.ticks, 4);

videoTrack.overwriteClip(blackClipProjItem, clipEndTime.ticks);
