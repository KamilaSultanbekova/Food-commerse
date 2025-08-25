import CallIcon from "@mui/icons-material/Call";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GooglePlay from "../assets/792.png";
import AppStore from "../assets/793.png";
import Facebook from "../assets/794.png";
import SomeX from "../assets/795.png";
import Instagram from "../assets/796.png";
import SomeIn from "../assets/797.png";
import Lastpart from "../assets/88.png";

export default function Footer() {
  return (
    <div className="bg-[#F3F4F6] px-6 md:px-16 lg:px-40 pt-10 pb-10 container mx-auto mt-5">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold">
            Join our newsletter for £10 offs
          </h1>
          <h1 className="text-gray-500 pt-3 text-sm lg:text-base">
            Register now to get latest updates on promotions &{" "}
            <br className="hidden lg:block" />
            coupons. Don’t worry, we not spam!
          </h1>
        </div>
        <div className="items-center">
          <div className="flex flex-col sm:flex-row">
            <input
              className="border border-gray-300 px-3 py-3 bg-white rounded-tl-xl rounded-bl-xl sm:rounded-bl-xl sm:rounded-tl-xl sm:pr-20 w-full sm:w-auto"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="bg-[#634C9F] rounded-tr-xl rounded-br-xl text-white p-3 w-full sm:w-auto">
              SEND
            </button>
          </div>
          <h1 className="text-gray-500 text-xs sm:text-sm mt-2">
            By subscribing you agree to our{" "}
            <span className="text-black">
              Terms & Conditions and Privacy & Cookies Policy.
            </span>
          </h1>
        </div>
      </div>

      <br />
      <hr className="text-gray-400" />

      <div className="my-6 flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="flex-1">
          <h1 className="font-bold text-lg">Do You Need Help ?</h1>
          <h1 className="my-2 text-gray-500 text-sm">
            Autoseligen syr. Nek diarask fröbomba. Nör{" "}
            <br className="hidden lg:block" />
            antipol kynoda nynat. Pressa fåmoska.
          </h1>
          <div className="flex gap-2 items-center mt-5">
            <CallIcon fontSize="large" />
            <div>
              <h1 className="text-gray-600 text-sm">Monday-Friday: 08am-9pm</h1>
              <h1 className="text-black text-xl font-bold">0 800 300-353</h1>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-5">
            <EmailOutlinedIcon fontSize="large" />
            <div>
              <h1 className="text-gray-600 text-sm">
                Need help with your order?
              </h1>
              <h1 className="text-black text-md font-bold">info@example.com</h1>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-black font-semibold">Make Money with Us</h1>
          {[
            "Sell on Grogin",
            "Sell Your Services on Grogin",
            "Sell on Grogin Business",
            "Sell Your Apps on Grogin",
            "Become an Affiliate",
            "Advertise Your Products",
            "Sell-Publish with Us",
            "Become a Blowwe Vendor",
          ].map((item, i) => (
            <h1 key={i} className="mt-1 text-gray-500 text-sm">
              {item}
            </h1>
          ))}
        </div>

        <div className="flex-1">
          <h1 className="text-black font-semibold">Let Us Help You</h1>
          {[
            "Accessibility Statement",
            "Your Orders",
            "Returns & Replacements",
            "Shipping Rates & Policies",
            "Refund and Returns Policy",
            "Privacy Policy",
            "Terms and Conditions",
            "Cookie Settings",
            "Help Center",
          ].map((item, i) => (
            <h1 key={i} className="mt-1 text-gray-500 text-sm">
              {item}
            </h1>
          ))}
        </div>

        <div className="flex-1">
          <h1 className="text-black font-semibold">Get to Know Us</h1>
          {[
            "Careers for Grogin",
            "About Grogin",
            "Investor Relations",
            "Grogin Devices",
            "Customer reviews",
            "Social Responsibility",
            "Store Locations",
          ].map((item, i) => (
            <h1 key={i} className="mt-1 text-gray-500 text-sm">
              {item}
            </h1>
          ))}
        </div>

        <div className="flex-1">
          <h1 className="font-semibold">Download our app</h1>
          <div className="flex gap-2 mt-3 items-center">
            <img className="w-24" src={GooglePlay} />
            <h1 className="text-xs sm:text-sm">
              Download App Get <br /> -10% Discount
            </h1>
          </div>
          <div className="flex gap-2 mt-3 items-center">
            <img className="w-24" src={AppStore} />
            <h1 className="text-xs sm:text-sm">
              Download App Get <br /> -20% Discount
            </h1>
          </div>
          <div className="mt-5">
            <h1 className="text-md">Follow us on social media:</h1>
            <div className="flex gap-2 mt-3">
              <img src={Facebook} />
              <img src={SomeX} />
              <img src={Instagram} />
              <img src={SomeIn} />
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray-400" />

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <img src={Lastpart} className="w-40" />
        <div className="flex flex-wrap gap-3 text-sm">
          <a href="#" className="underline">
            Terms and Conditions
          </a>
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Order Tracking
          </a>
        </div>
      </div>
    </div>
  );
}
