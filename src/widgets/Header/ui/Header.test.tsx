import { screen } from '@testing-library/react';

import { Header } from './Header';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import { LOGO } from '@/shared/const/const';

const logo = LOGO;

describe('Header', () => {
  test('Test render', () => {
    componentRender(<Header logo={logo} />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
  test('Test have text Loft BAR', () => {
    componentRender(<Header logo={logo} />);
    expect(screen.getByTestId('header')).toHaveTextContent('Loft BAR');
  });
  test('Test have text EN and RU', () => {
    componentRender(<Header logo={logo} />);
    expect(screen.getByTestId('header')).toHaveTextContent('EN');
    expect(screen.getByTestId('header')).toHaveTextContent('RU');
  });
});
