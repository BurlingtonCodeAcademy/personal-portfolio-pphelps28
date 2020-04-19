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
                    <form id="contact-form">
                        <div id="name-row">
                            <TextField id="firstName" label="First Name" variant="filled" />
                            <TextField id="lastName" label="Last Name" variant="filled" />
                        </div>
                        <TextField
                            id="message-field"
                            label="Message"
                            multiline
                            rows="5"
                            variant="outlined"
                        />
                        <Button id="send-button" color="primary" variant="outlined" onClick={props.sendContact}>Send</Button>
                    </form>
                    <div id="by-email">or by email at <a href="/"><emphasis>p.w.phelps28@mail.com</emphasis></a></div>
                    <br />
                    <div id="fine-print">Based in Winooski, VT, USA</div>
                    <br />
                    <Button id="close-button" variant="outlined" color="secondary" onClick={props.toggleContact}>close</Button>

                </div>
            </ThemeProvider>
        </div >

    )
}
