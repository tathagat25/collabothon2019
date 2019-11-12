import PropertyGroup from './PropertyGroup';

const exampleOptions = [
  {
    key: 'WLAN',
    label: 'WLAN',     },
  {
    key: 'Office lockable',
    label: 'Office lockable',
  },
  {
    key: 'Reception',
    label: 'Reception',
  },
  {
    key: 'Meeting room / conference room',
    label: 'Meeting room / conference room',
  },
  {
    key: 'Facilitators toolkit',
    label: 'Facilitators toolkit',
  },
  {
    key: 'Whiteboard',
    label: 'Whiteboard',
  },
  {
    key: 'TV',
    label: 'TV',
  },
  {
    key: 'Cleaning service included',
    label: 'Cleaning service included',
  },
  {
    key: 'Flipchart',
    label: 'Flipchart',
  },
  {
    key: 'Beamer',
    label: 'Beamer',
  },
  {
    key: 'Video conference equipment',
    label: 'Video conference equipment',
  },
  {
    key: 'Catering / Takeout',
    label: 'Catering / Takeout',
  },
  {
    key: 'Add parking space',
    label: 'Add parking space',
  },
];

export const WithSomeSelected = {
  component: PropertyGroup,
  props: {
    id: 'amenities',
    options: exampleOptions,
    selectedOptions: ['towels', 'bathroom', 'barbeque'],
    twoColumns: true,
  },
  group: 'misc',
};
