"use client";
import Link from 'next/link'
function LayoutSwitcher() {
  return (
    <div>
                <div className="d-flex align-items-center">
                  <div className="nav flex-nowrap me-sm-4 me-3">
                      <Link href="/blog" className="nav-link me-2 p-0" aria-label="List view">
                      <i className="bx bx-list-ul fs-4"></i>
                    </Link>
                      <Link href="/blog" className="nav-link p-0 active" aria-label="Grid view">
                      <i className="bx bx-grid-alt fs-4"></i>
                    </Link>
                  </div>
                  <select className="form-select">
                    <option>All categories</option>
                    <option value="processes-and-tools">Processes &amp; Tools</option>
                    <option value="startups">Startups</option>
                    <option value="digital">Digital</option>
                    <option value="strategy">Strategy</option>
                    <option value="business">Business</option>
                  </select>
                </div>
    </div>
  )
}

export default LayoutSwitcher