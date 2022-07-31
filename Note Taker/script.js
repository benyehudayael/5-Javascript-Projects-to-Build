
function createNote(){
    let contentNote = document.getElementsByTagName("textarea").value;


    let theNote = document.createAttribute("div");
    let titleNote = document.createAttribute("h5");
    titleNote.innerText = "Note" + document.getElementsByTagName("div").length +1;
    let finelcontentNote = document.createAttribute("p");
    finelcontentNote.innerText = contentNote;
    let buttonNote = document.createAttribute("button");
    theNote.appendChild(titleNote);
    theNote.appendChild(finelcontentNote);
    theNote.appendChild(buttonNote);
    document.getElementById("notesHere").value = theNote;

}
