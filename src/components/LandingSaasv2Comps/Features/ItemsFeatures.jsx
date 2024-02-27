"use client";
import Image from "next/image";

function ItemsFeatures() {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-0 pb-xl-3">

            {/* <!-- Item --> */}
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                 <Image src="assets/img/landing/saas-2/features/comments.svg" width={40} height={40} alt="Comments"/>
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Comments on Tasks</h3>
                  <p className="mb-0">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-sm-block"/>
              <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block"/>
            </div>

            {/* <!-- Item --> */}
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                 <Image src="/assets/img/landing/saas-2/features/analytics.svg" width={40} height={40} alt="Analytics"/>
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Tasks Analytics</h3>
                  <p className="mb-0">Non imperdiet facilisis nulla tellus Morbi scelerisque eget adipiscing vulputate.</p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-md-block"/>
              <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block"/>
            </div>

            {/* <!-- Item --> */}
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                 <Image src="/assets/img/landing/saas-2/features/group.svg" width={40} height={40} alt="Group"/>
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Multiple Assignees</h3>
                  <p className="mb-0">A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-sm-block d-md-none"/>
              <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block"/>
            </div>

            {/* <!-- Item --> */}
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                 <Image src="/assets/img/landing/saas-2/features/notifications.svg" width={40} height={40} alt="Notifications"/>
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Notifications</h3>
                  <p className="mb-0">Diam, suspendisse velit cras ac. Lobortis diam volutpat, eget pellentesque viverra.</p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-md-block"/>
              <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block d-md-none"/>
            </div>
            
            {/* <!-- Item --> */}
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                 <Image src="/assets/img/landing/saas-2/features/tasks.svg" width={40} height={40} alt="Tasks"/>
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Sections &amp; Subtasks</h3>
                  <p className="mb-0">Mi feugiat hac id in. Sit elit placerat lacus nibh lorem ridiculus lectus.</p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-sm-block"/>
            </div>

            {/* <!-- Item --> */}
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                 <Image src="/assets/img/landing/saas-2/features/security.svg" width={40} height={40} alt="Security"/>
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Data Security</h3>
                  <p className="mb-0">Aliquam malesuada neque eget elit nulla vestibulum nunc cras.</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ItemsFeatures