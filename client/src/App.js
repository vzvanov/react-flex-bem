import './App.css';
import ColumnSection from './components/ColumnsSection';
import HiSection from './components/HiSection';
import WhatSection from './components/WhatSection';
import VerticalSection from './components/VerticalsSection';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { fetchColumns, fetchVerticals } from './api/pageAPI';
import Loader from './components/Loader';

function App() {
  const [columns, setColumns] = useState([]);
  const [verticals, setVerticals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchColumns()
      .then(data => setColumns(data))
      .catch((e) => console.log(e));
    fetchVerticals()
      .then(data => setVerticals(data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <div className="wrapper">
      <div className="content">
        <HiSection />
        <WhatSection title="Что такое FlexBox?" />
        <ColumnSection title="Колонки с flex-контейнерами" columns={columns} />
        <VerticalSection title="Вертикальное выравнивание" verticals={verticals} />
      </div>
      <Footer text="Фрилансер по жизни 2019" />
    </div>
  );
}

export default App