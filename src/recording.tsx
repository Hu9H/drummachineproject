
import {  useState, useCallback,useRef} from "react"
import audioClips from "./audioClips";
type RecordedClip = {
  audioId: string;
  timestamp: number;
};

const useRecording = () => {
  const [recording, setRecording] = useState<RecordedClip[]>([])
  const startTimeRef = useRef<number>(0);
  const recordRecording = useCallback((audioId : string) => {
    const currentTime = Date.now()
    if (startTimeRef.current === 0){
      startTimeRef.current = currentTime
      }
    setRecording(prev => [...prev, {audioId, timestamp: currentTime - startTimeRef.current}]);
    },[])

  const playRecording = useCallback(() => {
    console.log(recording)
    if (recording.length === 0) return;
    
    recording.forEach((clip, index) => {
      setTimeout(() => {
        const audioClip = audioClips[clip.audioId]?.[0];
        if (audioClip) {
          const audio = new Audio(audioClip.audioUrl);
          audio.play();
        }
      }, clip.timestamp);
    });
  },[recording])

  const clearRecording = useCallback(() => {
    setRecording([]);
    startTimeRef.current = 0;
  },[])
  

  return {playRecording, recordRecording,clearRecording}

}

export default useRecording