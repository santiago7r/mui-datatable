
import MUIDataTable from 'mui-datatables';
import './App.css';
import usePosts from './hooks/usePosts';

function App() {
const { data } = usePosts();

  const columns = ["User ID", "ID", "Title", "Body"];

  const options = {
    filterType: 'checkbox',
  };
  
  return <MUIDataTable
    title={"Posts List"}
    data={data}
    columns={columns}
    options={options}
  />;
}

export default App;
