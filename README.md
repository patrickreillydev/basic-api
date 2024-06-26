# We Are Digital Api Question

# Task

Create an application that enables users to search for Australian localities by postcode.

# Tech Stack

I decided to go with a `Typescript Node` backend as that is what I’m more familiar with setting up `Nest.js` applications and following a clean architecture I approached my api with this structure In mind (separating business logic from my controller logic).

I also included a very simple HTML form that runs a simple `onSubmit` fetch request to return the api response and display that on the page.

<b>Backend</b> <br>
Typescript Node

<b>Frontend</b> <br>
Basic HTML Page

# Getting Started

Ensure that you have `node` and `NPM` installed on your machine.

Once installed run `npm i` to install node modules

After modules successfully installed run the following command to start the application.

`npm start`

# View Application

Head over to http:localhost:4006 to view a very simple HTML form.
Enter in your desired postcodes and have a JSON response appear at the bottom of the page.

# API Example

`GET`
`http:localhost:4006/api/search/by-postcode?q=2000`

Will query all postcodes from _australian_postcodes.json_ and return the following JSON response example.

```
{
  "data": [
    {
      "state": "NSW",
      "postcode": "2017",
      "locality": "WATERLOO"
    },
    {
      "state": "NSW",
      "postcode": "2017",
      "locality": "WATERLOO DC"
    },
    {
      "state": "NSW",
      "postcode": "2017",
      "locality": "ZETLAND"
    }
  ]
}
```
