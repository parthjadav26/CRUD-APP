import { useEffect } from "react";
import { useState } from "react";

export default function Modelform({ isOpen, onClose, onSubmit, mode,clientData }) {
  const [rate, setRate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [status, setStatus] = useState(true);

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const clientData = {name,email,job,rate : Number(rate),isactive :status};
      await onSubmit(clientData);
      onClose();
    } catch (error) {
      console.error("Error adding Client : ",error);
    }
    onClose();
  };

  useEffect(()=>{
    if(mode === 'edit' && clientData){
      setName(clientData.name);
      setEmail(clientData.email);
      setJob(clientData.job);
      setRate(clientData.rate);
      setStatus(clientData.isactive);
    }else{
      setName('');
      setEmail('');
      setJob('');
      setRate('');
      setStatus(false);
    }
  },[mode,clientData]);
  return (
    <dialog id="my_modal_3" className="modal" open={isOpen}>
      <div className="modal-box">
        <form method="dialog" onSubmit={handleSubmit}>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>

          <h3 className="font-bold text-lg">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>
          <label className="input input-bordered my-4 w-full flex items-center gap-2">
            <span>Name</span>
            <input
              type="text"
              className="grow"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="input input-bordered my-4 w-full flex items-center gap-2">
            <span>Email</span>
            <input
              type="text"
              className="grow"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="input input-bordered my-4 w-full flex items-center gap-2">
            <span>Job</span>
            <input
              type="text"
              className="grow"
              placeholder="Enter Job Title"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </label>
          <div className="flex mb-4 justify-between">
            <label className="input input-bordered flex mr-4 w-full items-center gap-2">
              Rate
              <input
                type="number"
                className="grow"
                placeholder="Enter Rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </label>

            <select
              className="select select-bordered w-full max-w-xs"
              value={status ? "Active" : "Inactive"}
              onChange={handleStatusChange}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <button className="btn btn-success">
            {mode === "edit" ? "Save Change" : "Add Client"}
          </button>
        </form>
      </div>
    </dialog>
  );
}
