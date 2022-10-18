import { Stack } from '@mui/material'
import React from 'react'
import AlertOrder from './AlertOrder'

const AlertOrderMain = () => {
  return (
    <Stack sx={{display: 'flex', maxHeight: 350, overflow: 'scroll', gap: '1em'}}>
        <AlertOrder/>
        <AlertOrder/>
        <AlertOrder/>
        <AlertOrder/>
        <AlertOrder/>
        <AlertOrder/>
        <AlertOrder/>
        <AlertOrder/>
        <AlertOrder/>
    </Stack>
  )
}

export default AlertOrderMain