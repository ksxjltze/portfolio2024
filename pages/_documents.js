// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {/* This script runs before React initializes */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Check for saved theme
                const savedTheme = localStorage.getItem('theme');
                
                // Apply theme based on localStorage or system preference
                if (savedTheme) {
                  document.documentElement.classList.add(savedTheme);
                } else {
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  document.documentElement.classList.add(systemTheme);
                }
              })();
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}