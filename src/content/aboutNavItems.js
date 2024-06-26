const profItems = [
  {
    id: 1,
    name: 'gazal',
    type: 'folder',
    color: 'green',
    children: [{ id: 7, name: 'sw-developer', type: 'file' }],
  },
  {
    id: 2,
    name: 'dianurse',
    type: 'folder',
    color: 'pink',
    children: [
      {
        id: 8,
        name: 'backend-developer',
        type: 'file',
      },
    ],
  },
  {
    id: 3,
    name: 'opensoft',
    type: 'folder',
    color: 'orange',
    children: [
      {
        id: 9,
        name: 'sw-eng-intern',
        type: 'file',
      },
    ],
  },
  {
    id: 4,
    name: 'README',
    type: 'file',
  },
  // {
  //   id: 4,
  //   name: 'preview.js',
  //   type: 'code',
  //   icon: '',
  // },
];

const personalItems = [
  {
    id: 5,
    name: 'education',
    type: 'folder',
    color: 'main',
    children: [
      {
        id: 10,
        name: 'university',
        type: 'file',
      },
      {
        id: 11,
        name: 'high-school',
        type: 'file',
      },
    ],
  },
  {
    id: 6,
    name: 'interests',
    type: 'folder',
    color: 'green',
    children: [
      {
        id: 12,
        name: 'robotics',
        type: 'file',
      },
    ],
  },
];

export const navItems = [
  {
    text: 'professional-info',
    subItems: profItems,
    isOpen: true,
  },
  { text: 'personal-info', subItems: personalItems, isOpen: false },
];
