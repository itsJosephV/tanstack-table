import "./App.css";
import Table from "./components/table/Table";
// import { DATA } from "../src/data/MOCK_DATA";
// import { userColumns } from "./columns/userColumns";
import { deviceColumns } from "./columns/deviceColumns";
import { DATA2 } from "./data/MOCK_DATA-2";
// import { fakeDataColumns } from "./columns/fakeDataColumns";
// import { useEffect } from "react";
// import { useState } from "react";

function App() {
  // const [fakeData, setFakeData] = useState([]);

  // const URL = "https://mocki.io/v1/a68ed1e7-cfab-4ca9-9ca0-4f2613102acf";

  // useEffect(() => {
  //   async function fetchFakeData() {
  //     const res = await fetch(URL);
  //     const data = await res.json();
  //     setFakeData(data);
  //   }
  //   fetchFakeData();
  // }, []);

  return (
    <main className="py-6 px-4">
      <header className="font-mono py-2 border-b border-stone-950/10 mb-5">
        TanStack Table - testing
      </header>
      <div className="space-y-5">
        <Table data={DATA2} column={deviceColumns} tableContext="device" />
        {/* <Table
          data={fakeData}
          column={fakeDataColumns}
          tableContext="fake data"
        /> */}
        {/* <Table data={DATA} column={userColumns} tableContext="user" /> */}
      </div>
    </main>
  );
}

export default App;
