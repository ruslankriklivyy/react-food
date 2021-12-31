import { render, screen } from '@testing-library/react';
import { Button } from 'components/Button';

describe('render button', () => {
  test('render with props', () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick}>
        <div>test</div>
      </Button>,
    );
    expect(screen.getByText('test')).toBeTruthy();
  });

  test('render without required props', () => {
    render(
      <Button>
        <div>test</div>
      </Button>,
    );
    expect(screen.getByText('test')).toBeTruthy();
  });
});
