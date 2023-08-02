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

function WiFiCode() {
  const [ssidText, setSsid] = useState("");
  const [passText, setPass] = useState("");

  const handleSsidChange = useCallback((evt) => setSsid(evt.target.value), [setSsid]);
  const handlePassChang = useCallback((evt) => setPass(evt.target.value), [setPass]);

  const ssid = ssidText.trim();
  const pass = passText.trim();
  const code = JSON.stringify({ ssid, pass });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2">WiFi setup</Typography>
      <TextField className={classes.text} label="ESSID" value={ssidText} onChange={handleSsidChange} />
      <TextField className={classes.text} label="Password" value={passText} onChange={handlePassChang} />
      <div className={classes.code} style={{opacity: (ssid && pass) ? 1 : 0.1}}>
        <QRCode value={code} />
      </div>
      <Typography variant="caption">ESSIDおよびパスワードがクッキーやクラウドに保存されることはありません。</Typography>
    </div>
  );
}

export default WiFiCode;
