export interface ICharacter {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
  status: string;
  favorite?: boolean,
}

export interface ICharacters {
  characters: ICharacter[]
}

export interface ICharactersState {
  characters: {
    characters: ICharacter[]
  }
}