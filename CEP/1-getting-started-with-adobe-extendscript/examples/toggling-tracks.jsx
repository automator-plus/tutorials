videoTracks = app.project.activeSequence.videoTracks; // Get all the video tracks
track = videoTracks[0] // Get the first video track
track.setTargeted(true, true) // Set the track's targetted attributed