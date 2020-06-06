// Initialise our variables that we will use for this section
var trackNr = 0;
var clipNr = 0;

// Get a grip on our sequence
var seq = app.project.activeSequence; 

// Get a grip on the videotracks
var videoTracks = seq.videoTracks;

// Get the source video track
var videoTrack = videoTracks[trackNr];

// Get the source video clip
var videoClip = videoTrack.clips[clipNr];

var effects = videoClip.components; 

//Loop through all the effects applied to the clip
for(var i=0;i<effects.numItems;i++){ 
    effect = effects[i];
    $.writeln("Effect # "+i+" is: "+effect.displayName);
    
    // Loop through all the properties of the current effect
    for(var j=0;j<effect.properties.numItems;j++){
        $.writeln("Property # "+j+" is: "+effect.properties[j].displayName); 
    } 
} 

// Lets change the scale of the first image:
var currentScale = effects[1].properties[1].getValue();
var adjustedScale = currentScale*1.5;
effects[1].properties[1].setValue(adjustedScale, true)

