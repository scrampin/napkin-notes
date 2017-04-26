(function(exports) {

  SingleNoteView = function(noteModel) {
    SingleNoteView.prototype.displayNote = function () {
      var note = document.createElement('p');
      note.setAttribute('id', 'notePar');
      var noteString = document.createTextNode(noteModel.text);
      note.appendChild(noteString);
      return note;
    };

  }

  exports.SingleNoteView = SingleNoteView;
})(this);
