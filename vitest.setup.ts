import {afterAll, afterEach, beforeAll} from 'vitest'
import {setupServer} from 'msw/node'
import {http, HttpResponse} from 'msw'
import {CONST_DOGAPI_BREEDS, CONST_MOCK_DOGE} from './consts'

export const restHandlers = [
  http.get(CONST_DOGAPI_BREEDS, () => {
    return HttpResponse.json(CONST_MOCK_DOGE)
  })
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test for test isolation
afterEach(() => server.resetHandlers())