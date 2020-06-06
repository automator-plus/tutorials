/* ===================================================
          Gather info about clips
    ==================================================
**/

// Get a grip on our sequence
var seq = app.project.activeSequence; 

// Get a grip on the videotracks
var videoTracks = seq.videoTracks;

// Loop through all the video tracks and clips
for(var i = 0; i < videoTracks.numTracks; i++){
    var videoClips = videoTracks[i].clips;
    for(var j = 0; j< videoClips.numItems; j++){
        var clip = videoClips[j]

        $.write(clip.name+', ')
        $.write(clip.duration.seconds+', ')
        $.write(clip.start.seconds+', ')
        $.write(clip.end.seconds+', ')
        $.write(clip.inPoint.seconds+', ')
        $.write(clip.outPoint.seconds+', ')
        $.write(clip.type+', ')
        $.write(clip.mediaType)
        $.writeln()
    }
}

// Get a grip on our audiotracks
var audioTracks = seq.audioTracks;

// Loop through all the video tracks and clips
for(var i = 0; i < audioTracks.numTracks; i++){
    var audioTracks = audioTracks[i].clips;
    for(var j = 0; j< audioTracks.numItems; j++){
        var clip = audioTracks[j]

        $.write(clip.name+', ')
        $.write(clip.duration.seconds+', ')
        $.write(clip.start.seconds+', ')
        $.write(clip.end.seconds+', ')
        $.write(clip.inPoint.seconds+', ')
        $.write(clip.outPoint.seconds+', ')
        $.write(clip.type+', ')
        $.write(clip.mediaType)
        $.writeln()
    }
}


