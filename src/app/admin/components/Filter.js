function Filter() {
    return(
        <div className="container-fluid mt--6">
        <div className="row">
          <div className="col-md-12 px-0">
            <div className="card mb-5 mt-5">
              <div className="card-body">

                <form>
                  <h6 className="heading-small text-muted mb-4">FILTER</h6>
                  <div className="pl-lg-4">
                    <div className="row">

                      <div className="col-lg-3">
                        <div className="form-group">
                          <label htmlFor="state_id" className="form-control-label">State</label>
                          <select className="form-control form-control-sm">                           
                            <option >Orissa</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div className="form-group">                        
                          <label htmlFor="city_id" className="form-control-label">District</label>
                          <select className="custom- form-control form-control-sm select">
                            <option>Select District</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div className="form-group">
                          <label  className="form-control-label" >Type</label>
                          <select className="form-control form-control-sm" placeholder="client_type" defaultValue="Select Type">
                            <option>Select Type</option>
                            <option >Prime</option>
                            <option >Non Prime</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div className="form-group">
                          <label htmlFor="pincode" className="form-control-label">Pincode</label>
                          <input className="form-control form-control-sm"/>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div className="form-group">
                          <label className="form-control-label">Referral Name</label>
                          <select className="form-control">                            
                            <option>SURAKSHA TEAM</option>                         
                          </select>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col">
                        <input className="btns btn-sm col-xs-2 btn-primary" type="submit" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>        
      </div>
      
    )
    }
    
    export default Filter;