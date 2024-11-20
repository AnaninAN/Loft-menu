import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from './PageLoader';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
  title: 'Widgets/PageLoader',
  component: PageLoader,
  argTypes: {},
  args: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderLigth: Story = {
  args: {},
};

export const LoaderDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
