import { Navigation } from "@/components/navigation";
import { ThemeToggle } from "@/components/ui/themeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <ThemeToggle />
      <Navigation />
    </div>
  );
}
