import {
  SettingOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./Navigation.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "flex-end",
          marginTop: "3px",
          fontSize: "1.1rem",
          color: "grey",
        }}
      >
        <Link to={"/register"}>
          <div className="navig-item">
            <UserAddOutlined />
            <span>Register</span>
          </div>
        </Link>
        <Link to={"login"}>
          <div className="navig-item">
            <LoginOutlined />
            <span>Login</span>
          </div>
        </Link>
        <div className="navig-item">
          <LogoutOutlined />
          <span>LogOut</span>
        </div>
        <div className="navig-item">
          <SettingOutlined />
          <span>Settings</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Navigation;
