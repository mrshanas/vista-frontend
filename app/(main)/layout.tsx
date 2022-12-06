"use client";

import {
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

import { SidebarItem } from "@components/index";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSideBar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <main>
      <section className="w-full grid grid-cols-5">
        <div
          className={`col-span-1 hidden md:flex flex-col gap-y-6 items-center my-10 ${
            isSidebarOpen
              ? "absolute bg-white w-[50vw] my-0 h-[100vh] top-0 z-20"
              : "hidden"
          }`}
        >
          {/* Organizations section  */}
          <div className="w-4/5">
            <h2 className="opacity-[0.44]">Organisations</h2>
            <SidebarItem name="Business Unit" path="/business-unit" />
          </div>

          {/* Staff section  */}
          <div className="w-4/5">
            <h2 className="opacity-[0.44]">Staff</h2>
            <SidebarItem name="Staff members" path="/staff-members" />
            <SidebarItem name="Branch managers" path="/branch-managers" />
            <SidebarItem name="Admins" path="/admins" />
          </div>

          {/* Logout Button  */}
          <div className="flex flex-col w-4/5 justify-end items-start flex-grow">
            <p className="text-red-500 flex items-center gap-x-1">
              <ArrowLeftOnRectangleIcon className="w-8 h-8" />
              Logout
            </p>
          </div>
        </div>
        <div className="col-span-5 md:col-span-4 bg-background h-[100vh] max-h-[100vh]">
          {children}
        </div>

        {/* swap to display the sidebar on mobile devices  */}

        <label className="btn bg-primary hover:bg-primary hover:border-primary border-primary btn-circle md:hidden absolute bottom-2 right-2 z-10 swap swap-rotate">
          <input type="checkbox" />

          {/* hamburger icon  */}
          <Bars3Icon
            onClick={toggleSideBar}
            className="w-6 h-6 swap-off fill-current"
          />

          {/* close icon  */}
          <XMarkIcon
            onClick={toggleSideBar}
            className="w-6 h-6 swap-on fill-current"
          />
        </label>

        {/* here is the end  */}
      </section>
    </main>
  );
}
