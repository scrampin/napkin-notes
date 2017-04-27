(function(exports){

  function createNote() {
    var textarea = document.getElementById('note-input-field');
    var note = textarea.value;
    noteList.createAndStore(note);
    textarea.value = '';
  }

  function renderNewNote() {
    var noteListView = new NoteListView(noteList);
    noteListView.appendListOfNotes();
  }

  function createAndAddNote() {
    createNote();
    renderNewNote();
  }

  var form = document.getElementById('create-note-button');
  form.addEventListener("click", createAndAddNote, false);

  exports.createAndAddNote = createAndAddNote;
})(this);
