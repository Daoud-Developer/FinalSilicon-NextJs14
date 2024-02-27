"use client";

function DesktopForm() {
  return (
       <form className="d-none d-sm-flex mb-5">
        <div className="input-group d-block d-sm-flex input-group-lg me-3">
          <input type="text" className="form-control w-50" placeholder="Search courses..."/>
          <select
          className="form-select w-50">
            <option value="" selected disabled>Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Programming">Programming</option>
            <option value="Game Development">Game Development</option>
            <option value="Software Testing">Software Testing</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Network & Security">Network &amp; Security</option>
          </select>
        </div>
        <button type="submit" className="btn btn-icon btn-primary btn-lg" aria-label="Search">
          <i className="bx bx-search"></i>
        </button>
      </form>
  )
}

export default DesktopForm