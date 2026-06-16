import {test, describe, expect} from 'vitest'
import { CONST_DOGAPI_BREEDS, CONST_MOCK_DOGE } from '../../consts'

describe("dog queries", () => {
  test("it recieves data from the endpoint", async () => {
    const res = await fetch(CONST_DOGAPI_BREEDS)
    await expect(res.json()).resolves.toEqual(CONST_MOCK_DOGE)
  })
})