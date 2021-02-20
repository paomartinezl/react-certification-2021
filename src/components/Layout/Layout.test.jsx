import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.component';

describe('Layout component', () => {
  it('contains two children', () => {
    const { container } = render(<Layout />);

    expect(container.children.length).toBe(2);
  });
  it('renders main container', () => {
    const { getByRole } = render(<Layout />);

    expect(getByRole('main')).not.toBeUndefined();
  });
});
