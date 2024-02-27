import { Suspense } from "react";
//Css
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import 'boxicons/css/boxicons.min.css'
//JS 
import BootstrapClient from "../utils/BootstrapClient";
//Context providers
import { ThemeContextProvider } from "../context/ThemeContext";
import ThemeProvider from "../Providers/ThemeProvider";

//Loding component
import Loading from "./Loading";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8"/>
        <title>Silicon | Blog Homepage</title>
        <meta name="description" content="Silicon - Multipurpose Technology Bootstrap Template"/>
        <meta name="keywords" content="bootstrap, business,"/>
        <meta name="author" content="Createx Studio"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#6366f1"/>
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#080032"/>
        <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
      </head>
      <body>
      <BootstrapClient/>
      <ThemeContextProvider>
      <ThemeProvider>
      {<Suspense fallback={<Loading />}>
        {children}
      </Suspense>}
      </ThemeProvider>
      </ThemeContextProvider>
      </body>
    </html>
  )
}
 