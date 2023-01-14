var project = app.project;
var sequence = project.activeSequence;
var videoTracks = sequence.videoTracks;
var videoClips = videoTracks[0].clips;
var trackItem = videoClips[0];

var xmp = trackItem.projectItem.getXMPMetadata();

var gpsLatDMS = xmp.match(/<exif:GPSLatitude>(.*)<\/exif:GPSLatitude>/)[1];
var gpsLongDMS = xmp.match(/<exif:GPSLongitude>(.*)<\/exif:GPSLongitude>/)[1];

// convert EXIF GPS Latitude and Longitude to decimal
function convertDMS2DD(degrees, minutes, seconds, direction) {
    degrees = parseFloat(degrees);
    minutes = parseFloat(minutes);
    seconds = parseFloat(seconds);
    var dd = degrees + minutes / 60 + seconds / (60 * 60);
    if (direction == "S" || direction == "W") {
        dd = dd * -1;
    } // Don't do anything for N or E
    return dd;
}

var gpsLat = convertDMS2DD(
    gpsLatDMS.match(/(\d+),/)[1],
    gpsLatDMS.match(/,(\d+).(\d+)/)[1],
    gpsLatDMS.match(/,(\d+).(\d+)/)[2],
    gpsLatDMS.match(/([NSWE])/)[1]
);

var gpsLong = convertDMS2DD(
    gpsLongDMS.match(/(\d+),/)[1],
    gpsLongDMS.match(/,(\d+).(\d+)/)[1],
    gpsLongDMS.match(/,(\d+).(\d+)/)[2],
    gpsLongDMS.match(/([NSWE])/)[1]
);

alert("GPS Latitude: " + gpsLat + ", GPS Longitude: " + gpsLong);