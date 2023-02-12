import React from "react";
const Footer = () => {
  return (
    <>
      <div className="bg-black text-paste">
        <div className="container mx-auto h-full px-9">
          <div className="grid grid-cols-3 md:grid-cols-9">
            <div className="col-span-2 md:col-span-2 gap-5">
              <div className="flex justify-center items-center text-2xl font-semibold pt-8  rounded-lg">
                Finsweet
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 gap-5">
              <div className=" pt-9">
                <ul>
                  <li className="text-lg">
                    <b>Our team</b>
                  </li>
                  <br />
                  <li>About us</li>
                  <br />
                  <li>Team</li>
                  <br />
                  <li>What we do</li>
                  <br />
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 gap-5 ">
              <div className="pl-16 md:pl-0 pt-9">
                <ul>
                  <li className="text-lg">
                    <b>More</b>
                  </li>
                  <br />
                  <li>Projects</li>
                  <br />
                  <li>Events</li>
                  <br />
                  <li>Donate</li>
                  <br />
                  <li>Blog</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 gap-5">
              <div className=" pt-9">
                <ul>
                  <li className="text-lg">
                    <b>Connnect</b>
                  </li>
                  <br />
                  <li>Facebook</li>
                  <br />
                  <li>Instagram</li>
                  <br />
                  <li>Twitter</li>
                  <br />
                  <li>Linkdn</li>
                </ul>
              </div>
            </div>
            <div className=" col-span-3 md:col-span-3  gap-5">
              <div className="pt-8 pb-6 text-4xl font-bold md:pl-4">
                Subscribe to get latest updates
              </div>
              <div className="md:pl-4">
                <input type="email" placeholder="Your email" />
                <button
                  className="bg-white text-black rounded p-2 pl-5 pr-5 border-0"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Footer;
