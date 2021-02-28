// Get CSV file
var _prompt = "Select CSV";
var _filter = "*";
var _multiSelect = false;
var selectedFile = File.openDialog(_prompt, _filter, _multiSelect);

// Read CSV file
if (selectedFile) {
  if (selectedFile.open("r")) {
    var content = selectedFile.read();
  }
  selectedFile.close();

  // Extract CSV into array
  var lines = content.split("\n");
  var headings = [];
  var data = [];
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (i === 0) {
      headings = line.split(";");
    } else {
      var record = line.split(";");
      data.push(record);
    }
  }

  // Add markers
  var seq = app.project.activeSequence;
  var markers = seq.markers;
  var color_lookup = {
    Good: 0,
    Bad: 1,
    Improvement: 3,
  };

  for (var i = 0; i < data.length; i++) {
    var record = data[i];
    var seconds = Number(record[0]);
    var name = record[1];
    var comment = record[2];

    var newMarker = markers.createMarker(seconds);
    newMarker.name = name;
    newMarker.setColorByIndex(color_lookup[name]);
    newMarker.comments = comment;
  }
}
