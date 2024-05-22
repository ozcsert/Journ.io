import { useState } from "react";

const AnimatedTextarea = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const getNumberOfLines = () => {
    const lineCount = text.split("\n").length;
    return Math.max(lineCount, 1); // Ensure a minimum height of 1 line.
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <textarea
        className="w-96 h-auto resize-none border rounded-md p-2 text-base"
        placeholder="Start typing..."
        value={text}
        onChange={handleChange}
        style={{
          height: `${getNumberOfLines() * 24}px`, // Adjust line height as needed
        }}
      ></textarea>
    </div>
  );
};

export default AnimatedTextarea;