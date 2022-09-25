import React from "react";
import Logo from "../public/laraback-logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaPinterestP,
  FaWhatsapp,
  FaRedditAlien,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import {useRouter} from "next/router"

const links = {
  ourCompany: [
    { title: "About Us" },
    { title: "Contact Us" },
    { title: "Frequently Asked Questions" },
    { title: "Sitemap" },
  ],
  importantLinks: [
    { title: "Refer And Earn" },
    { title: "Share And Earn" },
    { title: "Privacy Policy" },
    { title: "Terms of Use" },
  ],
  explore: [
    { title: "Daily Deals" },
    { title: "All Stores" },
    { title: "All Store Categories" },
    { title: "All Coupon Categories" },
    { title: "All Daily Deal Category" },
  ],
  followUs: [
    {
      bgColor: "bg-blue-900",
      Icon: <FaFacebookF className="text-xl mt-2  text-white m-auto" />,
    },
    {
      bgColor: "bg-sky-400",
      Icon: <FaTwitter className="text-xl mt-2  text-white m-auto" />,
    },
    {
      bgColor: "bg-red-800",
      Icon: <FaYoutube className="text-xl mt-2  text-white m-auto" />,
    },
    {
      bgColor: "bg-sky-600",
      Icon: <FaTelegramPlane className="text-xl mt-2  text-white m-auto" />,
    },
    {
      bgColor: "bg-red-500",
      Icon: <FaPinterestP className="text-xl mt-2  text-white m-auto" />,
    },
    {
      bgColor: "bg-green-400",
      Icon: <FaWhatsapp className="text-xl mt-2  text-white m-auto" />,
    },
    {
      bgColor: "bg-orange-600",
      Icon: <FaRedditAlien className="text-xl mt-2  text-white m-auto" />,
    },
    {
      bgColor: "bg-sky-800",
      Icon: <FaLinkedinIn className="text-xl mt-2  text-white m-auto" />,
    },
  ],
};

function Footer() {

  return (
    <div className="relative">
      <svg
        className="relative -top-0 bg-skin-fill bg-opacity-90  z-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          className="fill-black"
          fill-opacity="1"
          d="M0,192L40,186.7C80,181,160,171,240,186.7C320,203,400,245,480,224C560,203,640,117,720,101.3C800,85,880,139,960,181.3C1040,224,1120,256,1200,240C1280,224,1360,160,1400,128L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-black">
        <div className="flex flex-row flex-wrap justify-between gap-5 px-3 pb-10 border-b border-gray-400">
          <div className="space-y-4">
            <h5 className="text-xl text-skin-muted font-semibold">
              About LarabackPro
            </h5>
            <Image src={Logo} width={200} height={50} layouts="fixed" />
            <p className="w-72 text-white  tracking-wider">
              At LarabackPro, we help you save money through our comprehensive
              listing of coupons offers, deals and discounts from top online
              brands and websites.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="text-xl text-skin-muted font-semibold">Our Company</h5>
            <ol className="list-none font-light  tracking-wider">
              {links.ourCompany.map((link) => (
                <li className="hover:text-skin-muted text-white cursor-pointer w-fit" key={link.title}>{link.title}</li>
              ))}
            </ol>
          </div>
          <div className="space-y-4">
            <h5 className="text-xl text-skin-muted font-semibold">
              Important Links
            </h5>
            <ol className="list-none font-light  tracking-wider">
              {links.importantLinks.map((link) => (
                <li className="hover:text-skin-muted text-white cursor-pointer w-fit" key={link.title}>{link.title}</li>
              ))}
            </ol>
          </div>
          <div className="space-y-4">
            <h5 className="text-xl text-skin-muted font-semibold">EXplore</h5>
            <ol className="list-none font-light  tracking-wider">
              {links.explore.map((link) => (
                <li className="hover:text-skin-muted text-white cursor-pointer w-fit" key={link.title}>{link.title}</li>
              ))}
            </ol>
          </div>
          <div className="space-y-4">
            <h5 className="text-xl text-skin-muted font-semibold">Follow Us</h5>
            <div className="flex flex-wrap md:grid md:grid-cols-5 gap-5">
              {links.followUs.map((link) => (
                <div className={`w-10 h-10 rounded-full  ${link.bgColor}`}>
                  {link.Icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center py-2 text-lg font-light">Copyright &#169; LarabackPro - 2022</p>
      </div>
    </div>
  );

}

export default Footer;
