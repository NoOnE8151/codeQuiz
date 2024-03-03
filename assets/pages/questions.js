  //HTML Questions
const htmlQue = [
  {
    que: "HTML stands for?",
    opt1: "Hyperlink Text Markup Language",
    opt2: "High-level Text Markup language",
    opt3: "Hypertext Markup Language",
    opt4: "Hypertext Transfer Markup Language",
    correctOpt: function() {
      return this.opt3;
    }
  },
  {
    que: "Which is the correct syntax to write HTML comments?",
    opt1: "//HTML comment",
    opt2: "<--HTML comment-->",
    opt3: "<!--HTML comment-->",
    opt4: "/*HTML comment*/",
    correctOpt: function() {
      return this.opt3;
    }
  },
  {
    que: "What is main purpose to use HTML semantic tags?",
    opt1: "To get rid of so many divs",
    opt2: "To improve accessibility and SEO",
    opt3: "To enhance user experience",
    opt4: "To define the structure and layout",
    correctOpt: function() {
      return this.opt2;
    }
  },
  {
    que: "Which tag is used to create a list?",
    opt1: "<ul></ul>",
    opt2: "<ol></ol>",
    opt3: "Both of them",
    opt4: "None of them",
    correctOpt: function() {
      return this.opt3;
    }
  },
  {
    que: "Which of these is a block element?",
    opt1: "<img>",
    opt2: "<span></span>",
    opt3: "<a></a>",
    opt4: "<p></p>",
    correctOpt: function() {
      return this.opt4;
    }
  },
  {
    que: "Which of these attributes stands for source?",
    opt1: "src",
    opt2: "source",
    opt3: "alt",
    opt4: "srce",
    correctOpt: function() {
      return this.opt1;
    }
  },
  {
    que: "What is parent element?",
    opt1: "An element which contains another element inside it",
    opt2: "An element which contains more than 5 elements",
    opt3: "An element without id",
    opt4: "none of them",
    correctOpt: function() {
      return this.opt1;
    }
  },
  {
    que: "Which tag is used to create a table footer?",
    opt1: "<tf><tf",
    opt2: "<tfoot></tfoot>",
    opt3: "<tableFoot></tableFoot>",
    opt4: "<tfooter></tfooter>",
    correctOpt: function() {
      return this.opt3;
    }
  },
  {
    que: "How many types of input does HTML has?",
    opt1: "12",
    opt2: "15",
    opt3: "17",
    opt4: "22",
    correctOpt: function() {
      return this.opt4;
    }
  },
  {
    que: "Which tag is used to define a list item in HTML?",
    opt1: "<listItem></listItem>",
    opt2: "<il></il>",
    opt3: "<li></li>",
    opt4: "<ul></ul>",
    correctOpt: function() {
      return this.opt3;
    }
  },
  {
    que: "Which input type should you use to create a telephone input?",
    opt1: `type="telephone"`,
    opt2: `type="tel"`,
    opt3: `type="number"`,
    opt4: `type="inteager"`,
    correctOpt: function() {
      return this.opt2;
    }
  },{
    que: `What should be the value of "for" attribute in <label> tag?`,
    opt1: "Name of input",
    opt2: "Class of input",
    opt3: "Placeholder of input",
    opt4: "Id of input",
    correctOpt: function() {
      return this.opt4;
    }
  },{
    que: "Is <img> tag inline or block element?",
    opt1: "Inline",
    opt2: "Block",
    opt3: "Inline-block",
    opt4: "None of them",
    correctOpt: function() {
      return this.opt1;
    }
  },{
    que: "What is main purpose of using checkbox input?",
    opt1: "To let users select multiple options",
    opt2: "It's eazy to use",
    opt3: "To create quiz in your site",
    opt4: "To create objective options",
    correctOpt: function() {
      return this.opt1;
    }
  }
  ]
  
