import type { Meta, StoryObj } from '@storybook/react';

import { AppLoader } from './AppLoader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'Shared/AppLoader',
  component: AppLoader,
  argTypes: {},
  args: {},
} satisfies Meta<typeof AppLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderLight: Story = {
  args: {},
};

export const LoaderDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
