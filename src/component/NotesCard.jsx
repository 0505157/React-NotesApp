import React from "react";
import NotesHeader from "./NotesHeader.jsx";
import NotesBody from "./NotesBody";
import ButtonAction from "./ButtonAction.jsx";
import NonArchiveNotes from "./NonArchiveNotes.jsx";
import ArchiveNotes from "./ArchiveNotes.jsx";
import { showFormattedDate } from "../utils/data.js";

const NotesCard = ({ notesData, deleteNote, archivedNote }) => {
  const archiveNote = notesData.filter((note) => !note.archived);
  const nonArchiveNote = notesData.filter((note) => note.archived);

  return (
    <>
      <ArchiveNotes>
        {archiveNote.length > 0 ? (
          <>
            <h3 className="text-3xl font-bold text-center text-slate-200">
              Catatan Aktif
            </h3>
            <ul className="flex flex-wrap justify-center">
              {archiveNote.map((note) => (
                <li key={note.id} className="w-full sm:w-1/2 md:w-1/3 m-8">
                  <div className="card bg-slate-400 flex flex-col justify-between w-80 h-full shadow-xl p-4 rounded-lg">
                    <div className="card-body w-full">
                      <NotesHeader
                        title={note.title}
                        date={showFormattedDate(note.createdAt)}
                      />
                      <NotesBody desc={note.body} />
                      <ButtonAction
                        onDelete={() => deleteNote(note.id)}
                        onArchive={() => archivedNote(note.id)}
                      >
                        Arsipkan
                      </ButtonAction>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-3xl font-bold text-slate-200 text-center">
            Data Kosong
          </p>
        )}
      </ArchiveNotes>

      <NonArchiveNotes>
        {nonArchiveNote.length > 0 ? (
          <>
            <h3 className="text-3xl font-bold text-center text-slate-200">
              Catatan Arsip
            </h3>
            <ul className="flex flex-wrap justify-center">
              {nonArchiveNote.map((note) => (
                <li key={note.id} className="w-full sm:w-1/2 md:w-1/3 m-8">
                  <div className="card bg-slate-400 flex flex-col justify-between h-full shadow-xl p-4 rounded-lg">
                    <div className="card-body">
                      <NotesHeader title={note.title} date={note.createdAt} />
                      <NotesBody desc={note.body} />
                      <ButtonAction
                        onDelete={() => deleteNote(note.id)}
                        onArchive={() => archivedNote(note.id)}
                      >
                        Aktifkan
                      </ButtonAction>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-3xl font-bold text-slate-200 text-center">
            Data Kosong
          </p>
        )}
      </NonArchiveNotes>
    </>
  );
};

export default NotesCard;
