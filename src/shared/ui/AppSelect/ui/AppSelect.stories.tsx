import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AppSelect } from './AppSelect';

const meta = {
  title: 'Shared/AppSelect',
  component: AppSelect,
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof AppSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Select: Story = {
  args: {
    options: [
      { value: '1', content: 'first' },
      { value: '2', content: 'second' },
    ],
  },
};
