"use client";
import Link from "next/link"

function Audioplayer() {
  return (
        <div>
            <div className="card p-lg-4 p-md-2 mb-4 mb-lg-5">

              {/* <!-- Audio player --> */}
              <div className="audio-player card-body p-2 p-sm-4">
                <audio  src="assets/audio/sample.wav" preload="auto"></audio>
                <button type="button" className="ap-play-button btn btn-icon btn-primary shadow-primary" aria-label="Play/pause"></button>
                <span className="ap-current-time flex-shr fw-medium mx-3 mx-lg-4">0:00</span>
                <input type="range" className="ap-seek-slider" max="100" value="0"/>
                <span className="ap-duration flex-shr fw-medium mx-3 mx-lg-4">0:00</span>
                <div className="dropup">
                  <button type="button" className="ap-volume-button btn btn-icon btn-secondary" data-bs-toggle="dropdown" data-bs-auto-close="outside"  aria-haspopup={true}  aria-expanded={false} aria-label="Volume">
                    <i className="bx bx-volume-full"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-dark my-1">
                    <input type="range" className="ap-volume-slider" max="100" value="100"/>
                  </div>
                </div>
               <Link href="assets/audio/sample.wav" download="audio-sample" className="btn btn-icon btn-secondary ms-2" aria-label="Download">
                  <i className="bx bx-download"></i>
                </Link>
              </div>
            </div>
            <h3 className="h4 mb-4 pt-2 pt-md-0">Timeline</h3>
            <ul className="list-unstyled mb-0">
              <li className="d-flex mb-2">
                <span className="flex-shrink-0 fw-medium text-nowrap me-2" style={{width: "80px"}}>00:05:12</span>
                Diam erat molestie duis auctor sit quis.
              </li>
              <li className="d-flex mb-2">
                <span className="flex-shrink-0 fw-medium text-nowrap me-2 text-primary" style={{width: "80px"}}>00:28:19</span>
                Non mi eget molestie pretium commodo urna duis facilisis turpis.
              </li>
              <li className="d-flex mb-2">
                <span className="flex-shrink-0 fw-medium text-nowrap me-2" style={{width: "80px"}}>00:45:37</span>
                Sit placerat adipiscing interdum libero neque, aliquam nec imperdiet ullamcorper.
              </li>
              <li className="d-flex mb-2">
                <span className="flex-shrink-0 fw-medium text-nowrap me-2" style={{width: "80px"}}>00:56:04</span>
                Pulvinar eu porttitor nulla morbi varius tristique leo.
              </li>
              <li className="d-flex mb-2">
                <span className="flex-shrink-0 fw-medium text-nowrap me-2" style={{width: "80px"}}>01:32:17</span>
                Cras et gravida iaculis vel at quis euismod.
              </li>
              <li className="d-flex mb-2">
                <span className="flex-shrink-0 fw-medium text-nowrap me-2" style={{width: "80px"}}>01:50:43</span>
                Volutpat malesuada nulla lectus justo tempus est sollicitudin.
              </li>
            </ul>
          </div>
      
  )
}

export default Audioplayer