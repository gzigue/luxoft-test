# Cypress Test For Luxoft

This repository contains an automated test for Luxoft. This tests was written in JavaScript using Cypress, a popular end-to-end testing framework for web applications.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)


## Prerequisites

Before running the tests, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/cypress-test-project.git
   ```

2. Initiate npm in the project:

    ```bash
    npm init -y
    ```

3. Install Cypress using the command line:

    This test uses version 12.17.4 of Cypress. You should install the same version in order to avoid any potential errors.

    ```bash
    npm install cypress@12.17.4
    ```

## Usage

1. Open Cypress using the command line: 

    ```bash
    npx cypress open
    ```

2. Navigate the interface and run the test:

    On the window that opens, Click E2E Testing.

    Then select the Chrome Browser, and click "Start E2E Testing in Chrome"

    A new browser window will open, with the specs displayed. Just click "test.cy.js" and the test will run.

    You can see the steps and assertions on the left of the screen.