interface ShortcutProps {
  color: "blue" | "black";
  title: string;
  description: string;
  onClick: () => void;
}

const Shortcut = ({ color, title, description, onClick }: ShortcutProps) => {
  return (
    <div
      className={`flex w-full pl-9 py-8 items-start flex-col gap-1.5 rounded-[10px]
        text-white cursor-pointer ${
          color === "blue" ? `bg-primary` : `bg-black`
        }`}
      onClick={onClick}
    >
      <h3 className="text-[20px] font-bold">{title}</h3>
      <p className="text-[14px] font-normal">{description}</p>
    </div>
  );
};

export default Shortcut;
