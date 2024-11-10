import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'Widgets/Header',
  component: Header,
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderLigth: Story = {
  args: {
    table: '5',
  },
};

export const HeaderDark: Story = {
  args: {
    table: '12',
  },
  globals: {
    theme: Theme.DARK,
  },
};
