interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-[333px] h-[170px] p-8 bg-white rounded-[10px]">
        <h3 className="text-primary font-bold text-[22px] mb-7">{title}</h3>
        <p
          className="text-text_sub font-medium text-[16px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default InfoCard;
