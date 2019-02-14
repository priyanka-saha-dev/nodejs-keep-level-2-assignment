## Design & implement, Notes Application as a personal productivity tool for quickly taking (& saving) notes, organize notes efficiently. Below are requirements those needs to implement.

- Merge **nodejs-keep-level-2-assignment** boiler plate with your old project **nodejs-keep-level-1-assignment**. Follow below given steps to merge
	- Merge all test files in test folder
	- Merge modules.js file
	- Merge problem.md file
	- No need to update other files and folder.

- JWT Token module
	- Create a module, which only does JWT token signing and verifying
	- Refer to the methods from this module in **module.js** appropriately
	- You are expected to provide unit tests to this module
	- The signature expected is **signToken(payload, secret, expireIn, callback)** and **verifyToken(token, secret, callback)**
	- Refer these modules appropriately in **module.js**

- Modify existing API **api/v1/users/login**
	- After successful login, response should be look like **{token: token, user: {userName: userName, userId: userId}, status: 200}**
	- Token payload will contain **userName** and **userId** in the token payload.
	- Token should have expiry time, which is passed while generating the token

- All API for notes
	- All API will be accessible only to authenticated request
	- Only requests with valid token in the Authentication header will succeed, others should get valid HTTP response code and message
	- Write appropriate unit tests to test the authenticated access of the API

- Other instructions
	- Authorization header should be set as **Bearer**.
	- Use of jsonwebtoken npm module to generate and verify token instead **passportjs**.
	- If any notes api called without header, it should return **Not authenticated** message. 
	- Error handling should be done properly in whole application. If any error occurs in Generate and verify token methods, then it should send error message only not whole error object. No need to customize any error message just send as it is.
	- Seed code can be cloned form https://gitlab-cts.stackroute.in/stack_nodejs/nodejs-keep-level-2-assignment.git

## MENTORS TO BEGIN REVIEW YOUR WORK ONLY AFTER 

- You add the respective Mentor as a Reporter/Master into your Assignment Repository
- You have checked your Assignment on the Automated Evaluation Tool - Hobbes (Check for necessary steps in your Boilerplate - README.md/PROBLEM.md file. ) and got the required score - Check with your mentor about the Score you must achieve before it is accepted for Manual Submission. 
- Intimate your Mentor on Slack and/or Send an Email to learner.support@stackroute.in - with your Git URL - Once you done working and is ready for final submission.

## Design & implement, Notes Application as a personal productivity tool for quickly taking (& saving) notes, organize notes efficiently. Below are its endpoints those you need to design.

- Core features
	- As a user, i should be able to register.
	- As a user, i should be able to login.
	- As a user, i should be able to create a note.
	- As a user, i should be able to list all created notes by me.
	- As a user, i should be able to update note's **title**, **text** and **state** (**started**, **not-started**, **completed**)

- What must be implemented:- 
	- NodeJS based server side application (server part only of the application)
	- Automated test cases to test the server side application
	- Must be able to interface & integrate with any web based clients
	- Implement the application using TDD approach


- Instructions for implementation and submission
	- Successful submission must have a well document README.md, which explain how to build, run & test the application, you can also add a DESIGN.MD to explain your data model & design
	- Source code must be integrated with ESLint with standard ESLint recommended JS rules, and should not have any lint errors open
	- Ensure you have exposed method 'initializeMongooseConnection' which initializes the mongoose connection, from ./server/modules.js else app will be in hung state.
	- Ensure you have exposed notes and user entity form ./server/modules.js else app will be in hung state.
	- Seed code can be cloned form https://gitlab-cts.stackroute.in/stack_nodejs/nodejs-keep-level-1-assignment.git

- API for user registration **/api/v1/users/register**
	- Registration API will insert **username** and **password** into database
	- **bcryptjs** npm module should be used to store **password** in bycript form.
- API for login  **/api/v1/users/login**
	- User should be able to login into system using **username** and **password**
- API for creating a note **/api/v1/notes/**
	- Note model will have **id**, **title**, **text**, **state**, **userId**, **createdOn**, **modifiedOn** attributes
	- **userId** will be passed as query param into request and will be used to store notes by **userId**.
- API for getting all notes of a user **/api/v1/notes/**
	- **userId** will be passed as **query param** into request and will be used to fetch notes by **userId**.
- API for updating a note **/api/v1/notes/:noteId**
	- **noteId** will be passed as route parameters into url and will be used to update note by **id**

## MENTORS TO BEGIN REVIEW YOUR WORK ONLY AFTER 

- You add the respective Mentor as a Reporter/Master into your Assignment Repository
- You have checked your Assignment on the Automated Evaluation Tool - Hobbes (Check for necessary steps in your Boilerplate - README.md/PROBLEM.md file. ) and got the required score - Check with your mentor about the Score you must achieve before it is accepted for Manual Submission. 
- Intimate your Mentor on Slack and/or Send an Email to learner.support@stackroute.in - with your Git URL - Once you done working and is ready for final submission.