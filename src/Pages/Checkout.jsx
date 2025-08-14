import Checkbox from "@mui/material/Checkbox";
import Coupon from "../assets/45.png";
import FreeShip from "../assets/46.png";

export default function Checkout() {
  return (
    <div className="px-40 py-5 container mx-auto">
      <div>
        <img src={Coupon} />
      </div>
      <div className="flex gap-10 mt-5">
        <div className="w-215">
          <img className="w-215" src={FreeShip} />
          <form action="submit" className=" space-y-3 mt-4">
            <h1 className="text-3xl font-bold">Billing Details</h1>
            <div className="flex gap-15">
              <div>
                <h1>First name*</h1>
                <input
                  type="name"
                  className="border border-gray-300 p-3 w-100 rounded-xl"
                />
              </div>
              <div>
                <h1>Last name*</h1>
                <input
                  type="name"
                  className="border border-gray-300 p-3 w-100 rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h1>Company name(optional)</h1>
                <input
                  type="text"
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>Country / Region*</h1>
                <input
                  type="region"
                  className="border border-gray-300 p-3 w-full rounded-xl"
                  placeholder="Country / Region"
                />
              </div>
              <div>
                <h1>Street address*</h1>
                <input
                  type="region"
                  className="border border-gray-300 p-3 w-full rounded-xl"
                  placeholder="House number and street name"
                />
                <input
                  type="region"
                  className="border border-gray-300 p-3 w-full rounded-xl"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
              <div>
                <h1>Town / City*</h1>
                <input
                  type="city"
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>State*</h1>
                <input
                  type="state"
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>ZIP Code*</h1>
                <input
                  type="code"
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>Phone*</h1>
                <input
                  type="phone"
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>Email address*</h1>
                <input
                  type="email"
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>Order Notes(optional)</h1>
                <textarea
                  name="notes"
                  className="border border-gray-300 p-3 w-full rounded-xl"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="border border-gray-300 rounded-xl bg-[#E5E7EB] px-3 py-4 w-75 ">
            <h1>Your order</h1>
            <div className="flex justify-between text-gray-400 mt-2">
              <h1>Product</h1>
              <h1>Subtotal</h1>
            </div>{" "}
            <br />
            <hr className="text-gray-100" />
            <div className="flex justify-between"></div> <br />
            <hr className="text-gray-100" />
            <div className="flex justify-between items-center mt-2">
              <h1 className=" text-gray-400 ">Shipping:</h1>
              <div className="flex justify-end">
                <div>
                  {" "}
                  <div className="flex items-center gap-1">
                    <h1 className="text-sm text-gray-500">Flat Rate: $15.00</h1>{" "}
                    <Checkbox />
                  </div>
                  <div className="flex items-center gap-1 ml-6.5">
                    <h1 className="text-sm text-gray-500 ">Local pickup</h1>{" "}
                    <Checkbox />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2">
              <h1 className=" text-gray-400 ">Total</h1>
              <h1></h1>
            </div>
            <div className="flex">
              <input type="checkbox" name="Bank transfer" />
              <h1 className="font-semibold pl-2">Direct bank transfer</h1>
            </div>
            <h1 className="text-[10px] text-gray-500 mt-1">
              Make your payment directly into our bank account. Please <br />{" "}
              use your Order ID as the payment reference. Your order <br /> will
              not be shipped until the funds have cleared in our <br /> account.
            </h1>
            <div className="flex my-1 ">
              <input type="checkbox" name="Check payments" />
              <h1 className="font-semibold pl-2">Check payments</h1>
            </div>
            <div className="flex my-1">
              <input type="checkbox" name="Cash on delivery" />
              <h1 className="font-semibold pl-2">Cash on delivery</h1>
            </div>
            <h1 className="text-[10px] text-gray-500 my-1">
              Your personal data will be used to process your order, <br /> support
              your experience throughout this website, and for <br /> other purposes
              described in our privacy policy.
            </h1>
            <div className="flex  mt-2">
              <input type="checkbox" name="terms and conditions" id="" /><h1 className="text-sm pl-2">I have read and agree to the website <span className="text-purple-900">terms and conditions*</span> </h1>
            </div>
            <button className="bg-[#634C9F] text-white px-24 py-2 rounded-xl mt-4">Place order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
