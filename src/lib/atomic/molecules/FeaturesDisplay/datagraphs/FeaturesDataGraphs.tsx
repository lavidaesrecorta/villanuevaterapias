import AtCard, { IAtCard } from "@lib/atomic/atoms/card/Card";
import { IFeaturesBase } from "../base/FeaturesDisplay";


export interface IFeaturesDataGraph extends IFeaturesBase {
}

const FeaturesDataGraph: React.FC<IFeaturesDataGraph> = ({ }) => {
    return (
        <div className="block m-auto lg:w-3/4 bg-primary">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>ola</div>
                <div>ola</div>
                <div>ola</div>
                <div>ola</div>
            </div>
        </div>
    );
}

export default FeaturesDataGraph
