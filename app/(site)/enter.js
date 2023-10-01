export default function enter(props) {
    const user = null;
    const username = null;

    return ( 
        <main>
            {user ? 
                !username ? <UsernameForm /> : <SignOutButton />
                : <SignInButton />
            }
        </main>
    );
}

// Sign in with Google button
function SignInButton() {
     const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
    }

    return (
        <button onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    );
}

// Sign outbutton
function SignOutButton() {
     return (
        <button onClick={() => auth.signOut()}>
            Sign Out
        </button>   
    );
}

function UsernameForm() {
     
}