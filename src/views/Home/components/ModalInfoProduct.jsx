import { Stack, Card, CardContent, CardMedia, Modal, Typography, CardActions, Button } from '@mui/material'
import React from 'react'

const styleCardModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
};

const ModalInfoProduct = ({ handleClose, modalInfo, handleClick, open, addProduct }) => {


    const addElement = (id) => {
        handleClick();
        addProduct(id);
    }


    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"

        >
            <Card sx={styleCardModal}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://www.tastingtable.com/img/gallery/heres-how-hamburgers-got-their-name/l-intro-1653066580.jpg"
                    alt="green iguana"
                />
                <Stack sx={{ p: '0 1em 1em 1em' }}>
                    <CardContent>
                        <Stack
                            sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography gutterBottom variant="h6" component="div" color='error.main'>
                                {modalInfo?.name}
                            </Typography>

                        </Stack>
                        <Typography textAlign='justify' variant="body2" color="text.secondary">
                            {modalInfo?.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={() => addElement(modalInfo)} size="small">Agregar</Button>
                        <Typography variant="subtitle2" component="div" color='success.main' textAlign='right' maxWidth='70px' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            ${modalInfo?.price}
                        </Typography>
                    </CardActions>
                </Stack>
            </Card>
        </Modal>
    )
}

export default ModalInfoProduct