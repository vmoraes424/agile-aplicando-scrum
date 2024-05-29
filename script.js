const notas = []

function addNote() {
    const noteContent = document.getElementById('new-note-content').value;
    if (noteContent.trim() === "") {
        alert("A nota não pode estar vazia!");
        return;
    }

    const notesContainer = document.getElementById('notes');
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');

    const noteTextarea = document.createElement('textarea');
    noteTextarea.value = noteContent;
    noteElement.appendChild(noteTextarea);
    notas.push(noteTextarea.value)
    console.log('nhota', notas)

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '&times;';
    deleteButton.onclick = () => {
        notesContainer.removeChild(noteElement);
    };
    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);
    document.getElementById('new-note-content').value = "";
}
