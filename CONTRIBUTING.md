# Blueberry-Express

A safe space for blueberries

# Development

## Install

Simply clone the repo:

```bash
git clone https://github.com/hratx-blue-ocean/Blueberry-Express.git
```

## Starting development

### Building Images

From the root project directory run the following command to pull down and build the docker images

```bash
npm run docker:build
```

### Starting Containers

Once the build is complete, run the following command to bring up the docker containers

```bash
npm run docker:up
```

### Stopping Containers

When you want to stop the docker containers, either to rebuild with new dependencies, or if you're just done developing, run the following command

```bash
npm run docker:down
```

### Logs

If you wish to see the terminal outputs from all of the containers, you can run

```bash
npm run docker:logs
```

This will attach your current terminal window to the terminal outputs from _all_ running containers.

If you want to attach to a specific container, you can run

```bash
npm run docker:logs:CONTAINER_NAME
```

This will attach your terminal output to the terminal output from that specific container (see below for all of the containers that are being created).

### Interactive database shells

Because the database containers do not expose their ports to the host machine, you cannot simply use `mongo` or `psql` to connect to the interactive shells.

Instead, you can connect to the interactive shells with `npm run docker:mongo` and `npm run docker:postgres`.

### Migrations

Currently, there are a host of migrations that need to run before you can actually begin development. The different migration commands you can run are detailed below:

_NOTE: If you run any of the migration commands below other than the base `postgres:migrate` command, you must run the "down" version of that command manually if you're trying to reset something, otherwise you run the risk of damaging the migrations table in the database, and I ain't got the time to fix it with you._

### `postgres:migrate`

Sets up (or resets) the database to an initial state, with all tables created and populated with some dummy data (most importantly, it contains 'starter' user information associated with all of the current developers' Google IDs, so messaging APIs are testable).

### `postgres:migrate:student`

Sets all developer accounts to be the `student` type on your local machine. Useful for testing the student portal.

### `postgres:migrate:teacher`

Sets all developer accounts to be the `teacher` type.

### `postgres:migrate:languages`

Sets all developer accounts to have _all_ languages as a preferred language.

## About the Docker Containers

### api

A node.js image running the backend API. Defaults to running on port 3000. By default, will run `npm run dev` from the api `package.json`
which will in turn execute `nodemon src/index.js`

This will automatically restart the server on file changes.

### react

A node.js image, with webpack, live and 'hot' reloading enabled. Defaults to running on port 8080. By default, will run `npm run dev` from the react `package.json`
which will in turn execute `webpack serve`. Look into the `react/webpack.config.js` file for more information on what exact functionality is included here, but in general:

- a live dev server, with 'hot' reloading enabled
- babel transpiling
- the ability to pull environment variables (via `process.env.VARIABLE_NAME`) from a `.env` file located in the `react` folder.
- TailwindCSS processing
- Auto generation of an index.html file with necessary script/link tags in the header for loading scripts and css files
- Auto minification and splitting of css and js files (in production builds)

### postgres

A postgres image, with the database being copied into the `postgres/data` folder, for data persistence between builds.

### mongo

A mongo image, with the database being copied into the `mongo/data` folder, for data persistence between builds

## Development Do's and Dont's

- **DO** Always develop using the provided docker containers. This ensures a consistent development environment for everyone, and guarantees no bugs crop up do to differing operating systems

- **DON'T** Install dependencies locally. The docker images will automatically run `npm install` inside the image, if you install dependencies locally they may become out of sync with the container, leading to confusing bugs.

- **DON'T** Add dependencies to either the API or Front-End packages without running it by the respective architect. Your pull request will be automatically rejected if the `package.lock.json` file has changes. This is to both ensure that dependencies that are added are completely necessary, and ensure that we don't run into unforseen issues with dependencies with both webpack and the docker build process.
