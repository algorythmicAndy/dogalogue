import { getDogs, type IDogBreeds } from "../API/queries/dogQueries";
import { type PupperList, $pupperList } from "../puppersStore";
import {
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { $selectedCharacter } from "../selectStore";
import { useStore } from "@nanostores/react";

function filterDogs(
  filter: string | null,
  storeState: PupperList,
  setFiltered: Dispatch<SetStateAction<IDogBreeds[]>>,
) {
  const localDogs = storeState;
  if (localDogs) {
    const filtered = localDogs.filter((doge: IDogBreeds) => {
      const dogName = doge.attributes.name.charAt(0);
      return dogName === filter;
    });
    setFiltered(filtered);
  }
}

export function ReactivePuppers() {
  const pups = useStore($pupperList);
  const char = useStore($selectedCharacter);
  const [filtered, setFiltered] = useState<IDogBreeds[]>(pups);

  useEffect(() => {
    if (!pups.length) {
      getDogs("breeds").then((data) => {
        if (data.data) {
          $pupperList.set(data.data);
        }
      });
    }
  }, []);

  useEffect(() => {
    filterDogs(char, pups, setFiltered);
  }, [char, pups]);

  const list = filtered.length ? filtered : pups;
  return (
    list && (
      <div className="flex flex-col gap-2 py-4">
        {list.map((dog: IDogBreeds) => {
          return (
            <div className="flex flex-row justify-center" key={`${dog.id}_dog`}>
              <span className="min-w-75 border-2 border-black bg-gray-800 text-white text-center">
                {dog.attributes.name}
              </span>
            </div>
          );
        })}
      </div>
    )
  );
}
