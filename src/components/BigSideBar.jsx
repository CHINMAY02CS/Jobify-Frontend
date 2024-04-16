import Wrapper from "../assets/wrappers/BigSidebar"
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { userDashboardContext } from "../pages/DashboardLayout";

const BigSideBar=()=> {
  
  const {showSidebar} = userDashboardContext();

  return (
    
    <Wrapper>
      <div className={showSidebar?'sidebar-container':'sidebar-container  show-sidebar'}>
      <div className="content">
        <header>
          <Logo/>
        </header>
        <Navlinks isBigSidebar />
      </div>

      </div>
    </Wrapper>
  )
}
export default BigSideBar;