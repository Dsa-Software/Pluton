const flask = new CodeFlask('#code', { 
    language: 'js',  
    lineNumbers: true,
    defaultTheme: false 
});

// How to listen for changes on your editor
flask.onUpdate((code: string) => {
  code = code
});

// How to update your editor with custom content:
const new_content = 'let it = "go"';

flask.updateCode(new_content);