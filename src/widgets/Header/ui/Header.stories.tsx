import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Theme } from '@/app/providers/ThemeProvider';
import { LOGO } from '@/shared/const/const';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { getTableTest } from '@/shared/config/tests/mocks/data';

const logo = LOGO;

const meta = {
  title: 'Widgets/Header',
  component: Header,
  argTypes: {},
  args: {
    logo,
  },
  decorators: [StoreDecorator(getTableTest)],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderLigth: Story = {
  args: {},
};

export const HeaderDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
