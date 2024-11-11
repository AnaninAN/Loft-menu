import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AppButton } from './AppButton';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'Shared/AppButton',
  component: AppButton,
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonClear: Story = {
  args: {
    children: 'Text',
    theme: 'clear',
  },
};

export const ButtonClearDark: Story = {
  args: {
    children: 'Text',
    theme: 'clear',
  },
  globals: {
    theme: Theme.DARK,
  },
};

export const ButtonClearInverted: Story = {
  args: {
    children: 'AppButton',
    theme: 'clear_inverted',
  },
};

export const ButtonClearInvertedDark: Story = {
  args: {
    children: 'AppButton',
    theme: 'clear_inverted',
  },
  globals: {
    theme: Theme.DARK,
  },
};

export const ButtonBackground: Story = {
  args: {
    children: 'AppButton',
    theme: 'background',
  },
};

export const ButtonBackgroundDark: Story = {
  args: {
    children: 'AppButton',
    theme: 'background',
  },
  globals: {
    theme: Theme.DARK,
  },
};

export const ButtonBackgroundInverted: Story = {
  args: {
    children: 'AppButton',
    theme: 'background_inverted',
  },
};

export const ButtonBackgroundInvertedDark: Story = {
  args: {
    children: 'AppButton',
    theme: 'background_inverted',
  },
  globals: {
    theme: Theme.DARK,
  },
};

export const ButtonOutline: Story = {
  args: {
    children: 'AppButton',
    theme: 'outline',
  },
};

export const ButtonOutlineDark: Story = {
  args: {
    children: 'AppButton',
    theme: 'outline',
  },
  globals: {
    theme: Theme.DARK,
  },
};

export const ButtonOutlineRed: Story = {
  args: {
    children: 'AppButton',
    theme: 'outline_red',
  },
};

export const ButtonOutlineRedDark: Story = {
  args: {
    children: 'AppButton',
    theme: 'outline_red',
  },
  globals: {
    theme: Theme.DARK,
  },
};

export const ButtonClose: Story = {
  args: {
    close: true,
  },
};

export const ButtonCloseDark: Story = {
  args: {
    close: true,
  },
  globals: {
    theme: Theme.DARK,
  },
};
