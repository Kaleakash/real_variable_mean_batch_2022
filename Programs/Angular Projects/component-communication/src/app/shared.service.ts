import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  names:Array<string>=[];
  
  constructor() { }
  
  setValue(names:Array<string>): void {
      this.names=names;
  }

  getValue():Array<string> {
    return this.names;
  }
}
