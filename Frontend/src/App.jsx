import "./index.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Tablelist from "./components/Tablelist";
import ModelForm from "./components/ModelForm";
import axios from "axios";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modelMode, setModel] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState({});
  const [tableData, setTabledate] = useState([]);
  const [error, setError] = useState(null);

  const handleOpen = (mode, client) => {
    setClientData(client);
    setModel(mode);
    setIsOpen(true);
  };
  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/clients");
      console.log(response.data);
      setTabledate(response.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchClients();
  }, []);

  const handleSubmit = async (newClientData) => {
    if (modelMode === "add") {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/clients",
          newClientData
        );
        console.log("Client Added:", response.data);
        setTabledate((prevData) => [...prevData, response.data]);
      } catch (error) {
        console.error("Error adding clients :", error);
      }
    } else {
      try {
        const response = await axios.put(
          `http://localhost:3000/api/clients/${clientData.id}`,
          newClientData
        );
        console.log("Client Data:", response.data);
        setTabledate((prevData) =>
          prevData.map((client) =>
            client.id === clientData.id ? response.data : client
          )
        );
      } catch (error) {
        console.error("Error updating clients :", error);
      }
    }
  };
  return (
    <div>
      <Navbar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
      <Tablelist
        onOpen={handleOpen}
        searchTerm={searchTerm}
        tableData={tableData}
        setTabledate={setTabledate}
        setError={setError}
      />

      <ModelForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode={modelMode}
        onSubmit={handleSubmit}
        clientData={clientData}
      />
    </div>
  );
}
