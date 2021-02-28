// More info at https://javascript-tools-guide.readthedocs.io/file-system-access/using-file-and-folder-objects.html

// Access an image on your given the path
var repoDir =
  "~/Documents/gitProjects/tutorials/ExtendScript/8-files-and-folders";

var repoDirFolder = new Folder(repoDir);
var image1URI = repoDirFolder.absoluteURI + "/data/image-1.jpg";

var image1File = new File(image1URI);

// alert(image1File.exists.toString())
// alert(image1File.fsName)

// image1File.execute();

var _prompt = "Select videos";
var _filter = "*";
var _multiSelect = true;
// Using the built-in Open Dialog
var selectedFiles = File.openDialog(_prompt, _filter, _multiSelect);

var commonFiles = Folder.commonFiles;
var desktop = Folder.desktop;
var myDocuments = Folder.myDocuments;

var filesInMyDocs = myDocuments.getFiles();

var a = 3;
