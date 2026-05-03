import { createText } from '@shopify/restyle';
import { ThemeType } from '@/features/theme';

export const Text = createText<ThemeType>();
export type TextProps = React.ComponentProps<typeof Text>;
