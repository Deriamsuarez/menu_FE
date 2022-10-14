import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';

const columns = [
  { field: 'no', headerName: 'NO', width: 70 },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Fecha', width: 150 },
  { field: 'customer', headerName: 'Cliente', width: 200 },
  { field: 'email', headerName: 'Email', width: 200},
  { field: 'amount', headerName: 'Total', width: 150},
  { field: 'status', headerName: 'Estado', width: 150},
  { field: 'employee', headerName: 'Camarero', width: 200},
  { field: 'actions', headerName: 'Acciones', width: 150},

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const Table = () => {
    return (
        <Stack sx={{ height: 470, width: '100%', backdropFilter: 'shadow(.25rem .25rem 0 rgba(0,0,0,.1)) '  }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
          />
        </Stack>
      );
}

export default Table;



//   { field: 'amount', headerName: 'Total', type: 'number', width: 90},
    //   {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },