import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { getProfile } from "../../../stores/profile/async";
import ProfileUpdate from "./profile-update";
import ProfileDetail from "./profile-detail";
import Button from "../../../components/ui/button";

export default function Profile() {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile.entities);
  const [isDetailProfile, setIsDetailProfile] = useState(true);
  const onUpdate = () => setIsDetailProfile(true);

  useEffect(() => {
    dispatch(getProfile());
  }, [profile]);

  if (!profile) {
    return <p>Loading..</p>;
  }

  if (isDetailProfile) {
    return (
      <div className="flex flex-col items-center">
        <ProfileDetail profile={profile} />
        <Button
          onClick={() => setIsDetailProfile(false)}
          buttonName="Edit profile"
        />
      </div>
    );
  }

  return (
    <div>
      <ProfileUpdate onUpdate={onUpdate} />
    </div>
  );
}
