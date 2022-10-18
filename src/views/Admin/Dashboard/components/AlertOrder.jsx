import { Alert, Button } from '@mui/material'
import React from 'react'

const AlertOrder = () => {
    return (
        <Alert severity='error' sx={{display: 'flex', alignItems: 'center' }}
            action={
                <Button color="inherit" size="small">
                    Abrir
                </Button>
            }
        >
           El cliente <strong>Deriam Suarez</strong> en la mesa <strong>#1B</strong> quiere abrir una cuenta
        </Alert>
    )
}

export default AlertOrder