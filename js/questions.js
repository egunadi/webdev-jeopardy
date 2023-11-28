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
    prompt: 'What is printed in the console? function f2(a1, a2) {var v=5; function f1(a) {return a1+a2-v+a;} return f1;} var f = f2(1, 2); v = f(3); console.log(v);',
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
    options: ['Half black circle at (x=50, y=0) with 1 written in red inside', 'Half red circle at (x=50, y=0) with 1 written in black inside', 'Half red circle at (x=50, y=0)', 'Half black circle at (x=50, y=0)'],
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
    options: ['Use humor to instill affection in readers for numbers and charts', 'Maximize the data-ink ratio', '(1) Seek depth, (2) Clarify, and (3) Add Boom effect to find the soft spot in infographics', 'None of the above'],
    correctAnswer: '(1) Seek depth, (2) Clarify, and (3) Add Boom effect to find the soft spot in infographics',
    cashPrize: 50
  },
  {
    prompt: 'Which statements about visual information processing IS NOT correct?',
    options: ['Top-down attentional processes reinforce relevant information', 'In bottom-up processing features are integrated into patterns and patterns are integrated into objects', 'In top-down processing, our perceptual system first uses sensory input to detect features', 'Bottom-up information drives pattern building'],
    correctAnswer: 'In top-down processing, our perceptual system first uses sensory input to detect features',
    cashPrize: 100
  },
  {
    prompt: 'For which choice of variables all the circles are fully contained inside the <svg>? var data=[0, 50, 100, 200]; var svg=d3.select(#chart).attr(\'width\', 200).attr(\'height\', 200); var scale=d3.scaleLinear().domain([d3.min(data), d3.max(data)]).range(rx, ry); svg.selectAll(\'circles\').data(data).enter().append(\'circle\').attr(\'r\', 10).attr(\'cx\', d=>scale(d)).attr(\'cy\', 20);',
    options: ['var rx=0, ry=200;', 'var rx=10, ry=190', 'var rx=200, ry=0', 'var rx=190, ry=10;'],
    correctAnswer: 'var rx=10, ry=190',
    cashPrize: 500
  },
  {
    prompt: 'How will the axis appear on the page? var scale=d3.scaleLinear().domain(10, 20001).range(10, 2001); var svg=d3.select(\'body\').append(\'svg\').attr(\'width\', 900).attr(\'height\', 900); var axis=d3.axisLeft().scale(scale); svg.append(\'g\').attr(\'transform\', \'translate (850, 50)\').call(axis)',
    options: ['Left of the svg with tick marks on the right', 'Right of the svg with tick marks on the right', 'Right of the svg with tick marks on the left', 'Left of the svg with tick marks on the left'],
    correctAnswer: 'Right of the svg with tick marks on the left',
    cashPrize: 1000
  },
  /* Category 4 Questions */
  {
    prompt: 'Which statement(s) about pre-attentive processing IS NOT correct?',
    options: ['Conjunction search is typically carried out pre-attentively', 'Involves saccades', 'Exact counting is a pre-attentive task', 'All of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 10
  },
  {
    prompt: 'Which statement about d3 event handling IS NOT correct?',
    options: ['Defaults to using the capture phase', 'Implements the DOM Level 2 event model', 'Can be used on the enter, update, merge and exit selections', 'Can be used on d3 selections'],
    correctAnswer: 'Defaults to using the capture phase',
    cashPrize: 50
  },
  {
    prompt: 'What is the order of the basic D3 general update pattern?',
    options: ['Data, update, enter, enter + update, exit', 'Data, enter, enter + update, exit, update', 'Data, enter + update, enter, update, exit', 'Data, enter, enter + update, update, exit'],
    correctAnswer: 'Data, update, enter, enter + update, exit',
    cashPrize: 100
  },
  {
    prompt: 'What statement defines a color model?',
    options: ['The science of color', 'Discrimination of light based on its wavelength components', 'Practical guidance to color mixing and the visual effects of a color combinations', 'Abstract mathematical model describing the way colors can be represented as tuples'],
    correctAnswer: 'Abstract mathematical model describing the way colors can be represented as tuples',
    cashPrize: 500
  },
  {
    prompt: 'Color on an LCD screen is from:',
    options: ['Partitive mixing', 'Addition of illumination', 'Binocular mixing', 'Time mixing'],
    correctAnswer: 'Partitive mixing',
    cashPrize: 1000
  },
  /* Category 5 Questions */
  {
    prompt: 'Which option contains a cue that IS NOT a static (classic pictoral) depth cue?',
    options: ['Myosis, texture gradient', 'Linear perspective convergence, relative/familiar size', 'Occlusions, shadows, shading', 'Defocus blur, atmospheric perspective'],
    correctAnswer: 'Myosis, texture gradient',
    cashPrize: 10
  },
  {
    prompt: 'Which statement applies to an equal-area projection?',
    options: ['Directions from a central point are preserved', 'The scale along one or more lines, or from one or two points to all other points is preserved', 'The shape of small regions is preserved', 'Areas are proportional to areas on Earth'],
    correctAnswer: 'Areas are proportional to areas on Earth',
    cashPrize: 50
  },
  {
    prompt: 'Which choice about geodetic datum IS NOT correct?',
    options: ['A geocentric datum is best for global applications', 'A horizontal datum can be defined as Geodetic, Tidal, or Gravimetric', 'A vertical datum is used to measure elevation', 'A local datum is best for local applications'],
    correctAnswer: 'A horizontal datum can be defined as Geodetic, Tidal, or Gravimetric',
    cashPrize: 100
  },
  {
    prompt: 'Which option contains the principle/law illustrated by [ ] and { }?',
    options: ['Gestalt principles: Emergence, Reification, Multi-stability, Invariance', 'Gestalt laws of grouping: Proximity, Similarity, Closure, Continuity, Common fate, Connection, Common region', 'Gestalt laws: Pithiness, Figure and ground, Parallelism, Symmetry, Focal points, Past experience', 'All of the above'],
    correctAnswer: 'Gestalt laws: Pithiness, Figure and ground, Parallelism, Symmetry, Focal points, Past experience',
    cashPrize: 500
  },
  {
    prompt: 'In Bertin\'s Semiology of Graphics what choice IS NOT a channel?',
    options: ['Points', 'Position', 'Texture', 'Shape'],
    correctAnswer: 'Points',
    cashPrize: 1000
  }
];

export default questions;