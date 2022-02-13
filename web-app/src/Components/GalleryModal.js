import React, { Component } from 'react'
// Material Ui Component
import { Button } from '@mui/material'
import { makeStyles } from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
// React-Bootstrap Component
import { Modal } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai'
// Custum Component
import itemData from '../Api/ImageApi';
import SeratTyeba from './PDF/Seerat-e-Tyeba'




// Material UI Style Sheet
const useStyle = makeStyles({

    modalMain: {
        backgroundColor: '#b6722d'
    },
    buttonStyle: {
        color: 'white'
    }

})


// This function is Calling from Main Component-Function
function MyVerticallyCenteredModal(props) {

    // Filter the itemData object, where i did click!
    let reflect = itemData.filter((currElem) => {
        return currElem.id == props.myId
    })

    const classes = useStyle()

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className={classes.modalMain}>

                {/* Reflected Data from filter function  */}
                {reflect.map((currElem) => (
                    <>
                        <div style={{ display: 'flex' }}>
                            <h4 style={{ flexGrow: 1, color: 'white' }}> {currElem.title}  </h4>
                            <IconButton onClick={props.onHide}><AiOutlineClose className={classes.buttonStyle} /></IconButton>

                        </div>

                        <img
                            src={`${currElem.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${currElem.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={currElem.title}
                            loading="lazy"
                            width='100%'

                        />
                    </>
                ))}

            </Modal.Body>

        </Modal>
    );
}


// Main-Component Function
const GalleryModal = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [id, setId] = React.useState('')

    //getting Id from where i did click!
    function getId(id) {
        setId(id)
    }

    return (
        <>
            <ImageList sx={{ width: '100%', height: 'auto', marginLeft: '0px', marginRight: '0px', padding: '0px' }} cols={3} >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <Button sx={{ width: '100%', height: 'auto', marginLeft: '0px', marginRight: '0px', padding: '0px' }}
                            onClick={() => {
                                setModalShow(true)
                                getId(item.id)
                            }}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                width='100%'

                            />
                        </Button>
                    </ImageListItem>
                ))}
            </ImageList>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                myId={id}

            />
            <SeratTyeba/>
        </>

    );
}

export default GalleryModal;

