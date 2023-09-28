const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function getNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
getNotes();
function updateNote() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function createNote() {
  let p = document.createElement("p");
  p.classList = "input-box";
  p.setAttribute("contenteditable", true);
  let btn = document.createElement("img");
  btn.src = "./images/delete.png";
  btn.setAttribute("alt", "Delete Image");
  notesContainer.appendChild(p).appendChild(btn);
}
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
    updateNote();
  } else if (e.target.tagName == "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateNote();
      };
    });
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("InsertLineBreak");
    e.preventDefault();
  }
});
