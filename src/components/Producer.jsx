import React from "react";
import { Button, TextField } from "@mui/material";
import Api from "../utils/api";

const Producer = () => {
  const [text, setText] = React.useState("");
  const sendMsg = async () => {
    let payload = {
      value: {
        type: "JSON",
        data: text,
      },
    };
    try {
      let resp = await Api("POST", "/topics/RestTopic/records", payload);
      console.log(resp);
      setText("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="producer">
      <h2 className="producer__h2"> Produce a message to the cluster</h2>
      <div className="producer__div">
        <TextField
          size="small"
          id="outlined-basic"
          label="Message"
          variant="outlined"
          className="producer"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          sx={{ marginLeft: "20px" }}
          variant="contained"
          size="medium"
          onClick={sendMsg}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Producer;
