import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-main dark:bg-main-dark dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
