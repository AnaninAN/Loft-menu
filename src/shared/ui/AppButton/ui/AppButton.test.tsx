import { render, screen } from '@testing-library/react';

import { AppButton } from './AppButton';

describe('AppButton', () => {
  test('Test render', () => {
    render(<AppButton>TEST</AppButton>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Test clear theme', () => {
    render(<AppButton theme="clear">TEST</AppButton>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
