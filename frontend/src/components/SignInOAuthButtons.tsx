import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const SignInOAuthButtons = () => {
  const { signIn, isLoaded } = useSignIn();

  if (!isLoaded) {
    return null;
  }
  const signInWithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    });
  };
  return (
    <Button
      onClick={signInWithGoogle}
      variant={"secondary"}
      className="w-full text-[var(--text-color)] border-[var(--bg-hover)] h-11"
    >
      Continue with google
    </Button>
  );
};

export default SignInOAuthButtons;
