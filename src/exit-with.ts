import { codes, CodeName, Code, allErrorCodes } from './Code'

export type ExitWithParam = CodeName | Code

export default function exitWith(nameOrCode: ExitWithParam): never {
  const error = resolveCode(nameOrCode)

  console.error(new Error(`Error(${error.code}): ${error.message}`))
  process.exit(error.code)
}

function isCodeName(x: any): x is CodeName {
  return typeof x === 'string' && allErrorCodes.includes(x as any)
}

function resolveCode(nameOrCode: ExitWithParam): Code {
  return isCodeName(nameOrCode) ? codes[nameOrCode] : nameOrCode
}
