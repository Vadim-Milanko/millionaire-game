import { render, screen, fireEvent } from '@testing-library/react';

import ActionButton from './ActionButton';

describe('ActionButton', () => {
  test('renders button with correct title', () => {
    render(<ActionButton title="Click me" onBtnClick={() => {}} />);

    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  test('calls onBtnClick when clicked', () => {
    const handleClick = jest.fn();
    render(<ActionButton title="Press me" onBtnClick={handleClick} />);

    const button = screen.getByRole('button', { name: /press me/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
