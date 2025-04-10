import type { Metadata } from 'next';
import '@repo/ui/globals.scss';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'ZUM 블로그',
  description: 'ZUM 블로그 상세',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preload"
          as="style"
          crossOrigin=""
          href="https://fonts.zumst.com/pretendard/pretendardvariable-subset.css"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://fonts.zumst.com/pretendard/pretendardvariable-subset.css"
        />
        <link rel="preconnect" href="https://fonts.zumst.com" />
        <link rel="dns-prefetch" href="https://fonts.zumst.com" />

        <link
          rel="search"
          type="application/opensearchdescription+xml"
          href="/opensearch.xml"
          title="ZUM 블로그 검색"
        />
        {/** PWA */}
        <meta name="apple-mobile-web-app-title" content="ZUM 블로그" />
        <meta name="application-name" content="ZUM 블로그" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <div>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
