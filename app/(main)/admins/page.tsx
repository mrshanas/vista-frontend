import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import { Button } from "@components/index";
import admin1 from "@assets/images/admin-1.png";
import admin2 from "@assets/images/admin-2.png";

export default function Page() {
  return (
    <section className="w-full pl-1">
      {/* Header  */}
      <header className="flex items-center justify-around my-4">
        <div className="hidden md:block">
          <h3 className="font-semibold">Admins</h3>
        </div>
        <div className="bg-white rounded-md flex items-center gap-x-2 p-2">
          <MagnifyingGlassIcon className="w-5 h-5 opacity-[0.44]" />
          <input
            type="text"
            placeholder="Search admin"
            className="outline-none border-none"
          />
        </div>
        <div className="">
          <Button text="New admin" primary />
        </div>
      </header>

      {/* Admins table  */}

      <article className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Employee id</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={admin1} alt="Admin 1" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold opacity-[0.44]">tahir001</h4>
                  </div>
                </div>
              </th>
              <th>Tahir Ramzan</th>
              <th>12345667</th>
            </tr>

            {/* admin 2  */}
            <tr>
              <th>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={admin2} alt="Admin 1" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold opacity-[0.44]">tahir001</h4>
                  </div>
                </div>
              </th>
              <th>Tahir Ramzan</th>
              <th>12345667</th>
            </tr>
            {/* admin 3  */}
            <tr>
              <th>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={admin1} alt="Admin 1" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold opacity-[0.44]">tahir001</h4>
                  </div>
                </div>
              </th>
              <th>Tahir Ramzan</th>
              <th>12345667</th>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  );
}
