import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//bootstrapの設定
import 'bootstrap/dist/css/bootstrap.min.css';
//componentsとpagesのインポート
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { New } from './pages/thread/New';
import { Show } from './pages/thread/Show';

function App() {
  return (
    <div className="app">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread/new" element={<New />} />
        <Route path="/thread/:thread_id" element={<Show />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
