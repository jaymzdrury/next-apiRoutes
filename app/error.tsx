'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): JSX.Element {

  useEffect(() => {
    console.error(error);
  }, [error])
 
  return (
    <section role='alert' aria-relevant='all'>
      <h1>Error on Main Page</h1>
      <button
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </section>
  );
  
};