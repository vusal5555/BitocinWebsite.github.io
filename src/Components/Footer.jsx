import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-200 clip" id="footer">
      <div className="max-w-[1140px] m-auto flex flex-col lg:flex-row gap-[4.5rem] lg:gap-[7rem] mt-[10rem] py-[5rem] px-4 lg:px-0">
        <div className="col-span-1 mt-[1rem]">
          <h1 className="text-5xl font-bold">
            De<span className="text-green-700">Fi</span>
          </h1>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-[5rem]  lg:gap-[10rem] mt-6">
          <div>
            <h6 className="font-bold">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
