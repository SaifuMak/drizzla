import React from 'react'
import AnimatedVideo from '../componets/AnimatedVideo'
import ServiceImgCards from '../componets/services/ServiceImgCards';
import DrizilaCapabilty from '../componets/general/DrizilaCapabilty';
import ServiceCards from '../componets/services/ServiceCards';
import ProductsOverview from '../componets/products/ProductsOverview';

const Home = () => {
  return (
    <div className="flex-col flex-center mb-96">
      <AnimatedVideo />
      <div className="w-10/12 mt-48 bor ">
        <div className="flex flex-col justify-start min-h-screen text-white">
          <h3 className="text-5xl tracking-wide ">Your partner in next-gen digital transformation built </h3>
          <h3 className="mt-2.5 text-5xl tracking-wide">on a foundation of trusted data and intelligent applications.</h3>



          <div className="flex mt-28 space-x-36 ">
            <div className="w-1/2 space-y-4">
              <h6 className="text-2xl font-semibold tracking-wider text-transparent bg-gradient-to-r from-purple-100 via-purple-500 to-purple-900 bg-clip-text">The stats are alarming</h6>
              <p className="text-lg font-light ">In the AI age, digital transformation is no longer optional – it's imperative for survival and a tactical necessity for prosperity. Yet, a staggering 70% of transformations and 95% of innovation initiatives fail, wasting trillions globally</p>
            </div>

            <div className="w-1/2 space-y-4">
              <h6 className="text-2xl font-semibold tracking-wider text-transparent bg-gradient-to-r from-sky-100 via-sky-500 to-sky-900 bg-clip-text ">There is a way out</h6>
              <p className="text-lg font-light ">We don't just talk about AI—we deliver it. Our unique blend of trusted data, cutting-edge AI, and custom-built software solutions fuels rapid transformation, all while keeping your daily operations running smoothly and your budget in check. Experience the difference.</p>
            </div>
          </div>

          <div className="mt-48 ">
            <h3 className="text-5xl ">Services we offer</h3>

            <div className="relative w-full px-10 py-10 mt-10 space-x-6 transition-all duration-500 rounded-lg cursor-pointer group flex-center hover:bg-custom-hover-purple bg-custom-purple">

              <div className="w-1/2 space-y-5">
                <h5 className="text-4xl ">Agentic AI & Intelligent Apps </h5>
                <p className="pr-20 cursor-text ">Tailored AI agents and applications development to automate complex tasks, adapt to changing conditions, and continuously improve, enabling your business to stay ahead of the curve and seize new opportunities. Our AI solutions leverage machine learning, advanced analytics and intelligent automation to optimise business processes, improve efficiency, and create smarter, data-driven strategies for a rapidly evolving digital world.</p>
              </div>
              <div className="w-1/2 ">
                <div className="w-full bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 rounded-xl">
                  <img src="/Images/robotic-finger-tip.png" alt="robotic-finger-tip" className="object-contain w-full h-full " />
                </div>
              </div>
              <DrizilaCapabilty customStyle=' text-base -translate-x-5 opacity-0 left-5 group-hover:translate-x-0 group-hover:opacity-100 bottom-10' />
            </div>

            {/* service image cards  */}
            <div className="flex mt-20 space-x-16 ">
              <ServiceImgCards outerContainerClass='bg-custom-green hover:bg-custom-hover-green' title='Data & Analytics' description='Transform your data into a strategic asset with our end-to-end data solutions. Leverage our expertise in data engineering & analytics to gain a clear advantage. We build robust data lakes & unified data warehouses, streamline data integration with ETL/ELT pipelines, & deliver actionable insights through advanced data analytics, empowering you to drive smarter decisions & achieve business growth.' />
              <ServiceImgCards outerContainerClass='bg-custom-teal hover:bg-custom-hover-teal' title='Blockchain & Digital Assets' description='Bring your blockchain and digital assets vision to life with our expert implementation services and realise the transformative potential of the technology. We handle every step, from strategic planning and development to seamless integration and ongoing support, helping you leverage blockchain for enhanced security, transparency, and efficiency, and capitalise on the opportunities presented by digital assets for new revenue streams and innovative business models' />
            </div>

            {/* service cards */}
            <div className="grid grid-cols-4 gap-10 mt-20 ">
              <ServiceCards outerContainerClass='bg-custom-brown hover:bg-custom-hover-brown' title='AI: Strategy & Governance' description='Expert advisory services on frameworks & best practices for managing the development, deployment, & use of AI systems. Our guidance helps you build ethical, responsible, & transparent AI practices from the ground up.' image='/Images/robotic-head.svg' alt='robotic-head' />
              <ServiceCards outerContainerClass='bg-custom-navy-blue hover:bg-custom-hover-navy-blue' title='Data: Strategy & Governance' description='Build trust in your data with our comprehensive data asset management solutions. We guarantee accuracy, consistency, security, & compliance across your organization, focusing on the complete data lifecycle & unwavering data quality to empower confident decision-making.' image='/Images/robot-head-in-circle.svg' alt='robot-head-in-circle' />
              <ServiceCards outerContainerClass='bg-custom-blue hover:bg-custom-hover-blue' title='Digital Assets: Business & Operational Strategy' description='Chart your course in the digital asset landscape with our expert business & operational strategy services. We help you navigate the complexities of this evolving market, developing tailored strategies to develop a comprehensive roadmap for success, maximizing the value of your digital assets.' image='/Images/human-robot-relation.svg' alt='human-robot-relation' />
              <ServiceCards outerContainerClass='bg-custom-purple hover:bg-custom-hover-purple' title='More Capabilities' description='Discover the comprehensive suite of services Drizzla offers to drive your success.' image='/Images/plus-icon-in-circle.svg' alt='plus-icon-in-circle' />
            </div>

            {/* paroducts overview */}
            <div className="mt-32">
              <h5 className="mb-12 text-5xl ">Our products</h5>

              <ProductsOverview containerClass='bg-custom-brown hover:bg-custom-hover-brown' title='Customer Service AI Co-Pilot' description='Empower your customer service team with AI-driven insights and supercharge their efficiency, leading to happier customers and more productive agents' number='/01' />
              <ProductsOverview containerClass='bg-custom-navy-blue hover:bg-custom-hover-navy-blue' title='Contract Lifecycle AI Co-Pilot' description='From creation to renewal, our AI co-pilot simplifies every stage of contract management, automating tedious tasks , ensuring compliance and freeing up your team for strategic work.' number='/02' />
              <ProductsOverview containerClass='bg-custom-blue hover:bg-custom-hover-blue' title='Employees Engagement AI Agent' description='Empower your employees and unlock their full potential with our AI-driven engagement solution. Provide personalized support, streamline workflows, and offer access to relevant resources, maximizing employee effectiveness and job satisfaction.' number='/03' />
              <ProductsOverview containerClass='bg-custom-purple hover:bg-custom-hover-purple' title='Digital Product Passport' description='Enhance transparency and build trust with our Digital Product Passport blockchain solution. Empower consumers with verifiable product information, strengthen your brand reputation, and gain a competitive edge in the market.' number='/04' />

            </div>
          </div>

          <div className="flex justify-between h-[480px] space-x-12 text-white mt-36">

            <div className="w-1/2 h-[480px] group overflow-hidden rounded-2xl  ">
              <img src="/Images/robot-chasing-human.png" alt="robot-chasing-human" className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110" />
            </div>

            <div className="flex-col w-1/2 h-full bg-white/5 rounded-xl flex-center">
              <h6 className="text-3xl ">There is so much left to build</h6>
              <p className="w-4/6 mt-5 font-light leading-relaxed text-center text-lg-custom ">The future isn't written, it's coded. There are products waiting to be born, problems waiting to be solved, and innovations waiting to ignite. Let's build them!</p>
            </div>
          </div>

        </div>
      </div>


      <div className="w-11/12 mt-10 flex-center h-[300px] bg-[#8122FE] ">
        <div className="w-10/12 space-x-20 flex-center ">
          <h2 className="text-white text-7xl">Ask us about these 6 now</h2>
          <button className="py-3.5 flex justify-center items-center text-[#8122FE] bg-white rounded-full px-10 ">Schedule now</button>
        </div>
      </div>
    </div>
  )
}

export default Home