import * as React from 'react';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import './DataGrids.css'
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';


export default function DataGrids(props) {
    const actionColumn : GridColDef = {
        field:"action",
        headerName:"Action",
        width:200,
        renderCell:(param)=>{
            return(
                <div className="action">
                    <Link to={`/${props.slug}/${param.row.id}`} ><img src="/view.svg" alt="" /></Link>
                
                </div>
            )
        }
    }





  return (
    <div >
      <DataGrid
        className='dataGrids'
        rows={props.rows}
        columns={[...props.columns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:200}
            }
        }}

        style={{colors:'red'}}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
}