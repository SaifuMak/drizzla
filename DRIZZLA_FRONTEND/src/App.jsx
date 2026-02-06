import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import SmoothScroll from './componets/SmoothScroll';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

/* ===========================
   Lazy-loaded pages
=========================== */

// Core pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Demo = lazy(() => import('./pages/Demo'));

// Capability pages
const AgenticAI = lazy(() => import('./pages/AgenticAI'));
const DataAnalytics = lazy(() => import('./pages/DataAnalytics'));
const BlockchainDigitalAssets = lazy(() => import('./pages/BlockchainDigitalAssets'));
const AiStrategyGovernance = lazy(() => import('./pages/AiStrategyGovernance'));
const DataStrategyGovernance = lazy(() => import('./pages/DataStrategyGovernance'));
const DigitalAssets = lazy(() => import('./pages/DigitalAssets'));

// Industry pages
const Bank = lazy(() => import('./pages/Bank'));
const Government = lazy(() => import('./pages/Government'));
const Fmcg = lazy(() => import('./pages/Fmcg'));
const Manufacturing = lazy(() => import('./pages/Manufacturing'));
const Retail = lazy(() => import('./pages/Retail'));
const OilGas = lazy(() => import('./pages/OilGas'));
const Healthcare = lazy(() => import('./pages/Healthcare'));
const RealEstate = lazy(() => import('./pages/RealEstate'));
const Aviation = lazy(() => import('./pages/Aviation'));
const SupplyChainLogistics = lazy(() => import('./pages/SupplyChainLogistics'));

// Product pages
const CustomerService = lazy(() => import('./pages/Products/CustomerService'));
const ContractLifecycle = lazy(() => import('./pages/Products/ContractLifecycle'));
const EmployeesEngagement = lazy(() => import('./pages/Products/EmployeesEngagement'));
const DigitalProducts = lazy(() => import('./pages/Products/DigitalProducts'));

// Company pages
const Career = lazy(() => import('./pages/Career'));
const MessageFromCeo = lazy(() => import('./pages/MessageFromCeo'));

// Partner pages
const MicrosoftAzure = lazy(() => import('./pages/Partners/MicrosoftAzure'));
const DatabricksPage = lazy(() => import('./pages/Partners/DatabricksPage'));
const SnowflakePage = lazy(() => import('./pages/Partners/SnowflakePage'));
const HolisticAIPage = lazy(() => import('./pages/Partners/HolisticAIPage'));
const AtaccamaPage = lazy(() => import('./pages/Partners/AtaccamaPage'));

function App() {
  return (
    <Router>
      <SmoothScroll />

      {/* Fallback UI while chunks load */}
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />

          <Route path="/agentic-ai" element={<AgenticAI />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/block-chain-digital-assets" element={<BlockchainDigitalAssets />} />
          <Route path="/ai-strategy-governance" element={<AiStrategyGovernance />} />
          <Route path="/data-strategy-governance" element={<DataStrategyGovernance />} />
          <Route path="/data-assets-business-and-operational-strategy" element={<DigitalAssets />} />

          <Route path="/services" element={<Services />} />

          {/* Industry */}
          <Route path="/banking-service" element={<Bank />} />
          <Route path="/government-service" element={<Government />} />
          <Route path="/fmcg-service" element={<Fmcg />} />
          <Route path="/manufacturing-service" element={<Manufacturing />} />
          <Route path="/retail-service" element={<Retail />} />
          <Route path="/oil-gas-service" element={<OilGas />} />
          <Route path="/healthcare-service" element={<Healthcare />} />
          <Route path="/real-estate-service" element={<RealEstate />} />
          <Route path="/aviation-service" element={<Aviation />} />
          <Route path="/supply-logistics-service" element={<SupplyChainLogistics />} />

          {/* Products */}
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/contract-lifecycle" element={<ContractLifecycle />} />
          <Route path="/employees-engagement" element={<EmployeesEngagement />} />
          <Route path="/digital-products" element={<DigitalProducts />} />

          {/* Company */}
          <Route path="/career" element={<Career />} />
          <Route path="/message-from-ceo" element={<MessageFromCeo />} />

          {/* Partners */}
          <Route path="/partners/microsoft-azure" element={<MicrosoftAzure />} />
          <Route path="/partners/databricks" element={<DatabricksPage />} />
          <Route path="/partners/snowflake" element={<SnowflakePage />} />
          <Route path="/partners/holistic-ai" element={<HolisticAIPage />} />
          <Route path="/partners/ataccama" element={<AtaccamaPage />} />

          <Route path="/demo" element={<Demo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        closeOnClick
      />
    </Router>
  );
}

export default App;
