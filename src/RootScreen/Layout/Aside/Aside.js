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
import { useParams } from "react-router";

const Aside = ({ collapsed, toggled, handleToggleSidebar }) => {

  const changeBoolean = () => {
    handleToggleSidebar(false);
  };
  const { Contact } = useParams();
  console.log(Contact);
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
                to="/Library_SeratTyeba"
                exact
              >
                Seerat-e-Tyeba
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                onClick={() => changeBoolean()}
                to="/Library_MilladIbneKaseer"
                exact
              >
                Milaad Ibne Kaseeer
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                onClick={() => changeBoolean()}
                to="/Library_hindustankaTazkirah"
                exact
              >
                Hindustan Ka Tazkirah
              </NavLink>
            </MenuItem>
          </SubMenu>
          <SubMenu title="Media" icon={<MdPermMedia />}>
            <MenuItem>
              <NavLink onClick={() => changeBoolean()} exact to="/Gallery">
                Gallery
              </NavLink>
            </MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title="Khanwada Ashrafiya"
            icon={<BsFillPeopleFill />}
          >
            <MenuItem>
              <a href="">Makhdoom Pak</a>
            </MenuItem>
            <MenuItem>
              <a href="">Norr ul Ain</a>
            </MenuItem>
            <MenuItem>
              <a href="">Shaikh-e-Tareeqat</a>
            </MenuItem>
            <MenuItem>
              <a href="">Kaleem ul Awliya</a>
            </MenuItem>
            <MenuItem>
              <a href="">Jamal-e-Millat</a>
            </MenuItem>
            <MenuItem>
              <a href="">Dr Syed Aleem Ashraf</a>
            </MenuItem>
          </SubMenu>
          <SubMenu title="Shijra" icon={<BsFillPersonLinesFill />}>
            <MenuItem>
              <a href="">Nasab Nama Noor Makhdoom Pak</a>
            </MenuItem>
            <MenuItem>
              <a href="">Nasab Nama Noor ul Ain</a>
            </MenuItem>
            <MenuItem>
              <a href="">Shijra (Urdu Language)</a>
            </MenuItem>
            <MenuItem>
              <a href="">Shijra (English Language)</a>
            </MenuItem>
            <MenuItem>
              <a href="">Shijra (Bangla Language)</a>
            </MenuItem>
          </SubMenu>
          <SubMenu title="About Us" icon={<AiFillInfoCircle />}>
            <MenuItem>
              <a href="">History and Timeline </a>
            </MenuItem>
            <MenuItem>
              <a href="">Vission,Mission and Core Values</a>
            </MenuItem>
            <MenuItem>
              <a href="">International Linkage</a>
            </MenuItem>
            <MenuItem>
              <a href="">Management</a>
            </MenuItem>
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