import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header.component';

describe('Header component', () => {
  it('renders navigation container', () => {
    const { getByRole } = render(<Header />);

    expect(getByRole('navigation')).not.toBeUndefined();
  });
});