import { Header, Footer } from '@/components/layout';

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}