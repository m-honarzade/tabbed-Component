import { useState } from "react";
import Card from "./Card";

const TabContent = ({ content }) => {
  console.log(content);
  const [like, setlike] = useState(0);
  return (
    <Card>
      <div className="flex flex-col gap-y-3 px-3 py-5">
        <h4 className="font-bold text-[#364fc7]">{content.summary}</h4>
        <p className="text-sm font-semibold leading-6">{content.details}</p>
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <button className="text-[#364fc7] border-none underline text-xs">
              Hide details
            </button>
          </div>
          <div className="flex flex-row gap-1 text-sm justify-center items-center">
            <span className="text-sm">{like}</span>
            <span className="text-[#f03e3e] text-2xl">♥</span>
            <button className="bg-[#f03e3e] rounded-md px-2 py-0 text-white ">
              +
            </button>
            <button className="bg-[#f03e3e] rounded-md px-2 py-0 text-white ">
              +++
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-x-1">
          <button className="bg-[#364fc7] text-white text-sm  rounded-md px-3 py-1">
            Undo
          </button>
          <button className="bg-[#364fc7] text-white text-sm  rounded-md px-3 py-1">
            Undo in 2s
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TabContent;
