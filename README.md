# Perfect Pitch

Perfect Pitch is a vocal training app that will graph the user's vocals and compare it against their favorite singer's vocals.

## Team

  - __Product Owner__: Matt Aftalion
  - __Scrum Master__: Hien Tran
  - __Development Team Members__: Hongchao Yu, Yuyi Li

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage
  Perfect Pitch is a vocal training app that will graph the user's vocals and compare it against their favorite singer's vocals.
  On the far left of our app, there is a library of songs that the user can select from. Once a song is clicked there will be
  four main features. The top left box in the main page is the pitch detector and it will tell you what note you are singing. In the
  top center is the audio controls which has the Play, Pause, and Stop buttons. It also has two volume controls. The top controls: controls
  the volume of the instrumental. The bottom one: controls the volume of the vocals. At the top right is the waveform of the user's input.
  At the bottom, the selected song's vocals will be already graphed out and it will also graph the user's vocals in real time. 

## Requirements

- Node v6.x

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
bower install
mongod
npm start
npm run compile
```
Npm start will start the server and connect to MongoDB. Npm run compile will compile all jsx files to js files. 

### Roadmap

Our intent was to have the scoreboard constantly updating throughout the duration of the song, so the user can see how well they are singing. 
We were unable to incorporate this feature because we have the score as a state inside the top-level App component, which re-renders everytime we update the state.
If you want to incorporate the scoreboard, the score should not be living as a state inside App component. Once the score is set we would like to save
a snapshot of the graph and have it kept in the user's profile where they can track their progress. 

Another feature we would like to add is the ability to retrieve music from other resources. We attempted Spotify Widget, embedded YouTube, and Soundcloud Player.
All of three use iframe elements to render to the page, and we could not find a way to extract audio data from those resources. 

View the project roadmap [here](https://github.com/threefourth/threefourth/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
