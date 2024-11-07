import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";



const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  randomUser = signal(DUMMY_USERS[randomUserIndex]);
  @Input({ required: true }) user!: User;
  @Input ({required: true}) isUserSelected!: boolean;

  @Output() select = new EventEmitter<string>();


  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  })

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
