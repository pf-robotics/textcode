import React, {useState, useCallback} from 'react';

import QRCode from "react-qr-code";

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    margin: theme.spacing(1),
  },
  code: {
    margin: theme.spacing(5),
  },
}));

function TextCode() {
  const [text, setText] = useState("");

  const handleTextChange = useCallback((evt) => setText(evt.target.value), [setText]);

  const code = text.trim();

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField className={classes.text} label="Text" value={text} onChange={handleTextChange} />
      <div className={classes.code} style={{opacity: (text) ? 1 : 0.1}}>
        <QRCode value={code} />
      </div>
    </div>
  );
}

export default TextCode;
