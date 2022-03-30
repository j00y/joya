// page.context.ts
exports.context = (name, lang) => `
import { createContext, useContext } from 'react'

${
  lang === "ts"
    ? `export interface ${name}State {
    isLoading: boolean
}`
    : ""
}

export const ${name}Context = createContext${ lang === 'ts' ? `<${name}State>({} as any)` : '({})'}

export const use${name} = () => useContext(${name}Context)
`;
