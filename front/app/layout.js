import './globals.css';
import ClientLayout from '@/app/components/client-layout';

// 메타데이터는 서버 컴포넌트에서 사용
export const metadata = {
  title: 'GUNHO',
  description: '개인 개발자 사이트입니다.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
