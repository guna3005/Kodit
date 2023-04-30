export const blogsData = [
  {
    id: 1,
    title: "Getting Started with React Markdown",
    content: `
        # Getting Started with React Markdown
      
        Markdown is a lightweight markup language that is used to write formatted text. React Markdown is a library that allows you to render Markdown content as React components.
      
        ## Installation
      
        To use React Markdown in your project, you can install it via npm:
      
        \`\`\`bash
        npm install react-markdown
        \`\`\`
      
        ## Basic Usage
      
        You can use React Markdown by simply passing your Markdown content as a string to the \`source\` prop of the \`ReactMarkdown\` component:
      
        \`\`\`javascript
        import ReactMarkdown from 'react-markdown';
      
        const MyComponent = () => {
          const markdownContent = '# Hello, world!';
      
          return <ReactMarkdown source={markdownContent} />;
        };
        \`\`\`
      
        This will render the Markdown content as HTML:
      
        <h1>Hello, world!</h1>
      
        ## Customization
      
        React Markdown allows you to customize the rendering of your Markdown content by providing renderers for each type of Markdown element. For example, you can customize the rendering of headings by providing a \`heading\` renderer:
      
        \`\`\`javascript
        import ReactMarkdown from 'react-markdown';
      
        const MyHeading = ({ level, children }) => {
          return <h{level}>{children}</h{level}>;
        };
      
        const MyComponent = () => {
          const markdownContent = '# Hello, world!';
      
          return <ReactMarkdown source={markdownContent} renderers={{ heading: MyHeading }} />;
        };
        \`\`\`
      
        This will render the heading using your custom renderer:
      
        <MyHeading>Hello, world!</MyHeading>
      
        ## Conclusion
      
        React Markdown is a powerful library that allows you to easily render Markdown content as React components. With its customizable renderers, you can fully control the output of your Markdown content.
        `,
    upvotes: 100,
  },
  {
    id: 2,
    title: "10 Best Practices for Clean Code",
    content:
      "Learn how to write clean and maintainable code with these best practices.",
    upvotes: 42,
  },
  {
    id: 3,
    title: "Building RESTful APIs with Node.js and Express",
    content:
      "Learn how to build a RESTful API with Node.js and the Express framework.",
    upvotes: 16,
  },
  {
    id: 4,
    title: "React vs Angular: Which One to Choose?",
    content:
      "Find out the differences between React and Angular and choose the right framework for your project.",
    upvotes: 35,
  },
  {
    id: 5,
    title: "Getting Started with Python: A Beginner's Guide",
    content:
      "Learn the basics of Python programming with this beginner's guide.",
    upvotes: 21,
  },
  {
    id: 6,
    title: "Introduction to React Markdown",
    content: `
    # Introduction to React Markdown
  
    If you're looking for a way to easily create formatted text and add some code snippets to your React app, React Markdown is a great solution.
  
    ## Installation
  
    To use React Markdown in your React app, you can install it via npm:
  
    \`\`\`bash
    npm install react-markdown
    \`\`\`
  
    ## Usage
  
    To use React Markdown, you simply need to import the \`ReactMarkdown\` component and pass in the Markdown content as a prop:
  
    \`\`\`jsx
    import ReactMarkdown from 'react-markdown';
  
    const markdown = '# This is a heading\\n\\nAnd this is some **bold text**.';
  
    const App = () => {
      return <ReactMarkdown>{markdown}</ReactMarkdown>;
    }
    \`\`\`
  
    ## Styling
  
    React Markdown allows you to easily style the rendered content with CSS. You can pass in a \`className\` prop to the \`ReactMarkdown\` component and style it like any other element:
  
    \`\`\`jsx
    const App = () => {
      return (
        <ReactMarkdown className="markdown">
          {markdown}
        </ReactMarkdown>
      );
    }
    \`\`\`
  
    \`\`\`css
    .markdown {
      color: #333;
      font-size: 16px;
      line-height: 1.5;
      background-color: #f7f7f7;
      padding: 16px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    \`\`\`
  
    ## Conclusion
  
    React Markdown is a powerful and easy-to-use tool for creating formatted text and code snippets in your React app. Give it a try and see how it can simplify your workflow!
    `,
    upvotes: 45,
  },
  {
    id: 7,
    title: "10 Must-Have JavaScript Libraries",
    content:
      "Discover 10 JavaScript libraries that every web developer should know about.",
    upvotes: 27,
  },
  {
    id: 8,
    title: "Using CSS Grid to Create Responsive Layouts",
    content:
      "Learn how to use CSS Grid to create responsive layouts for your web pages.",
    upvotes: 19,
  },
  {
    id: 9,
    title: "HTML5: New Features and Best Practices",
    content:
      "Learn about the new features of HTML5 and the best practices for writing HTML code.",
    upvotes: 23,
  },
  {
    id: 10,
    title: "Building a Real-Time Chat App with React and Firebase",
    content: "Learn how to build a real-time chat app with React and Firebase.",
    upvotes: 31,
  },
  {
    id: 11,
    title: "How to Deploy a React App on Heroku",
    content: "Learn how to deploy a React app on the Heroku cloud platform.",
    upvotes: 14,
  },
  {
    id: 12,
    title: "Secure Authentication with JSON Web Tokens (JWT)",
    content:
      "Learn how to implement secure authentication using JSON Web Tokens (JWT).",
    upvotes: 17,
  },
  {
    id: 13,
    title: "10 Tips for Debugging JavaScript Code",
    content:
      "Discover 10 tips for debugging JavaScript code and become a better developer.",
    upvotes: 26,
  },
  {
    id: 14,
    title: "Building a Responsive Navigation Menu with CSS Flexbox",
    content:
      "Learn how to use CSS Flexbox to build a responsive navigation menu for your website.",
    upvotes: 18,
  },
  {
    id: 15,
    title: "Introduction to GraphQL: A Comprehensive Guide",
    content: "Learn everything about GraphQL in this comprehensive guide.",
    upvotes: 13,
  },
  {
    id: 16,
    title: "10 Best JavaScript Tools for Front-End Development",
    content: "Discover the 10",
    upvotes: 20,
  },
];
