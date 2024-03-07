import { Pokemon } from "@/interfaces/pokemon";
import { ApiUtils } from "@/utils/api.utils";

export class PokemonService {
  async getPokemonByName(name: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    try {
      return ApiUtils.get<Pokemon>(url);
    } catch (error) {
      throw error;
    }
  }
}
