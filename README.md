# Count Me Up
HTTP REST-ful API build with ***Node.js***

### Table of Contents
 - [Getting started](#getting-started)
 - [Using the API](#using-the-api)
 - [Assigment](#assigment)


## Getting started
*To run the app on your machine follow these steps:*

Before following the steps bellow, make sure you have Node installed on your machine as well MongoDB. Open a terminal, navigate to project's repo and run command: `mongod`.

After that open a new terminal window with the project repo and run the following commands:

```
npm i  // installs all dependencies
node db/seeds.js  // populate database with data
node index.js  // starts the server
```

## Using the API
The base url for this API is `localhost:3000/api` and below is the list of created enpoints:

| enpoint          | method | output / input        |
|------------------|--------|-----------------------|
| /users           | GET    | see `GET /users  `    |
| /users           | PUT    | see `PUT /users `     |
| /candidates      | GET    | see `GET /candidates `|


### GET `/users`
After sending `GET` request to `http://localhost:3000/api/users`, you will receive an array of user objects containing their username and array of previous votes. If they haven't voted yet, the array is empty.

``` javascript
[{
		"_id": "59463eb71efc8b5a809e3015",
		"username": "A",
		"__v": 0,
		"votes": []
},{
		"_id": "59463eb71efc8b5a809e3016",
		"username": "B",
		"__v": 0,
		"votes": ["A", "A"]
},...]
```

### PUT `/users`
This enpoint registers a vote and updates both user and candidate that user voted for. The input is an object with user's `username` and `votes` with is the candidate's name.

| property | type   | info             |
|----------|--------|------------------|
| username | String | username 		   |  
| votes    | String | candidate's name |   

Example:

``` javascript
// `PUT` request to `localhost:3000/api/users`
{
	"username" : "A",
	"votes": "B"
}

```
### GET `/candidates`
The results of the voting - outputs the array of candidates in descending order based on votes received. The example of output:

``` javascript
[{
	"candidate": "A",
	"votes": 4
},{
	"candidate": "B",
	"votes": 2
},{
	"candidate": "C",
	"votes": 1
},{
	"candidate": "D",
	"votes": 0
}]
```

## Assigment
You are tasked with building a vote counting and results generating system to run as a web service with a HTTP REST-ful api. There is no requirement to write a front end.

### Assumptions:

- All voters are registered.
- A voter cannot vote more than 3 times.
- There are four candidates.
- There is one poll.

### What is expected
You have total freedom of implementation but a few things should appear in the final assignment:

- Your solution should run on a single machine.
- The specific wording of the scenarios steps can be changed to suit your needs, but the overall aim of each should remain

### Feature: counting votes
As a television presenter I want to see the counts for candidates within a given time frame so that I can announce the winner of the competition.

**Scenario: Count Me Up accepts a vote**

Given I am count me up

When I receive a vote for candidate A from voter A

And voter A has not voted before

Then I register that vote and return a 201 response


**Scenario: Count Me Up only accepts 3 votes per user**

Given I am count me up

And I have received 3 votes for candidate A from voter B

When I receive a vote for candidate A from voter b

Then I return a 403 response

And I do not register that vote

**Scenario: Count Me Up only accepts 3 votes per user regardless of candidate**

Given I am count me up

And I have received 2 votes for candidate A from voter B

And I have received 1 vote for candidate D from voter B

When I receive a vote for candidate D from voter B

Then I return a 403 response

And I do not register that vote

**Scenario: Count Me Up returns the voting results**

Given I am count me up

And I have received 20,000,000 votes for 4 candidates

And the votes are split:

| candidate | votes     |
|-----------|-----------|
| A         | 8,000,000 |
| B         | 6,000,000 |
| C         | 4,000,000 |

When I receive a request for the overall result

Then I return the correct result

And the response time is under 1 second
