# Aruix API

Authored by Christopher Glenn  
chglenn20@gmail.com  

---

An API for various toys used by my Discord bot, Aruix  
Made using [NestJS](https://nestjs.com/) TypeScript starter project  

## Purpose

I started this project as practice for my web application development skills in my career as a software engineer. I wanted to use a well known framework that was both powerful and new to me. Enter: NestJS. 

In the last few years I have started and restarted making Discord bots too many times to count. It seemed like every time I came back to a work-in-progress, I've learned enough about programming since the last time that I think "Why did I do it this way?". I've decided splitting the bot into two independent pieces, essentially a chat-based UI and resource. This will allow me to more easily update and test the code behind the scenes without the trouble of dealing with a noisy Discord bot the entire time. 

## Running the App

Detailed documentation for the API can be found under `docs/`  
Here are some of the more common commands used:  

- `npm run start:dev` - Run app in watch mode. Server will restart on file save.
- `npm run start:debug` - Run app in debug mode. Enables debug console logs. 
- `npm run clean` - Remove **all** local build artifacts and reinstall dependencies with NPM. This can take a while.
- `npm run lint` - Lint relevent files, fixing format issues. Run this often and see less format errors overall. 

## Todo

- Implement unit tests
- Add routes for more functionality
- Add external SQLite DB integration (see: [sqlite-docker](https://github.com/glennpai/sqlite-docker))
- Add functionality to the logger functions: access logging, error logs, etc. 
- Dockerize
- Better readme
- Better docs
