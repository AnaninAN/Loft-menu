import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLigth: Story = {
  args: {},
};

export const NavbarDark: Story = {
  args: {},
  globals: {
    theme: Theme.DARK,
  },
};
