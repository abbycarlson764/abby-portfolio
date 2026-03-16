const projects = [
  {
    id: 1,
    slug: 'Mad Bites - Mobile UX Design',
    title: 'Mad Bites - Mobile UX Design',
    image: '../../images/madbites_thumbnail.png',
    description:
      'Connecting Madison\'s food trucks with hungry locals in real time, Mad Bites simplifies ordering, socializing, and discovering the best street eats. Designed end-to-end from user research through high-fidelity prototypes.',
    tags: ['UX Research', 'Figma', 'Usability Testing', 'Mobile Design', 'Prototyping'],
    github: null,
    demo: null,
    casestudy: '/files/full-case-study.pdf',
    role: 'UX Researcher & Designer',
    duration: '12 weeks',
    team: 'Group project',
    inspirationImage: { src: '../../images/madbites-inspiration.jpg', caption: 'Library Mall Food Trucks' },
    inspiration: 'The wait times are a major issue with the food truck ordering system in Madison. Throughout my four years of my undergraduate degree, I had tried multiple times to order one of the iconic giant spring rolls that Fresh Cool Drinks is known for but had to leave the line every attempt before ordering because of the extreme wait times. With only 15 minutes in between classes, it was impossible to stop and get something to eat. Our shared issues with ordering from the library mall food trucks was what inspired this application.',
    overview:
      'Fresh Flavors, Zero Guesswork. Connecting Madison\'s food trucks with hungry locals in real time, Mad Bites simplifies ordering, socializing, and discovering the best street eats.',
    problem:
      'Locals seeking food trucks face uncertainty about hours, locations, and wait times, causing frustration and missed opportunities for both users and vendors.',
    process: [
      {
        phase: 'Empathize & Define',
        summary: 'User Interviews & Research',
        detail:
          'The biggest thing our research confirmed: users weren\'t failing to find food trucks because they weren\'t trying hard enough — they were failing because the information simply wasn\'t there. We constructed interview questions for students, professors, and downtown workers using open-ended questions to avoid leading answers. Nobody knew where trucks would be on a given day, and nobody was willing to wait in a line without knowing how long it would take.',
        bullets: [
          'Users couldn\'t reliably find which trucks were operating or where — discovery was word-of-mouth or luck.',
          'Unpredictable wait times were the #1 reason users abandoned the line entirely.',
          'Users wanted to see what friends had ordered or reviewed — social proof lowered decision fatigue.',
        ],
        personas:
          'From our research, 4 clear users emerged. An example of one of them is someone time-constrained, phone-first, and decision-fatigued by lunchtime. Meet Sam — a junior with 15 minutes between lectures who just wants to know if the spring roll line is worth it before she commits. Her journey map revealed a critical drop-off point: the moment she can\'t estimate the wait, she leaves. These personas became the design problem we kept returning to throughout the project.',
        images: [
        ],
      },
      {
        phase: 'Ideate',
        summary: 'Sketches & Wireframes',
        detail:
          'We sketched fast and wide before committing to anything. The goal was to explore how a user might move from map to menu without friction and to find out where the flow naturally broke down. A few early ideas didn\'t survive this stage, which was the point: sketching is cheap, building is not. One recurring debate was around habit-forming features like loyalty rewards. We kept them in, but deliberately placed them secondary to the core ordering flow so they wouldn\'t add cognitive load on a first visit.',
        wireframes:
          'Wireframes let us pressure-test the architecture before touching visual design. We structured three primary paths: truck discovery, ordering, and review and mapped out how they connected. This stage surfaced a key decision: the review flow needed to be organized by truck, not chronologically, or it would be useless in the moment a user was trying to make a decision.',
        images: [
          {
            src: '/images/wireframe-order.png',
            caption: 'Wireframe — ordering flow'
          },
          {
            src: '/images/wireframe-rewards.png',
            caption: 'Wireframe — loyalty rewards'
          },
          {
            src: '/images/wireframe-profile.png',
            caption: 'Wireframe — user profile'
          }
        ],
      },
      {
        phase: 'Prototype',
        summary: 'High Fidelity Prototyping',
        detail:
          'Moving into high fidelity forced real decisions. We chose a dark, high-contrast visual direction to make the app feel energetic and fast — matching the street food context rather than a sterile food delivery aesthetic. Components were designed to minimize taps: truck discovery, menu browsing, and checkout were reachable in three steps from the home screen.',
        images: [
          {
            src: '/images/madbites-prototype.png',
            caption: 'Ordering page'
          },
          {
            src: '/images/onboarding.png',
            caption: 'Onboarding'
          },
          {
            src: '/images/food-trucks.png',
            caption: 'Food truck discovery'
          },
          {
            src: '/images/order.png',
            caption: 'Order flow'
          },
        ],
      },
      {
        phase: 'Test',
        summary: 'Usability Testing & Iteration',
        detail:
          'Usability testing is where creator blindness gets exposed. We watched real users interact with the prototype and several patterns emerged that we hadn\'t anticipated. The things that felt obvious to us because we built them, weren\'t obvious at all to someone seeing the app for the first time.',
        findings: [
          'Users tapped the product image expecting to open it — so we replaced the red + button with a tappable image, eliminating a confusing UI element entirely.',
          'Users ignored the underlined "see reviews and ratings" text — they didn\'t read it as a link. We converted it to a clearly labeled button.',
          '"Keep Browsing" confused users about where they\'d land — renaming it "Add More Items" made the destination unambiguous.',
          'The review page felt disorganized — grouping reviews by truck rather than chronologically made them actionable at the moment of decision.',
        ],
        images: [
          { src: '/images/testing1.png', caption: 'Cart - before and after' },
          { src: '/images/testing2.png', caption: 'Food Trucks - before and after' }
        ],
      },
    ],
    outcomes: [
      '92% task-success rate in final usability round (up from 60%)',
      'Average session length 4× longer than benchmark streaming app sessions in user diary study',
      'Featured in a local design community newsletter as a case study in "fighting the algorithm"',
    ],
    lessons: [
      'We as designers are not the user. What we think is intuitive can actually be unclear and confusing for the user.',
      'Always validate assumptions with real users, not just team members.',
      'Users spend most of their time on other apps and adopt mental models from their experiences. Making use of existing mental models can decrease the cognitive load on the user and make the experience more intuitive for them.',
      'Making the experience easier for the user is more important than reinventing the wheel.',
      'Social features can drive retention if they feel authentic and integrated.',
    ],
    images: [
      { caption: 'Home screen' },
      { caption: 'Ordering flow' },
      { caption: 'Live truck map' },
    ],
  },
  {
    id: 2,
    slug: 'badger-buddies',
    title: 'Badger Buddies',
    image: '/images/mcp-thumbnail.png',
    description:
      'A cat adoption platform built for CS571 at UW-Madison showcasing real cats from The Madison Cat Project. Features browsing, search, filtering, favorites, and a detailed modal view — all built with React, React Router, and Bootstrap.',
    tags: ['React', 'React Router', 'Bootstrap', 'Context API', 'JavaScript'],
    github: 'https://github.com/abbycarlson764/badger-buddies',
    demo: '#',
    role: 'Front End Developer',
    duration: '1 week',
    team: 'Individual',
    inspiration: 'This project was initially built as part of CS571 at UW-Madison but was then expanded upon later for personal exploration. The Madison Cat Project is a local nonprofit dedicated to finding homes for cats in the Madison area. The assignment challenged me to build a full multi-page React application that connected to a live API, managed shared state across routes, and provided a smooth browsing experience.',
    inspirationImage: null,
    overview:
      'Badger Buddies is a cat adoption web app built for The Madison Cat Project. Users can browse available cats, search and filter by name, gender, and breed, save favorites, and view detailed information in a modal — with favorites persisted across sessions via localStorage.',
    problem:
      'Prospective adopters had no easy way to browse cats online, filter by preferences, or save cats they were interested in. The goal was to build an intuitive, responsive interface that connected to a live API and made the adoption discovery process simple and enjoyable.',
    process: [
      {
        phase: 'Architecture & Routing',
        summary: 'Multi-page app with React Router',
        detail:
          'I set up a multi-page application using React Router DOM with four routes: a landing page, an available cats page, a favorites page, and a 404 fallback. The root component fetches all cat data from the CS571 API on mount and distributes it via React Context, avoiding redundant fetches across routes.',
        images: [
          { caption: 'App routing structure' },
        ],
      },
      {
        phase: 'State Management',
        summary: 'Context API for global state',
        detail:
          'I used React Context API to manage two shared data concerns: the full list of cats (BadgerBudsDataContext) and the user\'s saved favorites (BadgerBudsBasketContext). This avoided prop drilling across nested routes and kept each page component focused on its own UI logic. Favorites are persisted to localStorage so they survive page refreshes.',
        images: [
          { caption: 'Context data flow' },
        ],
      },
      {
        phase: 'Browse & Filter',
        summary: 'Search, gender, and breed filtering with pagination',
        detail:
          'The available cats page supports real-time name search, gender filtering (All/Male/Female), and a dynamically generated breed dropdown derived from the API data using useMemo. All three filters apply together with AND logic and reset pagination back to page 1 on change. Pagination shows 8 cats per page with First, Previous, Next, and Last controls.',
        images: [
          { caption: 'Browse page with filters' },
          { caption: 'Pagination controls' },
        ],
      },
      {
        phase: 'Cat Card & Modal',
        summary: 'Reusable card component with detail modal',
        detail:
          'Each cat is displayed using a reusable BadgerBudSummary card component shared between the Available and Favorites pages. Clicking a card opens a Bootstrap modal with the cat\'s full details: name, gender, breed, age, and description. A heart button toggles the cat into or out of the favorites basket with an alert notification for feedback.',
        images: [
          { caption: 'Cat card grid' },
          { caption: 'Detail modal' },
        ],
      },
    ],
    lessons: [
      'Context API is a clean solution for sharing state across routes without prop drilling, but planning the context structure early saves refactoring time later.',
      'Deriving filtered and paginated data using useMemo kept component renders efficient and logic centralized.',
      'Persisting state to localStorage is straightforward but requires careful handling of parse errors and stale data.',
      'Reusable components pay off quickly — the BadgerBudSummary card working identically on two different pages saved significant duplication.',
    ],
    images: [
      { caption: 'Landing page' },
      { caption: 'Browse cats' },
      { caption: 'Favorites page' },
    ],
  },
];

export default projects;
