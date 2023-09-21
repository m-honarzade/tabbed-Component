import { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import DifferentContent from "./DifferentContent";

const Tabbed = ({ content }) => {
  const numOfTab = content.length;
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);

  return (
    <div className="max-w-2xl mx-auto mt-16 h-96 flex flex-col  p-2">
      <ul className="flex flex-row gap-x-2">
        {Array.from({ length: numOfTab + 1 }, (_, i) => (
          <Tab
            key={i}
            num={i}
            onSetActiveTab={setActiveTab}
            bg={activeTab - 1 === i ? "bg-[#364fc7]" : ""}
            textColor={activeTab - 1 === i ? "text-white" : ""}
          />
        ))}
      </ul>
      <div className="mt-2 h-">
        {activeTab <= numOfTab ? (
          <TabContent
            content={content.at(activeTab - 1)}
            key={content.at(activeTab - 1).summary}
          />
        ) : (
          <DifferentContent />
        )}
      </div>
    </div>
  );
};

export default Tabbed;
