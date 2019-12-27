# GitSearch-Quotes

GitSearch-Quotes is simply an Angular App that uses Github API to retrieve user data. Submit a username and it gives you repository details of the user, including number of repositories, commits and branches and also when it was last updated. It also has a quotes platform where you can add your favorite quotes in it. It includes a button to delete a quote that you don't find appropriate. You can also upvote or devote a quote based on your personal opinion about it. A quote with most likes will be highlighted. It will also give you the time since the quote has been created.

[![git.png](https://i.postimg.cc/8CVT7HFm/git.png)](https://postimg.cc/G4zWNvx4)

## Requirements

Both the CLI and the project have dependecies that require Node together with NPM. So make sure you have these installed and working before proceeding.

##### Technologies Used

- This project was generated with Angular CLI version 7.1.4.
- HTML & CSS (Bootstrap)

##### Setup Instructions and Installation

- Clone this repository to a location in your file system.
- Open terminal command line then navigate to the root folder of the application.
- Run `ng serve` command.
- Navigate to `http://localhost:4200/` in your browser.


## Behaviour Driven Development

##### GitSearch

1. Displays GitHub info of a user when user name is entered
   - INPUT: "user name entered"
   - OUTPUT: "Displays User Details"
2. Displays all repositories of a user when show repositories button is pressed
   - INPUT: "Show repositories button pressed
   - OUTPUT: "Displays User Repo Details"
3. Displays an error message if you leave the name input field blank
   - INPUT: " " 
   - OUTPUT: "Name's required" 
4. Displays an error message if you leave the repo name input field blank
   - INPUT: " " 
   - OUTPUT: "Repo Name is required"
5. Displays an error message if the user name entered couldn't be found
   - INPUT: "username"
   - OUTPUT: "User Doesn't Exist"
6. Displays an error message if the repo name entered couldn't be found
   - INPUT: "repository" 
   - OUTPUT: "Repository Doesn't Exist"

##### Quotes

1. Displays an error message if you leave the quote input field blank
   - INPUT: " " 
   - OUTPUT: "Enter the quote" 
2. Displays an error message if you leave the author field blank
   - INPUT: " " 
   - OUTPUT: "Enter the name of the author"
3. Displays an error message if you leave the name input field blank
   - INPUT: " "
   - OUTPUT: "Enter the name of the publisher or your name"
4. Displays an option to delete a quote
   - INPUT: "Delete button of a quote pressed" 
   - OUTPUT: "That particular quote from a list of quotes is deleted"
5. Display an option to UpVote a quote if you like it
   - INPUT: "Press INSPIRATIONAL Button"
   - OUTPUT: "UpVote property of a quote increments by 1" 
6. Display an option to DownVote a quote if you dislike it
   - INPUT: "Press TERRIBLE Button"
   - OUTPUT: "DownVote property of a quote increments by 1" 


## Development

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:
- Fork the repo
- Create a new branch (git checkout -b improve-feature)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (git commit -am 'Improve feature')
- Push to the branch (git push origin improve-feature)
- Create a Pull Request


## Known Bugs

If you find a bug (the website couldn't handle the query and or gave undesired results), kindly open an issue here by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue here. Please include sample queries and their corresponding results.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


##### Link to Live Site : [https://yomzsamora.github.io/GitSearch-Quotes/](https://yomzsamora.github.io/GitSearch-Quotes/)

### License

*MIT*
Copyright (c) 2019 **Yommie Samora**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
