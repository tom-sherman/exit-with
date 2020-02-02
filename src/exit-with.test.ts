import exitWith from './exit-with'
import { codes } from './Code'

const mockExit = jest
  .spyOn(process, 'exit')
  .mockImplementation((() => {}) as any)

const mockConsoleError = jest
  .spyOn(console, 'error')
  .mockImplementation(() => {})

beforeEach(() => {
  mockExit.mockReset()
  mockConsoleError.mockReset()
})

test('called with code name', () => {
  exitWith('UsageError')

  expect(mockExit).toHaveBeenCalledWith(codes.UsageError.code)
  expect(mockExit).toHaveBeenCalledTimes(1)

  expect(mockConsoleError).toHaveBeenCalledTimes(1)
})

test('called with code object', () => {
  exitWith(codes.UsageError)

  expect(mockExit).toHaveBeenCalledWith(codes.UsageError.code)
  expect(mockExit).toHaveBeenCalledTimes(1)

  expect(mockConsoleError).toHaveBeenCalledTimes(1)
})
