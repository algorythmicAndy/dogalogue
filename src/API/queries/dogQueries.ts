// CircularRecord and CircularNode created to add framework typing around indeterminate structure
// Records can possess known and reliable keys such as "name"
// Nodes are strictly nested into Record, separating known keys from deeper nesting and static data points
export type CircularRecord = {
  name: string,
} & CircularNode
export type CircularNode = {
  [key: string]: number | string | CircularNode
}
export interface IDogBreeds {
  id: string,
  type: string,
  attributes: CircularRecord
  relationships?: CircularRecord
}


async function fetchDogs(subCat: string = "breeds") {
  const base = import.meta.env.PUBLIC_DOGAPI_ADDRESS
  const res = await fetch(`${base}/${subCat}`)

  if (!res.ok) throw new Error("Bad response")
  const json = await res.json()
  return json.data
}

function cacheDogs(data: IDogBreeds[]) {
  localStorage.setItem("doggos", JSON.stringify(data))
}


export async function getDogs(subCat: string = "breeds") {
  const cached = localStorage.getItem("doggos");
  if (cached) {
    return { data: JSON.parse(cached), error: null };
  }

  try {
    const data = await fetchDogs(subCat)
    cacheDogs(data)

    return { data: data, error: null };
  } catch (err: any) {
    return { data: [], error: err.message ?? "Unknown Error" };
  }
}


