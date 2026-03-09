import React, { useState } from "react";
import { FileText } from "lucide-react";

const NoteSection = () => {
  const [note, setNote] = useState("");

  const handleNoteChange = (e) => {
    setNote(e.target.value)
  };
  return (
    <div className="border-b p-4">
      <h2 className="mb-3 flex text-lg font-semibold items-center">
        <FileText className="w-5 h-5 mr-2" /> Note
      </h2>
      <div className="space-y-3">
        <textarea
          onChange={handleNoteChange}
          value={note}
          placeholder="Enter note..."
          className="w-full border p-2 rounded-md text-sm resize-none"
        />
      </div>
    </div>
  );
};

export default NoteSection;
