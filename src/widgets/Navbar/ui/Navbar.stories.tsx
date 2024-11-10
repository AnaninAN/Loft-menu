import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { Theme } from '@/app/providers/ThemeProvider';
import { Header } from '@/widgets/Header';
import { LOGO } from '@/shared/const/const';

const logo = LOGO;

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLigth: Story = {
  render: () => {
    return <Header table={'10'} logo={logo} />;
  },
  args: {},
};

export const NavbarDark: Story = {
  render: () => {
    return <Header table={'5'} logo={logo} />;
  },
  args: {},
  globals: {
    theme: Theme.DARK,
  },
};
