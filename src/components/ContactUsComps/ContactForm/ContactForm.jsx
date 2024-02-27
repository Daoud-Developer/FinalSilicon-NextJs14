"use client";

function ContactForm() {
  return (
      <div className="col-xl-6 col-lg-7 offset-xl-2">
              <div className="card border-light shadow-lg py-3 p-sm-4 p-md-5">
                <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block"></div>
                <div className="card-body position-relative zindex-2">
                  <h2 className="card-title pb-3 mb-4">Get Online Consultation</h2>
                  <form className="row g-4 needs-validation" noValidate>
                    <div className="col-12">
                      <label htmlFor="fn" className="form-label fs-base">Full name</label>
                      <input type="text" className="form-control form-control-lg" id="fn" required/>
                      <div className="invalid-feedback">Please enter your full name!</div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label fs-base">Email address</label>
                      <input type="email" className="form-control form-control-lg" id="email" required/>
                      <div className="invalid-feedback">Please provid a valid email address!</div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="specialist" className="form-label fs-base">Specialist</label>
                      <select className="form-select form-select-lg" id="specialist" required>
                        <option value="" selected disabled>Choose a specialist</option>
                        <option value="Therapist">Therapist</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Cardiologist">Cardiologist</option>
                        <option value="Pediatrician">Pediatrician</option>
                        <option value="Gynecologist">Gynecologist</option>
                        <option value="Surgeon">Surgeon</option>
                      </select>
                      <div className="invalid-feedback">Choose a specialist from the list!</div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="date" className="form-label fs-base">Date</label>
                      <input type="text" className="form-control form-control-lg" id="date" data-format='{"date": true, "datePattern": ["m", "d"]}' placeholder="mm/dd" required/>
                      <div className="invalid-feedback">Enter a date!</div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="time" className="form-label fs-base">Time</label>
                      <input type="text" className="form-control form-control-lg" id="time" data-format='{"time": true, "timePattern": ["h", "m"]}' placeholder="hh:mm" required/>
                      <div className="invalid-feedback">Enter a time!</div>
                    </div>
                    <div className="col-12 pt-2 pt-sm-3">
                      <button type="submit" className="btn btn-lg btn-primary w-100 w-sm-auto">Make an appointment</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
  )
}

export default ContactForm