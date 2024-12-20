import type { Meta, StoryObj } from '@storybook/react';

import { AppModal } from './AppModal';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
  title: 'Shared/AppModal',
  component: AppModal,
  argTypes: {},
  args: { isOpen: true },
} satisfies Meta<typeof AppModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {
  args: {
    children: 'Модальное окно',
  },
};

export const ModalDark: Story = {
  args: {
    children: 'Модальное окно',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
