import Adminlayout from '@/app/admin/components/Adminlayout'

const pageData = {
 type : 'Dashboard',
 url : '/admin',
}

export default function sidebar() {
    return (
      <>
        <Adminlayout pageData={pageData}>
          <p>dtgfg</p>
        </Adminlayout>
      </>
    );
  }
  