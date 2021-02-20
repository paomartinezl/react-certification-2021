import React from 'react';
import { render } from '@testing-library/react';
import DarkMode from './DarkMode.component';

describe('DarkMode component', () => {
  it('renders dark mode container', () => {
    const { getByRole } = render(<DarkMode />);

    expect(getByRole('checkbox')).not.toBeUndefined();
  });
});