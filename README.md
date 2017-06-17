# Count Me Up

### Table of Contents
 - [Getting started](#getting-started)
 - [Assigment](#assigment)


## Getting started
*To run the app on your machine follow these steps:*

Before following the steps bellow, make sure you have Node installed on your machine as well MongoDB. Open a terminal, navigate to project's repo and run command: `mongod`.

After that open a new terminal window with the project repo and run the following commands:

```
npm i    					// installs all dependencies 
node db/seeds.js 		    // populate database with data
node index.js				// starts the server
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