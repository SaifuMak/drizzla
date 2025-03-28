
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SmoothScroll from './componets/SmoothScroll';
import About from './pages/About';
import AgenticAI from './pages/AgenticAI';
import DataAnalytics from './pages/DataAnalytics';
import BlockchainDigitalAssets from './pages/BlockchainDigitalAssets';
import AiStrategyGovernance from './pages/AiStrategyGovernance';
import DataStrategyGovernance from './pages/DataStrategyGovernance';
import DigitalAssets from './pages/DigitalAssets';
import Bank from './pages/Bank';
import Government from './pages/Government';
import Fmcg from './pages/Fmcg';
import Manufacturing from './pages/Manufacturing';
import Retail from './pages/Retail';
import OilGas from './pages/OilGas';
import Healthcare from './pages/Healthcare';
import RealEstate from './pages/RealEstate';
import Aviation from './pages/Aviation';
import SupplyChainLogistics from './pages/SupplyChainLogistics';
import Services from './pages/Services';

import CustomerService from './pages/Products/CustomerService'
import ContractLifecycle from './pages/Products/ContractLifecycle';
import EmployeesEngagement from './pages/Products/EmployeesEngagement';
import DigitalProducts from './pages/Products/DigitalProducts';

import Career from './pages/Career';

import Demo from './pages/Demo';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {



  return (
    <>
      <Router>
        <SmoothScroll />

        <Routes>
          <Route path='/products' element={<Products />} />

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          <Route path='/agentic-ai' element={<AgenticAI />} />
          <Route path='/data-analytics' element={<DataAnalytics />} />
          <Route path='/block-chain-digital-assets' element={<BlockchainDigitalAssets />} />
          <Route path='/ai-strategy-governance' element={<AiStrategyGovernance />} />
          <Route path='/data-strategy-governance' element={<DataStrategyGovernance />} />
          <Route path='/data-assets-business-and-operational-strategy' element={<DigitalAssets />} />
          <Route path='/services' element={<Services />} />
          {/* these have been used in   */}



          <Route path='/banking-service' element={<Bank />} />
          <Route path='/government-service' element={<Government />} />
          <Route path='/fmcg-service' element={<Fmcg />} />
          {/* <Route path='/manufacturing-service' element={<Manufacturing />} />
          <Route path='/retail-service' element={<Retail />} />
          <Route path='/oil-gas-service' element={<OilGas />} />
          <Route path='/healthcare-service' element={<Healthcare />} />
          <Route path='/real-estate-service' element={<RealEstate />} />
          <Route path='/aviation-service' element={<Aviation />} />
          <Route path='/supply-logistics-service' element={<SupplyChainLogistics />} /> */}

          <Route path='/customer-service' element={<CustomerService />} />
          <Route path='/contract-lifecycle' element={<ContractLifecycle />} />
          <Route path='/employees-engagement' element={<EmployeesEngagement />} />
          <Route path='/digital-products' element={<DigitalProducts />} />

          <Route path='/career' element={<Career />} />

          <Route path='*' element={<NotFound />} />

          <Route path='/demo' element={<Demo />} />

        </Routes>

        <ToastContainer
          position="bottom-right"
          autoClose={3000} // Auto close after 3 seconds
          closeOnClick
        />
      </Router>
    </>
  )
}

export default App
