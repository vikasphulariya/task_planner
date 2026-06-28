import { Component } from '@angular/core';
import { AvatarComponent } from '@shared/components/avatar/avatar.component';
import { AutocompleteComponent } from '@shared/components';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [AvatarComponent, AutocompleteComponent],
})
export class Header {
  handleProfileClick = () => {
    console.log('Profile clicked');
  };
  searchItems = [
    { label: 'Task 1', value: 1 },
    { label: 'Task 2', value: 2 },
    { label: 'Project 1', value: 3 },
  ];

  handleSearchOptionSelect = (option: { label: string; value: number }) => {
    console.log('Selected option:', option);
  };
}
