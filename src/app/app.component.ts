import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-training-project';
  courseGoals = [
    { title: 'Master Angular Styling', isActiveGoal: true },
    { title: 'Understnd Angular Animation', isActiveGoal: false },
    { title: 'Master Angular Animation', isActiveGoal: false },
  ];
}
