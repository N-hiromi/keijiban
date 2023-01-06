import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//bootstrapの設定
import 'bootstrap/dist/css/bootstrap.min.css';
//componentsとpagesのインポート
import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="app">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
