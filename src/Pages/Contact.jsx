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
    <div className="px-5 sm:px-10 md:px-20 lg:px-40 py-10 container mx-auto">
      <div className="mx-auto text-center">
        <h1 className="text-black font-semibold text-lg sm:text-xl">
          Contact With Us
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pt-5">
          You can ask us questions
        </h1>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>
      </div>

      <hr className="text-gray-300 my-10" />

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-black text-xl sm:text-2xl font-bold">
            Our Offices
          </h1>
          <p className="text-sm text-gray-600 my-3">
            On dekande mydurtad mora även om skurkstat. Semirade rena. Radiogen
            även om prerade i garanterad traditionell specialitet.
          </p>

          <div className="flex flex-col md:flex-row gap-10 my-10">
            <div className="flex gap-5">
              <FmdGoodOutlinedIcon />
              <div>
                <h1 className="text-gray-800 text-sm">United States</h1>
                <h1 className="text-lg sm:text-xl font-semibold">
                  United States Office
                </h1>
                <p className="text-gray-500 text-sm my-2">
                  205 Middle Road, 2nd Floor, New York
                </p>
                <h1 className="text-lg font-semibold my-1">+02 1234 567 88</h1>
                <p className="text-sm text-blue-500">info@example.com</p>
              </div>
            </div>

            <div className="flex gap-5">
              <FmdGoodOutlinedIcon />
              <div>
                <h1 className="text-gray-800 text-sm">Munich</h1>
                <h1 className="text-lg sm:text-xl font-semibold">
                  Munich States Office
                </h1>
                <p className="text-gray-500 text-sm my-2">
                  205 Middle Road, 2nd Floor, New York
                </p>
                <h1 className="text-lg font-semibold my-1">+5 456 123 22</h1>
                <p className="text-sm text-blue-500">contact@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-sm text-gray-600">
            On dekande mydurtad mora även om skurkstat. Semirade timaheten rena.
            Radiogen pasam inte loba även om prerade i garanterad traditionell
            specialitet till bebel.
          </p>

          <form onSubmit={handleSubmit} className="my-5">
            <div className="flex flex-col sm:flex-row sm:gap-5">
              <div className="flex-1">
                <label className="text-sm">Your name*</label>
                <input
                  className="w-full border border-gray-300 my-2 p-3 rounded-2xl focus:outline-none focus:ring-1 focus:ring-gray-300"
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
              <div className="flex-1">
                <label className="text-sm">Your email*</label>
                <input
                  className="w-full border border-gray-300 my-2 p-3 rounded-2xl focus:outline-none focus:ring-1 focus:ring-gray-300"
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

            <label className="text-sm">Subject *</label>
            <input
              className="border border-gray-300 my-2 p-3 rounded-2xl w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
              type="text"
              value={subject}
              onChange={(e) =>
                dispatch(
                  updateField({ field: "subject", value: e.target.value })
                )
              }
              required
            />

            <label className="text-sm">Your message</label>
            <textarea
              className="border border-gray-300 w-full my-2 px-3 py-2 h-24 rounded-2xl focus:outline-none focus:ring-1 focus:ring-gray-300"
              value={message}
              onChange={(e) =>
                dispatch(
                  updateField({ field: "message", value: e.target.value })
                )
              }
            ></textarea>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
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

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {ContactData.map((data, index) => (
            <div key={index} className="flex gap-2 items-center">
              <img className="w-12 h-12" src={data.img} />
              <div>
                <h1 className="text-md font-semibold">{data.name}</h1>
                <p className="text-[13px] text-gray-500">{data.desc}</p>
                <p className="text-[13px] text-gray-500">{data.desc2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
