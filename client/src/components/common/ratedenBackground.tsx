import { ageRatedEn, ageRatedPt } from "@/lib/rated";

interface RatedBackgroundProps {
    age: number;
    }

export function RatedenBackground({ age }: RatedBackgroundProps) {
    const ratedEn = ageRatedEn(age);
    return (
      <div className="text-white text-2xl">
        {age === 1 && <div className="bg-green-500 rounded-sm w-20 h-20 shadow flex justify-center items-center align-center text-center
        ">{ratedEn}</div>}
        {age === 2 && <div className="bg-orange-500 rounded-sm w-20 h-20 shadow flex justify-center items-center align-center text-center
        ">{ratedEn}</div>}
        {age === 3 && <div className="bg-violet-500 rounded-sm w-20 h-20 shadow flex justify-center items-center align-center text-center
        ">{ratedEn}</div>}
        {age === 4 && <div className="bg-red-500 rounded-sm w-20 h-20 shadow flex justify-center items-center align-center text-center
        ">{ratedEn}</div>}
        {age === 5 && <div className="bg-blue-500 rounded-sm w-20 h-20 shadow flex justify-center items-center align-center text-center
        ">{ratedEn}</div>}
        {age === 6 && <div className="bg-black rounded-sm w-20 h-20 shadow flex justify-center items-center align-center text-center
        ">{ratedEn}</div>}
      </div>
    );
}

export function RatedPtBackground({ age }: RatedBackgroundProps) {
    const ratedPt = ageRatedPt(age);
    return(
        <div className="text-white text-2xl">
            {age === 1 && <div className="bg-green-500 rounded-sm w-20 h-20 shadow flex justify-center items-center align-center text-center
            ">{ratedPt}</div>}
            {age === 2 && <div className="bg-blue-500 rounded-sm w-20 h-20 shadow flex justify-center items-center align-center text-center
            ">{ratedPt}</div>}
            {age === 3 && <div className="bg-yellow-500 rounded-sm w-20 h-20 shadow flex justify-center items-center align-center text-center
            ">{ratedPt}</div>}
            {age === 4 && <div className="bg-orange-500 rounded-sm w-20 h-20 shadow flex justify-center items-center align-center text-center
            ">{ratedPt}</div>}
            {age === 5 && <div className="bg-red-500 rounded-sm w-20 h-20 shadow flex justify-center items-center align-center text-center
            ">{ratedPt}</div>}
            {age === 6 && <div className="bg-black rounded-sm w-20 h-20 shadow flex justify-center items-center align-center text-center
            ">{ratedPt}</div>}
        </div>
    )
};

export default { RatedenBackground, RatedPtBackground };
