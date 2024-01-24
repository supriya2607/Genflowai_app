'use client'
import logo from "@/app/assets/images/logo.jpeg";
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";



function AdminLogin() {
    return(
        <>
       <div className="loginlogo"> <Image src={logo} alt="Logo" /></div>
          <div className="container">
          <div className="row  justify-content-center">
            <div className="col-lg-6 col-md-8">           
                <div className="card bg-secondary border border-soft">
                
                    <div className="card-header px-lg-5 bg-transparent">
                        <h3 className="text-muted text-center my-2">Sign In</h3>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5 pt-2">
                        <form>
                             <div className="form-group">
                                <div className="input-group input-group-merge input-group-alternative mb-3">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                                    </div>
                                  <input  type="email"  className="form-control "/>
                                 </div>
                            </div>

                            <div className="form-group">
                                <div className="input-group input-group-merge input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                                    </div>
                                    <input id="password" type="password"  className="form-control " />
                               </div>
                            </div>
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input className="custom-control-input"  type="checkbox"/>
                                <label className="custom-control-label">
                                    <span>Remember me</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btns mt-4" >Login</button>
                            </div>                            
                        </form>
                    </div>
                </div>            


            </div>
        </div>
          </div>
        </>
    )
}

export default AdminLogin; 