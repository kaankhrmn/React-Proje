import './App.css'
import PageContainer from './container/PageContainer';
import Header from './components/Header.jsx'
import RouterConfig from './config/RouterConfig.jsx';
import Loading from './components/Loading.jsx';

function App() {

  return (
    <>
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />
      </PageContainer>
    </>
  )
}

export default App
