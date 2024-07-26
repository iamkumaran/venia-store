// import fs from 'fs';

export default function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'Create a React Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'enter component name (should be same as `block` name)',
        default: 'shipping-form', // some default name - to avoid user to add empty names
      },
      {
        type: 'list',
        name: 'scriptType',
        message: 'Select a scripting language',
        choices: ['TypeScript (Recommended)', 'JavaScript'],
      },
    ],
    actions: data => {
      const ext = data.scriptType.includes('TypeScript') ? 'tsx' : 'jsx';
      const action = [
        {
          type: 'add',
          path: `react-app/app/{{name}}/index.${ext}`,
          templateFile: `plop-templates/${ext}-template/index.${ext}.template`,
        },
        {
          type: 'add',
          path: 'react-app/app/{{name}}/index.css',
          templateFile: `plop-templates/${ext}-template/index.css.template`,
        },
        {
          type: 'add',
          path: `react-app/app/{{name}}/components/App.${ext}`,
          templateFile: `plop-templates/${ext}-template/components/App.${ext}.template`,
        },
        // code to update existing file.
        // function customAction(answers) {
        //   const { name } = answers;
        //   const jsonFile = `./components.json`;
        //   // console.log('aaaaaaa', answers);
        //   // const fs = require('fs');

        //   // Read the JSON file
        //   const data = fs.readFileSync(jsonFile);

        //   // Parse the JSON
        //   const jsonData = JSON.parse(data);

        //   // Modify the object
        //   jsonData[name] = `./react-app/app/${name}/index.jsx`;

        //   // Stringify the object
        //   const updatedData = JSON.stringify(jsonData, null, 2); // 2 spaces for indentation

        //   // Write back to the file
        //   fs.writeFileSync(jsonFile, updatedData);
        //   return 'Component Added';
        // },
      ];
      return action;
    },
  });
}
