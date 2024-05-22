type AudioClip = {
  name: string;
  audioUrl: string;
};

type AudioClips = {
  [key: string]: (AudioClip )[];
};


const audioClips:AudioClips = {
  "Q": [{name: "Heater 1",audioUrl :"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{name:"Chord 1",audioUrl :""}],
  "W":[{name:"Heater 2" ,audioUrl : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{name:"",audioUrl :""}],
  "E":[{name:"Heater 3" ,audioUrl :  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{name:"",audioUrl :""}],
  "A":[{name:"Heater 4", audioUrl : "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{name:"",audioUrl :""}],
  "S":[{name:"Clap", audioUrl:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{name:"",audioUrl :""}],
  "D":[{name:"Open HH", audioUrl:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {name:"",audioUrl :""}],
  "Z":[{name:"Kick-n'-Hat", audioUrl:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {name:"",audioUrl :""}],
  "X":[{name:"Kick" , audioUrl:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {name:"",audioUrl :""}],
  "C":[{name:"Closed HH", audioUrl:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}, {name:"",audioUrl :""}]
}



export default audioClips