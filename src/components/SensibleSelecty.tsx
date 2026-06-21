import { $selectedCharacter } from "../selectStore";
import { useState } from "react";
import Select from "react-select";

type SelectOption = { value: string; label: string };

function genCharacterOptions(charA: string, charZ: string): SelectOption[] {
  const a: SelectOption[] = [];
  let i = charA.charCodeAt(0);
  const j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    const genChar = String.fromCharCode(i);
    a.push({ value: genChar, label: genChar });
  }
  return a;
}

const sensibleOptions = genCharacterOptions("A", "Z");

export function SensibleSelecty() {
  const [selectedOption, setSelectedOption] = useState<null | SelectOption>(
    null,
  );
  const handleChange = (newOpt: string) => {
    setSelectedOption({ value: newOpt, label: newOpt });
    $selectedCharacter.set(newOpt);
  };

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        options={sensibleOptions}
        onChange={(e) => {
          if (e) {
            handleChange(e.value);
          }
        }}
        placeholder="Select Character"
      />
    </div>
  );
}
