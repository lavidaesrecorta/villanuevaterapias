import { IFeaturesCards } from '../cards/FeaturesCards';
import { IFeaturesBase } from './FeaturesDisplay';
import { mockAtCardProps } from '@lib/atomic/atoms/card/Card.mocks'
import { IFeaturesDataGraph } from '../datagraphs/FeaturesDataGraphs';

const base: IFeaturesBase = {
  displayType: 'base'
};

const cards: IFeaturesCards = {
  displayType: 'cards',
  cards: [
    mockAtCardProps.base,
    mockAtCardProps.base,
    mockAtCardProps.base,
    mockAtCardProps.base,
  ]
}

const dataGraphs: IFeaturesDataGraph = {
  displayType: 'dataGraphs'
};

export const mockFeaturesDisplayProps = {
  base,
  cards,
  dataGraphs
};