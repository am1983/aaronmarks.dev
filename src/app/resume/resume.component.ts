import { Component, OnInit } from '@angular/core';
import { CardContent } from '../shared/card-gallery/card-content';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  educationCards: CardContent[] = [
    {
      title: 'Master of Science in Information Technology',
      subtitle: 'Southern New Hampshire University',
      info: 'Concentration: Software Application Development',
      notes: 'Completed: June 2019',
      callouts: ['HTML', 'CSS', 'Java', 'Spring MVC', 'MySQL', 'SQL Server'],
      isEmpty: false
    },
    {
      title: 'Bachelor of Science in Information Technology',
      subtitle: 'Sullivan University',
      info: 'Concentrations: Software Engineering and Database Administration',
      notes: 'Completed: March 2015',
      callouts: ['HTML', 'CSS', 'C#', 'JavaScript', 'Java', 'PHP', 'MySQL', 'SQL Server'],
      isEmpty: false
    },
    {
      title: 'Associate of Arts',
      subtitle: 'Bluegrass Community and Technical College',
      info: 'Concentration: Linguistics and Foreign Language Education',
      notes: 'Completed: May 2007',
      callouts: [],
      isEmpty: false
    }
  ];

  professionalCards: CardContent[] = [
    {
      title: 'Senior Software Developer',
      subtitle: 'Custom Data Processing',
      info: 'Dates: 06/2018 - Present',
      notes: '',
      callouts: ['HTML', 'CSS', 'JavaScript', 'Angular', 'SQL Server', 'Entity Framework Core', 'C#', '.NET Core', 'Angular Material'],
      isEmpty: false
    },
    {
      title: 'Adjunct Instructor',
      subtitle: 'Sullivan College of Technology and Design',
      info: 'Dates: 06/2016 - 01/2018',
      notes: '',
      callouts: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'C#', 'SQL Server', '.NET 4', '.NET Core', 'Xamarin'],
      isEmpty: false
    },
    {
      title: 'Senior Software Developer',
      subtitle: 'Lloyd & McDaniel, PLC',
      info: 'Dates: 06/2016 to 06/2018',
      notes: '',
      callouts: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AngularJS', 'KnockoutJS', 'Bootstrap', 'jQuery UI', 'ASP.NET Web Forms', 'ASP.NET MVC', 'Classic ASP'],
      isEmpty: false
    }
  ];

  professionalCardsOverflow: CardContent[] = [
    {
      title: 'Developer',
      subtitle: 'Kwantek, LLC',
      info: 'Dates: 03/2014 to 03/2016',
      notes: '',
      callouts: ['HTML', 'CSS', 'C#', 'JavaScript', 'jQuery', 'KnockoutJS', 'Bootstrap', 'ASP.NET Web Forms', 'ASP.NET MVC', 'Classic ASP'],
      isEmpty: false
    },
    {
      isEmpty: true
    },
    {
      isEmpty: true
    }
  ];

  volunteerWork: CardContent[] = [
    {
      title: 'Executive Committee Member / Communications Chair',
      subtitle: 'Bullitt County Democratic Party',
      notes: 'Manage social media presence, support website.',
      link: 'http://www.bullittdemocrats.com',
      linkText: 'www.bullittdemocrats.com'
    },
    {
      title: 'Member',
      subtitle: 'Civic Data Alliance',
      notes: 'Work to make government data useful to the community.',
      link: 'https://civicdataalliance.org/',
      linkText: 'civicdataalliance.org'
    },
    {
      title: 'Tech Volunteer',
      subtitle: 'Animal Care Society',
      notes: 'Trying, desperately, to keep their WordPress site up and running.',
      link: 'http://www.animalcaresociety.org',
      linkText: 'www.animalcaresociety.org'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
