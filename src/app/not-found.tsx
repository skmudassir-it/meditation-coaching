import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-[70vh] px-4">
      <FontAwesomeIcon
        icon={faLeaf}
        className="w-16 h-16 text-[oklch(0.55/0.10/160)] mb-6"
      />
      <h1 className="text-7xl sm:text-9xl font-bold text-[oklch(0.35/0.18/270)] mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground text-lg text-center max-w-md mb-8">
        The page you&apos;re looking for has drifted away like a thought in meditation.
        Let&apos;s guide you back.
      </p>
      <Link href="/" className="inline-flex">
        <Button
          render={
            <span className="inline-flex items-center gap-2 bg-[oklch(0.35/0.18/270)] text-white hover:bg-[oklch(0.35/0.18/270)/0.9] h-10 px-6 rounded-lg font-medium" />
          }
        >
          <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
          Back Home
        </Button>
      </Link>
    </div>
  );
}
