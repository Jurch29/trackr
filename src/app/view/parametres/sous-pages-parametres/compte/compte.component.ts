import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup 
{
  letter: string;
  names: string[];
}

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit 
{
  stateForm: FormGroup = this.fb.group({stateGroup: '',});

  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Anglais', 'Albanais']
  }, {
    letter: 'C',
    names: ['Corse', 'Croate', 'Coréen']
  }, {
    letter: 'D',
    names: ['Danois']
  }, {
    letter: 'F',
    names: ['Fidjien', 'Français']
  }, {
    letter: 'G',
    names: ['Gallois']
  }, {
    letter: 'H',
    names: ['Hongrois']
  }, {
    letter: 'I',
    names: ['Italien', 'Islandais', 'Indien', 'Irlandais']
  }, {
    letter: 'L',
    names: ['Latin']
  }, {
    letter: 'M',
    names: ['Maltais']
  }, {
    letter: 'N',
    names: ['Napolitain', 'Nadruvien', 'Norvégiens']
  }, {
    letter: 'W',
    names: ['Wolof']
  }];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() 
  {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterGroup(val))
      );
  }
 //en dessous des configurations pour le stategroup
  filterGroup(val: string): StateGroup[] 
  {
    if (val) 
    {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: this._filter(group.names, val) }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  private _filter(opt: string[], val: string) 
  {
    const filterValue = val.toLowerCase();
    return opt.filter(item => item.toLowerCase().startsWith(filterValue));
  }

  getPH(num)
  {
    if (window.innerWidth > 950)
    {
      if(num === 1)
        return 'Telephone';
      else
        return 'Mail';
    }
    else return '';
  }

}
