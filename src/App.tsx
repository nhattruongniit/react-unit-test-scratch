// components
import Muitable from "./components/mui-table";
import AntTable from "./components/ant.table";

const App = () => {
  return (
    <div className="md:container md:mx-auto">
      <h3>Mui Table</h3>

      <Muitable />

      <h3>Antd Table</h3>
      <AntTable />
    </div>
  );
};

export default App;
