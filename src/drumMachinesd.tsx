import { useEffect } from "react";
import audioClips from "./audioClips";
import useAudioPlayer from "./playAudioClip";

//type RecordedClip = {
  //audioId: string;
  //timestamp: number;
//};

const DrumMachine = () => {
  //const [recording, setRecording] = useState<RecordedClip[]>([])
  
  const {playAudio} = useAudioPlayer();
  const keys = ["Q","W","E","A", "S", "D", "Z", "X", "C"];
  useEffect(()=> {
    const keys = ["Q","W","E","A", "S", "D", "Z", "X", "C"];
    const handleKeyDown = (e : React.KeyboardEvent)=> {
      const key = e.key.toUpperCase()
         if (keys.includes(key)){
          playAudio(key);
        }      
    };
      document.addEventListener("keydown", handleKeyDown as unknown as EventListener);
      return () => {
        document.removeEventListener("keydown", handleKeyDown as unknown as EventListener);
      };
    
    
  },[playAudio]);
  

  
  return (
    <div id="drum-machine" className="drum-machine">
        <div id="drumpads" className="drumpads">
          {keys.map((key) => (
            <button
              key={key}
              id={`button${key}`}
              className="drum-pad"
              onClick={() =>{playAudio(key) ;}}
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
      <p  className="audioId" id="display"></p>
     </div>
  )
}
export default DrumMachine

