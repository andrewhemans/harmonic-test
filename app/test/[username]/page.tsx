import { getUserWithUsername, postToJSON } from "@/lib/firebase";
import UserProfile from "@/components/User/UserProfile";
import PostFeed from "@/components/Posts/PostFeed";

type Props = {
  user: any;
  posts: any;
  query: {
    username: string;
  };
};

export async function fetchProfileData(query: any) {
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
    props: { user, posts },
  };
}

export default async function UserProfilePage(query: any) {
  // const username = query;
  // const data = await fetchProfileData(query);
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

  console.log("profile page data", userDoc);

  return (
    <main>
      {/* <UserProfile user={user} /> */}
      {/* <PostFeed posts={posts} /> */}
    </main>
  );
}
