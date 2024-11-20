import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { Theme } from '@/app/providers/ThemeProvider';
import { Header } from '@/widgets/Header';
import { LOGO } from '@/shared/const/const';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { getTableTest } from '@/shared/config/tests/mocks/data';

const logo = LOGO;

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
  argTypes: {},
  decorators: [StoreDecorator(getTableTest)],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLigth: Story = {
  render: () => {
    return <Header logo={logo} />;
  },
  args: {},
};

export const NavbarDark: Story = {
  render: () => {
    return <Header logo={logo} />;
  },
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
