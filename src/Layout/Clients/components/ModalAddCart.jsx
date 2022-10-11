import { Stack, Button, Modal, Box, Typography, TextField, Divider } from '@mui/material';
import React, { useState } from 'react'
import TransferOrder from './TransferOrder';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 4,
    borderRadius: '0.5em',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5em'
};

const ModalAddCart = ({ open, setOpen, handleOpen }) => {

    const handleClose = () => setOpen(false);

    return (

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Agregar cuenta
                    </Typography>
                    <TextField id="outlined-basic" label="ID# de la orden" variant="outlined" />
                </Box>
        <Divider sx={{ marginBottom: '1em'}}/>
        <TransferOrder/>
            </Box>
        </Modal>
    )
}

export default ModalAddCart