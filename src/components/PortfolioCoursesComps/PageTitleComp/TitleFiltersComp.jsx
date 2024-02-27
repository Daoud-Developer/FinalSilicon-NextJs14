"use client";

function TitleFiltersComp() {
  return (
      <div className="d-lg-flex align-items-center justify-content-between py-4 mt-lg-2">
      <h1 className="me-3">Courses</h1>
      <div className="d-md-flex mb-3">
        <select className="form-select me-md-4 mb-2 mb-md-0" style={{minWidth: "240px"}}>
          <option value="All">All categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Programming">Programming</option>
          <option value="Game Development">Game Development</option>
          <option value="Software Testing">Software Testing</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Network & Security">Network &amp; Security</option>
        </select>
        <div className="position-relative" style={{minWidth: "300px"}}>
          <input type="text" className="form-control pe-5" placeholder="Search courses"/>
          <i className="bx bx-search text-nav fs-lg position-absolute top-50 end-0 translate-middle-y me-3"></i>
        </div>
      </div>
    </div>
  )
}

export default TitleFiltersComp