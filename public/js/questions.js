const questions = [
  /* Category 1 Questions */
  {
    prompt: 'Which concept defines what actions are possible?',
    options: ['Preattentive processing', 'Affordances', 'Signifiers', 'DIKW pyramid'],
    correctAnswer: 'Affordances',
    cashPrize: 10
  },
  {
    prompt: 'What are visualizations used for?',
    options: ['Adapting form to the nature of the information', 'Analyzing & modeling data', 'Helping an audience complete certain tasks', 'All of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 50
  },
  {
    prompt: 'Labels and features are an example of what?',
    options: ['Infovis vs scivis', 'Dendograms', 'Stem-and-leaf plot', 'Independent vs. dependent variables'],
    correctAnswer: 'Independent vs. dependent variables',
    cashPrize: 100
  },
  {
    prompt: 'How many 10TB hard drives are needed to store 1 Exabyte?',
    options: ['10^4', '10^18', '10^5', '10^6'],
    correctAnswer: '10^5',
    cashPrize: 500
  },
  {
    prompt: 'What is NOT true about this code? p <- ggplot(iris, aes(Sepal.Length, Sepal.Width)) + geom_point() + facet_grid(rows = NULL, vars (Species))',
    options: ['It is setting data and mappings defaults', 'It produces a scatterplot', 'Plots are facetted', 'No themes are applied'],
    correctAnswer: 'Plots are facetted',
    cashPrize: 1000
  },
  /* Category 2 Questions */
  {
    prompt: 'What is the type of this data? -20°C, 70°C, 80°C, 90°C, 100°C, 110°C',
    options: ['Numerical, interval', 'Categorical, nominal', 'Numerical, ratio', 'Categorical, ordinal'],
    correctAnswer: 'Numerical, interval',
    cashPrize: 10
  },
  {
    prompt: 'What is printed in the console? function f2(a1, a2) {var v=5; function f1(a) {return a1+a2-v+1;} return f1;} var f = f2(1, 2); v = f(3); console.log(v);',
    options: ['1', 'undefined', '3', '0'],
    correctAnswer: '1',
    cashPrize: 50
  },
  {
    prompt: 'What visualization wheel dimension "measures the distance from referent to representation"?',
    options: ['Unidimensionality-Multidimensionality', 'Decoration-Functionality', 'Familiarity-Originality', 'Figuration-Abstraction'],
    correctAnswer: 'Figuration-Abstraction',
    cashPrize: 100
  },
  {
    prompt: 'What is not true about D3?',
    options: ['Loads data in the browser and binds it to document elements', 'Transitions elements between states in response to user input', 'Transforms those elements by interpreting each element\'s bound datum and setting its visual properties', 'Can work with various datasets (object, array, etc.)'],
    correctAnswer: 'Can work with various datasets (object, array, etc.)',
    cashPrize: 500
  },
  {
    prompt: 'When loaded in the browser what will appear on the page? <svg width="100" height="100" style="border: 1px solid lightblue;"><circle cx="50" r="20" fill="red">1</circle></svg>',
    options: ['Half black circle at (x=50, y=0) with 1 written in red inside', 'Half red circle at (x=50, y=0) with 1 written in black inside', 'Half red circle at (x=50, y=0)', 'Half black circle at (x=100, y=0)'],
    correctAnswer: 'Half red circle at (x=50, y=0)',
    cashPrize: 1000
  },
  /* Category 3 Questions */
  {
    prompt: 'Tufte is known for which of the following concepts?',
    options: ['In a minimalistic visualization most graphical elements are data', 'Elegance in visuals is attained when the complexity of the data matches the simplicity of the design', 'Chartjunk is ink used for non-data or redundant data', 'All of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 10
  },
  {
    prompt: 'Cairo is known for which of the following concepts?',
    options: ['Use humor to instill affection in readers for numbers and charts', 'Maximize the data-ink ratio', '(1) Seek depth, (2) Clarify, and (3) Add Boom effect to "find the soft spot" in infographics', 'None of the above'],
    correctAnswer: '(1) Seek depth, (2) Clarify, and (3) Add Boom effect to "find the soft spot" in infographics',
    cashPrize: 50
  },
  {
    prompt: 'Which statements about visual information processing IS NOT correct?',
    options: ['Top-down attentional processes reinforce relevant information', 'In bottom-up processing features are integrated into patterns and patterns are integrated into objects', 'In top-down processing, our perceptual system first uses sensory input to detect features', 'Bottom-up information drives pattern building'],
    correctAnswer: 'In top-down processing, our perceptual system first uses sensory input to detect features',
    cashPrize: 100
  },
  {
    prompt: 'For which choice of variables all the circles are fully contained inside the <svg>? var data=[0, 50, 100, 200]; var svg=d3.select(#chart).attr('width', 200).attr('height', 200); var scale=d3.scaleLinear().domain([d3.min(data), d3.max(data)]).range(rx, ry); svg.selectAll('circles').data(data).enter().append('circle').attr('r', 10).attr('cx', d=>scale(d)).attr('cy', 20);',
    options: ['var rx=0, ry=200;', 'var rx=10, ry=190', 'var rx=200, ry=0', 'var rx=190, ry=10;'],
    correctAnswer: 'var rx=10, ry=190',
    cashPrize: 500
  },
  {
    prompt: 'How will the axis appear on the page? var scale=d3.scaleLinear().domain(10, 20001).range(10, 2001); var svg=d3.select('body').append('svg').attr('width', 900).attr('height', 900); var axis=d3.axisLeft().scale(scale); svg.append('g').attr('transform', 'translate (850, 50)').call(axis)',
    options: ['Left of the <svg> with tick marks on the right', 'Right of the <svg> with tick marks on the right', 'Right of the <svg> with tick marks on the left', 'Left of the <svg> with tick marks on the left'],
    correctAnswer: 'Right of the <svg> with tick marks on the left',
    cashPrize: 1000
  },
  /* Category 4 Questions */
  {
    prompt: 'What is not true about Dublin Core?',
    options: ['It is based off the ISO-11179 metadata standard', 'It uses 15 elements to describe any electronic resource', 'It\'s the inspiration for other metadata syntax (ex. Schema.org)', 'It is known for its support in marking up research papers in the humanities'],
    correctAnswer: 'It is known for its support in marking up research papers in the humanities',
    cashPrize: 10
  },
  {
    prompt: 'UNIX was added relatively later into what popular propietary operating system?',
    options: ['Windows 10', 'Linux Mint', 'Mac OS X', 'Ubuntu'],
    correctAnswer: 'Mac OS X',
    cashPrize: 50
  },
  {
    prompt: 'The command "man x" would?',
    options: ['Bring up the task manager for x', 'Modularize x', 'Attempt to bring up the manual page for x', 'Make x mandatory on startup'],
    correctAnswer: 'Attempt to bring up the manual page for x',
    cashPrize: 100
  },
  {
    prompt: 'Someone shady on the internet tells you to enter a "rm -rf" command into your terminal on your root directory. Doing this would:',
    options: ['Remake your filedomains', 'Rename your file register', 'Recursively rename all your files with the tag rm', 'Irreparably damage your file system'],
    correctAnswer: 'Irreparably damage your file system',
    cashPrize: 500
  },
  {
    prompt: 'The GREP command allows a user to:',
    options: ['Quickly search files for specific items of text', 'Grab-Read-Evaluate-Loop', 'Gauge RAM event parameters', 'Group related events in the processor'],
    correctAnswer: 'Quickly search files for specific items of text',
    cashPrize: 1000
  },
  /* Category 5 Questions */
  {
    prompt: 'Use of "Alert" popup windows is often considered bad practice as browsers and users are hostile to pop-ups. What are the other two native Javascript popup functions?',
    options: ['Warning, Confirm', 'Confirm, Refresh', 'Prompt, Confirm', 'Prompt, Notice'],
    correctAnswer: 'Prompt, Confirm',
    cashPrize: 10
  },
  {
    prompt: 'The man page for Git describes it as:',
    options: ['That stupid content tracker', 'A Content Version Tracker', 'General-Index-Tracker', 'A Revision Editor'],
    correctAnswer: 'That stupid content tracker',
    cashPrize: 50
  },
  {
    prompt: 'What version of what coding language introduced the audio function contained in this page?',
    options: ['ECMAScript', 'MP3ML', 'HTML5', 'WavML'],
    correctAnswer: 'HTML5',
    cashPrize: 100
  },
  {
    prompt: 'Which of these frameworks include support for TypeScript?',
    options: ['AngularJS', 'Angular', 'JQuery', 'Whitespace'],
    correctAnswer: 'Angular',
    cashPrize: 500
  },
  {
    prompt: 'What is an early computer language famous for being designed by Government and Business without much input from computer scientists?',
    options: ['MS Office', 'Telnet', 'COBOL', 'C--'],
    correctAnswer: 'COBOL',
    cashPrize: 1000
  }
];

export default questions;