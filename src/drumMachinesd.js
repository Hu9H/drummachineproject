import { useEffect, useState } from "react"
import audioClips from "./audioClips"


const DrumMachine = () => {
  
  const [playingId, setPlayingId] = useState()
  const audioClip = (audioId) => {
    
    console.log(audioId)
    const audioElement = document.getElementById(audioId)
    console.log(audioElement)
    if (audioId === playingId){
      audioElement.currentTime = 0
      audioElement.pause()
      const newAudioElement = new Audio(audioClips[audioId][0].audioUrl)
      newAudioElement.play()
    } else {
      audioElement.play()
    }
   
   
   setPlayingId(audioId)
   console.log(playingId)
  }
  const currentAudio= (audioId) => {
    const currentAudioId = document.getElementById("display")
    currentAudioId.textContent = audioClips[audioId][0].name
  }
  
  
  
  
  
  
  useEffect(()=> {
    const keys = ["Q","W","E","A", "S", "D", "Z", "X", "C"]
    const handleKeyDown = (e)=> {
      keys.forEach((letter)=> {
         if (e.key.toUpperCase() === letter){
          audioClip(letter)
        }

      })
    }
      document.addEventListener("keydown", handleKeyDown)
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    
    
  },[])
  

  
  return (
    <div id="drum-machine">
        <div >
            <button id="buttonQ" className="drum-pad"   onClick={() =>{audioClip("Q") ;currentAudio("Q");}}>Q<audio id="Q" className="clip" src={audioClips["Q"][0].audioUrl}  preload="auto"></audio></button>
            <button id="buttonW" className="drum-pad"   onClick={() =>{audioClip("W") ;currentAudio("W");}}>W<audio id="W" className="clip" src={audioClips["W"][0].audioUrl}  preload="auto"></audio></button>
            <button id="buttonE" className="drum-pad"   onClick={() =>{audioClip("E") ;currentAudio("E");}}>E<audio id="E" className="clip" src={audioClips["E"][0].audioUrl}  preload="auto"></audio></button>
            <button id="buttonA" className="drum-pad"   onClick={() =>{audioClip("A") ;currentAudio("A");}}>A<audio id="A" className="clip" src={audioClips["A"][0].audioUrl}  preload="auto"></audio></button>
            <button id="buttonS" className="drum-pad"   onClick={() =>{audioClip("S") ;currentAudio("S");}}>S<audio id="S" className="clip" src={audioClips["S"][0].audioUrl}  preload="auto"></audio></button>
            <button id="buttonD" className="drum-pad"   onClick={() =>{audioClip("D") ;currentAudio("D");}}>D<audio id="D" className="clip" src={audioClips["D"][0].audioUrl}  preload="auto"></audio></button>
            <button id="buttonZ" className="drum-pad"   onClick={() =>{audioClip("Z") ;currentAudio("Z");}}>Z<audio id="Z" className="clip" src={audioClips["Z"][0].audioUrl}  preload="auto"></audio></button>
            <button id="buttonX" className="drum-pad"   onClick={() =>{audioClip("X") ;currentAudio("X");}}>X<audio id="X" className="clip" src={audioClips["X"][0].audioUrl}  preload="auto"></audio></button>
            <button id="buttonC" className="drum-pad"   onClick={() =>{audioClip("C") ;currentAudio("C");}}>C<audio id="C" className="clip" src={audioClips["C"][0].audioUrl}  preload="auto"></audio></button>
         </div>
      <p  className="audioId" id="display"></p>
     </div>
  )
}
export default DrumMachine

