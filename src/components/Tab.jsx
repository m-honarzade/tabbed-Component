import Card from "./Card";

const Tab = ({ num, onSetActiveTab, bg, textColor }) => {
  return (
    <Card bg={bg}>
      <button
        onClick={() => onSetActiveTab(num + 1)}
        className={`font-semibold text-sm cursor-pointer   ${
          textColor ? textColor : "text-[#364fc7]"
        }`}
      >
        Tab {num + 1}
      </button>
    </Card>
  );
};

export default Tab;
