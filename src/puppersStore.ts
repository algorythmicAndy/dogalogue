// Here we will manage state and update state of dog lists

import {type IDogBreeds, getDogs} from './API/queries/dogQueries'
import {type StoreValue, atom} from 'nanostores'

const initialPupperList: IDogBreeds[] = []

export const $pupperList = atom<IDogBreeds[]>(initialPupperList)

export type PupperList = StoreValue<typeof $pupperList>


// Side effect sets pupper store state depending on population
export async function initPupperList () {
  const {data: dogs, error} = await getDogs()
  if (error) $pupperList.set([])
  if (dogs) {
    $pupperList.set(dogs)
  }
}