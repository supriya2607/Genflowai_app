import Sidebar from './components/Sidebar';

const pageData = {
 type : 'Dashboard',
 url : '/admin',
}

export default function sidebar() {
    return (
      <>
        <Sidebar pageData={pageData}/>
        <p>Dashboard content</p>
      </>
    );
  }
  