export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      <h1 className="text-4xl font-bold font-sans text-primary mb-4">
        Welcome to Kindergarten School
      </h1>
      <p className="text-xl text-muted-foreground">
        A safe and friendly place to learn.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition">
          Admissions Open
        </button>
        <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-xl hover:opacity-90 transition">
          Contact Us
        </button>
      </div>
    </main>
  );
}
