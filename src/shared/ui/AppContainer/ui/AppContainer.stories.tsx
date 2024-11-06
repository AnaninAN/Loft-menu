import type { Meta, StoryObj } from '@storybook/react';

import { AppContainer } from './AppContainer';

const meta = {
  title: 'Shared/AppContainer',
  component: AppContainer,
  argTypes: {},
  args: {},
} satisfies Meta<typeof AppContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Container: Story = {
  args: {
    children: 'Text',
  },
};
