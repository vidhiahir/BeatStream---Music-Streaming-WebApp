import { Button } from "@/components/ui/button";
import { Home, Music2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-[var(--bg)]">
      <div className="text-center space-y-8 px-4">
        {/* Large animated musical note */}
        <div className="flex justify-center animate-bounce">
          <Music2 className="h-24 w-24 text-purple-500" />
        </div>

        {/* Error message */}
        <div className="space-y-4">
          <h1 className="text-7xl font-bold text-[var(--text-color)]">404</h1>
          <h2 className="text-2xl font-semibold text-[var(--text-color)]">
            Page not found
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto">
            Looks like this track got lost in the shuffle. Let's get you back to
            the music.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="bg-purple-500 hover:bg-purple-600 text-[var(--text-color)] border-neutral-700 w-full sm:w-auto"
          >
            Go Back
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="bg-purple-500 hover:bg-purple-600 text-[var(--text-color)] w-full sm:w-auto"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
