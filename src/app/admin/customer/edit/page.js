import React from 'react'
import Adminlayout from '@/app/admin/components/Adminlayout'

const pageData = {
 type : 'Edit Customer',
 url : '/customer/edit',
}

function Editcustomer() {
  return (
    <Adminlayout pageData={pageData} filter = {false}>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12">
            <div className="bgcolor mb-5">
             

                <form>
                  
                  <div className="pl-lg-4">
                    <div className="row">

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label">Name</label>
                          <input className="form-control form-control-sm"/>
                        </div>
                      </div>

                      
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="Animal" className="form-control-label">Animal</label>
                          <input className="form-control form-control-sm"/>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="Mobile No" className="form-control-label">Mobile No</label>
                          <input className="form-control form-control-sm"/>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="Referral" className="form-control-label">Referral</label>
                          <input className="form-control form-control-sm"/>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="Email Id" className="form-control-label">Email Id</label>
                          <input className="form-control form-control-sm"/>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="Pincode" className="form-control-label">Pincode</label>
                          <input className="form-control form-control-sm"/>
                        </div>
                      </div>

                       <div className="col-lg-6">
                        <div className="form-group">                        
                          <label className="form-control-label">State</label>
                          <select className="custom- form-control form-control-sm select">
                            <option> Please Select</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">                        
                          <label className="form-control-label">District</label>
                          <select className="custom- form-control form-control-sm select">
                            <option> Please Select</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">                        
                          <label className="form-control-label">Block</label>
                          <select className="custom- form-control form-control-sm select">
                            <option> Please Select</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">                        
                          <label className="form-control-label">Type</label>
                          <select className="custom- form-control form-control-sm select">
                            <option> Please Select</option>
                          </select>
                        </div>
                      </div>

                      

                    </div>
                  </div>

                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col">
                       <a href='' className='btns btn-sm col-xs-2  mt-3'> <i className="fas fa-save"></i>Save</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>        
     
      
    </Adminlayout>

  )
}

export default Editcustomer