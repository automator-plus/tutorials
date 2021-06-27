
var proj = app.project;
var sequences = proj.sequences;

for(i = 0; i<sequences.length; i++){
    var sequence = sequences[i];
    $.writeln(i+': '+sequence.name);
}