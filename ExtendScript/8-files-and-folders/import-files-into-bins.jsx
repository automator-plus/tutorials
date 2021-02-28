// Importing selected files
// var proj = app.project;
// var bin = proj.rootItem.createBin("Tutorial");

// var _prompt = "Select videos";
// var _filter = "*";
// var _multiSelect = true;
// // Using the built-in Open Dialog
// var filesToImport = File.openDialog(_prompt, _filter, _multiSelect);

// if (filesToImport) {
//   var fsNames = [];
//   for (var i = 0; i < filesToImport.length; i++) {
//     var file = filesToImport[i];
//     fsNames.push(file.fsName);
//   }
//   proj.importFiles(fsNames, true, bin, false);
// }

// Creating bins based on footage type
var selectedFolder = Folder.selectDialog();
var files = selectedFolder.getFiles();

// Creating Bins
var audioBin = proj.rootItem.createBin("Audio");
var videoBin = proj.rootItem.createBin("Video");
var pictureBin = proj.rootItem.createBin("Picture");
var otherBin = proj.rootItem.createBin("Other");

var audioFiles = [];
var videoFiles = [];
var pictureFiles = [];
var otherFiles = [];

for (var i = 0; i < files.length; i++) {
  var file = files[i];
  if (file instanceof File) {
    var fsName = file.fsName;
    var splitted = fsName.split(".");
    splitted.reverse();
    var fileExtension = splitted[0].toLowerCase();

    switch (fileExtension) {
      case "mov":
        videoFiles.push(fsName);
        break;
      case "jpg":
      case "png":
        pictureFiles.push(fsName);
        break;
      case "mp3":
        audioFiles.push(fsName);
        break;
      default:
        otherFiles.push(fsName);
    }
  }
}

proj.importFiles(videoFiles, true, videoBin, false);
proj.importFiles(pictureFiles, true, pictureBin, false);
proj.importFiles(audioFiles, true, audioBin, false);
proj.importFiles(otherFiles, true, otherBin, false);
