import { Stack } from '@mui/material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProfileTable = () => {

 const  navigate = useNavigate()
    const columns = [
        { field: 'no', headerName: 'NO', width: 70 },
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'lastName', headerName: 'Nombre', width: 150 },
        { field: 'telefono', headerName: 'Telefono', width: 150 },
        { field: 'email', headerName: 'Email', width: 200},
        { field: 'Cargo', headerName: 'Cargo', width: 200},
        { field: 'status', headerName: 'Estado', width: 150},
        {
            field: 'actions', headerName: 'Acciones', width: 150,
            type: 'actions',
            getActions: () => [
              <GridActionsCellItem icon={<ModeEditOutlineOutlinedIcon />}  onClick={()=>navigate('/admin/editprofile')} label="Edit" />,
              <GridActionsCellItem icon={<DeleteForeverOutlinedIcon />} label="Delete" />
        ]
        }
      
      ];
      
    const rows = [
         { id: 1, lastName: 'Snow', telefono: '+58041227777', email: 'nayle27@gmail.com', Cargo: 'Admin',status:'active',actions:''}
        // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        //  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        //  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        //  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        //  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        //  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        //  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
       ];
  return (
    <Stack sx={{ height: 500, width: '100%', backdropFilter: 'shadow(.25rem .25rem 0 rgba(0,0,0,.1))'}}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
    />
 
  </Stack>
  )
}

export default ProfileTable