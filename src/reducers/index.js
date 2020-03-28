const initialState = {
  twitters: [
    {
      id: 1,
      title: 'React',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animiDelDelectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animiDelectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animiectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day ago',
      twitterName: 'reactjs',
    },
    {
      id: 2,
      title: 'Redux',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  animi',
      created: '3 days ago',
      twitterName: 'dan_abramov',
    },
    {
      id: 3,
      title: 'React router',
      content: ' Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days ago',
      twitterName: 'mjackson',
    },
    {
      id: 4,
      title: 'React training',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10 days ago',
      twitterName: 'RyanFlorence',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'Hello',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '2 days ago',
      articleUrl: 'https://medium.com/search?q=programming',
    },
  ],
  notes: [
    {
      id: 1,
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day ago',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
        ],
      };

    default:
      return state;
  }
};

export default rootReducer;
