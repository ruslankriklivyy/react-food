import { render, screen } from '@testing-library/react';

import { RootStateProvider } from '../store/RootState.Context';
import { Title } from './Title';

describe('render title', () => {
  it('should be render with props', () => {
    render(
      <RootStateProvider>
        <Title>Test title</Title>
      </RootStateProvider>,
    );

    expect(screen.getByText(/Test title/)).toBeTruthy();
  });
});
