// component.tsx
exports.page = (name) => `import React from 'react';
export const ${name} = () => {
  return <div>Hello 👋, I am a ${name} Page.</div>;
};
`;

// index.ts
exports.index = (name) => `
import React, { useState } from 'react'
import { ${name}PageContext } from './${name}PageContext'
import { ${name}PageContainer } from './${name}PageContainer'

export const ${name}Page = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <${name}PageContext.Provider
            value={{isLoading}}
        >
            <${name}PageContainer />
        </${name}PageContext.Provider>
    )
}
`;

// page.context.ts
exports.context = (name, lang) => `
import { createContext, useContext } from 'react'

${
  lang === "ts"
    ? `export interface ${name}PageState {
    isLoading: boolean
}`
    : ""
}

export const ${name}PageContext = createContext<${name}PageState>({} as any)

export const use${name} = () => useContext(${name}PageContext)
`;
