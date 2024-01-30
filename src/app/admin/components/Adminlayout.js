import Sidebar from '@/app/admin/components/Sidebar'
import Filter from '@/app/admin/components/Filter'
import Adminnavbar from './adminnavbar';
import AdminTopBar from './AdminTopBar';


export default function sidebar({children, pageData, filter = true}) {
    return (
      < div className='mainwrapper'>
      <div className='leftsec'> <Sidebar/></div>
      <div className='rightsec centersec'><div className='admintop_bar'><AdminTopBar/></div>{filter && <Filter/>}<div className='centerdetail'><Adminnavbar pageData={pageData}/>{children}</div></div>
      </div>
    );
  }
  