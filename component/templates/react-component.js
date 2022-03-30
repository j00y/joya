
// component.tsx
exports.component = (name, lang) => `import React from 'react';
//import './${name}.scss';
${lang === 'ts' ? `import { ${name}Props } from './${name}Props';`: ''}

export const ${name} = (props${lang === 'ts' ? `: ${name}Props` : '' }) => {
  return <div>Hello 👋, I am a ${name} component.</div>;
};
`;

// componentProps.ts
exports.props = name => `export interface ${name}Props {}
`;

// component.test.tsx
exports.test = name => `import React from 'react';
import { render } from '@testing-library/react';
import ${name} from './${name}';

describe('${name} Component', () => {
  test('it should match the snapshot', () => {

    const { asFragment } = render(<${name} />);
    expect(asFragment()).toMatchSnapshot();
    
  });
});
`;

// index.ts
exports.index = name => `export * from './${name}';
`;
