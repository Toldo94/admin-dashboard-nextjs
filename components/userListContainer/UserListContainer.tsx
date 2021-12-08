import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 90,
  },
  {
    field: 'website',
    headerName: 'Website',
    width: 90,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link href={`/admin-dashboard/user-details/${params.row.id}`} passHref>
            <button className='userListEdit'>Edit</button>
          </Link>
        </>
      );
    },
  },
];

function UserListContainer() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      console.log(res);
      const data = await res.json();
      console.log(data);
      const filteredData = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        website: item.website,
      }));
      setRows(filteredData);
    }
    fetchData();
  }, [setRows]);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  );
}

export default UserListContainer;
