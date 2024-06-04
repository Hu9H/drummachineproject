
import {  useState, useCallback } from "react"
import audioClips from "./audioClips";



const useAudioPlayer = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  
  const playAudio = useCallback((audioId : string) => {
    const audioElement  = document.getElementById(audioId) as HTMLAudioElement;
    
    if (audioElement) {
      if (audioId === playingId) {
        audioElement.currentTime = 0;
        audioElement.pause();
        const newAudioElement = new Audio(audioClips[audioId][0].audioUrl);
        newAudioElement.play();
        } else {
        audioElement.play();
      }

    setPlayingId(audioId);
    
    
    const currentAudioId = document.getElementById("display") as HTMLElement;
    currentAudioId.textContent = audioClips[audioId][0].name;
    
    }

},[playingId]);
return { playAudio }
};

export default useAudioPlayer;