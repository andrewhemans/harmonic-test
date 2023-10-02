import Image from "next/image";

type User = {
  photoURL: string;
  username: string;
  displayName: string;
};

// UI component for user profile
export default function UserProfile(user: any) {
  console.log("user: ", user);

  return (
    <div className="box-center">
      <Image
        src={user.photoURL || "/hacker.png"}
        alt={`Profile picture of ${user.displayName}`}
        className="card-img-center"
        width={200}
        height={200}
      />
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || "Anonymous User"}</h1>
    </div>
  );
}
