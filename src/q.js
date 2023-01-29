import { useState } from 'react';

export default function Test() {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      Click to remove element
      <br />
      {visible && (
        <button onClick={removeElement}>Remove</button>
      )}
    </div>
  );
}