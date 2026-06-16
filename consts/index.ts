import type { IDogBreeds } from "../src/API/queries/dogQueries"


export const CONST_DOGAPI = "https://dogapi.dog/api/v2"

export const CONST_DOGAPI_BREEDS = `${CONST_DOGAPI}/breeds`

export const CONST_MOCK_DOGE: IDogBreeds[] = [
  {id: "a1", type: "test", attributes: {name: "Spongehound", "hobby": "Wrecking things"}},
  {id: "a2", type: "test", attributes: {name: "Randoberman", "hobby": "Eating slippers"}}
]