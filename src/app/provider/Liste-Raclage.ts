import {raclageprog} from '../model/raclageprog';

export const LISTRACLAGE: raclageprog[] =
[
    {
      id: 1,
      salle: 'Salle N°2',
      batiment: 'Batiment C',
      site: 'A',
      robotname: 'celeritas',
      robotid: '1',
      frequence: 5
    },
    {
      id: 1,
      salle: 'Salle N°5',
      batiment: 'Batiment D',
      site: 'A',
      robotname: 'super-man',
      robotid: '2',
      frequence: 3
    },
    {
      id: 1,
      salle: 'Salle N°9',
      batiment: 'Batiment E',
      site: 'A',
      robotname: 'John',
      robotid: '3',
      frequence: 3
    },
    {
      id: 1,
      salle: 'Salle N°1',
      batiment: 'Batiment Z',
      site: 'A',
      robotname: 'Starsky',
      robotid: '4',
      frequence: 4
    },
    {
      id: 1,
      salle: 'Salle N°14',
      batiment: 'Batiment Z1',
      site: 'A',
      robotname: 'Hutch',
      robotid: '5',
      frequence: 7
    },
    {
      id: 1,
      salle: 'Salle N°23',
      batiment: 'Batiment Z',
      site: 'A',
      robotname: 'Fantomas',
      robotid: '6',
      frequence: 8
    }
];

export const raclageinprogress = 
[
      {
        horaire: "9:25",
        site: "Engraissement 1/Salle 2/Robot 1",
      },
      {
        horaire: "10h34",
        site: "Engraissement 4/Salle 12/Robot 4",
      },
      {
        horaire: "14h26",
        site: "Engraissement 17/Salle 13/Robot 8",
      },
      {
        horaire: "16h02",
        site: "Engraissement 2/Salle 8/Robot 3",
      }
];

export const raclagetocomeup = 
[
      {
        horaire: "16h22",
        site: "Engraissement 1/Salle 2/Robot 1",
      },
      {
        horaire: "17h24",
        site: "Engraissement 4/Salle 12/Robot 4",
      },
      {
        horaire: "18h39",
        site: "Engraissement 17/Salle 13/Robot 8",
      },
      {
        horaire: "20h09",
        site: "Engraissement 2/Salle 8/Robot 3",
      }
];
