import Adminlayout from '@/app/admin/components/Adminlayout'

const pageData = {
 type : 'Customer',
 url : '/admin',
}
function customer (){
return(
<Adminlayout pageData={pageData}>
<div style={{overflowX:"auto"}}>
    <table className='table table-striped table-bordered '>
        <thead>
        <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Animal</th>
        <th>Mobile</th>
        <th>Referral</th>
        <th>Email</th>
        <th>Destrict</th>
        <th>State</th>
        <th>Block</th>
        <th>Pincode</th>
        <th>Status</th>
        </tr>
        
        <tr>
            <td>Suraj</td>
            <td>Prime</td>
            <td>7</td>
            <td>7817009303</td>
            <td>N/A</td>
            <td>ss@gmail.com</td>
            <td>Gorakhpur</td>
            <td>Bihar (BR)</td>
            <td>Khatima</td>
            <td>262308</td>
            <td><span className="badge badge-pill badge-lg badge-success font-weight-light">Active</span></td>
        </tr>
        </thead>
    </table>
    </div>
</Adminlayout>
)
}

export  default customer;