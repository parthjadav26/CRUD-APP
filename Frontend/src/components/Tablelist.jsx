import axois from "axios";

export default function Tablelist({ onOpen, tableData, searchTerm, setTabledate, setError }) {
  const handleDelete = async(id) =>{
    const confirmDelete = window.confirm("Are you sure you want to delete this client?");
    if(confirmDelete){
      try {
        await axois.delete(`http://localhost:3000/api/clients/${id}`);
      setTabledate((prevData)=> prevData.filter(client => client.id != id));
      } catch (error) {
        setError(error);
      }
    }
  };

  const filterData = tableData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((client,index) => (
            <tr key={client.id}>
              <th>{index + 1}</th>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.job}</td>
              <td>${client.rate}</td>
              <td>
                <button
                  className={`btn  rounded-full w-20 ${
                    client.isactive ? `btn-info text-white` : `btn-outline`
                  }`}
                >
                  {client.isactive ? "Active" : "Inactive"}
                </button>
              </td>
              <td>
                <button
                  onClick={() => onOpen("edit",client)}
                  className="btn btn-primary text-white"
                >
                  Update
                </button>
              </td>
              <td>
                <button className="btn btn-error text-white" onClick={() => handleDelete(client.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
