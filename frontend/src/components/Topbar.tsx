import { cn } from "@/lib/utils";
import { useAuthStore } from "@/stores/useAuthStore";
import { SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";

const Topbar = () => {
  const { isAdmin } = useAuthStore();

  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-[var(--bg-2)] backdrop-blur-md z-10">
      <div className="flex gap-2 items-center">
        <img src="/beatstream.png" className="size-8" alt="logo" />
        <span className="text-[var(--text-color-inverse)] font-bold text-xl tracking-tight">BeatStream</span>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        {isAdmin && (
          <Link
            to={"/admin"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <LayoutDashboardIcon className="size-4 mr-2 " />
            Admin dashboard
          </Link>
        )}

        <SignedOut>
          <SignInOAuthButtons />
        </SignedOut>

        <UserButton />
      </div>
    </div>
  );
};

export default Topbar;
