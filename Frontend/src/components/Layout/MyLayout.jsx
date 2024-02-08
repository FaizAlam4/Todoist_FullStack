import { Layout } from "antd";
const { Header, Content, Sider } = Layout;
import Navigation from "../Navigation/Navigation.jsx";
import ProjectSection from "../ProjectSection/ProjectSection.jsx";
import ProjectHome from "../ProjectSection/ProjectHome.jsx";
import SideMenu from "../SideMenu/SideMenu.jsx";
import { Routes, Route } from "react-router-dom";
import NavigationTwo from "../Navigation/NavigationTwo.jsx";
import ErrorPage from "../ErrorComponent/ErrorPage.jsx";
import ResourceError from "../ErrorComponent/ResourceError.jsx";
import Registration from "../Auth/Registration.jsx";
import Login from "../Auth/Login.jsx";
import SideMenuTwo from "../SideMenu/SideMenuTwo.jsx";

const headerStyle = {
  textAlign: "center",
  color: "black",
  minHeight: 90,
  paddingInline: 40,
  lineHeight: "30px",
  backgroundColor: "white",
  paddingTop: "10px",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 100,
  lineHeight: "35px",
  color: "black",
  backgroundColor: "white",
  // marginTop: "60px"
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "100px",
  backgroundColor: "white",
  color: "black",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100vw",
  padding: "0px",
  margin: "0px",
  height: "100vh",
};

function MyLayout() {
  return (
    <Layout style={layoutStyle}>
      <Sider width="20%" style={siderStyle}>
        <Routes>
          <Route path={"/"} element={<SideMenu />}></Route>
          <Route path={"/:id"} element={<SideMenu />}></Route>
          <Route path={"/login"} element={<SideMenuTwo />}></Route>
          <Route path={"/register"} element={<SideMenuTwo />}></Route>
        </Routes>
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <Routes>
            <Route path={"/"} element={<Navigation />}></Route>
            <Route path={"/:id"} element={<NavigationTwo />}></Route>
            <Route path={"/login"} element={null}></Route>
            <Route path={"/register"} element={null}></Route>
          </Routes>
        </Header>
        <Content style={contentStyle}>
          <Routes>
            <Route path={"/"} element={<ProjectHome />}>
              {" "}
            </Route>
            <Route path={"/:id"} element={<ProjectSection />}></Route>
            <Route path={"/*"} element={<ErrorPage />}></Route>
            <Route path={"/page-not-found"} element={<ResourceError />}></Route>
            <Route path={"/register"} element={<Registration />}></Route>
            <Route path={"/login"} element={<Login />}></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MyLayout;
