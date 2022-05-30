<!-- This template was created following The Markdown Guide - https://www.markdownguide.org/ -->

<!-- If you are editing this README.md on VS Code, please highlight and replace the following keywords enclosed in backticks (``) using:
* MacOS: CMD + Shift + L
* Windows: CRTL + Shift + L

GitHub Username: `richardguarnieri`
GitHub Repository: `password-generator`
Your Name: `Richard Guarnieri`
Email: `richard.gm@outlook.com`
LinkedIn Username: `rguarnieri`
Twitter Username: `ric_guarnieri`
Project Title: `Password Generator`
Project Description: `A random password generator!`
-->

<!-- Please also update the following links -->
[logo]: ./img/logo.png
[application-image]: ./img/app-image.png
[application-url]: https://richardguarnieri.github.io/password-generator/

<div id="home"><div> 

<!-- Badges / Shields -->
<!-- These were created using https://shields.io/ - feel free to replace / create yours by modifying links below: -->

<div align="center">
    <a href="https://github.com/richardguarnieri/password-generator/graphs/contributors">
        <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/richardguarnieri/password-generator?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/password-generator/network/members">
        <img alt="GitHub forks" src="https://img.shields.io/github/forks/richardguarnieri/password-generator?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/password-generator/stargazers">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/richardguarnieri/password-generator?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/password-generator/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/richardguarnieri/password-generator?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/password-generator/blob/main/LICENSE">
        <img alt="GitHub license" src="https://img.shields.io/github/license/richardguarnieri/password-generator?label=license&style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/password-generator/commits/main">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/richardguarnieri/password-generator?style=for-the-badge">
    <a>
    <a href="https://www.linkedin.com/in/rguarnieri/">
        <img alt="LinkedIn shield" src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555">
    <a>
</div>
<br>


<!-- Header -->

<div align="center">
    <a href="https://github.com/richardguarnieri/password-generator">
        <img src="./img/logo.png" alt="Logo" width="300" height="auto">
    </a>
    <h1 align="center">Password Generator</h1>
    <div>
        A random password generator!
        <br>
        <a href="https://github.com/richardguarnieri/password-generator">
            <strong>Explore Documentation</strong>
        </a>
        <br>
        <br>
        <a href="https://github.com/richardguarnieri/password-generator">View Demo</a>
        ·
        <a href="https://github.com/richardguarnieri/password-generator/issues">Report Bug / Request Feature</a>
    </div>
</div>
<br>


<!-- Table of Contents -->
## Table of Contents

* [The Project](#the-project)
    * [Technology Stack](#technology-stack)
* [How to Use](#how-to-use)
    * [Prerequisites](#prerequisites)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Miscellaneous](#miscellaneous)
    * [User Story](#user-story)
    * [Acceptance Criteria](#acceptance-criteria)
<br>


<!-- The Project -->
## The Project

[![Application Image][application-image]][application-url]

In this deployed responsive application you will be able to generate a random password between 8 and 128 characters based on multiple criterias.

The application runs in the browser and feature dynamically updated HTML and CSS powered by **native** JavaScript.

<p align="right"> - <a href="#home">Return to Home</a></p>

### Technology Stack

* [HTML](https://html.spec.whatwg.org/)
* [CSS](https://www.w3.org/TR/CSS/#css)
* [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- How to Use -->
## How to Use

In order to generate a random password, the user must click the **"Generate Password"** button. This creates 4 alert boxes based on the following criterias:

**Criteria List:**
1. Password length (between 8 and 128 characters)
1. If the user wants to include uppercase characters
1. If the user wants to include lowercase characters
1. If the user wants to include digits
1. If the user wants to include symbols (special characters)

Depending on the user choices, a random password will be generated. The user must choose at **least one criteria** (alongisde the password length).

_For more examples, please refer to the [Documentation][documentation-url]._

<p align="right"> - <a href="#home">Return to Home</a></p>

### Prerequisites

Only a web brower is required to run the application.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contribuiting -->
## Contributing

Contributions are much welcomed! If you have suggestions to make this application better, please fork the repo and create a pull request. 

You can also open an issue [here][github-issues-url] and tag it with the **"enhancement"** label.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- License -->
## License

This project is licensed under the terms of the MIT license. 

See `LICENSE` for more information.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contact -->
## Contact

Richard Guarnieri: richard.gm@outlook.com · LinkedIn: [rguarnieri][linkedin-url] · Twitter: [@ric_guarnieri][twitter-url]

Application URL: [https://richardguarnieri.github.io/password-generator/][application-url]

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Miscellaneous -->
## Miscellaneous
### User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```
### Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- References, Links and Images -->
<!-- Badges / Shields Styles -->
[github-contributors-shield]: https://img.shields.io/github/contributors/richardguarnieri/password-generator?style=for-the-badge
[github-forks-shield]: https://img.shields.io/github/forks/richardguarnieri/password-generator?style=for-the-badge
[github-stars-shield]: https://img.shields.io/github/stars/richardguarnieri/password-generator?style=for-the-badge
[github-issues-shield]: https://img.shields.io/github/issues/richardguarnieri/password-generator?style=for-the-badge
[github-license-shield]: https://img.shields.io/github/license/richardguarnieri/password-generator?style=for-the-badge
[github-last-commit-shield]: https://img.shields.io/github/last-commit/richardguarnieri/password-generator?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

<!-- Badges / Shields URL -->
[github-contributors-url]: https://github.com/richardguarnieri/password-generator/graphs/contributors
[github-forks-url]: https://github.com/richardguarnieri/password-generator/network/members
[github-stars-url]: https://github.com/richardguarnieri/password-generator/stargazers
[github-issues-url]: https://github.com/richardguarnieri/password-generator/issues
[github-license-url]: https://github.com/richardguarnieri/password-generator/blob/main/LICENSE
[linkedin-url]: https://linkedin.com/in/rguarnieri

<!-- Non Badge / Shield Reference Links -->
[documentation-url]: https://github.com/richardguarnieri/password-generator
[twitter-url]: https://twitter.com/ric_guarnieri