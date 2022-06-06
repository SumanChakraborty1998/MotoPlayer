import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album";
import "./App.css";
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import { Layout } from "antd";
import Logo from "./images/Logo.png";
import { SearchOutlined } from "@ant-design/icons";

const { Content, Sider, Footer } = Layout;

const App = () => {
  const [nftAlbum, setNftAlbum] = useState();
  return (
    <>
      <Layout>
        <Layout>
          <Sider width={300} className="sideBar">
            <div
              style={{
                // border: "1px solid red",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img src={Logo} alt="Logo" className="logo"></img>
              <h2 style={{ color: "#1DAA32" }}>Moto Player</h2>
            </div>
            <div className="searchBar">
              <span> Search </span>
              <SearchOutlined style={{ fontSize: "30px" }} />
            </div>
            <Link to="/">
              <p style={{ color: "#1DB954" }}> Home </p>
            </Link>
            <p> Your Music </p>
          </Sider>
          <Content className="contentWindow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/album"
                element={<Album setNftAlbum={setNftAlbum} />}
              />
            </Routes>
          </Content>
        </Layout>
        <Footer className="footer">
          {nftAlbum && <Player url={nftAlbum} />}
        </Footer>
      </Layout>
    </>
  );
};

export default App;
