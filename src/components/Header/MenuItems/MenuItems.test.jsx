import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import MenuItems from './MenuItems.component';

describe('MenuItems component', () => {
  it('renders menu container', () => {
    const { getByRole } = render(<MenuItems />);

    expect(getByRole('button')).not.toBeUndefined();
  });
  it('contains one element', () => {
    const { container } = render(<MenuItems />);

    expect(container.children.length).toBe(1);
  });
  it('opens menu bar', () => {
    const { container } = render(<MenuItems />);
    const openButton = getByTestId(container, 'openButton');

    fireEvent.click(openButton);
    expect(openButton).toHaveAttribute('data-open', 'true');
  });
});
