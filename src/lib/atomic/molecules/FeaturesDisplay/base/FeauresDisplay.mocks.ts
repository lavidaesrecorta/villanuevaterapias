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
    mockAtCardProps.auriculoTerapia,
    mockAtCardProps.reiki,
    mockAtCardProps.terapiaFloral,
    mockAtCardProps.masaje,
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