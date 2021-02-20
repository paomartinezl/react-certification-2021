import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import LoginButton from './LoginButton.component';

describe('LoginButton component', () => {
  it('renders login button', () => {
    const { getByRole } = render(<LoginButton />);

    expect(getByRole('button')).not.toBeUndefined();
  });
  it('opens login', () => {
    const { container } = render(<LoginButton />);
    const openButton = getByTestId(container, "openButton");

    fireEvent.click(openButton);
    expect(openButton).toHaveAttribute('data-open', "true");
  });
});