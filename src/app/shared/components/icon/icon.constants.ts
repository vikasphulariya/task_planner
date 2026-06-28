import type { IconColor, IconSize, IconVariant } from './icon.types';

export const DEFAULT_ICON_SIZE: IconSize = 'md';

export const DEFAULT_ICON_VARIANT: IconVariant = 'plain';

export const DEFAULT_ICON_COLOR: IconColor = 'text-primary';

export const ICON_SIZE_MAP: Record<IconSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
};
