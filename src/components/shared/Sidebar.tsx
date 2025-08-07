"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaCog, FaHome } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-slate-100 min-h-screen p-4 rounded-xl">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className={`flex items-center space-x-2 p-3 rounded-md ${
              isActive("/dashboard") ? "bg-teal-200 font-semibold" : "hover:bg-gray-200 text-gray-700"
            }`}
          >
            <FaHome className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/user-info"
            className={`flex items-center space-x-2 p-3 rounded-md ${
              isActive("/dashboard/user-info") ? "bg-teal-200 font-semibold" : "hover:bg-gray-200 text-gray-700"
            }`}
          >
            <FaUser className="h-5 w-5" />
            <span>User Info</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings"
            className={`flex items-center space-x-2 p-3 rounded-md ${
              isActive("/dashboard/settings") ? "bg-teal-200 font-semibold" : "hover:bg-gray-200 text-gray-700"
            }`}
          >
            <FaCog className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
