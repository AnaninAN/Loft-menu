import type { Meta, StoryObj } from '@storybook/react';

import { AppText } from './AppText';

const meta = {
  title: 'Shared/AppText',
  component: AppText,
  argTypes: {},
  args: {},
} satisfies Meta<typeof AppText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextPrimaryOnlyTitle: Story = {
  args: {
    theme: 'primary',
    title: 'Title',
  },
};

export const TextPrimaryTitleAndText: Story = {
  args: {
    theme: 'primary',
    title: 'Title',
    text: 'Text',
  },
};
