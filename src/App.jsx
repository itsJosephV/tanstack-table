import "./App.css";
import Table from "./components/table/Table";
import { DATA } from "../src/data/MOCK_DATA";
import { userColumns } from "./columns/userColumns";
import { deviceColumns } from "./columns/deviceColumns";
import { DATA2 } from "./data/MOCK_DATA-2";

function App() {
  return (
    <main className="py-6 px-4">
      <header className="font-mono py-2 border-b border-stone-950/10 mb-5">
        TanStack Table - testing
      </header>
      <div className="space-y-5">
        <Table data={DATA2} column={deviceColumns} tableContext="device" />
        <Table data={DATA} column={userColumns} tableContext="user" />
      </div>
    </main>
  );
}

export default App;
