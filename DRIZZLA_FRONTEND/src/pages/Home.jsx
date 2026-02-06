import React, { useState, useEffect } from 'react'
import { lazy, Suspense } from "react";

import AnimatedVideo from '../componets/AnimatedVideo'
import ServiceImgCards from '../componets/services/ServiceImgCards';
import AbilitiesCard from '../componets/Home/AbilitiesCard';
import DrizilaCapabilty from '../componets/general/DrizilaCapabilty';
import ServiceCards from '../componets/services/ServiceCards';
import { ProductsFeatureData } from '../datas/ProductsFeatureData';
import { Branches } from '../datas/Branches';
import { Link } from 'react-router-dom';
import useContactModal from '../customHooks/useContactModal';
import { routesMap } from '../datas/Routes';
import { HomeVideos } from '../datas/Videos';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Headline from '../componets/general/Headline';
import BranchCard from '../componets/Home/BranchCard';
import BasicCard from '../componets/general/BasicCard';
import useGsapFadeIn from '../customHooks/useGsapFadeIn';
import useIsMobile from '../customHooks/useIsMobile';
import HelmetComponent from '../componets/general/HelmetComponent';

const SolutionsSection = lazy(() =>
  import('../componets/Home/Solutions')
)

const ProductsOverview = lazy(() =>
  import('../componets/products/ProductsOverview')
)

