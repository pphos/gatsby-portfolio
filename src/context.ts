import { createContext } from 'react';
import {
  HeaderDataType,
  HeroDataType,
  WorksDataType,
  AboutDataType,
  SkillDataType
} from './types';

export type PortfolioContextType = {
  headerData: HeaderDataType,
  heroData: HeroDataType,
  worksData: WorksDataType,
  aboutData: AboutDataType,
  skillData: SkillDataType
}

export const PortfolioContext = createContext<PortfolioContextType>({} as PortfolioContextType)