import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Favicon */}
          <link rel="icon" type="image/x-icon" href="/assets/Fastholidays Fav Icon.png" />

          {/* Facebook Domain Verification */}
          <meta name="facebook-domain-verification" content="lhxbyqz5159agp0gg03rguahgjolno" />

          {/* Google Analytics Event Tracking */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function gtag_report_conversion(url) {
                  var callback = function () {
                    if (typeof(url) != 'undefined') {
                      window.location = url;
                    }
                  };
                  gtag('event', 'conversion', {
                      'send_to': 'AW-11000791019/Ckm-CJq-hOAYEOv_yv0o',
                      'event_callback': callback
                  });
                  return false;
                }
              `,
            }}
          />

          {/* Google Ads gtag.js */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11000791019"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11000791019');
              `,
            }}
          />

          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-HHE37ED8GC"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-HHE37ED8GC');
              `,
            }}
          />
        </Head>
        <body>
          {/* Main Content */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}