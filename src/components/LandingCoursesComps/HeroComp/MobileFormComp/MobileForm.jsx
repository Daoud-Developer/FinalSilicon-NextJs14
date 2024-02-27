"use client";

function MobileFormComp() {
  return (
  
       <form className="d-sm-none mb-5">
        <input type="text" className="form-control form-control-lg mb-2" placeholder="Search courses..."/>
        <select className="form-select form-select-lg mb-2">
          <option value="" selected disabled>Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Programming">Programming</option>
          <option value="Game Development">Game Development</option>
          <option value="Software Testing">Software Testing</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Network & Security">Network &amp; Security</option>
        </select>
        <button type="submit" className="btn btn-icon btn-primary btn-lg w-100 d-sm-none" aria-label="Search">
          <i className="bx bx-search"></i>
        </button>
      </form>
 
  )
}

export default MobileFormComp