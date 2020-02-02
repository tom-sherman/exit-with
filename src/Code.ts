const Base = {
  code: 64
}

const SignalBase = {
  code: 128
}

export const allErrorCodes = [
  'Error',
  /*'Success',*/ 'ShellMisuse',
  'UsageError' /*'DataError', 'NoInput', 'NoUser', 'NoHost', 'ServiceUnavailable', 'SoftwareError', 'SystemError', 'SystemFileMissing', 'CantCreate', 'IOError', 'TempFail', 'Protocol', 'NoPerm', 'ConfigError', 'CannotExecute', 'CommandNotFound', 'InvalidArgument', 'Hangup', 'Interrup', 'Quit', 'IllegalInstruction', 'TraceTrap', 'Abort', 'Kill', 'BusError', 'MemoryError', 'Pipe', 'Alarm', 'User1', 'User2'*/
] as const

export type CodeName = typeof allErrorCodes[number]

export type Code = {
  code: number
  message: string
}

export const codes: Record<CodeName, Code> = {
  Error: {
    code: 1,
    message: 'Random error'
  },

  // 'Success': {
  //   code: 0
  // },

  ShellMisuse: {
    code: 2,
    message: 'Some shell misuse'
  },

  UsageError: {
    code: Base.code,
    message: 'Wrong args'
  }

  // 'DataError': {
  //   code: Base.code + 1
  // },

  // 'NoInput': {
  //   code: Base.code + 2
  // },

  // 'NoUser': {
  //   code: Base.code + 3
  // },

  // 'NoHost': {
  //   code: Base.code + 4
  // },

  // 'ServiceUnavailable': {
  //   code: Base.code + 5
  // },

  // 'SoftwareError': {
  //   code: Base.code + 6
  // },

  // 'SystemError': {
  //   code: Base.code + 7
  // },

  // 'SystemFileMissing': {
  //   code: Base.code + 8
  // },

  // 'CantCreate': {
  //   code: Base.code + 9
  // },

  // 'IOError': {
  //   code: Base.code + 10
  // },

  // 'TempFail': {
  //   code: Base.code + 11
  // },

  // 'Protocol': {
  //   code: Base.code + 12
  // },

  // 'NoPerm': {
  //   code: Base.code + 13
  // },

  // 'ConfigError': {
  //   code: Base.code + 14
  // },

  // 'CannotExecute': {
  //   code: 126
  // },

  // 'CommandNotFound': {
  //   code: 127
  // },

  // 'InvalidArgument': {
  //   code: SignalBase.code
  // },

  // 'Hangup': {
  //   code: SignalBase.code + 1
  // },

  // 'Interrup': {
  //   code: SignalBase.code + 2
  // },

  // 'Quit': {
  //   code: SignalBase.code + 3
  // },

  // 'IllegalInstruction': {
  //   code: SignalBase.code + 4
  // },

  // 'TraceTrap': {
  //   code: SignalBase.code + 5
  // },

  // 'Abort': {
  //   code: SignalBase.code + 6
  // },

  // 'Kill': {
  //   code: SignalBase.code + 9
  // },

  // 'BusError': {
  //   code: SignalBase.code + 10
  // },

  // 'MemoryError': {
  //   code: SignalBase.code + 11
  // },

  // 'Pipe': {
  //   code: SignalBase.code + 13
  // },

  // 'Alarm': {
  //   code: SignalBase.code + 14
  // },

  // 'User1': {
  //   code: SignalBase.code + 30
  // },

  // 'User2': {
  //   code: SignalBase.code + 31
  // }
} as const
