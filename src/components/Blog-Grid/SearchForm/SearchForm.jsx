"use client";
function SearchForm() {
  return (
    <div>
      <div className="input-group">
      <input type="text" className="form-control pe-5 rounded" placeholder="Search the blog..."/>
        <i className="bx bx-search position-absolute top-50 end-0 translate-middle-y me-3 zindex-5 fs-lg"></i>
      </div>
    </div>
  )
}

export default SearchForm