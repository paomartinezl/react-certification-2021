import React from 'react';
import { render } from '@testing-library/react';
import App from './App.component';

describe('App component', () => {
  it('contains two children', () => {
    const { container } = render(<App />);

    expect(container.children.length).toBe(2);
  });
  it('renders main container', () => {
    const { getByRole } = render(<App />);

    expect(getByRole('main')).not.toBeUndefined();
  });
});
