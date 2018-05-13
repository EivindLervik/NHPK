import { Component, OnInit } from '@angular/core';
import { BoardMember } from '../Objects/BoardMember';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  boardMembers: BoardMember[];

  constructor() { }

  ngOnInit() {
    this.boardMembers = [];
    this.boardMembers.push(new BoardMember("Vidar Grindheim", "Klubbleder"));
    this.boardMembers.push(new BoardMember("Bjarne Solbakken", "Nestleder"));
    this.boardMembers.push(new BoardMember("Jørgen B Ingebrigtsen", "Styremedlem"));
    this.boardMembers.push(new BoardMember("Styremedlem", "Kasserer"));
    this.boardMembers.push(new BoardMember("Tor-Erik Hellesund", "Styremedlem"));
    this.boardMembers.push(new BoardMember("Kent Remy Nesbø", "Vara"));
  }

}
