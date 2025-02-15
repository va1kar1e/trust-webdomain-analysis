import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='defaultLanguage' content='en' />
          <meta name='availableLanguages' content='th, en' />
          {/* <link rel="stylesheet" href="/styles/semantic.min.css" /> */}
          <link rel="stylesheet" href="/styles/styles.css" />
          <link rel="apple-touch-icon" sizes="57x57" href="/logo/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/logo/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/logo/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/logo/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/logo/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/logo/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/logo/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/logo/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/logo/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/logo/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png" />
          <link rel="manifest" href="/logo/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/logo/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src="/js/jquery-3.1.1.min"></script> */}
          {/* <script src="/js/semantic.min"></script> */}
        </body>
      </html>
    )
  }
}
