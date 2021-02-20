import React from 'react';
import { render } from '@testing-library/react';
import SearchField from './SearchField.component';

describe('SearchField component', () => {
  it('renders search field container', () => {
    const { getByRole } = render(<SearchField />);

    expect(getByRole('textbox')).not.toBeUndefined();
  });
  it('contains one element', () => {
    const { container } = render(<SearchField />);

    expect(container.children.length).toBe(1);
  });
});
