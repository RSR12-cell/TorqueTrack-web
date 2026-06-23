import styles from './Navbar.module.css'
import myLogo from '../../../assets/Ford_Mustang.jpg'
import myProfilePic from '../../../assets/teeth in the vortex.png'
import { useSearchedContext } from './SearchContext/UseSearchContext'


export default function Navbar() : React.JSX.Element{
  
  const {setSearch} = useSearchedContext()

  return(
        <>
        <div className= {styles.navBar_container}>
          <div className={styles.navbar_logo}>
            <img src={myLogo} alt="TorqueTrack Logo" />
          </div>

          <div className={styles.navbar_searchBar}>
            <input type="text" placeholder='Enter Details to Search' onChange={i => setSearch(i.target.value)}/>
          </div>

          <div className={styles.navbar_account_info}>
            <img src={myProfilePic} alt="My Profile Picture" />
            <span className={styles.user_name}>Ryan's Workshop</span>
          </div>
        </div>
        </>
    )
}