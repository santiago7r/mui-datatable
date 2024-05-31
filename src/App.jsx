
import MUIDataTable from 'mui-datatables';
import './App.css';
import usePosts from './hooks/usePosts';

function App() {
  const { data } = usePosts();

  const columns = [
    {
      name: "User ID",
      options: {
        display: false
      }
    }, "ID", "Title", "Body"];

  const handleRowClick = (rowData) => {
    console.log(rowData);
  }

  const handleDelete = (_, dataTableWithOutDeletedPosts) => {
    localStorage.setItem('postsFromAPI', JSON.stringify(dataTableWithOutDeletedPosts));
    console.log(JSON.parse(localStorage.getItem('postsFromAPI')));
  }
  


  const options = {
    filterType: 'checkbox',
    onRowClick: handleRowClick,
    onRowsDelete: handleDelete
  };
  
  return <MUIDataTable
    title={"Posts List"}
    data={data}
    columns={columns}
    options={options}
  />;
}

export default App;
