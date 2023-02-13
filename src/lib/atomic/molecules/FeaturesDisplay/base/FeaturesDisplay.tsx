import AtCard, { IAtCard } from "@atomic/atoms/card/Card";
import FeaturesCardsBody, { IFeaturesCards } from "../cards/FeaturesCards";
import FeaturesDataGraph, { IFeaturesDataGraph } from "../datagraphs/FeaturesDataGraphs";

export interface IFeaturesBase {
  displayType: "base" | "cards" | "dataGraphs";
}

const FeaturesDisplay: React.FC<IFeaturesBase> = (props) => {
  switch (props.displayType) {
    case "cards":
      return (<FeaturesCardsBody {...props as IFeaturesCards} />);
    case "dataGraphs":
      return (<FeaturesDataGraph {...props as IFeaturesDataGraph} />);
    default:
      return (<>There is nothing to see here.</>);
  }
};

export default FeaturesDisplay;
