
export interface ProjectInterface {
  props: {
    title:string,
    emoji?:string,
    pic?:string
    desc:string,
    stack:string[],
    duties:string[],
    link?:string,
    notion?:string,
    github?:string,
  }
}



export const projectList = [
  {
    title:'Goal Getter',
    github:'https://github.com/dstadz/GoalsFE',
    link:'https://goalgetter.netlify.app/',
    desc:'Todo List App that tracks goals and habits over a lifetime',
    stack:['React','Node','Express','Knex'],
    emoji:'🥇',
    duties:[
      'Created 15+ CRUD endpoints to connect Front and Back Ends',
      'Designed & built 12+ React components, styled to fit theme of app',
      'Implemented State management with Recoil, new experimental  SM library'
    ],
  },{
    title:'D8 Picker',
    github:'https://github.com/Labs20-D8Picker/DatePickerFE',
    link:'https://labs20d8picker.netlify.app/',
    desc:'PWA calendar extension to handle irregularly repeating events.',
    notion: 'https://www.notion.so/D8-Picker-School-Calendar-945247d05459402199c00843664fb4d1',
    stack:['React','Node','MongoDB'],
    emoji:'📅',
    duties:[
      'Used OAuth to connect to Google Cal API',
      'Developed Front End Components',
      'Crafted user interface for interaction with calendar',
    ],
  }, {
    title:'Foodie Fun Six',
    github:'https://github.com/dstadz/foodie-fun6-server',
    desc:'Yelp clone made to store and review visited restaurants and meals',
    stack:['Node','Knex'],
    emoji:'🍲',
    duties:[
      'Handled server-side routing with Knex',
      'Managed data persistence across the app',
      'Used HTTP Protocol methods to access user data'
    ],
  }
]
