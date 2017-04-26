(function(exports) {

  function NoteLink() {
  }
    NoteLink.prototype.addLink = function(i) {
    singleNoteView = new SingleNoteView(noteList.notepad[i-1]);
    var note = singleNoteView.displayNote();
    displayDiv = document.getElementById('note-display-div');
    if (displayDiv) {
      prevNote = document.getElementById('notePar');
      if (prevNote) displayDiv.removeChild(prevNote);
      displayDiv.appendChild(note);
    }
  };


  exports.NoteLink = NoteLink;
})(this);
