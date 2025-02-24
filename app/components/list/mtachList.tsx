import { PROFESSIONALS } from "@/app/data/match";
import MatchCard from "../card/matchCard";

const MatchList = () => {
  return (
    <>
      <div className="md:space-y-2">
        {PROFESSIONALS.map((professional) => (
          <MatchCard key={professional.id} professional={professional} />
        ))}
      </div>
    </>
  );
};

export default MatchList;
