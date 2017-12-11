import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'AJE Company', 'http://portfolio.taniadangelo.com', 'Ruby on Rails', 150, 120, 15, 'test@test.com')
  proposalTwo: Proposal = new Proposal(99, 'JEA Company', 'http://portfolio.taniadangelo.com', 'Ruby on Rails', 150, 120, 15, 'test@test.com')
  proposalThree: Proposal = new Proposal(300, 'EAJ Company', 'http://portfolio.taniadangelo.com', 'Ruby on Rails', 150, 120, 15, 'test@test.com')

  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
  ]
}