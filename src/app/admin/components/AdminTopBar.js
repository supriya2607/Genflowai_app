


function AdminTopBar() {
  return (
    <div className='topright'>
        <div className="profile_drop_down_button">
        <i class="fa-solid fa-user"></i>
        <span className="user_name">Admin</span>
        <i className="fas fa-chevron-down" />
       
        <div class="profile_dropdown_box">
           <ul>
                 <li><a href="/profile"><i class="fa-solid fa-user"></i>My Profile</a></li>
                 <li><a href="/setting"><i class="fa fa-key"></i>Setting</a></li>
                 <li><a href="/logout"><i class="fa fa-power-off"></i> Log out </a></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default AdminTopBar