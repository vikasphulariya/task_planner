import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import type { AvatarSize } from './avatar.types';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  /**
   * Display name of the user.
   *
   * Used for:
   * - Avatar initials
   * - Image alt text
   * - Accessibility labels
   */
  readonly name = input.required<string>();

  /**
   * URL of the avatar image.
   *
   * When omitted or invalid, the component falls back to displaying initials.
   */
  readonly src = input<string | null>(null);

  /**
   * Tooltip text displayed when hovering over the avatar.
   *
   * If omitted or empty, no tooltip is shown.
   */
  readonly title = input<string | null>(null);

  /**
   * Visual size of the avatar.
   *
   * @default 'md'
   */
  readonly size = input<AvatarSize>('md');

  /**
   * Callback invoked when the avatar is clicked or activated
   * using the keyboard (Enter or Space).
   *
   * When provided, the avatar becomes interactive.
   */
  readonly onClick = input<(() => void) | undefined>();

  /**
   * User initials derived from the provided name.
   *
   * Examples:
   * - "John" → "J"
   * - "John Doe" → "JD"
   * - "John Michael Doe" → "JD"
   */
  readonly initials = computed(() => {
    const trimmedName = this.name().trim();

    if (!trimmedName) {
      return '';
    }

    const parts = trimmedName.split(/\s+/);

    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase();
    }

    return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
  });

  /**
   * Indicates whether the avatar should behave as an interactive element.
   */
  readonly isClickable = computed(() => !!this.onClick());

  /**
   * Indicates whether an avatar image is available.
   */
  readonly hasImage = computed(() => !!this.src());

  /**
   * CSS modifier class derived from the selected avatar size.
   */
  readonly sizeClass = computed(() => `avatar--${this.size()}`);

  /**
   * Normalized tooltip value.
   *
   * Returns `null` for empty or whitespace-only strings so the tooltip
   * can be disabled automatically.
   */
  readonly tooltip = computed(() => this.title()?.trim() || null);

  /**
   * Invokes the click callback when the avatar is activated.
   */
  handleClick(): void {
    this.onClick()?.();
  }

  /**
   * Supports keyboard activation for interactive avatars.
   *
   * Enter and Space trigger the same behavior as a mouse click.
   */
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.isClickable()) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onClick()?.();
    }
  }
}
