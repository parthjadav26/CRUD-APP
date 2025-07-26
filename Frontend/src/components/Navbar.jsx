export default function Navbar({onOpen,onSearch}) {
  const handleSearchChange = (event) =>{
    onSearch(event.target.value);
  }
  return (
    <div className="navbar bg-base-100 shadow-sm p-4">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearchChange}
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
      <div className="navbar-end">
        <a onClick={onOpen} className="btn btn-primary white-text">Add Client</a>
      </div>
    </div>
  );
}
