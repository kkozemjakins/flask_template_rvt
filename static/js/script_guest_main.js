console.log("boljnica vibor");

var subjectObject = {
  "Imanta": {
    "VCA_POLIKLĪNIKA_ELITE": ["ALERGOLOĢIJA","ANESTEZIOLOĢIJA / REANIMATOLOĢIJA","PSIHIATRIJA"],
    "Rīgas_veselības_centrs_filiāle_Imanta": ["Borders", "Backgrounds", "Float"]
  },
  "Back-end": {
    "PHP": ["Variables", "Strings", "Arrays"],
    "SQL": ["SELECT", "UPDATE", "DELETE"]
  }
}

window.onload = function() {
  var subjectSel = document.getElementById("rajons");
  var topicSel = document.getElementById("slimnica");
  var chapterSel = document.getElementById("arsts");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}