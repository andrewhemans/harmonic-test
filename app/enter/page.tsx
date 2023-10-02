"use client";
import { useContext } from "react";
import { UserContext } from "@/lib/context";
import { auth, googleAuthProvider } from "@/lib/firebase";
import { UsernameForm } from "@/components/User/UserNameForm";

export default function Enter(_props: any) {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      <h1>Sign In</h1>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