/* CSS Questions */
  const cssQue = [
    {
      que: "What is full form of CSS?",
      opt1: "Cooperative State Service",
      opt2: "Computer Software System",
      opt3: "Cascade Style Sheets",
      opt4: "Cascade Sheet Styling",
      correctOpt: function() {
      return this.opt3;
    }
    },{
      que: "How many ways of writing CSS do we have?",
      opt1: "1",
      opt2: "2",
      opt3: "3",
      opt4: "4",
      correctOpt: function() {
      return this.opt3;
    }
    },{
      que: "How to target an element using it's id in CSS?",
      opt1: `Using "." as prefix`,
      opt2: `Using "#" as prefix`,
      opt3: `Using ">" as prefix`,
      opt4: `Using "id=' '" as prefix`,
      correctOpt: function() {
      return this.opt2;
    }
    },{
      que: "Which is correct way to define colors in CSS?",
      opt1: "Hexcode",
      opt2: "RGB",
      opt3: "RGBA",
      opt4: "All of them",
      correctOpt: function() {
      return this.opt4;
    }
    },{
      que: "Which property adds space outside of element?",
      opt1: "padding",
      opt2: "margin",
      opt3: "outspan",
      opt4: "space-around",
      correctOpt: function() {
      return this.opt2;
    }
    },{
      que: "Which is correct property to add space between lines?",
      opt1: "line-space",
      opt2: "line-through",
      opt3: "line-height",
      opt4: "line-spacing",
      correctOpt: function() {
      return this.opt3;
    }
    },{
      que: "Which CSS has more priority?",
      opt1: "Internal CSS",
      opt2: "External CSSs",
      opt3: "!important",
      opt4: "Inline CSS",
      correctOpt: function() {
      return this.opt4;
    }
    },{
      que: "Which of these is most common size unit in CSS?",
      opt1: "px",
      opt2: "em",
      opt3: "rem",
      opt4: "%",
      correctOpt: function() {
      return this.opt1;
    }
    },{
      que: "1rem is = ?",
      opt1: "Font size of it's parent",
      opt2: "Font size of root element",
      opt3: "16px",
      opt4: "1% of parent width",
      correctOpt: function() {
      return this.opt2;
    }
    },{
      que: 'How to stick an element "on scroll"?',
      opt1: "position: absolute;",
      opt2: "position: sticky",
      opt3: "position: relative",
      opt4: "position: fixed",
      correctOpt: function() {
      return this.opt2;
    }
    },{
      que: "How to target 3rd element?",
      opt1: ".parent > nth-child",
      opt2: ".parent > nth-child(3)",
      opt3: ".parent > last-child",
      opt4: ".parent:nth-child(2)",
      correctOpt: function() {
      return this.opt2;
    }
    },{
      que: "How to delete existence of en element?", 
      opt1: "visibility: invisible;",
      opt2: "display: hide;",
      opt3: "visibility: none;",
      opt4: "display: none;",
      correctOpt: function() {
      return this.opt4;
    }
    },{
      que: "Which property is used to design layout vertically if flex-direction is column?",
      opt1: "justify-content",
      opt2: "align-content",
      opt3: "align-items",
      opt4: "flex-wrap",
      correctOpt: function() {
      return this.opt1;
    }
    }
    ]
    
    const codeQue = [
      {
    que: "Who is codeConquests?",
    opt1: "Gamer",
    opt2: "Coder",
    opt3: "Otaku",
    opt4: "All of them",
    correctOpt: function() {
      return this.opt4;
    }
  }, {
    que: "Which is his favourite programming language?",
    opt1: "Python",
    opt2: "Javascript",
    opt3: "C++",
    opt4: "Java",
    correctOpt: function() {
      return this.opt2;
    }
  },
   {
    que: "In which year he opened his Instagram account?",
    opt1: "2022",
    opt2: "2024",
    opt3: "2021",
    opt4: "2023",
    correctOpt: function() {
      return this.opt4;
    }
  }, 
  {
    que: "What is his discord username?",
    opt1: "codeConquests",
    opt2: "no_one8151",
    opt3: "JsDev",
    opt4: "developer",
    correctOpt: function() {
      return this.opt2;
    }
  }
      ]