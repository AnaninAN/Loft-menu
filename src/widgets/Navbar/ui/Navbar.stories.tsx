import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { Theme } from '@/app/providers/ThemeProvider';
import { Header } from '@/widgets/Header';

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLigth: Story = {
  render: () => {
    return <Header table={'10'} />;
  },
  args: {},
};

export const NavbarDark: Story = {
  render: () => {
    return <Header table={'5'} />;
  },
  args: {},
  globals: {
    theme: Theme.DARK,
  },
};
