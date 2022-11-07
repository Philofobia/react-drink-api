import { DrinkByName, RestApiDrinkByName } from "./models";

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export const getDrinkByName = async (query: string):Promise<DrinkByName[]> => {
    query = query.trim();
    if (query.length === 0) {
      return [];
    }
    
    const res = await fetch(`${BASE_URL}/search.php?s=${query}`)
    const data: RestApiDrinkByName[] = (await res.json()).drinks as RestApiDrinkByName[];
    const mappedData: DrinkByName[] = data.map((el) => ({
        idDrink: el.idDrink,
        name: el.strDrink,
        image: el.strDrinkThumb
    }))
    return mappedData;
}