import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const SectionMenu = ({ section, handleOpen, addProduct }) => {
    return (
        <Stack
            position='relative'
            overflow='hidden'
            sx={{
                maxWidth: '400px',
                border: '0.5px solid gray',
                borderRadius: '0.5em',
                boxShadow: 2
            }}>
            <Box
                p={2}
                sx={{
                    width: '100%',
                    height: '62px',
                    backgroundColor: '#1d3557',
                    boxShadow: ''
                }}
            >
                <Typography variant='h6' color='white'>
                    {section.title}
                </Typography>
            </Box>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="center">Precio</TableCell>
                            <TableCell align="center">Cart</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {section.rows.map(row => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell onClick={() => handleOpen(row)} sx={{ maxWidth: '200px', color: 'primary.main', width: '100%', cursor: 'pointer' }} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.price}</TableCell>
                                <TableCell align="center">
                                    <Button onClick={ ()=> addProduct(row) } variant="contained">
                                        Agregar
                                    </Button>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Stack>
    )
}

export default SectionMenu