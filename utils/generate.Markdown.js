function generateMarkdown(data) {
    return `
  # ${data.title}
  

- [Description](#description)
  
- [Heading](#heading-1)
   
- [Heading](#heading-2)
 
   



Table Of Contents:

-Description
-Installation
-Usage
-License
-Contribting
-Tests
-Questions

## Description: 

${data.description}

Installation: 

${data.installation}

Usage: 

${data.usage}

License: 

${data.license}

Contributing:

${data.contributing}


  `;
  }
  
  exports.generateMarkdown = generateMarkdown;
  //module.exports = generateMarkdown;

  
  