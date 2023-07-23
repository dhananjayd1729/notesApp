const addTitle = document.getElementById("addTitle");
const addNote = document.getElementById("addNote");
const addNoteButton = document.getElementById("addNoteButton");
const notesDiv = document.getElementById("notes");

showNotes();

function addNotes() {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notes = [];
  } else {
    notes = JSON.parse(notes);
  }

  if (addNote.value == "") {
    alert("write your note");
    return;
  }
  const notesObj = {
    title: addTitle.value,
    note: addNote.value,
  };
  notes.push(notesObj);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function deleteNote(ind) {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    return;
  } else {
    notes = JSON.parse(notes);
  }

  notes.splice(ind, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

// function archiveNotes() {
//   let notes = localStorage.getItem("notes");
//   if (notes === null) {
//     return;
//   } else {
//     notes = JSON.parse(notes);
//   }
//   //   notes.splice(ind, 1);
//   //   archives = [];
//   //   notes.splice(1, 1, myArray[ind])[ind];
//   localStorage.setItem("notes", JSON.stringify(notes));
//   showNotes();
// }

function showNotes() {
  let notesHTML = "";
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    return;
  } else {
    notes = JSON.parse(notes);
  }
  for (let i = 0; i < notes.length; i++) {
    notesHTML += `<div class="note">
                    <button class="deleteNote" id=${i} onclick="deleteNote(${i})">Delete</button>
                    <button class="archiveNote" id=${i} onclick="archiveNote(${i})">Archive</button>
                    <span class="title">${
                      notes[i].title === "" ? "Note" : notes[i].title
                    }</span>
                    <div class="text">${notes[i].note}</div>
                </div>
        `;
  }
  notesDiv.innerHTML = notesHTML;
}

addNoteButton.addEventListener("click", addNotes);
