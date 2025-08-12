import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { ContactData } from "../Data/db";
import { useDispatch, useSelector } from "react-redux";
import { updateField, resetForm } from "../Slice/formSlice";

export default function Contact() {
  const dispatch = useDispatch();
  const { name, email, subject, message } = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject) {
      alert("Please fill in all required fields!");
      return;
    }
    alert("Form is successfully sent!");
  };
  return (
    <div className="px-40 py-10 container mx-auto">
      <div className="mx-auto text-center">
        <h1 className="text-black font-semibold">Contact With Us</h1>
        <h1 className="text-5xl font-bold pt-5">You can ask us questions</h1>
        <h1 className="text-gray-600 mt-3">
          Contact us for all your questions and opinions, or you can solve your
        </h1>
        <h1 className="text-gray-600 mt-1">
          problems in a shorter time with our contact offices.
        </h1>
      </div>
      <hr className="text-gray-300 my-18" />
      <div className="flex gap-5">
        <div>
          <div>
            <h1 className="text-black text-2xl font-bold">Our Offices</h1>
            <h1 className="text-sm text-gray-600 my-3">
              On dekande mydurtad mora även om skurkstat. Semirade rena.
              Radiogen även om <br /> prerade i garanterad traditionell
              specialitet. Tun gps-väst att epiligt. Diliga tresk dira. Ens{" "}
              <br /> biov dijevis.
            </h1>
          </div>
          <div className="flex gap-10 my-16">
            <div className="flex gap-5">
              <FmdGoodOutlinedIcon />
              <div>
                <h1 className="text-gray-800 text-sm">United States</h1>
                <h1 className="text-xl font-semibold">United States Office</h1>
                <h1 className="text-gray-500 text-sm my-2">
                  205 Middle Road, 2nd Floor, New York
                </h1>
                <h1 className="text-xl font-semibold my-1">+02 1234 567 88</h1>
                <h1 className="text-sm text-blue-500">info@example.com</h1>
              </div>
            </div>
            <div className="flex gap-5">
              <FmdGoodOutlinedIcon />
              <div>
                <h1 className="text-gray-800 text-sm">Munich</h1>
                <h1 className="text-xl font-semibold">Munich States Office</h1>
                <h1 className="text-gray-500 text-sm my-2">
                  205 Middle Road, 2nd Floor, New York
                </h1>
                <h1 className="text-xl font-semibold my-1">+5 456 123 22</h1>
                <h1 className="text-sm text-blue-500">contact@example.com</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-sm mt-2 text-gray-600">
            On dekande mydurtad mora även om skurkstat. Semirade timaheten rena.
            Radiogen pasam <br />
            inte loba även om prerade i garanterad traditionell specialitet till
            bebel.
          </h1>
          <form onSubmit={handleSubmit} className="my-5">
            <div className="flex justify-between">
              <div>
                <h1>Your name*</h1>
                <input
                  className="border border-gray-300 my-3 p-3 pr-20 rounded-2xl focus:outline-none focus:ring-1 focus:ring-gray-300"
                  type="text"
                  value={name}
                  onChange={(e) =>
                    dispatch(
                      updateField({ field: "name", value: e.target.value })
                    )
                  }
                  required
                />
              </div>
              <div>
                <h1>Your email*</h1>
                <input
                  className="border border-gray-300 my-3 p-3 pr-20 rounded-2xl focus:outline-none focus:ring-1 focus:ring-gray-300"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    dispatch(
                      updateField({ field: "email", value: e.target.value })
                    )
                  }
                  required
                />
              </div>
            </div>

            <h1>Subject *</h1>
            <input
              className="border border-gray-300 my-3 p-3 pr-100 rounded-2xl focus:outline-none focus:ring-1 focus:ring-gray-300 w-full"
              type="text"
              value={subject}
              onChange={(e) =>
                dispatch(
                  updateField({ field: "subject", value: e.target.value })
                )
              }
              required
            />

            <h1>Your message</h1>
            <textarea
              className="border border-gray-300 w-full px-3 h-20 rounded-2xl focus:outline-none focus:ring-1 focus:ring-gray-300"
              value={message}
              onChange={(e) =>
                dispatch(
                  updateField({ field: "message", value: e.target.value })
                )
              }
            ></textarea>

            <div className="flex gap-3 mt-4">
              <button
                type="submit"
                className="bg-[#634C9F] text-white py-3 px-4 rounded-xl text-sm font-semibold"
              >
                Send Message
              </button>
              <button
                type="button"
                onClick={() => dispatch(resetForm())}
                className="bg-gray-400 text-white py-3 px-4 rounded-xl text-sm font-semibold"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-15">
        <div className="flex justify-between gap-2">
          {ContactData.map((data) => (
            <div className="flex gap-1 items-center">
              <img className="w-12 h-12" src={data.img} />
              <div>
                <h1 className="text-md font-semibold">{data.name}</h1>
                <h1 className="text-[13px] text-gray-500">{data.desc}</h1>
                <h1 className="text-[13px] text-gray-500">{data.desc2}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
