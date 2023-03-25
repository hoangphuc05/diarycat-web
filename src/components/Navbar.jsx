import Link from "next/link";

export default Navbar()
{
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className='flex-none'>
          <a className="btn btn-ghost normal-case text-xl">Diary Cat</a>
        </div>
        <div className='flex-1'>
          <a className="btn btn-ghost normal-case text-lg">All Entries</a>
        </div>
        <div className='navbar-end'>
          <a className="btn btn-ghost normal-case text-xl">Login</a>
        </div>
      </div>
    </nav>
  );
}