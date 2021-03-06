import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import classes from './ProfileInfo.module.css';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className="classes.descriptionBlock">
        <img alt="avatar" src = {profile.photos.large}/>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div> 
      </div>
  );
}



export default ProfileInfo;
