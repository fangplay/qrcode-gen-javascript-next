import Head from 'next/head';
import QRCodeGenerator from './components/QrCodeGenerator';

export default function Home() {
  return (
    <div>
      <Head>
        <title>QR Code Generator</title>
        <meta name="description" content="Generate QR codes from text input" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <QRCodeGenerator />
      </main>
    </div>
  );
}