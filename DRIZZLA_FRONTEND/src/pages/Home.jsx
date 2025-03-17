import React, { useState } from 'react'
import AnimatedVideo from '../componets/AnimatedVideo'
import ServiceImgCards from '../componets/services/ServiceImgCards';
import DrizilaCapabilty from '../componets/general/DrizilaCapabilty';
import ServiceCards from '../componets/services/ServiceCards';
import ProductsOverview from '../componets/products/ProductsOverview';
import { ProductsFeatureData } from '../datas/ProductsFeatureData';
import { SolutionsData } from '../datas/Solutions';
import { Branches } from '../datas/Branches';
import Footer from '../componets/Footer'


const Home = () => {

  const [selectedSolution, setselectedSolution] = useState(SolutionsData[0])

  return (
    <div className="flex-col flex-center ">
      <AnimatedVideo />
      <div className="flex flex-col w-11/12 text-white xl:w-10/12 ">


        {/* introduction section  */}
        <div className="mt-24 md:mt-48 ">
          <h3 className="text-3xl md:text-4xl xl:text-5xl xl:leading-[1.3]  md:w-10/12">Your partner in next-gen digital transformation built on a foundation of trusted data and intelligent applications.</h3>

          <div className="flex mt-10 max-md:flex-col lg:mt-12 xl:mt-20 2xl:mt-20 md:space-x-20 lg:space-x-36 ">
            <div className="space-y-2 md:space-y-4 md:w-1/2">
              <h6 className="text-2xl font-semibold tracking-wider text-transparent bg-gradient-to-r from-purple-100 via-purple-500 to-purple-900 bg-clip-text">The stats are alarming</h6>
              <p className="pr-5 font-light xl:text-xl ">In the AI age, digital transformation is no longer optional – it's imperative for survival and a tactical necessity for prosperity. Yet, a staggering 70% of transformations and 95% of innovation initiatives fail, wasting trillions globally</p>
            </div>

            <div className="space-y-2 md:space-y-4 max-md:mt-8 md:w-1/2">
              <h6 className="text-2xl font-semibold tracking-wider text-transparent bg-gradient-to-r from-sky-100 via-sky-500 to-sky-900 bg-clip-text ">There is a way out</h6>
              <p className="pr-5 font-light xl:text-xl ">We don't just talk about AI—we deliver it. Our unique blend of trusted data, cutting-edge AI, and custom-built software solutions fuels rapid transformation, all while keeping your daily operations running smoothly and your budget in check. Experience the difference.</p>
            </div>
          </div>
        </div>


        {/* service section */}
        <div className="mt-20 2xl:mt-48 lg:mt-32 ">
          <h3 className="text-3xl md:text-4xl xl:text-5xl max-lg:pl-2 ">Services we offer</h3>

          <div className="relative w-full p-3 mt-6 transition-all duration-500 rounded-lg cursor-pointer max-xl:pb-10 xl:pb-16 max-md:flex-col lg:space-x-6 xl:p-10 md:mt-6 xl:mt-12 2xl:mt-16 group flex-center hover:bg-custom-hover-purple bg-custom-purple">

            <div className="space-y-5 md:w-1/2">
              <h5 className="text-2xl md:text-3xl xl:text-4xl ">Agentic AI & Intelligent Apps </h5>
              <p className="font-light lg:pr-20 lg:leading-relaxed xl:text-lg xl:leading-loose ">Tailored AI agents and applications development to automate complex tasks, adapt to changing conditions, and continuously improve, enabling your business to stay ahead of the curve and seize new opportunities. Our AI solutions leverage machine learning, advanced analytics and intelligent automation to optimise business processes, improve efficiency, and create smarter, data-driven strategies for a rapidly evolving digital world.</p>
            </div>

            <div className="md:w-1/2 max-md:mt-6">
              <div className="w-full bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 rounded-xl">
                <img src="/Images/robotic-finger-tip.png" alt="robotic-finger-tip" className="object-contain w-full h-full " />
              </div>
            </div>
            <DrizilaCapabilty customStyle=' text-base lg:-translate-x-5 lg:opacity-0 left-2 xl:left-5 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 bottom-2 xl:bottom-4 2xl:bottom-8' />
          </div>
        </div>


        {/* service image cards  */}
        <div className="flex mt-10 md:mt-20 md:space-x-4 max-md:flex-col 2xl:space-x-16 xl:space-x-12 lg:space-x-6 ">
          <ServiceImgCards outerContainerClass='bg-custom-green hover:bg-custom-hover-green' title='Data & Analytics' description='Transform your data into a strategic asset with our end-to-end data solutions. Leverage our expertise in data engineering & analytics to gain a clear advantage. We build robust data lakes & unified data warehouses, streamline data integration with ETL/ELT pipelines, & deliver actionable insights through advanced data analytics, empowering you to drive smarter decisions & achieve business growth.' />
          <ServiceImgCards outerContainerClass='bg-custom-teal hover:bg-custom-hover-teal' title='Blockchain & Digital Assets' description='Bring your blockchain and digital assets vision to life with our expert implementation services and realise the transformative potential of the technology. We handle every step, from strategic planning and development to seamless integration and ongoing support, helping you leverage blockchain for enhanced security, transparency, and efficiency, and capitalise on the opportunities presented by digital assets for new revenue streams and innovative business models' />
        </div>


        {/* service cards */}
        <div className="grid gap-5 mt-20 md:gap-10 md:grid-cols-2 xl:gap-5 2xl:gap-10 xl:grid-cols-4 ">
          <ServiceCards outerContainerClass='bg-custom-brown hover:bg-custom-hover-brown' title='AI: Strategy & Governance' description='Expert advisory services on frameworks & best practices for managing the development, deployment, & use of AI systems. Our guidance helps you build ethical, responsible, & transparent AI practices from the ground up.' image='/Images/robotic-head.svg' alt='robotic-head' />
          <ServiceCards outerContainerClass='bg-custom-navy-blue hover:bg-custom-hover-navy-blue' title='Data: Strategy & Governance' description='Build trust in your data with our comprehensive data asset management solutions. We guarantee accuracy, consistency, security, & compliance across your organization, focusing on the complete data lifecycle & unwavering data quality to empower confident decision-making.' image='/Images/robot-head-in-circle.svg' alt='robot-head-in-circle' />
          <ServiceCards outerContainerClass='bg-custom-blue hover:bg-custom-hover-blue' title='Digital Assets: Business & Operational Strategy' description='Chart your course in the digital asset landscape with our expert business & operational strategy services. We help you navigate the complexities of this evolving market, developing tailored strategies to develop a comprehensive roadmap for success, maximizing the value of your digital assets.' image='/Images/human-robot-relation.svg' alt='human-robot-relation' />
          <ServiceCards outerContainerClass='bg-custom-purple hover:bg-custom-hover-purple' title='More Capabilities' description='Discover the comprehensive suite of services Drizzla offers to drive your success.' image='/Images/plus-icon-in-circle.svg' alt='plus-icon-in-circle' />
        </div>


        {/* paroducts overview */}
        <div className="mt-20 2xl:mt-32 xl:mt-28">
          <h5 className="text-3xl lg:mb-10 xl:mb-12 md:text-4xl xl:text-5xl max-lg:pl-2 ">Our products</h5>

          <ProductsOverview containerClass='bg-custom-brown hover:bg-custom-hover-brown' title='Customer Service AI Co-Pilot' description='Empower your customer service team with AI-driven insights and supercharge their efficiency, leading to happier customers and more productive agents' number='/01' />
          <ProductsOverview containerClass='bg-custom-navy-blue hover:bg-custom-hover-navy-blue' title='Contract Lifecycle AI Co-Pilot' description='From creation to renewal, our AI co-pilot simplifies every stage of contract management, automating tedious tasks , ensuring compliance and freeing up your team for strategic work.' number='/02' />
          <ProductsOverview containerClass='bg-custom-blue hover:bg-custom-hover-blue' title='Employees Engagement AI Agent' description='Empower your employees and unlock their full potential with our AI-driven engagement solution. Provide personalized support, streamline workflows, and offer access to relevant resources, maximizing employee effectiveness and job satisfaction.' number='/03' />
          <ProductsOverview containerClass='bg-custom-purple hover:bg-custom-hover-purple' title='Digital Product Passport' description='Enhance transparency and build trust with our Digital Product Passport blockchain solution. Empower consumers with verifiable product information, strengthen your brand reputation, and gain a competitive edge in the market.' number='/04' />

        </div>



        {/* robot chasing man section  */}
        <div className="flex max-md:flex-col justify-between items-center   2xl:h-[480px] md:space-x-8  lg:space-x-12 text-white mt-20 md:mt-32">
          <div className="md:w-1/2     2xl:h-[480px] group overflow-hidden rounded-2xl  ">
            <img src="/Images/robot-chasing-human.png" alt="robot-chasing-human" className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110" />
          </div>

          <div className="flex-col h-full md:w-1/2 bg-white/5 rounded-xl max-md:mt-8 flex-center">
            <h6 className="text-2xl md:text-2xl xl:text-3xl ">There is so much left to build</h6>
            <p className="mt-5 font-light text-center lg:w-4/6 xl:leading-relaxed xl:text-lg-custom">The future isn't written, it's coded. There are products waiting to be born, problems waiting to be solved, and innovations waiting to ignite. Let's build them!</p>
          </div>
        </div>

      </div>


      {/* contact form trigger banner */}
      <div className="lg:w-11/12 w-full my-16 xl:my-36 flex-center 2xl:h-[300px] xl:h-[270px] lg:h-[220px] h-[130px] bg-[#8122FE] ">
        <div className="w-10/12 md:space-x-10 max-md:flex-col lg:space-x-12 xl:space-x-32 2xl:space-x-44 flex-center ">
          <h2 className="text-3xl text-white lg:text-6xl 2xl:text-7xl text-nowrap">Ask us about these 6 now</h2>
          <button className="xl:py-4 max-md:mt-4 lg:py-2.5 py-1.5 px-5 shrink-0 flex justify-center items-center text-[#8122FE] bg-white rounded-full lg:px-6 xl:px-12 ">Schedule now</button>
        </div>
      </div>


      {/* product features section */}
      <div className="w-11/12 xl:w-10/12 ">
        <div className="grid gap-8 text-white md:grid-cols-3 md:gap-5 lg:gap-16 2xl:gap-y-20 2xl:gap-x-16 ">
          {ProductsFeatureData?.map((data) => (
            <div className="space-y-2 md:space-y-4 ">
              <div className="flex items-center justify-center font-light leading-none rounded-full lg:text-xl size-6 lg:size-10 bg-gradient-to-b from-purple-400 to-sky-400 ">
                <span className="mt-0.5">{data.index}</span>
              </div>
              <h5 className="text-lg font-semibold tracking-wide lg:text-xl ">{data.title}</h5>
              <p className="leading-snug font-extralight xl:text-lg-custom ">{data.description}</p>
            </div>
          ))}
        </div>
      </div>



      {/* solutions section */}
      <div className="flex w-11/12 mt-48 text-white md:mt-32 max-md:flex-col-reverse 2xl:mt-20 xl:w-10/12 md:space-x-6 lg:space-x-12 xl:space-x-16 2xl:space-x-24 ">

        <div className="mt-4 lg:w-1/2 max-md:pt-5 ">
          <h2 className="mb-10 text-4xl max-md:hidden ">Our solutions tailored to your industry</h2>
          {SolutionsData?.map((solution, index) => (
            <div key={index} onClick={() => { setselectedSolution(solution) }} className={`2xl:py-5 xl:py-4 md:py-2 py-1.5 md:pl-8  transition-all duration-300 ease-in-out border-gray-100  ${index === 0 ? 'border-t-2 border-b-2' : 'border-b-2'} ${selectedSolution.title === solution.title ? 'font-semibold' : 'font-extralight text-stone-300'} cursor-pointer md:text-xl xl:text-[26px]  tracking-wider  border-opacity-30 `}>{solution.title}</div>
          ))}
        </div>

        <div className="relative flex items-center justify-center lg:w-1/2 ">
          <h2 className="absolute mb-10 text-3xl text-center -top-20 md:hidden ">Our solutions tailored to your industry</h2>

          <div className="w-full h-full rounded-xl ">
            <img src={selectedSolution.image} alt="" className="object-cover w-full h-full transition-all duration-300 rounded-xl"
            />
          </div>
          <div className="absolute w-full text-black bottom-4 flex-center md:bottom-10 ">
            <div className="w-11/12 p-4 bg-white lg:p-5 xl:p-7 2xl:px-12 2xl:py-10 rounded-xl">
              <h5 className="text-xl font-semibold md:text-2xl xl:text-3xl ">{selectedSolution?.title}</h5>
              <p className="md:mt-4 max-md:text-sm lg:text-lg xl:text-xl">{selectedSolution?.description}</p>
              <button className="px-3 py-1 mt-4 text-white transition-transform duration-300 rounded-full max-sm:text-sm md:px-8 md:py-3 xl:text-lg hover:bg-gradient-to-b hover:from-sky-500/80 hover:to-purple-500/80 bg-gradient-to-b from-purple-500/80 to-sky-500/80 ">EXPLORE SOLUTIONS</button>

            </div>
          </div>
        </div>
      </div>




      {/* branches  section */}
      <div className="flex flex-col w-11/12 mt-24 text-white xl:mt-32 xl:w-10/12">
        <h2 className="text-3xl xl:text-4xl ">Our offices</h2>
        <div className="flex items-center mt-5 max-md:flex-col xl:mt-10 md:space-x-10 xl:space-x-14 2xl:space-x-16">
          {Branches?.map((branch, index) => (
            <div key={index} className=" max-md:mb-10">
              <div className="w-full 2xl:h-[300px]  overflow-hidden   rounded-xl">
                <img src={branch.image} alt={branch.image} className="object-cover w-full h-full transition-transform duration-700 ease-in-out will-change-transform rounded-xl hover:scale-125 " />
              </div>
              <h6 className="mt-5 text-xl font-semibold text-center xl:text-2xl xl:mt-8 2xl:text-3xl ">{branch.title}</h6>
              <p className="mt-3 font-light text-center max-lg:text-sm lg:px-6 xl:px-12 2xl:px-16 2xl:text-lg-custom ">{branch.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Home