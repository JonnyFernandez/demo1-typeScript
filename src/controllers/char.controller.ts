import { httpClient } from "../plugins/http-client-plugin";

export const getCharacter = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon`;
  const aux = await httpClient.get(url);
  return aux.results; // lista de pokémon
};

export const getCharacterById = async ( id: string | number ): Promise<object> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    try {
    const pokemon = await httpClient.get( url );
    const aux = { 
      id: pokemon.id, 
      name: pokemon.name, 
      types: pokemon.types.map((typeInfo: { type: { name: string; }; }) => typeInfo.type.name) 
  };

  return aux
 
} catch (error) {
  throw ('Request failed with status code 404');
}
};
  
