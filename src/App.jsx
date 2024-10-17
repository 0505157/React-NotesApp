import React from "react";
import { useState } from "react";
import { getInitialData, showFormattedDate } from "./utils/data.js";
import NotesForm from "./component/NotesForm.jsx";
import NotesCard from "./component/NotesCard.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";

const NotesApp = () => {
  const [notes, setNotes] = useState(getInitialData());

  const deleteNote = (id) => {
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  };

  const archivedNote = (id) => {
    const updateNote = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setNotes(updateNote);
  };

  const addNotes = ({ title, body }) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: +new Date(),
        title,
        body,
        createdAt: showFormattedDate(new Date()),
        archived: false,
      },
    ]);
  };

  return (
    <>
      <Header />
      <main>
        <NotesForm addNotes={addNotes} />
        <NotesCard
          notesData={notes}
          deleteNote={deleteNote}
          archivedNote={archivedNote}
        />
      </main>
      <Footer name={"Alif Naufal Zaqi"} />
    </>
  );
};

export default NotesApp;
