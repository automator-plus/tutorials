// Variable knobs
var insertIntoTrack = 0;
var overwrite = false;
var insertAtEnd = false;
var numberClipToInsert = 0;

// Get a grip on our sequence
var seq = app.project.activeSequence;

// Get a list of all the clips that are in the project panel
var availibleClips = app.project.rootItem.children;

// Get the projItem of the clip we want to insert
var clipToInsert = availibleClips[numberClipToInsert]

// Get the video track where we want to insert into
var videoTrack = seq.videoTracks[insertIntoTrack];

// Check if we want to insert the clip at the end
if(insertAtEnd){
    // If we want to insert the clip at the end, we need to get
    // the end time of the last clip
    var numClips = videoTrack.clips.numItems;
    var dstTicks = videoTrack.clips[numClips-1].end.ticks;
    
}else{
    // Otherwise, we'll insert at 0
    var dstTicks =  0;
}

// If we want to overwrite the clip
if (overwrite){
    videoTrack.overwriteClip(clipToInsert, dstTicks)
}
else{
    videoTrack.insertClip(clipToInsert, dstTicks)
}
