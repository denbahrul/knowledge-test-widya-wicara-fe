import { UserEntity } from "../../../entities/user";

export default function ProfileDetail({ profile }: { profile: UserEntity }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-10 text-center">
      <img
        className="my-4 h-72 w-72 rounded-full border-2 border-black object-cover"
        src={
          profile?.profilePhoto ??
          "https://i.pinimg.com/736x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg"
        }
      />
      <div>
        <p className="font-semibold text-blueB">Name</p>
        <p className="text-xl font-bold">{profile?.fullName}</p>
      </div>
      <div>
        <p className="font-semibold text-blueB">Gender</p>
        <p className="text-xl font-bold">{profile?.gender}</p>
      </div>
      <div>
        <p className="font-semibold text-blueB">Email</p>
        <p className="text-xl font-bold">{profile?.email}</p>
      </div>
    </div>
  );
}
