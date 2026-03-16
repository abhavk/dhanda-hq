'use client';
import { useState } from 'react';

const designs = ['/design1.html', '/design2.html', '/design3.html'];

export default function Home() {
  const [idx, setIdx] = useState(0);

  return (
    <>
      <iframe
        src={designs[idx]}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          border: 'none',
        }}
      />
      <button
        onClick={() => setIdx((idx + 1) % designs.length)}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          padding: '16px 24px',
          background: '#111',
          color: '#fff',
          border: 'none',
          borderRadius: 999,
          cursor: 'pointer',
          fontSize: 16,
          fontWeight: 600,
          zIndex: 9999,
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        }}
      >
        Next Design
      </button>
    </>
  );
}
