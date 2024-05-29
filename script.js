const notas = []

function addNote() {
    const noteContent = document.getElementById('new-note-content').value;
    const noteCategory = document.getElementById('note-category-select').value;
    
    if (noteContent.trim() === "") {
        alert("A nota não pode estar vazia!");
        return;
    }
    
    if (noteCategory === "") {
        alert("Por favor, selecione uma categoria!");
        return;
    }

    const notesContainer = document.getElementById('notes');
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');

    const noteTextarea = document.createElement('textarea');
    noteTextarea.value = noteContent;
    noteElement.appendChild(noteTextarea);

    const noteCategoryElement = document.createElement('div');
    noteCategoryElement.classList.add('note-category');
    noteCategoryElement.textContent = `Categoria: ${noteCategory}`;
    noteElement.appendChild(noteCategoryElement);

    notas.push({ content: noteTextarea.value, category: noteCategory });
    console.log('Notas', notas);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '&times;';
    deleteButton.onclick = () => {
        notesContainer.removeChild(noteElement);
    };
    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);
    document.getElementById('new-note-content').value = "";
    document.getElementById('note-category-select').value = "";
}

document.getElementById('categoriesForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the default form submission

    AddCategories();
});

function AddCategories() {
    const categoriesValue = document.getElementById('categories_value').value;

    if (categoriesValue.trim() !== '') {
        const categoriesContainer = document.getElementById('categoriesContainer');
        
        const categoriesElement = document.createElement('div');
        categoriesElement.classList.add('categories');
        categoriesElement.textContent = categoriesValue;
        
        categoriesContainer.appendChild(categoriesElement);

        const categoryOption = document.createElement('option');
        categoryOption.value = categoriesValue;
        categoryOption.textContent = categoriesValue;

        const categorySelect = document.getElementById('note-category-select');
        categorySelect.appendChild(categoryOption);

        // Optionally, clear the input field after adding the category
        document.getElementById('categories_value').value = '';
    }
}
