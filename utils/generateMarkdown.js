// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  let badgeUrl = '';

  if (license.toLowercase() === 'mit') {
    badgeUrl = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license.toLowercase() === 'apache') {
    badgeUrl = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license.toLowerCase() === 'gpl') {
    badgeUrl = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license.toLowerCase() === 'bsd') {
    badgeUrl = '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  }

  return badgeUrl;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  let licenseLink = '';

  if (license.toLowerCase() === 'mit') {
    licenseLink = 'https://opensource.org/licenses/MIT';
  } else if (license.toLowerCase() === 'apache') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  } else if (license.toLowerCase() === 'gpl') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license.toLowerCase() === 'bsd') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
  }

  return licenseLink;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  let licenseSection = '';

  if (license.toLowerCase() === 'mit') {
    licenseSection = `
## License

This project is licensed under the terms of the [MIT license](${renderLicenseLink(license)}).
    `;
  } else if (license.toLowerCase() === 'apache') {
    licenseSection = `
## License

This project is licensed under the terms of the [Apache License, Version 2.0](${renderLicenseLink(license)}).
    `;
  } else if (license.toLowerCase() === 'gpl') {
    licenseSection = `
## License

This project is licensed under the terms of the [GNU General Public License v3.0](${renderLicenseLink(license)}).
    `;
  } else if (license.toLowerCase() === 'bsd') {
    licenseSection = `
## License

This project is licensed under the terms of the [BSD 3-Clause License](${renderLicenseLink(license)}).
    `;
  }

  return licenseSection;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.projectDescription}

  ## Table of Contents

  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[License](#license)
  -[Questions](#questions)

  ## Installation

  ${data.installationInstructions}

  ## Usage

  ${data.usageInformation}

  ## Contributing

  ${data.contributionGuidelines}

  ## Tests

  ${data.testInstructions}
  ${renderLicenseSection(data.license)}

  ## Questions

  If you have any questions, concerns, or comments please reachout to me on [Github](https://github.com/${data.githubUsername} or at ${data.email}).

`;
}

module.exports = generateMarkdown;
