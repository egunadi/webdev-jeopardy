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
    prompt: 'Which of the following are true about web duplicates?',
    options: ['Exact matches can be verified with hashes (SHA-1, MD5, etc.)', 'Different URLs can point to the same exact web page', 'Duplicate detection is used to optimize web crawling and data analysis (clustering, spam detection, etc.)', 'All of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 10
  },
  {
    prompt: 'Which of the following is not true about distance measures',
    options: ['Distances are >= 0 (0 being an exact match) and bidirectionally symmetric', 'They\'re used to sort/cluster and compare hashed documents', 'Edit distance measures the changes needed to get from one set of features to another', 'Euclidean distance treats documents as vectors and measures the angle between them'],
    correctAnswer: 'Euclidean distance treats documents as vectors and measures the angle between them',
    cashPrize: 50
  },
  {
    prompt: 'Jaccard similarity…',
    options: ['Is related to computing shingles', 'Measures resemblance & containment (how much of one document is in another)', 'All of the above', 'None of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 100
  },
  {
    prompt: 'What are some use cases for automated file detection?',
    options: ['Security (antivirus, firewalls, etc.)', 'Data processing (ex. for forensics, scientific research, or web crawling)', 'Data distribution (repositories)', 'All of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 500
  },
  {
    prompt: 'What is not an example of a content-based (non basic) file detection method?',
    options: ['Byte Frequency Analysis/Distribution (BFD)', '/etc/magic and container files', 'File Header Trailer (FHT)', 'Byte Frequency (Cross) Correlation (BFC)'],
    correctAnswer: '/etc/magic and container files',
    cashPrize: 1000
  },
  /* Category 3 Questions */
  {
    prompt: 'What is not a reason why we would use a content-based (non basic) file detection method?',
    options: ['Per McDaniel & Heydari (2003), content-based methods are more accurate, low-maintenance (flexible), and easier to automate', 'Content-independent methods are easily spoofed and harder to maintain', 'All of the above', 'None of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 10
  },
  {
    prompt: 'Tag/annotation ratios (or histogram clustering) are part of which step of the text extraction process?',
    options: ['(1) Identification of text (via metadata, file headers, etc.)', '(2) Structural and contextual analysis (so we know what to do with it)', '(3) Featurize/summarize text (to identify/highlight important parts)', 'None of the above'],
    correctAnswer: '(2) Structural and contextual analysis (so we know what to do with it)',
    cashPrize: 50
  },
  {
    prompt: 'BoilerPipe algorithms (or boilerplate detection) are part of which step of the text extraction process?',
    options: ['(1) Identification of text (via metadata, file headers, etc.)', '(2) Structural and contextual analysis (so we know what to do with it)', '(3) Featurize/summarize text (to identify/highlight important parts)', 'None of the above'],
    correctAnswer: '(3) Featurize/summarize text (to identify/highlight important parts)',
    cashPrize: 100
  },
  {
    prompt: 'What is not one of the main uses metadata?',
    options: ['Using structural metadata to see how the data "fits together"', 'Using administrative metadata to manage permissions/rights', 'Using structural metadata to determine how to preserve the data', 'Using descriptive metadata to identify the data'],
    correctAnswer: 'Using structural metadata to determine how to preserve the data',
    cashPrize: 500
  },
  {
    prompt: 'Who describes metadata as information used to describe/explain, locate/retrieve, or use/manage information?',
    options: ['National Information Standards Organization (NISO)', 'Wikipedia', 'All of the above', 'None of the above'],
    correctAnswer: 'National Information Standards Organization (NISO)',
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