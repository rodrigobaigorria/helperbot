import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import avatar from '../../assets/img/avatar.jpg';

export default function UserList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'Username',
          width: 200,
          renderCell: (params) => {
              return (
                  <div className='userListUser'>
                      <img className='userListImg' src={params.row.avatar} />
                      {params.row.username}
                  </div>
              )
          },
        },
        {
          field: 'phone',
          headerName: 'Phone',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
            editable: true,
          },
      ];
      
      const rows = [
        { id: 1, username: 'Jon Snow', avatar, phone:'1144375744', email: 'jon@gmail.com', status:'active' },
        { id: 2, username: 'Jon Snow', avatar, phone:'1144375744', email: 'jon@gmail.com', status:'active' },
        { id: 3, username: 'Jon Snow', avatar, phone:'1144375744', email: 'jon@gmail.com', status:'active' },
        { id: 4, username: 'Jon Snow', avatar, phone:'1144375744', email: 'jon@gmail.com', status:'active' },
        { id: 5, username: 'Jon Snow', avatar, phone:'1144375744', email: 'jon@gmail.com', status:'active' },
        { id: 6, username: 'Jon Snow', avatar, phone:'1144375744', email: 'jon@gmail.com', status:'active' },
        { id: 7, username: 'Jon Snow', avatar, phone:'1144375744', email: 'jon@gmail.com', status:'active' },
        { id: 8, username: 'Jon Snow', avatar, phone:'1144375744', email: 'jon@gmail.com', status:'active' },

      ];
  return (
    <div className='userList'>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    </div>
  )
}
