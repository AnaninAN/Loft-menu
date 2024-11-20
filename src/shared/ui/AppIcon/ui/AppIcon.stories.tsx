import MenuIcon from '@/shared/assets/icons/menu.svg';
import ChatIcon from '@/shared/assets/icons/chat.svg';
import CheckIcon from '@/shared/assets/icons/check.svg';

import type { Meta, StoryObj } from '@storybook/react';

import { AppIcon } from './AppIcon';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
  title: 'Shared/AppIcon',
  component: AppIcon,
  argTypes: {},
  args: {},
} satisfies Meta<typeof AppIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuIconLight: Story = {
  args: {
    Svg: MenuIcon,
  },
};

export const MenuIconDark: Story = {
  args: {
    Svg: MenuIcon,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const CheckIconLight: Story = {
  args: {
    Svg: CheckIcon,
  },
};

export const CheckIconDark: Story = {
  args: {
    Svg: CheckIcon,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ChatIconLight: Story = {
  args: {
    Svg: ChatIcon,
  },
};

export const ChatIconDark: Story = {
  args: {
    Svg: ChatIcon,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
