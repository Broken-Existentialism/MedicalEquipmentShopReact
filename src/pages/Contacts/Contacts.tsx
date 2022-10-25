
import React, { useState } from "react";
import { Button, Paper } from '@mui/material'

export const Contacts = () => {
  const [textValue, setTextValue] = useState<string>("");

  const onTextChange = (e: any) => setTextValue(e.target.value);
  const handleSubmit = () => console.log(textValue);
  const handleReset = () => setTextValue("");

  return (
    <Paper>
      <h2>Form Demo</h2>

      <input
        onChange={onTextChange}
        value={textValue}
        placeholder="Enter Data"
      />

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  );
};
export default Contacts
