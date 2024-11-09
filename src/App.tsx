import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    va: "",
    vb: "",
    vc: "",
    ia: "",
    ib: "",
    ic: "",
  });

  const submitHandler = async() => {
    const response = await axios.post(
      "https://fault-detection-vs.onrender.com/predict",
      {
        text: [+data.va, +data.vb, +data.vc, +data.ia, +data.ib, +data.ic],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  };
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-black flex justify-around items-center py-4 border-b-[1px] border-[#a3a3a3]">
        <label className="font-bold"> Voltage A: </label>
        <input
          type="text"
          className="border-0 rounded-md outline-dashed outline-1 px-4 py-2"
          placeholder="Voltage A"
          value={data.va}
          onChange={(e) => setData({ ...data, va: e.target.value })}
        />
      </div>

      <div className="text-black flex justify-around items-center py-4 border-b-[1px] border-[#a3a3a3]">
        <label className="font-bold"> Voltage B: </label>
        <input
          type="text"
          className="border-0 rounded-md outline-dashed outline-1 px-4 py-2"
          placeholder="Voltage B"
          value={data.vb}
          onChange={(e) => setData({ ...data, vb: e.target.value })}
        />
      </div>

      <div className="text-black flex justify-around items-center py-4 border-b-[1px] border-[#a3a3a3]">
        <label className="font-bold"> Voltage C: </label>
        <input
          type="text"
          className="border-0 rounded-md outline-dashed outline-1 px-4 py-2"
          placeholder="Voltage C"
          value={data.vc}
          onChange={(e) => setData({ ...data, vc: e.target.value })}
        />
      </div>

      <div className="text-black flex justify-around items-center py-4 border-b-[1px] border-[#a3a3a3]">
        <label className="font-bold"> Current A: </label>
        <input
          type="text"
          className="border-0 rounded-md outline-dashed outline-1 px-4 py-2"
          placeholder="Current A"
          value={data.ia}
          onChange={(e) => setData({ ...data, ia: e.target.value })}
        />
      </div>

      <div className="text-black flex justify-around items-center py-4 border-b-[1px] border-[#a3a3a3]">
        <label className="font-bold"> Current B: </label>
        <input
          type="text"
          className="border-0 rounded-md outline-dashed outline-1 px-4 py-2"
          placeholder="Current B"
          value={data.ib}
          onChange={(e) => setData({ ...data, ib: e.target.value })}
        />
      </div>

      <div className="text-black flex justify-around items-center py-4 border-b-[1px] border-[#a3a3a3]">
        <label className="font-bold"> Current C: </label>
        <input
          type="text"
          className="border-0 rounded-md outline-dashed outline-1 px-4 py-2"
          placeholder="Current C"
          value={data.ic}
          onChange={(e) => setData({ ...data, ic: e.target.value })}
        />
      </div>
      <div
        className="bg-[#6366f1] text-white text-xl font-black text-center mt-6 rounded-lg py-3"
        onClick={submitHandler}
      >
        Submit
      </div>
      <div className="bg-[##f1f3f4] text-xl font-black mt-6 px-5">Result:</div>
    </div>
  );
}

export default App;
