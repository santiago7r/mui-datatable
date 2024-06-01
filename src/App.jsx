
import MUIDataTable from 'mui-datatables';
import './App.css';
import useGetPosts from './hooks/useGetPosts.js';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

import Modals from './components/Modals.jsx';

function App() {
  const { data } = useGetPosts();
  const [dataTable, setDataTable] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDataTable(data);
  }, [data])

  useEffect(() => {
    if(dataTable.length > 0) {
      localStorage.setItem('postsFromAPI', JSON.stringify(dataTable));
    }
  }, [dataTable])


  const columns = [
    {
      name: "User ID",
      options: {
        display: false
      }
    }, "ID", "Title", "Body"];

  const handleCustomBodyRender = (rowData) => {
    console.log({rowData});
  }

  const handleDelete = (_, dataTableWithOutDeletedPosts) => {
    setDataTable(dataTableWithOutDeletedPosts);
  }

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const addPost = ({userId, id, title, body}) => {
    const newPost = [
        userId,
        id,
        title,
        body];

    const newDataTable = [newPost, ...dataTable];

    setDataTable(newDataTable);
    handleClose();

  }
  
  const options = {
    filterType: 'checkbox',
    customBodyRender: handleCustomBodyRender,
    onRowsDelete: handleDelete
  };
  
  return (
    <>
      <Modals handleClose={handleClose} open={open} addPost={addPost}/>
      <Button onClick={handleOpen}>
        Add Post
      </Button>

      <MUIDataTable
        title={"Posts List"}
        data={dataTable}
        columns={columns}
        options={options}
      />
    </>
  )
}

export default App;
