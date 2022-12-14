import awaken from "./assets/Awaken.png";
import pp from "./assets/PlaylistProducer.png";
import tp from "./assets/TeamProfiles.png";
import wds from "./assets/WorkDayScheduler.png";

const Projects = [
  {
    name: "Playlist Producer",
    description: "The Playlist Producer application is designed to use the Napster API to generate a list of musical artists, compiled into playlists, based on mood input selections. This application was built with HTML, CSS Foundation, JavaScript, and the JQueryUI API.",
    repo: "https://github.com/jessicamorse23/Playlist-Producer",
    liveLink: "https://jessicamorse23.github.io/Playlist-Producer/",
    img: awaken
  }, 
  {
    name: "Awaken, a Wellness App",
    description: "Awaken is designed to help users focus on their mental and physical wellness as they go through their days. Our goal was to create an application that would allow the user to fill in information about their general wellness habits: sleep, mood, water intake, and exercise. This application was build with JavaScript, Node js,Handlebars, Express, UIKit CSS, APIs, and MySql.",
    repo: "https://github.com/Rob-Thompson-Git/wellness-app",
    liveLink: "https://serene-depths-46379.herokuapp.com/",
    img: pp
  },
  {
    name: "Team Profile Generator",
    description: "This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.",
    repo: "https://github.com/jessicamorse23/Team-Profile-Generator",
    liveLink: "https://github.com/jessicamorse23/Team-Profile-Generator",
    img: tp
  },
  {
    name: "Work Day Scheduler",
    description: "A simple calendar application that allows a user to save events for each hour of the work day.",
    repo: "https://github.com/jessicamorse23/WorkDayScheduler-Challenge5",
    liveLink: "https://jessicamorse23.github.io/WorkDayScheduler-Challenge5/",
    img: wds
  }
]

export { Projects }