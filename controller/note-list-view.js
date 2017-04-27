(function(exports) {

  function NoteListView(notelist) {

    var notePadLength = notelist.notepad.length;

    NoteListView.prototype.appendListOfNotes = function() {
      var list = document.getElementById('note-list');
      var noteText = this.createAPieceOfNoteText();
      var noteItem = this.createAListItemFromNoteText(noteText);
      this.addEvent(noteItem);
      list.appendChild(noteItem);
    };

    NoteListView.prototype.createAPieceOfNoteText = function() {
      var abbreviatedNote = notelist.notepad[notePadLength-1].text.slice(0, 20);
      var noteText = document.createTextNode(abbreviatedNote);
      return noteText;
    }

    NoteListView.prototype.createAListItemFromNoteText = function(noteText) {
      var noteItem = document.createElement('li');
      noteItem.setAttribute('id',notePadLength.toString());
      noteItem.appendChild(noteText);
      return noteItem;
    };

    NoteListView.prototype.addEvent = function(noteItem) {
      noteItem.addEventListener('click', function() {noteLink.addLink(noteItem.id)}, false);
    };
}

exports.NoteListView = NoteListView;
})(this);
