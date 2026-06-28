import { Component } from '@angular/core';
import { AvatarComponent } from '@shared/components/avatar/avatar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [AvatarComponent],
})
export class Header {
  handleProfileClick = () => {
    console.log('Profile clicked');
  };
}
