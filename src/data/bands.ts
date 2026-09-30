import { Band } from '../types/band';

export const favoriteBands: Band[] = [
  {
    id: '1',
    name: 'Red Velvet',
    imagePath: '/images/bands/red-velvet.jpg',
    members: [
      { name: 'Irene', role: 'Leader, Main Rapper' },
      { name: 'Seulgi', role: 'Main Dancer, Lead Vocalist' },
      { name: 'Wendy', role: 'Main Vocalist' },
      { name: 'Joy', role: 'Lead Rapper, Vocalist' },
      { name: 'Yeri', role: 'Vocalist, Rapper' }
    ]
  },
  {
    id: '2',
    name: 'Polycat',
    imagePath: '/images/bands/polycat.jpg',
    members: [
      { name: 'Na', role: 'Lead Vocalist' },
      { name: 'Piew', role: 'Bassist' },
      { name: 'Tong', role: 'Synthesizer' }
    ]
  },
  {
    id: '3',
    name: 'Arctic Monkeys',
    imagePath: '/images/bands/arctic-monkeys.jpg',
    members: [
      { name: 'Alex Turner', role: 'Lead Vocalist' },
      { name: 'Matt Helders', role: 'Drummer' }
    ]
  }
];