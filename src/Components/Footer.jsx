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
    <div className="bg-[#F3F4F6] px-40 pt-15 pb-15 container mx-auto mt-5">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold m">
            Join our newsletter for £10 offs
          </h1>
          <h1 className="text-gray-500 pt-3">
            Register now to get latest updates on promotions & <br />
            coupons.Don’t worry, we not spam!
          </h1>
        </div>
        <div className="items-center">
          <input
            className="border border-gray-300 px-3 py-3 bg-white rounded-bl-xl rounded-tl-xl pr-64 my-3"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="bg-[#634C9F] rounded-br-xl rounded-tr-xl text-white p-3">
            SEND
          </button>
          <h1 className="text-gray-500 text-sm">
            By subscribing you agree to our{" "}
            <span className="text-black">
              Terms & Conditions and Privacy & Cookies Policy.
            </span>
          </h1>
        </div>
      </div>
      <br /> <br />
      <hr className="text-gray-500" />
      <div className="my-4 flex gap-10">
        <div>
          <h1 className="font-bold text-lg">Do You Need Help ?</h1>
          <h1 className="my-2 text-gray-500 text-sm">
            Autoseligen syr. Nek diarask fröbomba. Nör <br />
            antipol kynoda nynat. Pressa fåmoska.
          </h1>
          <div className="flex gap-2 items-center mt-5">
            <div>
              <CallIcon fontSize="large" />
            </div>
            <div>
              <h1 className="text-gray-600">Monday-Friday: 08am-9pm</h1>
              <h1 className="text-black text-2xl font-bold">0 800 300-353</h1>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-5">
            <div>
              <EmailOutlinedIcon fontSize="large" />
            </div>
            <div>
              <h1 className="text-gray-600">Need help with your order?</h1>
              <h1 className="text-black text-md font-bold">info@example.com</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-black font-semibold">Make Money with Us</h1>
          <h1 className="mt-1 text-gray-500">Sell on Grogin</h1>
          <h1 className="mt-1 text-gray-500">Sell Your Services on Grogin</h1>
          <h1 className="mt-1 text-gray-500">Sell on Grogin Business</h1>
          <h1 className="mt-1 text-gray-500">Sell Your Apps on Grogin</h1>
          <h1 className="mt-1 text-gray-500">Become an Affilate</h1>
          <h1 className="mt-1 text-gray-500">Advertise Your Products</h1>
          <h1 className="mt-1 text-gray-500">Sell-Publish with Us</h1>
          <h1 className="mt-1 text-gray-500">Become an Blowwe Vendor</h1>
        </div>
        <div>
          <h1 className="text-black font-semibold">Let Us Help You</h1>
          <h1 className="mt-1 text-gray-500">Accessibility Statement</h1>
          <h1 className="mt-1 text-gray-500">Your Orders</h1>
          <h1 className="mt-1 text-gray-500">Returns & Replacements</h1>
          <h1 className="mt-1 text-gray-500">Shipping Rates & Policies</h1>
          <h1 className="mt-1 text-gray-500">Refund and Returns Policy</h1>
          <h1 className="mt-1 text-gray-500">Privacy Policy</h1>
          <h1 className="mt-1 text-gray-500">Terms and Conditions</h1>
          <h1 className="mt-1 text-gray-500">Cookie Settings</h1>
          <h1 className="mt-2 text-gray-500">Help Center</h1>
        </div>
        <div>
          <h1 className="text-black font-semibold">Get to Know Us</h1>
          <h1 className="mt-1 text-gray-500">Careers for Grogin</h1>
          <h1 className="mt-1 text-gray-500">About Grogin</h1>
          <h1 className="mt-1 text-gray-500">Inverstor Relations</h1>
          <h1 className="mt-1 text-gray-500">Grogin Devices</h1>
          <h1 className="mt-1 text-gray-500">Customer reviews</h1>
          <h1 className="mt-1 text-gray-500">Social Responsibility</h1>
          <h1 className="mt-2 text-gray-500">Store Locations</h1>
        </div>
        <div>
          <h1 className="font-semibold">Download our app</h1>
          <div className="flex gap-2 mt-3">
            <img className="w-30 h-full" src={GooglePlay} />
            <h1 className="text-sm">
              Download App Get <br /> -10% Discount
            </h1>
          </div>
          <div className="flex gap-2 mt-3">
            <img className="w-30 h-full" src={AppStore} />
            <h1 className="text-sm">
              Download App Get <br />
              -20% Discount
            </h1>
          </div>
          <div className="mt-5">
            <h1 className="text-lg ">Follow us on social media:</h1>
            <div className="flex gap-2 mt-3">
              <img src={Facebook} />
              <img src={SomeX} />
              <img src={Instagram} />
              <img src={SomeIn} />
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-500" />
      <div className="flex justify-between mt-10">
        <div>
          <img src={Lastpart} />
        </div>
        <div>
          <a href="#" className="underline">
            Terms and Conditions{" "}
          </a>
          <a href="#" className="underline">
            Privacy Policy{" "}
          </a>
          <a href="#" className="underline">
            Order Tracking{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
