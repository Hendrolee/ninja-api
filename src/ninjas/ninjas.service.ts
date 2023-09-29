import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: '0', name: 'Ronin', weapon: 'blade' },
    { id: '1', name: 'Ion', weapon: 'stars' },
  ];

  getNinjas(value?: 'blade' | 'stars') {
    if (value) {
      return this.ninjas.filter((ninja) => ninja.weapon === value);
    }
    return this.ninjas;
  }
}
