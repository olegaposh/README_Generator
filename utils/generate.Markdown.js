function generateMarkdown(data) {
    return `
    # ${data.title}

    Table of Contents:
  
  - [Description](#description)
  
  - [Installation](#installation)
  
  - [Usage](#usage)
  
  - [License](#license)
  
  - [Contributing](#contributing)
  
    
  
  [![License](https://poser.pugx.org/ali-irawan/xtra/license.svg)](https://poser.pugx.org/ali-irawan/xtra/license.svg)
  
    
  
  ## Description:
  
    
  
  ${data.description}
  
     
  
  ## Installation:
  
    
  
  ${data.installation}
  
    
  
  ## Usage:
  
    
  
  ${data.usage}
  
    
  
  ## License:
  
    
  
  ${data.license}
  
    
  
  ## Contributing:
  
    
  
  ${data.contributing}



  ## GithubInfo:
 
  <img src="${data.avatar_url}" />
  
Email : ${data.email}

  `;
  }
  
  exports.generateMarkdown = generateMarkdown;
  //module.exports = generateMarkdown;

  
  