import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import image2 from '../assets/Images/fatwa.png'

const useStyle = makeStyles({
    heading: {
        marginTop: "0px",
        marginLeft: '0px'
    },
    header: {
        marginBottom: '10px',
        textAlign: 'start',
        marginLeft: '8px'
    },
    header2: {
        marginBottom: '20px',
        marginTop: '0px',
        textAlign: 'start',
        marginLeft: '40px'
    },
    field: {
        '& label.Mui-focused': {
            color: '#b6722d',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#b6722d'
        }
    },
    buttomSet: {
        backgroundColor: '#b6722d'
    },
    inputfeild: {
        padding: '30px',
        // border: '3px solid #b6722d',
        borderRadius: '15px'
    }
})
const initialValue = {
    id: '',
    Name: '',
    Email: '',
    ContactNo: '',
    Country: '',
    Message: ''


}

const OnlineFatwa = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user, setUser] = useState(initialValue)
    const OnChangeUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }
    const AddData = () => {
        console.log(user)
    }
    const classes = useStyle()
    

    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                <img style={{
                    
                    borderRadius: '15px',
                    width: '100%',
                    padding: '5px',
                    border: '3px solid #b6722d'
                }}
                    src={image2}
                    alt=""
                />
            </Button>

            <Modal
                centered
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >

                {/*<Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
                <div className={classes.inputfeild}>


                    <Modal.Header className={classes.heading} >
                        <Typography variant="h6" gutterBotton>
                            <Modal.Title className={classes.heading} ><div> Online Fatwa</div></Modal.Title>
                        </Typography>
                    </Modal.Header>


                    <Grid container spacing={4}>
                        <CssBaseline />
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoFocus
                                className={classes.field}
                                required
                                id="Email"
                                name="Email"
                                label="Email"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                onChange={(e) => OnChangeUser(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                className={classes.field}
                                id="FullName"
                                name="FullName"
                                label="Full Name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                                onChange={(e) => OnChangeUser(e)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.field}
                                id="FatherName"
                                name="FatherName"
                                label="Father's Name"
                                fullWidth
                                autoComplete="shipping address-line2"
                                variant="standard"
                                type={Number}
                                onChange={(e) => OnChangeUser(e)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.field}
                                id="Age"
                                name="Age"
                                label="Age"
                                fullWidth
                                variant="standard"
                                onChange={(e) => OnChangeUser(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.field}
                                id="Country"
                                name="Country"
                                label="Country"
                                fullWidth
                                variant="standard"
                                onChange={(e) => OnChangeUser(e)}
                            />
                        </Grid>


                        <Grid item xs={12} >
                            <TextField

                                required
                                className={classes.field}
                                // margin='normal'
                                id="message"
                                name="Message"
                                label="Message"
                                fullWidth
                                autoComplete="Message"
                                variant="standard"
                                onChange={(e) => OnChangeUser(e)}
                            />
                        </Grid>

                        <Grid item xs={6} >
                            <Button
                                style={{
                                    backgroundColor: 'red'
                                }}
                                className={classes.buttomSet}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleClose}
                            > Close
                            </Button>
                        </Grid>
                        <Grid item xs={6} >
                            <Button
                                style={{
                                    backgroundColor: '#b6722d'
                                }}
                                className={classes.buttomSet}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => AddData()}
                            > Submit
                            </Button>
                        </Grid>
                        {/* onClick={handleClose} */}
                    </Grid>
                </div>
            </Modal>
        </>
    );
}



export default OnlineFatwa