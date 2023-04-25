import React from 'react';
import {act, render, RenderResult, waitFor} from '@testing-library/react';
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

  beforeEach(async () => {
    // As home has an immediately triggered useEffect, render within act as it triggers an update
    // NOTE: Ignoring material UI table key error :)
    result = await act(async () => render(<Home />));
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


