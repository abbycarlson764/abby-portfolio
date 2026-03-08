const projects = [
  {
    id: 1,
    slug: 'Mad Bites - Mobile UX Design',
    title: 'Mad Bites - Mobile UX Design',
    image: '../../images/madbites_thumbnail.png',
    description:
      'Connecting Madison’s food trucks with hungry locals in real time, Mad Bites simplifies ordering, socializing, and discovering the best street eats. Designed end-to-end from user research through high-fidelity prototypes.',
    tags: ['UX Research', 'Figma', 'Usability Testing', 'Mobile Design', 'Prototyping'],
    github: null,
    demo: '#',
    casestudy: '/files/full-case-study.pdf',
    role: 'UX Researcher & Designer',
    duration: '12 weeks',
    team: 'Group project',
    inspirationImage: { src: '../../images/madbites-inspiration.jpg', caption: 'Library Mall Food Trucks' },
    inspiration: 'The wait times are a major issue with the food truck ordering system in Madison. Throughout my four years of my undergraduate degree, I had tried multiple times to order one of the iconic giant spring rolls that Fresh Cool Drinks is known for but had to leave the line every attempt before ordering because of the extreme wait times. With only 15 minutes in between classes, it was impossible to stop and get something to eat. Our shared issues with ordering from the library mall food trucks was what inspired this application.',
    overview:
      'Fresh Flavors, Zero Guesswork. Connecting Madison’s food trucks with hungry locals in real time, Mad Bites simplifies ordering, socializing, and discovering the best street eats.',
    problem:
      'Locals seeking food trucks face uncertainty about hours, locations, and wait times, causing frustration and missed opportunities for both users and vendors.',
    process: [
      {
        phase: 'Empathize & Define',
        summary: 'User Interviews & Research',
        detail:
          'We began by researching the local food trucks and created an interview question guide to guide our user interviews. We conducted interviews with our classmates about their food truck experiences, ensuring to ask open-ended questions to ensure accurate answers that were not influenced by the wording of our questions. The goal was to understand pain points around food truck discovery, ordering, and social engagement. These conversations uncovered user frustrations and highlighted unmet needs, guiding our product priorities and feature set.',
        bullets: [
          'Many users cited difficulty finding operating food trucks and knowing their current locations.',
          'Order wait times were unpredictable, leading to user frustration and walkaways.',
          'Users expressed interest in seeing friends\' reviews and orders to help with decisions.'
        ],
        personas: 
          'Drawing from interviews and survey data, we defined personas that represent our core users: busy students and professors, downtown workers, and local foodies. Each persona shares a love for quick, varied street food, a need for convenience, and a desire to stay connected with friends. Their main challenges include time constraints, lack of up-to-date information, and missing out on popular food truck experiences. These personas became the north star for design decisions, helping us prioritize features and craft tailored flows.',
        images: [
          { 
            src: '/images/persona.jpg',
            caption: 'Persona Example' 
          },
          { 
            src: '/images/journey-map.jpg',
            caption: 'Journey Map Example' 
          },
        ],
      },
      {
        phase: 'Ideate',
        summary: 'Sketches & Wireframes',
        detail:
          'During early ideation, we produced low-fidelity sketches to quickly explore navigation, map integration, and the order placement process. Sketching helped visualize how users might move from map to menu with minimal friction and allowed rapid iteration before building wireframes. Drawing out the reward and review features clarified how social elements could fit seamlessly alongside functional needs. Sharing these sketches with the team sparked discussion and aligned our vision before committing to digital designs. We spent a portion of time specifically working on sketches on aspects of the app that could potentially facilitate habitual use and variations of some of those ideas made it to our final prototype.',
        wireframes: 'Translating sketches into wireframes, we structured clear paths for truck discovery, order management, and social engagement. Wireframes mapped out essential elements like truck cards, order status updates, and the loyalty dashboard, defining the app’s core architecture. This stage allowed us to make refinements to our architecture and revealed where extra guidance or streamlined steps were needed. Wireframes provided a blueprint and set the stage for bringing our vision into the final prototype.',
        images: [
          { 
            caption: 'Sketches' 
          },
          { 
            src: '/images/wireframe-order.png',
            caption: 'Wireframes' 
          },
          {
            src: '/images/wireframe-rewards.png',
            caption: 'Wireframes'
          },
          {
            src: '/images/wireframe-profile.png',
            caption: 'Wireframes'
          }
        ],
      },
      {
        phase: 'Prototype',
        summary: 'High Fidelity Prototyping',
        detail:
          'The final high-fidelity prototype presented a cleaner user flow for ordering a meal and checkout. It also met user needs for a delivery option.',
        images: [
          { 
            src: '/images/madbites-prototype.png',
            caption: 'Ordering Page' 
          },
          { 
            src: '',
            caption: 'Onboarding'
          },
        ],
      },
      {
        phase: 'Test',
        summary: 'Usability Testing & Reflection',
        detail:
          'Our group conducted one round of usability studies.  The study used a high-fidelity prototype and revealed what aspects of the mockups that needed refining and helped reduce creator blindness in our app.',
        findings: [
          'Adjust the review page so that it is organized by truck, and there is more clarity as to the function of buttons on the page.',
          'Adjust the “see reviews and ratings” to a button instead of an underlined sentence.',
          'Instead of a red “+” button, simply allow the user to click on the image to arrive at the product page to lessen confusion.',
          'Change the “Keep Browsing” button label to “Add More Items” to make it more clear which page you are navigating to.'
        ],
        images: [
          { caption: 'Usability Testing - Before' },
          { caption: 'Usability Testing - After'}
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
    slug: 'Madison Cat Project',
    title: 'Badger Buddies',
    image: '/images/mcp-thumbnail.png',
    description:
      'A cat adoption platform built for CS571 at UW-Madison showcasing real cats from The Madison Cat Project. Features browsing, search, filtering, favorites, and a detailed modal view — all built with React, React Router, and Bootstrap.',
    tags: ['React', 'React Router', 'Bootstrap', 'Context API', 'JavaScript'],
    github: '#',
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
