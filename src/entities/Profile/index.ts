// import { Profile } from "./ui/Profile";
export { Profile, ProfileSchema } from './model/types/ProfileSchema';
export { profileReducer, profileActions } from './model/slice/profileSlice';
export { fetchProfileData } from './services/fetchProfileData/fetchProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';
