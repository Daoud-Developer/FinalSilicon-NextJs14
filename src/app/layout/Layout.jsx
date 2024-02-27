"use client";
import Router from 'next/router';
import { useState, useEffect } from 'react';
// import { Suspense } from "react";

//Components
import BackTopbutton from "../../components/BackTopButton/BackTopButton";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
// import Loading from "../Loading";

function Layout({ children, showNavbar = true, showFooter = true , navbarAbsolute = false , navbarAbsoluteDark = false }) {

  return (
      <>
      {showNavbar && <Navbar isAbsolute={navbarAbsolute} isAbsolutedark={navbarAbsoluteDark}/>}
      <main className="page-wrapper" >
        {children}
      </main>
      <BackTopbutton/>
      {showFooter && <Footer />}
     </>
  )
}

export default Layout