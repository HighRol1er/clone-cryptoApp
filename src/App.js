import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar,Exchanges,Homepage,Cryptocurrencies,Cryptodetails,News } from "./components/index";
import './App.css';

 
function App() {
  return (
      <div className="app">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="main">
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/exchanges" element={<Exchanges/>}/>
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route path="/crypto/:coinId" element={<Cryptodetails/>}/>
              <Route path="/news" element={<News/>}/>
            </Routes>
          </Layout>
          <div className="footer">
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
              Cryptoverse <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div> 
        </div>
      </div>
  );
}

export default App;
