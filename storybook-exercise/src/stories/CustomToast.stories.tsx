import type { Meta, StoryObj } from '@storybook/react-vite';

import { CustomToast } from './CustomToast';

const meta = {
  title: 'Example/CustomToast',
  component: CustomToast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    status: 'success',
    text: 'Operation completed successfully!',
    hasIcon: true,
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    text: 'Please review before continuing.',
    hasIcon: true,
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    text: 'Something went wrong. Please try again.',
    hasIcon: true,
  },
};
