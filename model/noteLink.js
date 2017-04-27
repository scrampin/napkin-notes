(function(exports) {

  function NoteLink() {
  }
    NoteLink.prototype.createNoteFullText = function(i) {
    singleNoteView = new SingleNoteView(noteList.notepad[i-1]);
    var note = singleNoteView.displayNote();
    return note;
  };

  NoteLink.prototype.addNoteTextToDiv = function(note) {
    displayDiv = document.getElementById('note-display-div');
    prevNote = document.getElementById('notePar');
    if (prevNote) displayDiv.removeChild(prevNote);
    displayDiv.appendChild(note);
  }

  NoteLink.prototype.addLink = function(i) {
    var note = this.createNoteFullText(i);
    this.addNoteTextToDiv(note);
  }

  exports.NoteLink = NoteLink;
})(this);
