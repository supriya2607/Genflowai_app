import Sidebar from '@/app/admin/components/Sidebar'
import Filter from '@/app/admin/components/Filter'
import Adminnavbar from './adminnavbar';


export default function sidebar({children, pageData}) {
    return (
      <>
        <Sidebar/>
      <Filter/>
      <Adminnavbar pageData={pageData}/>
      {children}
      </>
    );
  }
  