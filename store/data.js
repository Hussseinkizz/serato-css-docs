// Items displayed as a list in left sidebar!
export const sidebarLists = [
  {
    title: 'Base',
    items: ['Reset', 'Font Reset', 'Experiments'],
  },
  {
    title: 'Layout',
    items: [
      'Standard Layout',
      'Holy Grail Layout',
      'Header',
      'Navbar',
      'Hero',
      'Sidebar',
      'Main',
      'Footer',
    ],
  },
  {
    title: 'Components',
    items: ['Buttons', 'Cards', 'Tables', 'Forms', 'Icons', 'Images'],
  },
  {
    title: 'Helpers',
    items: [
      'Spacing',
      'Positioning',
      'Containers',
      'Typography',
      'Collective',
      'Display & Visibility',
    ],
  },
  {
    title: 'Colors',
    items: [
      'Basic Colors',
      'Serato Colors',
      'Famous Colors',
      'Gradients',
      'Color States',
    ],
  },
  {
    title: 'Responsiveness',
    items: ['Media Queries', 'Responsive Spacings', 'Responsive Tips'],
  },
  {
    title: 'Animations',
    items: ['Native Animations', 'Hover Animations', 'Awesome Animations'],
  },
  {
    title: 'Themes',
    items: ['Dark Mode'],
  },
];

// Serato Css usage html sample
export const htmlSampleGenerator = () => {
  `"
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdeliver.net/npm/serato-css/serato-css.min.css"
        />
        <title>Serato</title>
      </head>

      <body>
        <h1 class="serato-gradient-on-text font-heading">Serato CSS</h1>
      </body>
    </html>
  "`;
};

// code snippets parsed to syntax highlighter, used as examples!
export const codeExamples = [
  {
    cdnLink: {
      id: 1,
      description: 'serato css cdn link',
      language: 'html',
      code: '<link rel="stylesheet" href="https://cdn.jsdeliver.net/npm/serato-css/serato-css.min.css" />',
    },
    cdnLinkCSS: {
      id: 2,
      description: 'serato css cdn link for css import',
      language: 'css',
      code: '@import "https://cdn.jsdeliver.net/npm/serato-css/serato-css.min.css";',
    },
    cssLink: {
      id: 3,
      description: 'Html css linking code',
      language: 'html',
      code: '<link rel="stylesheet" href="serato.css" />',
    },
    npmInstall: {
      id: 4,
      description: 'Npm installation code',
      language: 'bash',
      code: 'npm install serato-css',
    },
    npmUse: {
      id: 5,
      description: 'Npm installation usage code',
      language: 'javascript',
      code: "import 'serato-css/serato.css';",
    },
    htmlSample: {
      id: 6,
      description: 'serato css usage sample code',
      language: 'html',
      code: htmlSampleGenerator,
    },
  },
];

// stuff we're referencing over often throughout or those we want to change easily from a single point!
export const references = [
  {
    downloadLink: {
      id: 1,
      description: 'Serato CSS direct download link',
      item: 'https://github.com/Hussseinkizz/serato-css/raw/master/seratocss-v1.0.5.zip',
    },
    youtubeLink: {
      id: 2,
      description: 'Serato CSS youtube link',
      item: 'https://youtube.com/SeratoCss',
    },
    twitterLink: {
      id: 3,
      description: 'Serato CSS twitter link',
      item: 'https://twitter.com/SeratoCss',
    },
    githubLink: {
      id: 4,
      description: 'Serato CSS github link',
      item: 'https://github.com/Hussseinkizz/serato-css',
    },
  },
];
