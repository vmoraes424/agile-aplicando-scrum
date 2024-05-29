let notas = JSON.parse(localStorage.getItem("notas")) || [];

window.onload = () => {
  const notesContainer = document.getElementById("notes");
  const categorySelect = document.getElementById("note-category-select");

  notas.forEach((nota) => {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");

    const noteTextarea = document.createElement("textarea");
    noteTextarea.value = nota.content;
    noteElement.appendChild(noteTextarea);

    const noteCategoryElement = document.createElement("div");
    noteCategoryElement.classList.add("note-category");
    noteCategoryElement.textContent = `Categoria: ${nota.category}`;
    noteElement.appendChild(noteCategoryElement);

    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.innerHTML = "Editar";
    editButton.onclick = () => {
      noteTextarea.removeAttribute("readonly");
      noteTextarea.focus();
    };
    noteElement.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "&times;";
    deleteButton.onclick = () => {
      notesContainer.removeChild(noteElement);
      notas = notas.filter(
        (n) => n.content !== noteTextarea.value || n.category !== nota.category
      );
      localStorage.setItem("notas", JSON.stringify(notas));
    };
    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);
  });

  notas.forEach((nota) => {
    if (
      !Array.from(categorySelect.options).some(
        (option) => option.value === nota.category
      )
    ) {
      const categoryOption = document.createElement("option");
      categoryOption.value = nota.category;
      categoryOption.textContent = nota.category;
      categorySelect.appendChild(categoryOption);
    }
  });
};

function addNote() {
  const noteContent = document.getElementById("new-note-content").value;
  const noteCategory = document.getElementById("note-category-select").value;

  if (noteContent.trim() === "") {
    alert("A nota não pode estar vazia!");
    return;
  }

  if (noteCategory === "") {
    alert("Por favor, selecione uma categoria!");
    return;
  }

  const notesContainer = document.getElementById("notes");
  const noteElement = document.createElement("div");
  noteElement.classList.add("note");

  const noteTextarea = document.createElement("textarea");
  noteTextarea.setAttribute("readonly", true);
  noteTextarea.value = noteContent;
  noteElement.appendChild(noteTextarea);

  const noteCategoryElement = document.createElement("div");
  noteCategoryElement.classList.add("note-category");
  noteCategoryElement.textContent = `Categoria: ${noteCategory}`;
  noteElement.appendChild(noteCategoryElement);

  notas.push({ content: noteTextarea.value, category: noteCategory });
  localStorage.setItem("notas", JSON.stringify(notas));

  const editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.innerHTML = "Editar";
  editButton.onclick = () => {
    noteTextarea.removeAttribute("readonly");
    noteTextarea.focus();
  };
  noteElement.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "&times;";
  deleteButton.onclick = () => {
    notesContainer.removeChild(noteElement);
    notas = notas.filter(
      (n) => n.content !== noteTextarea.value || n.category !== noteCategory
    );
    localStorage.setItem("notas", JSON.stringify(notas));
  };
  noteElement.appendChild(deleteButton);

  notesContainer.appendChild(noteElement);

  document.getElementById("new-note-content").value = "";
  document.getElementById("note-category-select").value = "";
}

function AddCategories() {
  const categoriesValue = document.getElementById("categories_value").value;

  if (categoriesValue.trim() !== "") {
    const categoriesContainer = document.getElementById("categoriesContainer");

    const categoriesElement = document.createElement("div");
    categoriesElement.classList.add("categories");
    categoriesElement.textContent = categoriesValue;

    categoriesContainer.appendChild(categoriesElement);

    const categoryOption = document.createElement("option");
    categoryOption.value = categoriesValue;
    categoryOption.textContent = categoriesValue;

    const categorySelect = document.getElementById("note-category-select");
    categorySelect.appendChild(categoryOption);

    document.getElementById("categories_value").value = "";
  }
}
