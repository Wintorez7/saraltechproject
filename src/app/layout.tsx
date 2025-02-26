import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import Loading from './loading';
import { CommonLayout } from '../components/common-layout/index';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Project Name',
  description: 'Your project description here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <CommonLayout>{children}</CommonLayout>
        </Suspense>
      </body>
    </html>
  );
}
