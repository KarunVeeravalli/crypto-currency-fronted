import React, { useEffect } from 'react'
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import DataGrids from '../DataGrids/DataGrids';
import { useDispatch, useSelector } from 'react-redux';
import { getOnlyUser, getUser } from '../../../Redux/User/action';
import './Transaction.css'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    // { field:"avatar", headerName:"Avatar", width:100, 
    //   renderCell:(param)=>{return <img src={param.row.img || "/noavatar.png"} alt=''/>}
    //   },
    {
      field: 'fromAccount',
      headerName: 'From Account',
      width: 130,
      editable: false,
    },
    {
      field: 'fromWallet',
      headerName: 'From Wallet',
    //   width: 150,
      editable: false,
    },
    {
      field: 'toAccount',
      headerName: 'To Account',
      width: 160,
      editable: false,
    },
    {
      field: 'toWalletId',
      headerName: 'To Wallet',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
    //   width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        editable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      editable: false,
    },
    {
        field: 'transactionType',
        headerName: 'Transaction Type',
        width: 160,
        editable: false
    },
    {
        field: 'type',
        headerName: 'Type',
        editable: false
    },
    {
        field: 'transactionTimeStamp',
        headerName: 'Date and Time',
        width:190,
        editable: false
    }
  ];
 

const Transaction = () => {

  const dispatch = useDispatch();
  //to get user data
  const { user ,userInfo} = useSelector((store) => store.userReducer);
  useEffect(()=>{
    if(user?.id) {
      dispatch(getUser(user?.id));
   }
  },[dispatch,user]);

  useEffect(() => {
    dispatch(getOnlyUser());
    console.log(user)
  }, [dispatch]);

  const children = userInfo?.data?.transactions;

  return (
    <div className="transactionsMain">
        <div className="transactionsInfo">
            <h2>Transactions</h2>
        </div>
        <div className="transactionsSub">
            {children?<DataGrids slug="transactions" columns={columns} rows={children}/>:<h2>No Transaction Found</h2>   }
        </div>
    </div>
  )
}

export default Transaction