import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'Shared/AppLink',
  component: AppLink,
  argTypes: {},
  args: {
    to: '/5',
    children: 'Menu',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkPrimary: Story = {
  args: {
    theme: 'primary',
  },
};

export const LinkPrimaryDark: Story = {
  args: {
    theme: 'primary',
  },
  globals: {
    theme: Theme.DARK,
  },
};

export const LinkSecondary: Story = {
  args: {
    theme: 'secondary',
  },
};

export const LinkSecondaryDark: Story = {
  args: {
    theme: 'secondary',
  },
  globals: {
    theme: Theme.DARK,
  },
};

export const LinkRed: Story = {
  args: {
    theme: 'red',
  },
};

export const LinkRedDark: Story = {
  args: {
    theme: 'red',
  },
  globals: {
    theme: Theme.DARK,
  },
};

export const LinkPrimaryButton: Story = {
  args: {
    view: 'button',
  },
};

export const LinkPrimaryInvertedButton: Story = {
  args: {
    view: 'button',
    theme: 'primary_inverted',
  },
};
