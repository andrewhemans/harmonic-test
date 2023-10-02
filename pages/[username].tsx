import { getUserWithUsername, postToJSON } from "@/lib/firebase";
import UserProfile from "@/components/User/UserProfile";
// import Metatags from '@components/Metatags';
import PostFeed from "@/components/Posts/PostFeed";

export async function getServerSideProps(query: any) {
  const username = query.params.username;

  const userDoc = await getUserWithUsername(username);

  // If no user, short circuit to 404 page
  if (!userDoc) {
    return {
      notFound: true,
    };
  }

  // JSON serializable data
  let user = null;
  let posts = null;

  if (userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection("posts")
      .where("published", "==", true)
      .orderBy("createdAt", "desc")
      .limit(5);
    posts = (await postsQuery.get()).docs.map(postToJSON);
  }

  return {
    props: { user, posts }, // will be passed to the page component as props
  };
}

export default function UserProfilePage({ user, posts }: any) {
  console.log("profile page user", user);

  console.log("profile page posts", posts);

  return (
    <main>
      {/* <Metatags title={user.username} description={`${user.username}'s public profile`} /> */}
      {/* <UserProfile user={user} /> */}
      {/* <PostFeed posts={posts} /> */}
    </main>
  );
}
