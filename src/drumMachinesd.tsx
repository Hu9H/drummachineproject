import { useEffect, useState } from "react";
import audioClips from "./audioClips";
import useAudioPlayer from "./playAudioClip";
import useRecording from "./recording";

const DrumMachine = () => {
  const [isRecording, setIsRecording] = useState(false);
  const {recordRecording, playRecording,clearRecording} = useRecording()
  const {playAudio} = useAudioPlayer();
  const keys = ["Q","W","E","A", "S", "D", "Z", "X", "C"];
  useEffect(()=> {
    const keys = ["Q","W","E","A", "S", "D", "Z", "X", "C"];
    const handleKeyDown = (e : React.KeyboardEvent)=> {
      const key = e.key.toUpperCase()
         if (keys.includes(key)){
          if (isRecording) {
            recordRecording(key);
          }playAudio(key);
        }      
    };
      document.addEventListener("keydown", handleKeyDown as unknown as EventListener);
      return () => {
        document.removeEventListener("keydown", handleKeyDown as unknown as EventListener);
      };
    
    
  },[playAudio,isRecording,recordRecording]);
  
  const toggleRecording = () => {
    setIsRecording(prev => !prev);
  };
  
  return (
    <div id="drum-machine" className="drum-machine">
        <div id="drumpads" className="drumpads">
          {keys.map((key) => (
            <button
              key={key}
              id={`button${key}`}
              className="drum-pad"
              onClick={() =>{ if (isRecording) {
                recordRecording(key);
              } playAudio(key) ;}}
            >
              {key}
              <audio
                id={key}
                className="clip"
                src={audioClips[key][0].audioUrl}
                preload="auto"
              ></audio>
            </button>
          ))}
         </div>
      <button id="play-record" className="play-record" onClick={() => {playRecording()}}>Play</button>
      <button id="record" className="record" onClick={() => {toggleRecording()}}>{isRecording ? "Stop Recording" : "Start Recording"}</button>
      <button id="clear-record" className="clear-record" onClick={() => {clearRecording()}}>Clear Recording</button>
      <p  className="audioId" id="display"></p>
     </div>
  )
}
export default DrumMachine

