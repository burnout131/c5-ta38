import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {

  constructor(private _router: Router, private _route: ActivatedRoute, private serviceService: ServiceService) { }

  character: any;

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.serviceService.getById(id).subscribe(result => this.character = result);
  }

  backToCharacters(): void {
    this._router.navigate(['/characters']);
  }
}
