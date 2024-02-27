"use client";
import Image from 'next/image'
import Link from 'next/link'

function PostComments() {
  return (
    <div>
        <section className="container mb-4 pb-lg-3">
        <h2 className="h1">4 comments</h2>
        <div className="row">

          {/* <!-- Comments --> */}
          <div className="col-lg-9">

            {/* <!-- Comment --> */}
            <div className="py-4">
              <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                <div className="d-flex align-items-center me-3">
                  <Image src="/../../../../assets/img/avatar/03.jpg" className="rounded-circle" width={48} height={48} alt="Avatar"/>
                  <div className="ps-3">
                    <h6 className="fw-semibold mb-0">Esther Howard</h6>
                    <span className="fs-sm text-muted">4 mins ago</span>
                  </div>
                </div>
               <Link href="#" className="nav-link fs-sm px-0">
                  <i className="bx bx-share fs-lg me-2"></i>
                  Reply
                </Link>
              </div>
              <p className="mb-0">Nibh enim porta ut augue felis, donec sit luctus. Quis ullamcorper dolor sit mauris. Hendrerit eu libero, eu tristique sodales ultrices etiam adipiscing. Donec viverra sodales arcu gravida nibh at. Neque lobortis quis porta integer et placerat lectus scelerisque. Velit eget malesuada morbi faucibus at sed euismod. Tortor, eu ut id tincidunt leo placerat luctus.</p>
            </div>

            <hr className="my-2"/>

            {/* <!-- Comment --> */}
            <div className="py-4">
              <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                <div className="d-flex align-items-center me-3">
                  <Image src="/../../../../assets/img/avatar/02.jpg" className="rounded-circle" width={48} height={48} alt="Avatar"/>
                  <div className="ps-3">
                    <h6 className="fw-semibold mb-0">Ralph Edwards</h6>
                    <span className="fs-sm text-muted">September 9 at 12:48</span>
                  </div>
                </div>
               <Link href="#" className="nav-link fs-sm px-0">
                  <i className="bx bx-share fs-lg me-2"></i>
                  Reply
                </Link>
              </div>
              <p className="mb-0 pb-2">Eget amet, ac scelerisque tellus sed. Sapien duis sit neque pulvinar. Est sit aenean nisl etiam donec mattis ut diam. Luctus massa eu nunc aliquam viverra tempus, eu amet, luctus. Ac faucibus vestibulum eu lacus. Ullamcorper sem ultrices tincidunt pharetra?</p>

              {/* <!-- Comment reply --> */}
              <div className="position-relative ps-4 mt-4">
                <span className="position-absolute top-0 start-0 w-1 h-100 bg-primary"></span>
                <div className="d-flex align-items-center justify-content-between ps-3 pb-2 mb-1">
                  <div className="d-flex align-items-center me-3">
                    <Image src="/../../../../assets/img/avatar/05.jpg" className="rounded-circle" width={48} height={48} alt="Avatar"/>
                    <div className="ps-3">
                      <h6 className="fw-semibold mb-0">Albert Flores</h6>
                      <span className="fs-sm text-muted">16 hours ago</span>
                    </div>
                  </div>
                 <Link href="#" className="nav-link fs-sm px-0">
                    <i className="bx bx-share fs-lg me-2"></i>
                    Reply
                  </Link>
                </div>
                <p className="ps-3 mb-0">
                <Link href="#" className="fw-semibold text-decoration-none">@Ralph Edwards</Link> 
                Vulputate malesuada amet, consequat ullamcorper. Orci, cras maecenas in sit purus pellentesque.
                 Ridiculus blandit pellentesque eget arcu morbi nisl. Morbi volutpat adipiscing sapien sed ut tempor.
                 </p>
              </div>
            </div>

            <hr className="my-2"/>

            {/* <!-- Comment --> */}
            <div className="py-4">
              <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                <div className="d-flex align-items-center me-3">
                  <Image src="/../../../../assets/img/avatar/07.jpg" className="rounded-circle" width={48} height={48} alt="Avatar"/>
                  <div className="ps-3">
                    <h6 className="fw-semibold mb-0">Cameron Williamson</h6>
                    <span className="fs-sm text-muted">March 24 at 8:20</span>
                  </div>
                </div>
               <Link href="#" className="nav-link fs-sm px-0">
                  <i className="bx bx-share fs-lg me-2"></i>
                  Reply
                </Link>
              </div>
              <p className="mb-0">Mattis id ut sed arcu metus elit faucibus condimentum aliquam. Nam adipiscing diam et suspendisse. Sagittis massa maecenas laoreet nulla amet nunc sagittis, pulvinar neque. Duis imperdiet ipsum suspendisse massa lectus habitasse. Id ante volutpat hendrerit augue parturient eget. Ac vitae posuere leo morbi vitae at hac lectus. Nibh neque quam quis amet mattis sit. Faucibus risus at sit tempus ut.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PostComments