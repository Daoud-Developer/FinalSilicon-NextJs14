"use client";
import Link from 'next/link'

function CTAComp() {
  return (
     <section className="bg-secondary py-5">
        <div className="container text-center py-1 py-md-4 py-lg-5">
          <h2 className="h1 mb-4">Ready to Get Started?</h2>
          <p className="lead pb-3 mb-3">Organize your tasks with a 14-day free trial</p>
            <Link href="#" className="btn btn-primary shadow-primary btn-lg mb-1">Get started</Link>
        </div>
      </section>
  )
}

export default CTAComp