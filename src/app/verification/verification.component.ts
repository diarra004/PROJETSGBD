import { Component } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  todayCourses: any[] = [
    { 
      startTime: '08:00', 
      endTime: '10:00', 
      courseName: 'Mathématiques', 
      professorName: 'Mmme Diop', 
      students: [
        { name: 'Alioune sene', present: false },
        { name: 'Aicha Drame', present: false },
        { name: 'Fanta boum', present: false },
        { name: 'Mareme Fall', present: false },
        { name: 'Soda Thiam', present: false },
        { name: 'Diarra Diop', present: false },
        { name: 'Diarra Ndiaye', present: false },
        { name: 'Mareme diop', present: false },
        { name: 'Ami Sow', present: false },
        { name: 'Seynabou Faye', present: false },
        { name: 'Chantal Sene', present: false },
        { name: 'Charlie Ndiaye', present: false }
      ],
      professors: ['John Doe', 'Jane Smith', 'Eva Johnson'],
      professorPresent: ''
    },
    { 
      startTime: '10:30', 
      endTime: '12:30', 
      courseName: 'Physique', 
      professorName: 'Mr Sene', 
      students: [
        { name: 'Alioune sene', present: false },
        { name: 'Aicha Drame', present: false },
        { name: 'Fanta boum', present: false },
        { name: 'Mareme Fall', present: false },
        { name: 'Soda Thiam', present: false },
        { name: 'Diarra Diop', present: false },
        { name: 'Diarra Ndiaye', present: false },
        { name: 'Mareme diop', present: false },
        { name: 'Ami Sow', present: false },
        { name: 'Seynabou Faye', present: false },
        { name: 'Chantal Sene', present: false },
        { name: 'Charlie Ndiaye', present: false }
      ],
      professors: ['John Doe', 'Jane Smith', 'Eva Johnson'],
      professorPresent: ''
    },
    { 
      startTime: '14:30', 
      endTime: '16:30', 
      courseName: 'Base de données', 
      professorName: 'Mr Faye', 
      students: [
        { name: 'Alioune sene', present: false },
        { name: 'Aicha Drame', present: false },
        { name: 'Fanta boum', present: false },
        { name: 'Mareme Fall', present: false },
        { name: 'Soda Thiam', present: false },
        { name: 'Diarra Diop', present: false },
        { name: 'Diarra Ndiaye', present: false },
        { name: 'Mareme diop', present: false },
        { name: 'Ami Sow', present: false },
        { name: 'Seynabou Faye', present: false },
        { name: 'Chantal Sene', present: false },
        { name: 'Charlie Ndiaye', present: false }
      ],
      professors: ['John Doe', 'Jane Smith', 'Eva Johnson'],
      professorPresent: ''
    }
    // Ajoutez d'autres cours simulés si nécessaire
  ];

  constructor() {}

  markProfessorPresence(course: any) {
    // Mettre à jour la présence de l'enseignant sélectionné pour le cours
    course.professorName = course.professorPresent;
    console.log(`Présence marquée pour le professeur ${course.professorPresent} dans le cours ${course.courseName}`);
  }
}