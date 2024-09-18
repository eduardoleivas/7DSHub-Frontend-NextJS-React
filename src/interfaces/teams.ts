export interface IHeroData {
  id: string;
  name: string;
  grade: string;
  race: string;
  attribute: string;
  imageUrl: string;
  gcdbUrl: string;
}

export interface IBeastData {
  id: string;
  name: string;
}

export interface ITeamCompData {
  id: string;
  beastId: string;
}

export interface ITeamMemberData {
  id: string;
  heroId: string;
  teamId: string;
  equips: string[];
  relic: number;
  notes: string;
}
