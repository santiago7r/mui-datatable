
import MUIDataTable from 'mui-datatables';
import './App.css';
import useGetPosts from './hooks/useGetPosts.js';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

import Modals from './components/Modals.jsx';
import useAddPost from './hooks/useAddPost.js';
import useDeletePost from './hooks/useDeletePost.js';
import useUpdatePost from './hooks/useUpdatePost.js';

function App() {
  const { data } = useGetPosts();
  const { addPost } = useAddPost();
  const { deletePost } = useDeletePost();
  const { updatePost } = useUpdatePost();
  const [dataTable, setDataTable] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [currenEditingRow, setCurrenEditingRow] = useState();
  const [selectedRowDetails, setSelectedRowDetails] = useState();
  

  useEffect(() => {
    setDataTable(data);
  }, [data])

  const handleDelete = (_, dataTableWithOutDeletedPosts) => {
    setDataTable(dataTableWithOutDeletedPosts);
    deletePost(dataTableWithOutDeletedPosts)
  }

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleOpenEdit = () => setOpenEdit(true);

  const handleCloseEdit = () => setOpenEdit(false);

  const handleOpenDetails = () => setOpenDetails(true);

  const handleCloseDetails = () => setOpenDetails(false);

  const addNewPost = ({userId, id, title, body}) => {
    const newPost = [
        userId,
        id,
        title,
        body];

    const newDataTable = [newPost, ...dataTable];

    setDataTable(newDataTable);
    addPost(newPost);
    handleClose();

  }

  const handleEditPost = ({userId, id, title, body}) => {
    const updatedPost = [
        userId,
        id,
        title,
        body
      ];
    const updatedDataTable = dataTable.map(post => (post[1] === id ? updatedPost : post))
    setDataTable(updatedDataTable);
    updatePost(updatedPost);
    handleCloseEdit();
  }

  const columns = [
    {
      name: "User ID",
      options: {
        display: false
      }
    }, "ID", "Title", "Body",
    { name: "Action", 
    options: {
      filter: true,
      customBodyRender: (_, {rowData}) => {
      return (
        <button onClick={(event) => {
          event.stopPropagation();
          setCurrenEditingRow(rowData);
          handleOpenEdit();
        }
      }
        >Edit</button>
      );
      }
    }
    }];

    const hanldeRowClick = (rowInfo, _, event) => {
      event.stopPropagation();
      setSelectedRowDetails(rowInfo);
      handleOpenDetails();
    }
  
  const options = {
    filterType: 'checkbox',
    onRowsDelete: handleDelete,
    filter: false,
    print: false,
    download: false,
    viewColumns: false,
    onRowClick: hanldeRowClick
  };
  return (
    <>
      {open && <Modals
        handleClose={handleClose}
        open={open}
        action={addNewPost}
      />}
     {openEdit && currenEditingRow && <Modals
        key={currenEditingRow[1]}
        handleClose={handleCloseEdit}
        open={openEdit}
        currenEditingRow={currenEditingRow}
        action={handleEditPost}
        labelOfButton='EDIT'
      />
      }      
      {openDetails && selectedRowDetails && <Modals
        key={selectedRowDetails[1]}
        handleClose={handleCloseDetails}
        open={openDetails}
        currenEditingRow={selectedRowDetails}
        allDisabled={true}
        showLabel={false}
      />
      } 
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
