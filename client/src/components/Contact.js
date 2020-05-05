import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: amber,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});
export default function Contact(props) {
    return (
        <div id="overlay" style={{ visibility: props.visibility }}>
            <ThemeProvider theme={theme}>
                <div id="contact-modal">
                    <div id="contact-header">Questions? Coffee? Reach out.</div>
                    <br />
                    <div id="by-email"><a href="mailto:p.w.phelps28@gmail.com"><em style={{ color: "rgb(255, 158, 13)" }}> p.w.phelps28@mail.com</em></a></div>
                    <div id="fine-print">Based in Winooski, VT, USA</div>
                    <br />
                    <Button id="close-button" variant="outlined" color="secondary" onClick={props.toggleContact}>close</Button>

                </div>
            </ThemeProvider>
        </div >

    )
}
