import { FacultyGrid } from "@/components/modules/faculty/FacultyGrid";

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* 
        We could add a specific Hero for Faculty here if needed later.
        For now, the grid component handles the introduction.
      */}
      <FacultyGrid />
    </main>
  );
}
