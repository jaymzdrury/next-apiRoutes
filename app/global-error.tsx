'use client';
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <section role="alert" aria-relevant="all">
            <h2>Error Page</h2>
            <button onClick={() => reset()}>Try again</button>
        </section>
      </body>
    </html>
  );
};