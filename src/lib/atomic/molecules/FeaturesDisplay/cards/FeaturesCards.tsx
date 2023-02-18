import AtCard, { IAtCard } from "@lib/atomic/atoms/card/Card";
import { IFeaturesBase } from "../base/FeaturesDisplay";


export interface IFeaturesCards extends IFeaturesBase {
    cards: IAtCard[],
}

const FeaturesCardsBody: React.FC<IFeaturesCards> = ({ cards }) => {
    return (
        <div className="block m-auto lg:w-3/4">
            <div className="flex align-middle justify-center items-center py-8 flex-wrap gap-4">
                {cards?.map((card, index) => <AtCard {...card} key={index} positionalClasses="flex-1" />)}
            </div>
        </div>
    );
}

export default FeaturesCardsBody
