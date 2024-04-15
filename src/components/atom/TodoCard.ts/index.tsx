import { ChangeEvent, useState } from "react";
import "./styles.scss";

interface TodoProps {
  todo: { id: number; title: string; completed: boolean; note: string };
}

export default function TodoCard({ todo }: TodoProps) {
  const [checked, setChecked] = useState<boolean>(todo.completed);
  const [note, setNote] = useState<string>(todo.note);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  return (
    <div className="todo-card-container">
      <div className="todo-div">
        <span className="todo-card-title" data-testid={`span-${todo.id}`}>
          {todo.title}
        </span>
        <input
          className="todo-card-checkbox"
          data-testid={`checkbox-${todo.id}`}
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>

      {checked && (
        <div className="note-div" data-testid={`note-${todo.id}`}>
          <p className="note-placeholder">Note: </p>
          <input
            className="note-text-field"
            type="text"
            value={note}
            onChange={handleChange}
            data-testid={`note-text-field-${todo.id}`}
          />
        </div>
      )}
    </div>
  );
}
