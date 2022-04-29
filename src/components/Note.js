const Note = ({ note, toggleImportance, remove }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li className="note">
      {note.content}
      <button onClick={remove}>Delete</button>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

export default Note;
