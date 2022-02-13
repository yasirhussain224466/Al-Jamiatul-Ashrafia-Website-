import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaHome } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import sidebarBg from "../../../assets/Images/bg1.jpg";
import { BsFillPeopleFill, BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { MdPermMedia } from "react-icons/md";

const Aside = ({ collapsed, toggled, handleToggleSidebar }) => {
  const changeBoolean = () => {
    handleToggleSidebar(false);
  };
  return (
    <ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "70px 24px 24px 24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "2px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Al-Jamiatul Ashrafiya
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* <Menu iconShape="circle">
                    <div style={{ display: 'flex', marginLeft:'0px' }}>
                        <div style={{ flexGrow: 1 }}>
                            <MenuItem icon={<FaHome />}>

                            </MenuItem>
                        </div>
                        <div style={{ marginLeft:'0px' }}>
                            <MenuItem icon={<FaHome />}>

                            </MenuItem>
                        </div>
                    </div>
                </Menu> */}
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaHome />}
            suffix={<span className="badge red"></span>}
          >
            <div style={{ display: "flex" }}>
              <div style={{ flexGrow: 1 }}>
                <NavLink onClick={() => changeBoolean()} to="/" exact>
                  Home
                </NavLink>
              </div>

              {/* <div><Button variant={Text}><BiArrowFromRight /></Button></div> */}
            </div>
          </MenuItem>
          <SubMenu title="Library" icon={<ImBook />}>
            <MenuItem>
              <NavLink
                onClick={() => changeBoolean()}
                to="/library/books"
                exact
              >
                Books
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                onClick={() => changeBoolean()}
                to="/library/articles"
                exact
              >
                Articles
              </NavLink>
            </MenuItem>
          </SubMenu>
          <SubMenu title="Media" icon={<MdPermMedia />}>
            <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/Gallery">
                Gallery
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/Gallery">
                Videos
              </NavLink>
            </MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title="Khanwada Ashrafiya"
            icon={<BsFillPeopleFill />}
          >
            <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/Makhdoom Pak">
                Makhdoom Pak
              </NavLink>
            </MenuItem>
            {/* <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/">Norr ul Ain</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/">Shaikh-e-Tareeqat</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/">Kaleem ul Awliya</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/">Jamal-e-Millat</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/">Dr Syed Aleem Ashraf</NavLink>
            </MenuItem> */}
          </SubMenu>
          <SubMenu title="Shijra Shareef" icon={<BsFillPersonLinesFill />}>
            <MenuItem>
              <NavLink
                onClick={() => changeBoolean()}
                exact
                to="/Nasab_Nama_Noor_Makhdoom_Pak"
              >
                Nasab Nama Noor Makhdoom Pak
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                onClick={() => changeBoolean()}
                exact
                to="/Nasab_Nama_Noor_ul_Ain"
              >
                Nasab Nama Noor ul Ain
              </NavLink>
            </MenuItem>
            <SubMenu title="Shijra Hazrat Syed Kaleem Ashraf Jilani">
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shijra_hazrat_syed_kaleem_ashraf_jilani/english"
                >
                  English Language
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shijra_hazrat_syed_kaleem_ashraf_jilani/urdu"
                >
                  Urdu Language
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shijra_hazrat_syed_kaleem_ashraf_jilani/bangla"
                >
                  Bangla Language
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shijra_hazrat_syed_kaleem_ashraf_jilani/creole"
                >
                  Creole Language
                </NavLink>
              </MenuItem>
            </SubMenu>
            <SubMenu title="Shajra Hazrat Syed Naseem Ashraf Jilani">
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shajra_hazrat_syed_naseem_ashraf_jilani/english"
                >
                  English Language
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shajra_hazrat_syed_naseem_ashraf_jilani/urdu"
                >
                  Urdu Language
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shajra_hazrat_syed_naseem_ashraf_jilani/bangla"
                >
                  Bangla Language
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shajra_hazrat_syed_naseem_ashraf_jilani/creole"
                >
                  Creole Language
                </NavLink>
              </MenuItem>
            </SubMenu>
            <SubMenu title="Shajra Hazrat Syed Qaseem Hasan Ashraf Jilani">
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shajra_hazrat_syed_qaseem_hassan_ashraf_jilani/english"
                >
                  English Language
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shajra_hazrat_syed_qaseem_hassan_ashraf_jilani/urdu"
                >
                  Urdu Language
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shajra_hazrat_syed_qaseem_hassan_ashraf_jilani/bangla"
                >
                  Bangla Language
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shajra_hazrat_syed_qaseem_hassan_ashraf_jilani/creole"
                >
                  Creole Language
                </NavLink>
              </MenuItem>
            </SubMenu>
            <SubMenu title="Shajra Hazrat Syed Jamal Ashraf Jilani">
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shajra_hazrat_syed_jamal__ashraf_jilani/english"
                >
                  English Language
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shajra_hazrat_syed_jamal__ashraf_jilani/urdu"
                >
                  Urdu Language
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shajra_hazrat_syed_jamal__ashraf_jilani/bangla"
                >
                  Bangla Language
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => changeBoolean()}
                  exact
                  to="/shajra_hazrat_syed_jamal__ashraf_jilani/creole"
                >
                  Creole Language
                </NavLink>
              </MenuItem>
            </SubMenu>
            {/* <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact >Shijra (Urdu Language)</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact >Shijra (English Language)</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink href="">Shijra (Bangla Language)</NavLink>
            </MenuItem> */}
          </SubMenu>
          <SubMenu title="About Us" icon={<AiFillInfoCircle />}>
            {/* <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/">History and Timeline </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/">Vission,Mission and Core Values</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/">International Linkage</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/">Management</NavLink>
            </MenuItem> */}
          </SubMenu>

          <MenuItem icon={<TiContacts />}>
            <NavLink onClick={() => changeBoolean()} to="/Contact" exact>
              {" "}
              Contact Us
            </NavLink>
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        {/* <div
                    className="sidebar-btn-wrapper"
                    style={{

                        padding: '20px 24px 0px 24px',
                    }}
                >
                    <a
                        href="https://www.facebook.com/profile.php?id=100008217362725"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                        <span>Facebook</span>
                    </a>
                </div>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '5px 24px 5px 24px',
                    }}
                >
                    <a
                        href="https://www.facebook.com/profile.php?id=100008217362725"
                        target="_blank"
                        className="sidebar-btn"
                    // rel="noopener noreferrer"
                    >
                        <SiYoutube />
                        <span> Youtube</span>
                    </a>
                </div> */}
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
