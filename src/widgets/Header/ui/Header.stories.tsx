import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Theme } from '@/app/providers/ThemeProvider';
import { LOGO } from '@/shared/const/const';

const logo = LOGO;

const meta = {
  title: 'Widgets/Header',
  component: Header,
  argTypes: {},
  args: {
    logo,
  },
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
