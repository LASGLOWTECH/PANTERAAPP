
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaPlus,
  FaListUl,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Auth Redirect Logic
  useEffect(() => {
    const token = localStorage.getItem("admin_token");

    if (!token && pathname !== "/admin/login") {
      router.replace("/admin/login");
    }

    if (token && pathname === "/admin/login") {
      router.replace("/admin/events");
    }
  }, [pathname, router]);

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
    setSidebarOpen(false);
  };

  // Remove layout on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const linkClass = (path) =>
    `flex items-center w-full py-2 px-3 rounded-md text-gray-700 hover:bg-gray-200 ${
      pathname === path ? "bg-gray-200 font-semibold" : ""
    }`;

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex justify-between items-center px-4 py-3">
        <div className="text-lg font-semibold text-gray-800">Admin Panel</div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white w-64 py-8 px-4 shadow-md fixed top-0 left-0 h-full transform transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0 flex flex-col justify-between`}
      >
        {/* Top Section */}
        <div>
          <div className="hidden md:block text-lg font-semibold mb-6 text-gray-800">
            Admin Panel
          </div>

          <nav className="flex flex-col space-y-2 mt-12 md:mt-0">
            <Link
              href="/admin/events"
              className={linkClass("/admin/events")}
              onClick={() => setSidebarOpen(false)}
            >
              <FaListUl className="h-5 w-5 mr-2" /> Events List
            </Link>

            <Link
              href="/admin/events/create"
              className={linkClass("/admin/events/create")}
              onClick={() => setSidebarOpen(false)}
            >
              <FaPlus className="h-5 w-5 mr-2" /> Create Event
            </Link>

            <Link
              href="/admin/reservations"
              className={linkClass("/admin/reservations")}
              onClick={() => setSidebarOpen(false)}
            >
              <FaListUl className="h-5 w-5 mr-2" /> Reservations
            </Link>
          </nav>
        </div>

        {/* Logout Section */}
        <div className="mt-4 border-t pt-4">
          <button
            onClick={handleLogout}
            className="flex items-center w-full py-2 px-3 rounded-md text-red-600 hover:bg-red-100 font-semibold transition"
          >
            <FaSignOutAlt className="h-5 w-5 mr-2" /> Logout
          </button>
        </div>
      </aside>

      {/* Dark overlay when sidebar is open on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 mt-16 md:mt-0">{children}</main>
    </div>
  );
}
