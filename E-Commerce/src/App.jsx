import './App.css'
import PageContainer from './container/PageContainer';
import Header from './components/Header.jsx'
import ProductList from './components/ProductList.jsx';

function App() {

  return (
    <>
      <PageContainer>
        <Header />
        <ProductList />
      </PageContainer>
    </>
  )
}

export default App
