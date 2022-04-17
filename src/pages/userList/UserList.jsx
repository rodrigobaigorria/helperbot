import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import avatar from '../../assets/img/avatar.jpg';

export default function UserList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'usuario',
          headerName: 'Usuario',
          width: 200,
          renderCell: (params) => {
              return (
                  <div className='userListUser'>
                      <img className='userListImg' src={params.row.avatar} />
                      {params.row.usuario}
                  </div>
              )
          },
        },
        {
          field: 'telefono',
          headerName: 'Telefono',
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
            field: 'estado',
            headerName: 'Estado',
            width: 200,
            editable: true,
          },
      ];
      
      const rows = [
        { id: 1, usuario: 'Jon Snow', avatar, telefono:'1144375744', email: 'jon@gmail.com', estado:'active' },
        { id: 2, usuario: 'Jon Snow', avatar, telefono:'1144375744', email: 'jon@gmail.com', estado:'active' },
        { id: 3, usuario: 'Jon Snow', avatar, telefono:'1144375744', email: 'jon@gmail.com', estado:'active' },
        { id: 4, usuario: 'Jon Snow', avatar, telefono:'1144375744', email: 'jon@gmail.com', estado:'active' },
        { id: 5, usuario: 'Jon Snow', avatar, telefono:'1144375744', email: 'jon@gmail.com', estado:'active' },
        { id: 6, usuario: 'Jon Snow', avatar, telefono:'1144375744', email: 'jon@gmail.com', estado:'active' },
        { id: 7, usuario: 'Jon Snow', avatar, telefono:'1144375744', email: 'jon@gmail.com', estado:'active' },
        { id: 8, usuario: 'Jon Snow', avatar, telefono:'1144375744', email: 'jon@gmail.com', estado:'active' },

      ];
  return (
    <div className='userList'>
      <div style={{ height: 400, width: '80%' }}>
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
