import { type StoreValue, atom } from "nanostores";

export const $selectedCharacter = atom<string|null>(null);

export type SelectedChar = StoreValue<typeof $selectedCharacter>

export function setSelectedChar (char: string | null) {
  $selectedCharacter.set(char)
}

export function getSelectedChar () {
  return $selectedCharacter.get()
}