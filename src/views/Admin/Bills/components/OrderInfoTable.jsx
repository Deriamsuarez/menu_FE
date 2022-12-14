import React from 'react';
import { DataGrid } from '@mui/x-data-grid';



const OrderInfoTable = () => {

    const columns = [
        { field: 'name', headerName: 'Name', width: 180, editable: true },
        { field: 'age', headerName: 'Age', type: 'number', editable: true },
        {
          field: 'dateCreated',
          headerName: 'Date Created',
          type: 'date',
          width: 180,
          editable: true,
        },
        {
          field: 'lastLogin',
          headerName: 'Last Login',
          type: 'dateTime',
          width: 220,
          editable: true,
        },
      ];
      
      const rows = [
        {
          id: 1,
          name: 'hola',
          age: 25,
          dateCreated: '12/12/2020',
          lastLogin: 'randomUpdatedDate()',
        },
        {
          id: 2,
          name: 'randomTraderName()',
          age: 36,
          dateCreated: 'randomCreatedDate()',
          lastLogin: 'randomUpdatedDate()',
        },
        {
          id: 3,
          name: 'randomTraderName()',
          age: 19,
          dateCreated: 'randomCreatedDate()',
          lastLogin: 'randomUpdatedDate()',
        },
        {
          id: 4,
          name: 'randomTraderName()',
          age: 28,
          dateCreated: 'randomCreatedDate()',
          lastLogin: 'randomUpdatedDate()',
        },
        {
          id: 5,
          name: 'randomTraderName()',
          age: 23,
          dateCreated: 'randomCreatedDate()',
          lastLogin: 'randomUpdatedDate()',
        },
      ];


    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    );
  }
  

export default OrderInfoTable

//????????????