const Footer = lazy(() => import('../componets/Footer'))
const ContactForm = lazy(() => import('../componets/ContactForm'))

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const isMobile = useIsMobile()
  const [isMobileScreen, setIsMobileScreen] = useState(true)

  // const [isEnquiryFormVisble, setIsEnquiryFormVisble] = useState(false)

  const { isContactModal, setIsContactModal } = useContactModal()
  // const serviceImgRef = useGsapFadeIn()
  // const IntialTextMobileRef = useInitialGsapFade()
  const groupLogoRef = useGsapFadeIn(0, { start: 'top 83%' })

  const ServiceWeOfferCardRef = useGsapFadeIn();
  const RobotCardRef = useGsapFadeIn();
  const RobotCardTextRef = useGsapFadeIn(0, { start: 'top 70%' })

  const BannerRef = useGsapFadeIn()


  const scheduleRef = useGsapFadeIn(0, { start: 'top 73%' })
  const partnersRef = useGsapFadeIn(0, { start: 'top 73%' })

  useEffect(() => {
    setIsMobileScreen(isMobile)
  }, [])


  return (
    <>

      <HelmetComponent
        title="Home"
        description="Welcome to My Website, where we offer innovative solutions in AI, blockchain, data analytics, and more."
      />

      <div className="flex-col flex-center">
        <AnimatedVideo MobileVideo={HomeVideos.mobile} DesktopVideo={HomeVideos.desktop} outerContainer='w-full  max-sm:h-[350px]  h-[640px] lg:h-screen' />
        <div className="flex flex-col w-11/12 text-white 2xl:w-10/12 ">

          {/* introduction section  */}
          <div className="mt-8 md:mt-16 xl:mt-20 ">

            <img ref={groupLogoRef} src="Images/logo-group.jpg" alt="" className=" -ml-5 mb-5 md:w-[350px] w-[310px]" />

            <Headline text='Your Outcome-as-a-Service (OaaS) partner, where trusted data meets intelligent applications, for measurable results.' className='text-3xl md:text-4xl xl:text-5xl xl:leading-[1.3] md:w-10/12 hidden-text' isIntiallyHidden={true} />

            {/* <Headline text='Your Outcome-as-a-Service (OaaS) partner, where trusted data meets intelligent applications, for measurable results.' className='text-3xl md:text-4xl xl:text-5xl xl:leading-[1.3] md:w-10/12 hidden-text' /> */}
            {/* <h3 ref={IntialTextMobileRef} className="text-3xl  md:text-4xl xl:text-5xl xl:leading-[1.3] md:w-10/12 hidden-text">Your Outcome-as-a-Service (OaaS) partner, where trusted data meets intelligent applications, for measurable results.</h3> */}

            <div className="flex mt-10 max-md:flex-col lg:mt-12 xl:mt-20 2xl:mt-20 md:space-x-20 lg:space-x-36 ">

              {/* <div className="space-y-2 md:space-y-4 md:w-1/2">
              <h6 className="text-2xl font-semibold tracking-wider text-transparent bg-gradient-to-r from-purple-100 via-purple-500 to-purple-900 bg-clip-text">The stats are alarming</h6>
              <p className="pr-5 font-light xl:text-xl ">In the AI age, digital transformation is no longer optional – it's imperative for survival and a tactical necessity for prosperity. Yet, a staggering 70% of transformations and 95% of innovation initiatives fail, wasting trillions globally</p>
            </div> */}


              <BasicCard
                index={0}
                title="The stats are alarming"
                description="In the AI age, digital transformation is no longer optional – it's imperative for survival and a tactical necessity for prosperity. Yet, a staggering 70% of transformations and 95% of innovation initiatives fail, wasting trillions globally"
                titleStyle='text-2xl font-semibold tracking-wider text-transparent bg-gradient-to-r from-purple-100 via-purple-500 to-purple-900 bg-clip-text'
                descriptionStyle='pr-5 font-light xl:text-xl'
                outerContainerStyle='space-y-2 md:space-y-4 md:w-1/2' />

              <BasicCard
                index={1}
                title="There is a way out"
                description="Avoid risking innovation. Our OaaS solutions provide a clear path to ROI and deliver proven outcomes, not just hype. We leverage trusted data and intelligent apps to accelerate transformation, minimizing risk and maximizing efficiency, so your innovations deliver results, not headaches."
                titleStyle='text-2xl font-semibold tracking-wider text-transparent bg-gradient-to-r from-sky-100 via-sky-500 to-sky-900 bg-clip-text '
                descriptionStyle='pr-5 font-light xl:text-xl'
                outerContainerStyle='space-y-2 md:space-y-4 max-md:mt-8 md:w-1/2' />

              {/* <div className="">
              <h6 className=""></h6>
              <p className=""></p>
            </div> */}
            </div>
          </div>


          {/* service section */}
          <div id="services" className="mt-20 2xl:mt-48 lg:mt-32 ">
            {/* <h3 className="text-3xl md:text-4xl xl:text-5xl max-lg:pl-2 ">Services we offer</h3> */}
            <Headline text='Services we offer' className='text-3xl md:text-4xl xl:text-5xl max-lg:pl-2 ' />

            <Link to={routesMap.AgenticAI} ref={ServiceWeOfferCardRef} className="block">
              <div className="relative w-full p-3 mt-6 transition-all duration-500 rounded-lg cursor-pointer max-sm:p-4 max-xl:pb-10 xl:pb-16 max-md:flex-col-reverse lg:space-x-6 xl:p-10 md:mt-6 xl:mt-12 2xl:mt-16 group flex-center hover:bg-custom-hover-purple bg-custom-purple">

                <div className="space-y-5 max-md:mt-5 md:w-1/2 max-sm:mb-8">
                  <h5 className="text-2xl md:text-3xl xl:text-4xl ">Agentic AI & Intelligent Apps </h5>
                  <p className="font-light lg:pr-20 lg:leading-relaxed xl:text-lg xl:leading-loose ">Tailored AI agents and applications development to automate complex tasks, adapt to changing conditions, and continuously improve, enabling your business to stay ahead of the curve and seize new opportunities. Our AI solutions leverage machine learning, advanced analytics and intelligent automation to optimise business processes, improve efficiency, and create smarter, data-driven strategies for a rapidly evolving digital world.</p>
                </div>


                <div className="md:w-1/2 max-md:mt-6">
                  <div className="w-full bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 rounded-xl">
                    <img src="/Images/robotic-finger-tip.png" alt="robotic-finger-tip" className="object-contain w-full h-full " />
                  </div>
                </div>
                <DrizilaCapabilty customStyle=' text-base lg:-translate-x-5 lg:opacity-0 left-4 xl:left-5 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 bottom-3 xl:bottom-4 2xl:bottom-8' />
              </div>
            </Link>
          </div>


          {/* service image cards  */}
          <div className="flex mt-10 md:mt-20 md:space-x-4 max-md:flex-col 2xl:space-x-16 xl:space-x-12 lg:space-x-6 ">
            <ServiceImgCards index={0} url={routesMap.DataAnalytics} image='/Images/data-analytics-presentation.jpg' outerContainerClass='bg-custom-green hover:bg-custom-hover-green' title='Data & Analytics' description='Transform your data into a strategic asset with our end-to-end data solutions. Leverage our expertise in data engineering & analytics to gain a clear advantage. We build robust data lakes & unified data warehouses, streamline data integration with ETL/ELT pipelines, & deliver actionable insights through advanced data analytics, empowering you to drive smarter decisions & achieve business growth.' />
            <ServiceImgCards index={1} url={routesMap.BlockchainDigitalAssets} image='/Images/block-chain.jpg' outerContainerClass='bg-custom-teal hover:bg-custom-hover-teal' title='Blockchain & Digital Assets' description='Bring your blockchain and digital assets vision to life with our expert implementation services and realise the transformative potential of the technology. We handle every step, from strategic planning and development to seamless integration and ongoing support, helping you leverage blockchain for enhanced security, transparency, and efficiency, and capitalise on the opportunities presented by digital assets for new revenue streams and innovative business models' />
          </div>


          {/* service cards */}
          <div className="grid gap-5 mt-20 md:gap-10 md:grid-cols-2 xl:gap-5 2xl:gap-10 xl:grid-cols-4 ">
            <ServiceCards index={0} url={routesMap.AiStrategyGovernance} outerContainerClass='bg-custom-brown hover:bg-custom-hover-brown' title='AI: Strategy & Governance' description='Expert advisory services on frameworks & best practices for managing the development, deployment, & use of AI systems. Our guidance helps you build ethical, responsible, & transparent AI practices from the ground up.' image='/Images/robotic-head.svg' alt='robotic-head' />
            <ServiceCards index={1} url={routesMap.DataStrategyGovernance} outerContainerClass='bg-custom-navy-blue hover:bg-custom-hover-navy-blue' title='Data: Strategy & Governance' description='Build trust in your data with our comprehensive data asset management solutions. We guarantee accuracy, consistency, security, & compliance across your organization, focusing on the complete data lifecycle & unwavering data quality to empower confident decision-making.' image='/Images/robot-head-in-circle.svg' alt='robot-head-in-circle' />
            <ServiceCards index={2} url={routesMap.DigitalAssets} outerContainerClass='bg-custom-blue hover:bg-custom-hover-blue' title='Digital Assets: Business & Operational Strategy' description='Chart your course in the digital asset landscape with our expert business & operational strategy services. We help you navigate the complexities of this evolving market, developing tailored strategies to develop a comprehensive roadmap for success, maximizing the value of your digital assets.' image='/Images/human-robot-relation.svg' alt='human-robot-relation' />
            <ServiceCards index={3} url={routesMap.Services} outerContainerClass='bg-custom-purple hover:bg-custom-hover-purple' title='More Capabilities' description='Discover the comprehensive suite of services Drizzla offers to drive your success.' image='/Images/plus-icon-in-circle.svg' alt='plus-icon-in-circle' />
          </div>


          <div id='partnership' className="mt-20 overflow-hidden xl:mt-28 lg:mb-10 xl:mb-12 ">

            <Headline text='Our Technology Partners' className='text-3xl md:text-4xl xl:text-5xl max-lg:pl-2 ' />

            <div ref={partnersRef} className="grid items-center grid-cols-2 gap-5 mt-5 lg:gap-8 xl:gap-16 lg:mt-0 md:grid-cols-5 justify-items-center ">
              <Link to='/partners/microsoft-azure' >
                <img src="/Images/partners/microsoft-azure.jpg" alt="Azure" className="partner-logo" />
              </Link>
              <Link to='/partners/databricks' >
                <img src="/Images/partners/databricks.jpg" alt="databricks" className="partner-logo" />
              </Link>
              <Link to='/partners/holistic-ai' >
                <img src="/Images/partners/holsitic.jpg" alt="holsitic" className="partner-logo" />
              </Link>
              <Link to='/partners/snowflake' >
                <img src="/Images/partners/snowflake.jpg" alt="snowflake" className="partner-logo" />
              </Link>
              <Link to='/partners/ataccama' >
                <img src="/Images/partners/ataccama.jpg" alt="ataccama" className="partner-logo" />
              </Link>
            </div>
          </div>


          {/* paroducts overview */}
          {/* ===================== PRODUCTS OVERVIEW (LAZY) ===================== */}
          <div className="mt-20 overflow-hidden xl:mt-28 lg:mb-10 xl:mb-12">
            <Headline text='Our products' className='text-3xl md:text-4xl xl:text-5xl max-lg:pl-2 ' />
          </div>
          <Suspense fallback={null}>
            <ProductsOverview index={0}
              url={routesMap.CustomerService}
              containerClass='bg-custom-brown hover:bg-custom-hover-brown' title='Credit Sentinel: Next Gen Corporate Credit Underwriting'
              description='Reduce non-performing loans and accelerates commercial growth by delivering predictive, real-time risk scores that transform complex corporate lending decisions into instant, compliant sanctions' number='/01' />
            <ProductsOverview index={1}
              url={routesMap.ContractLifecycle}
              containerClass='bg-custom-navy-blue hover:bg-custom-hover-navy-blue'
              title='Bid Comply: Procurement Evaluation Redefined' description='Instantly auto-score vendor proposals against complex RFP criteria, reducing evaluation time by 80% and faster time-to-contract while delivering defensible, auditable compliance justifications for every procurement decision' number='/02' />
            <ProductsOverview index={2}
              url={routesMap.EmployeesEngagement}
              containerClass='bg-custom-blue hover:bg-custom-hover-blue'
              title='TaqCompare: Advanced Arabic Comparison' description='Taq Compare leverages proprietary, advanced LLM models optimised for linguistic complexity in Arabic, to instantly compare multi-version of Arabic documents, guaranteeing unparalleled accuracy and speed for Legal, HR, Procurement, Contracting teams across the GCC' number='/03' />
            <ProductsOverview index={3}
              url={routesMap.DigitalProducts}
              containerClass='bg-custom-purple hover:bg-custom-hover-purple'
              title='Digital Product Passport'
              description='Enhance transparency and build trust with our Digital Product Passport blockchain solution. Empower consumers with verifiable product information, strengthen your brand reputation, and gain a competitive edge in the market' number='/04' />
          </Suspense>

          {/* robot chasing man section  */}
          <div ref={RobotCardRef} className="flex max-md:flex-col  justify-between items-center md:h-[300px] lg:h-[330px]  xl:h-[380px]  2xl:h-[480px] md:space-x-8  lg:space-x-12 text-white mt-20 md:mt-32">
            <div className="overflow-hidden md:w-1/2 lg:h-[330px] md:h-[300px]   xl:h-[380px]  2xl:h-[480px] group rounded-2xl ">
              <img src="/Images/robot-chasing-human.jpg" alt="robot-chasing-human" className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110" />
            </div>

            <div ref={RobotCardTextRef} className="flex-col flex-1 w-full h-full max-sm:py-10 max-sm:px-7 bg-white/5 rounded-xl max-md:mt-8 flex-center">
              <h6 className="text-2xl md:text-2xl xl:text-3xl max-sm:text-center ">There is so much left to build</h6>
              <p className="mt-5 font-light text-center lg:w-4/6 xl:leading-relaxed xl:text-lg-custom">The future isn't written, it's coded. There are products waiting to be born, problems waiting to be solved, and innovations waiting to ignite. Let's build them!</p>
            </div>
          </div>

        </div>

        {/* contact form trigger banner */}
        <div ref={BannerRef} className={`lg:w-11/12 w-full max-sm:py-24 my-16 xl:my-36 flex-center 2xl:h-[300px] xl:h-[270px] lg:h-[220px] h-[130px] bg-[#8122FE]  `}>
          <div className="w-10/12 md:space-x-10 max-md:flex-col lg:space-x-12 xl:space-x-32 2xl:space-x-44 flex-center ">
            <h2 className="text-3xl text-white max-sm:text-center max-sm:text-4xl lg:text-6xl 2xl:text-7xl md:text-nowrap"> Ask us about these 6 now</h2>
            <button ref={scheduleRef} onClick={() => setIsContactModal(true)} className="xl:py-4   cursor-pointer max-md:mt-4 lg:py-2.5 py-1.5 px-5 shrink-0 flex justify-center items-center text-[#8122FE] bg-white rounded-full lg:px-6 xl:px-12 ">Schedule now</button>
          </div>
        </div>

        {/* product features section */}
        <div className="w-11/12 xl:w-10/12 xl:pb-12 2xl:pb-28">
          <div className="grid gap-8 text-white md:grid-cols-3 md:gap-5 lg:gap-16 2xl:gap-y-20 2xl:gap-x-16 ">
            {ProductsFeatureData?.map((data) => (
              <AbilitiesCard key={data.index} data={data} />
            ))}
          </div>
        </div>

        {/* solutions section */}
        <Suspense fallback={null}>
          <SolutionsSection />
        </Suspense>


        {/* branches  section */}
        <div className="flex flex-col w-11/12 mt-24 text-white xl:mt-32 xl:w-10/12">
          <Headline text='Our offices' className='text-3xl md:text-4xl xl:text-5xl max-lg:pl-2' />

          <div className="grid gap-8 mt-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-12 2xl:gap-16">

            {Branches?.map((branch, index) => (
              <BranchCard key={index} branch={branch} index={index} />
            ))}
          </div>
        </div>


        {/* ===================== FOOTER (LAZY) ===================== */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        {/* ===================== CONTACT FORM (ON DEMAND ONLY) ===================== */}
        {isContactModal && (
          <Suspense fallback={null}>
            <ContactForm
              isContactModal={isContactModal}
              setIsContactModal={setIsContactModal}
              Tab="Schedule a call now"
            />
          </Suspense>
        )}
      </div>
    </>
  )
}

export default Home