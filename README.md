![nodejs auth 2](https://user-images.githubusercontent.com/10329339/167260041-d8ab5e15-0d97-4ff2-b134-af2594ebf622.gif)


# Node.js Authentication App
An authentication application with registration and login. It also includes a task/todo application. It uses Node.js, MongoDB, Express, Passport.js and more.

## Usage
#### Clone the repository
`git clone https://github.com/dogukanbatal/auth-with-nodejs`

#### ENV Variables
##### Create a `.env` file in root directory
```
PORT= 3000 
DB_URL= your mongodb url
```
*The env file is not required. If you don't enter DB_URL inside an .env file, it will create a database named "node-auth-db" locally.*


#### Into the repo directory
`cd auth-with-nodejs`

#### Install NPM dependicies
`npm install`

#### Start the project
`npm run dev`


## LICENCE
#### MIT LICENCE
Copyright© 2022 Dogukan Batal

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
