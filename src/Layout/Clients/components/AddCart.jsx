import React, { useState } from 'react'
import { Alert, AlertTitle, Button, Stack, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ModalAddCart from './ModalAddCart';

const AddCart = () => {

    const [addInfo, setAddInfo] = useState('none')
    const [rotate, setRotate] = useState('rotate(180deg)')
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => setOpen(true);


    const closeAddCountInfo = () => {
        if (addInfo == '') {
            setAddInfo('none')
            setRotate('rotate(180deg)')
        } else {
            setAddInfo('')
            setRotate('')

        }
    }

    return (
        <Stack>
            <Alert severity="info" sx={{ maxWidth: "100%", textAlign: "justify", transition: '0,3s' }}>
                <AlertTitle sx={{ width: "170px", display: 'flex', justifyContent: 'space-between' }}>
                    Agregar cuenta
                    <KeyboardArrowDownIcon onClick={closeAddCountInfo} sx={{ cursor: 'pointer', transform: rotate }} />
                </AlertTitle>
                <Typography variant='subtitle2' sx={{ display: addInfo }}>
                    Si asumirá la cuenta de alguien más, <strong>haga click en el siguiente boton:</strong>
                </Typography>
                <Button
                    onClick={handleOpenModal}
                    variant='outlined'
                    color='info'
                    sx={{ display: addInfo, width: "100%", marginTop: '1em' }}>Agregar Cuenta
                </Button>
            </Alert>
            <ModalAddCart open={open} setOpen={setOpen} handleOpen={handleOpenModal} />
        </Stack>
    )
}

export default AddCart