export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="dark:prose-invert md:prose-lg max-w-none sm:px-4 md:px-16 md:py-6 lg:px-24">
      {children}
    </main>
  );
}
