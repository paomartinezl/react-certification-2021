import React from "react";
import { render } from "@testing-library/react";
import VideoCard from "./VideoCard.component";

const mockData = {
  image: 'imageUrl',
  title: 'Mock Title',
  description: 'Mock description'
};

describe('VideoCard', () => {
  it('render video values on card', () => {
    const { getByText } = render(<VideoCard image={mockData.image} title={mockData.title} description={mockData.description} />);
    expect(getByText('Mock Title')).toBeInTheDocument();
    expect(getByText('Mock description')).toBeInTheDocument();
  });
  it('contains image', () => {
    const { getByRole } = render(<VideoCard image={mockData.image} title={mockData.title} description={mockData.description} />);

    expect(getByRole('img')).not.toBeUndefined();
    expect(getByRole('img')).toHaveAttribute('src', 'imageUrl');
  });
});