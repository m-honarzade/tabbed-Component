const Card = ({ children, bg }) => {
  return (
    <div
      className={`px-4 py-1 rounded-md border-none ${bg ? bg : "bg-[#edf2ff]"}`}
    >
      {children}
    </div>
  );
};

export default Card;
