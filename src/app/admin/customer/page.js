import Adminlayout from '@/app/admin/components/Adminlayout'

const pageData = {
 type : 'Customer',
 url : '/admin',
}
function customer (){
return(
<Adminlayout pageData={pageData}>
    <table>
        <thead>
        <tr>
        <th  style={{ width: "170px"}}>Name</th>
        <th style={{ width: "61px"}}>Type</th>
        <th style={{ width: "61px"}}>Animal</th>
        <th style={{ width: "100px"}}>Mobile</th>
        <th style={{ width: "61px"}}>Referral</th>
        <th style={{ width: "180px"}}>Email</th>
        <th style={{ width: "61px"}}>Destrict</th>
        <th style={{ width: "61px"}}>State</th>
        <th style={{ width: "61px"}}>Block</th>
        <th style={{ width: "80px"}}>Pincode</th>
        <th style={{ width: "61px"}}>Status</th>
        </tr>
        </thead>
    </table>
</Adminlayout>
)
}

export  default customer;