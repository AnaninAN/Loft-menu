import { screen } from '@testing-library/react';

import { Header } from './Header';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';

describe('Header', () => {
  test('Test render', () => {
    componentRender(<Header table="Table 1" />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
  test('Test have text Loft BAR', () => {
    componentRender(<Header table="Table 1" />);
    expect(screen.getByTestId('header')).toHaveTextContent('Loft BAR');
  });
  test('Test have text EN and RU', () => {
    componentRender(<Header table="Table 1" />);
    expect(screen.getByTestId('header')).toHaveTextContent('EN');
    expect(screen.getByTestId('header')).toHaveTextContent('RU');
  });
});
