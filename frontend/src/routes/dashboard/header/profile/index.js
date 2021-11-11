import style from "./style.css";
import "../../../../style/arrows.css";
import { useState, useEffect, useRef } from 'preact/hooks';
import Expanded from "./expanded";

const Profile = () => {
  const [expanded, setExpanded] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setExpanded(false);
            }
        }
  
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef} class={style.profile_container}>
    <div class={style.profile}>
      <span class={style.profile_name} onClick={() => { setExpanded(!expanded) }}>Kanersps</span>
      <span className={`arrow ${expanded ? "down" : "up"}`} />

      
    </div>

    { expanded === true && <Expanded /> }
    
  </div>
}

export default Profile;