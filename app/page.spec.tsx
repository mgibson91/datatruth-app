import React from 'react';
import {render, RenderResult, waitFor} from '@testing-library/react';
import Home from './page';
import {MOCK_MEDAL_BREAKDOWN} from "../mocks/mock-medal-breakdown";

// @ts-ignore
window.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_MEDAL_BREAKDOWN),
  })
);

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('Home', () => {
  // @ts-ignore
  window.ResizeObserver = ResizeObserver;
  let result: RenderResult;

  beforeEach(() => {
    result = render(<Home />);
  })

  test('should render Home component', async () => {
    result.getByText('Discover what makes champions')
  })

  test('should render Home component', async () => {
    await waitFor(() => {
      expect(result.getByText('Afghanistan')).toBeInTheDocument();
    });
  })
});


