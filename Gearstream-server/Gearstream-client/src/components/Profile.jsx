import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Profile = ({ user }) => {
  const {logOut} = useContext(AuthContext)
  const handleLogout = () => {
    logOut().then(() => {
      // Sign-out successful.
      alert("Logout Successful!")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            {
                user.photoURL ? <img
                alt="Tailwind CSS Navbar component"
                src={user.photoURL}
              /> :<img
              alt="Tailwind CSS Navbar component"
              src={"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
            />
            }
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between" href="/update-profile">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
