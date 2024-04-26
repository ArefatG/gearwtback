import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard" className="flex justify-start mb-3">
                <h2 className="text-deepblue text-xl">GEARSTREAM</h2>
                <span className="badge  bg-deepblue text-white">
                  Admin
                </span>
              </Link>
            </li>
            <hr/>
            <li className="mt-3">
              <Link to="/dashboard">
                <MdOutlineSpaceDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users">
                <MdOutlineShoppingBag />
                Manage Bookings
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users">
                <IoIosAddCircleOutline />
                Add Item
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users">
                <FaRegEdit />
                Manage Item
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users">
                <LuUsers />
                All users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
