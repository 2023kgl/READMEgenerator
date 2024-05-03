// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license !== "NONE")
  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {  
   return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## GitHub Username
  ${data.username}
  ## Email
  Email me with any questions: ${data.email}
  ## Description
  ${data.description}
  * [Install](#install)
  * [Usage](#usage)
  * [License](#license)
  * [Test](#test)
  * [Contribute](#contribute)
  # Install
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  This application is covered by the ${data.license} license.
  ## Test
  ${data.test}
  ## Contribute
  ${data.contribute}`
}

module.exports = generateMarkdown;
