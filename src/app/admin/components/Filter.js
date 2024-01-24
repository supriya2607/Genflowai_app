function Filter() {
    return(
        <div className="container-fluid mt--6">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-5">
              <div className="card-body">
                <form            
                >
                  <h6 className="heading-small text-muted mb-4">FILTER</h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="form-group">
                          <label htmlFor="state_id" className="form-control-label">
                            State
                          </label>
                          <select
                            className="form-control form-control-sm"
                            name="state_id"
                            id="state_id"
                            value="" >                           
                            <option value={37}>Orissa</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <input type="hidden" id="city_id_hidden" defaultValue="" />
                          <label htmlFor="city_id" className="form-control-label">
                            District
                          </label>
                          <select
                            className="custom- form-control form-control-sm select"
                            id="city_id"
                            name="city_id"
                          >
                            <option value="">Select District</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <label
                            htmlFor="client_type"
                            name="client_type"
                            className="form-control-label"
                          >
                            Type
                          </label>
                          <select
                            className="form-control form-control-sm"
                            id="client_type"
                            name="client_type"
                            placeholder="client_type"
                          >
                            <option value="" selected="">
                              Select Type
                            </option>
                            <option value={1}>Prime</option>
                            <option value={2}>Non Prime</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <label htmlFor="pincode" className="form-control-label">
                            Pincode
                          </label>
                          <input
                            className="form-control form-control-sm"
                            name="pincode"
                            type="text"
                            id="pincode"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <label
                            htmlFor="referral_code"
                            className="form-control-label"
                          >
                            Referral Name
                          </label>
                          <select
                            className="form-control"
                            id="referral_code"
                            name="referral_code"
                          >
                            <option value="" selected="">
                           
                            </option>
                            <option value="AHB SURAKSHA">SURAKSHA TEAM</option>
                         
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div>
                        <input
                          className="btn btn-sm col-xs-2 btn-primary"
                          type="submit"
                          defaultValue="Submit"
                        />
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