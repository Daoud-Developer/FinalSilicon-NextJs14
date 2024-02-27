"use client";

function CommentForm() {
  return (
      <div className="col-lg-9">
            <div className="card p-md-5 p-4 border-0 bg-secondary">
              <div className="card-body w-100 mx-auto px-0" style={{maxwidth: "746px"}}>
                <h2 className="mb-4 pb-3">Leave a Comment</h2>
                <form className="row gy-4 needs-validation" noValidate>
                  <div className="col-sm-6 col-12">
                    <label htmlFor="c-name" className="form-label fs-base">Name</label>
                    <input id="c-name" type="text" className="form-control form-control-lg" required/>
                    <span className="invalid-tooltip">Please, enter your name.</span>
                  </div>
                  <div className="col-sm-6 col-12">
                    <label htmlFor="c-email" className="form-label fs-base">Email</label>
                    <input id="c-email" type="email" className="form-control form-control-lg" required/>
                    <span className="invalid-tooltip">Please, provide a valid email address.</span>
                  </div>
                  <div className="col-12">
                    <label htmlFor="c-comment" className="form-label fs-base">Comment</label>
                    <textarea id="c-comment" className="form-control form-control-lg" rows="3" placeholder="Type your comment here..." required></textarea>
                    <span className="invalid-tooltip">Please, enter your comment.</span>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input id="c-save" type="checkbox" className="form-check-input"/>
                      <label htmlFor="c-save" className="form-check-label">Save my name and email in this browser for the next time I comment.</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-lg btn-primary w-sm-auto w-100 mt-2">Post comment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
  )
}

export default CommentForm