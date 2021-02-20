import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoGrid from './VideoGrid.component';

const mockData = [
  {
    etag: '1',
    snippet: {
      title: 'Title 1',
      thumbnails: {
        medium: {
          url: 'imageUrl',
        },
      },
    },
  },
  {
    etag: '2',
    snippet: {
      title: 'Title 2',
      thumbnails: {
        medium: {
          url: 'imageUrl',
        },
      },
    },
  },
];

describe('VideoGrid component', () => {
  it('contains two children', () => {
    render(<VideoGrid videosData={mockData} />);

    expect(screen.getAllByRole('heading').length).toBe(mockData.length);
  });
});