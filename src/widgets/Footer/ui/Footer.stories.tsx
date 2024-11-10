import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'Widgets/Footer',
  component: Footer,
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterLigth: Story = {
  args: {},
};

export const FooterDark: Story = {
  args: {},
  globals: {
    theme: Theme.DARK,
  },
};
