import React , {useEffect , useState} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/Firebase' 
import {useDispatch, useSelector} from  'react-redux'
import { addUser , removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/Constants';
import { signOut } from "firebase/auth";
import {  SIGNOUT } from '../utils/Constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { resetGptState } from '../utils/gptSlice';

const Header = () => {
  const [isUserSignIn, setIsUserSignIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gptClicked = useSelector(store => store.gpt.showGptSearch)
  const handleSignOut = () =>{   
    dispatch(resetGptState());
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }

      useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid , email , displayName}= user ;
            dispatch(addUser({uid:uid , email:email , displayName:displayName}))
            navigate('/browse')
            setIsUserSignIn(true)
            
          } 
          else {
            // User is signed out
            dispatch(removeUser())
            navigate('/')
          }
        });
        // unsubscribe is used when component will unmount ,  just a hygiene process
        return () => (unsubscribe());

    } , [])

    const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView())
    }  
  return (
    <div className=' w-full flex justify-between  align-bottom bg-gradient-to-b from-black absolute z-20 px-5 '>

      <div>
          <img className ='w-[150px]  md:w-44' src={LOGO}/>
      </div>

      {isUserSignIn ? <button onClick={handleGptSearchClick} className=' py-0 text-small px-2 mx-2 my-3 md:py-1 md:px-4 md:mx-4 md:my-5 bg-purple-700  text-white rounded-lg '>
        {gptClicked ? 'HomePage' : 'GPT Search'}
      </button> : ''}

      <div  onClick = {handleSignOut} className='p-4 z-10 cursor-pointer md:p-6 '>
        <img  className = 'md:w-12'  src={SIGNOUT} alt ='signout' />
      </div>
    </div>
  )
}

export default Header