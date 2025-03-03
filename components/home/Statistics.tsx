import React from "react";
import { Users, CheckCircle, Handshake } from "lucide-react";

const Statistics = () => {
  return (
    <section className="bg-[#EEF8F2]">
      <div className="max-w-[1300px] flex flex-col gap-7 md:gap-10 m-auto px-5 md:px-9 slg:px-12 lg:px-[74px] py-20">
        <div className="flex flex-col gap-1 text-center">
          <h2 className="text-dark_primary text-xl font-bold tracking-[2px]">
            Our Impact
          </h2>
          <p className="text-[30px] font-medium">
            Transforming lives through support, opportunity, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 slg:gap-8">
          <div className="bg-white p-6 flex items-center gap-4 border border-primary rounded-xl">
            <div className="bg-[#EEF8F2] flex items-center justify-center p-4 rounded-md">
              <Users className="size-8 text-green-600" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-3xl font-bold">5,000+</h3>
              <p className="text-sm text-gray-700">Individuals Reached</p>
            </div>
          </div>

          <div className="bg-white p-6 flex items-center gap-4 border border-primary rounded-xl">
            <div className="bg-[#EEF8F2] flex items-center justify-center p-4 rounded-md">
              <CheckCircle className="size-8 text-green-600" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-3xl font-bold">85%</h3>
              <p className="text-sm text-gray-700">Success Rate</p>
            </div>
          </div>

          <div className="bg-white p-6 flex items-center gap-4 border border-primary rounded-xl">
            <div className="bg-[#EEF8F2] flex items-center justify-center p-4 rounded-md">
              <Handshake className="size-8 text-green-600" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-3xl font-bold">1,200+</h3>
              <p className="text-sm text-gray-700">Community Volunteers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
