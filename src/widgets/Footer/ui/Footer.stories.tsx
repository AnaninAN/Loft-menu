import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { getTableTest } from '@/shared/config/tests/mocks/data';

const meta = {
  title: 'Widgets/Footer',
  component: Footer,
  argTypes: {},
  decorators: [StoreDecorator(getTableTest)],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterLigth: Story = {
  args: {},
};

export const FooterDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
