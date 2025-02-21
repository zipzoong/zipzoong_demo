interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-[333px] h-[170px] p-8 bg-white rounded-[10px]">
        <h3 className="text-primary text-h2 mb-7">{title}</h3>
        <p
          className="text-text_sub text-h4_r"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default InfoCard;
