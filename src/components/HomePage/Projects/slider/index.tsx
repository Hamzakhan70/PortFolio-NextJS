"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";


import meta1st from "../../../../../public/images/meta1st.png";
import elnova from "../../../../../public/images/elnova.png";
import ecom from "../../../../../public/images/ecommerce store.png";

import SlideResubale from "./slides/SlideResubale";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function ProjectsSlider() {
  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        speed={1000}
        // autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        //   }}
        //   loop={true}
        coverflowEffect={{
          rotate: 90,
          //   stretch: 100,
          depth: 100,
          //   modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide className="projects-swiper">
          <SlideResubale
            projectName="Earn_Store Mern"
            href="https://earnstoremern-production-be9c.up.railway.app/"
            projectSummary="Earn_Store is a robust and responsive MERN-based e-commerce platform designed to deliver a seamless shopping experience. It supports product listing, cart functionality, user authentication, and secure payments — all wrapped in a clean, user-friendly interface."
            ImageSrc={ecom}
            ProjectsContributionTitle="My contributions to Earn_Store include:"
            aboutProject="This project is a complete e-commerce web application built from the ground up using the MERN stack."
            projectsContributionContent={[
              "Developed the full-stack e-commerce app using MongoDB, Express.js, React, and Node.js (MERN), with modular and scalable architecture.",
              "Built dynamic product pages, shopping cart, and real-time inventory handling.",
              "Implemented secure user authentication, registration, and login flows with role-based access control.",
              "Integrated Stripe for secure payment processing and order flow with confirmation pages.",
              "Created RESTful APIs for product, user, cart, and order management.",
              "Managed state across the app using Redux Toolkit and persisted data through localStorage for a smoother UX.",
              "Deployed the complete platform on Railway, with environmental variable management and production-ready performance tuning.",
            ]}
            aboutContent={[
              "Project Overview – Earn_Store Mern: Earn_Store is an end-to-end e-commerce solution targeting fast, secure, and personalized shopping experiences. With a scalable backend and an optimized frontend, it supports real-time updates, persistent sessions, and admin product management.",
              "Challenges:",
              "Building a custom checkout system with integrated Stripe APIs while managing order confirmations, errors, and session persistence.",
              "Creating a reusable and optimized Redux state flow to minimize re-renders and API calls.",
              "Handling user access and protected routes to separate admin and regular user roles effectively.",
              "Key Features:",
              "Full E-commerce Flow – Product browsing, search, cart management, and secure checkout.",
              "Stripe Integration – Seamless payment gateway with transaction history and user receipts.",
              "Admin Dashboard – Add, update, or delete products; view orders and manage inventory.",
              "Authentication – Secure login/register system with protected routes and session tracking.",
              "Responsive Design – Mobile-first, user-friendly UI with clean UX using React and Tailwind CSS.",
              "Implementation Stack:",
              "Front-end: React, Redux Toolkit, Tailwind CSS.",
              "Back-end: Node.js, Express.js, MongoDB, and Mongoose for data modeling.",
              "Payment System: Stripe for handling secure transactions.",
              "Deployment: Railway with continuous integration and environment management.",
              "Conclusion: The Earn_Store Mern project demonstrates the capability to develop a full-scale production-ready web application, integrating modern e-commerce features with performance, security, and usability in mind. This project showcases my end-to-end understanding of building and deploying robust web apps using the MERN stack.",
            ]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideResubale
            projectName="Meta1st"
            href="https://meta1st.ai/"
            projectSummary="Meta1st is an AI-powered cybersecurity platform that fortifies the human layer of organizations by providing real-time training and tools to combat phishing, social engineering, and email-based threats."
            ImageSrc={meta1st}
            ProjectsContributionTitle="My contribution to Meta1st includes:"
            aboutProject="Meta1st is an innovative SaaS platform focused on reducing human-related cybersecurity risks through AI-driven solutions."
            projectsContributionContent={[
              "Developed the front-end interface using React and Tailwind CSS, ensuring a responsive and user-friendly design.",
              "Integrated Firebase Authentication for secure user login and registration processes.",
              "Implemented real-time email threat analysis using advanced AI algorithms to detect and alert users about potential risks.",
              "Created interactive training modules to educate users on identifying and responding to phishing and other cyber threats.",
              "Set up Stripe for secure payment processing and subscription management.",
              "Utilized GSAP for engaging animations on the landing page to enhance user experience.",
              "Built a dynamic dashboard for administrators to monitor user engagement and threat reports.",
            ]}
            aboutContent={[
              "Project Overview - Meta1st Cybersecurity Platform: Meta1st is designed to empower organizations by strengthening their human defense layer against cyber threats. The platform offers AI-driven tools like Analyse1st for real-time email threat detection, Learn1st for continuous user education, and Phish1st for simulating phishing attacks to train employees effectively.",
              "Challenges:",
              "Human Error Mitigation: Addressing the high percentage of cyber incidents caused by human mistakes.",
              "Real-Time Threat Detection: Developing systems capable of analyzing and responding to threats as they occur.",
              "User Engagement: Ensuring that training modules are engaging and effectively improve user awareness.",
              "Scalability: Building a platform that can scale with the growing needs of diverse organizations.",
              "Compliance: Assisting organizations in meeting regulatory requirements like the Digital Operational Resilience Act (DORA).",
              "Scope and Solution:",
              "Comprehensive Training Modules: Interactive lessons and quizzes tailored to various learning styles.",
              "Real-Time Email Analysis: Tools that provide instant feedback on potential email threats.",
              "Phishing Simulations: Regularly scheduled simulations to test and improve employee responses.",
              "Administrative Dashboard: Centralized control panel for monitoring and managing organizational cybersecurity posture.",
              "Key Features:",
              "AI-Powered Tools: Leveraging artificial intelligence to enhance threat detection and user training.",
              "User-Centric Design: Focused on creating an intuitive and accessible user experience.",
              "Regulatory Compliance Support: Features designed to help organizations adhere to cybersecurity regulations.",
              "Continuous Learning: Regular updates to training content to address emerging threats.",
              "Implementation Details:",
              "Front-end: Built with React and Tailwind CSS for a modern and responsive interface.",
              "Back-end: Utilized Nest.js for server-side operations.",
              "Authentication: Implemented Firebase Authentication for secure user management.",
              "Payment Processing: Integrated Stripe for handling subscriptions and payments.",
              "Animations: Used GSAP to create engaging animations enhancing the visual appeal.",
              "Conclusion: Meta1st stands out as a comprehensive solution for organizations aiming to bolster their cybersecurity defenses by focusing on the human element. Through its AI-driven tools and continuous training modules, it effectively reduces the risk of cyber threats originating from human error."
            ]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideResubale
            projectName="ElNova"
            href="https://www.elnova.ca/en/"
            projectSummary="ElNova delivers intelligent energy solutions that empower residential, commercial, and industrial users to manage energy sustainably through advanced technologies, energy storage, and electric mobility systems."
            ImageSrc={elnova}
            ProjectsContributionTitle="My contribution to ElNova includes:"
            aboutProject="ElNova is a modern energy tech company revolutionizing power management through innovative battery systems, renewable energy integration, and AI-driven control platforms."
            projectsContributionContent={[
              "Developed and maintained the front-end UI of ElNova’s website and mobile application using React, Tailwind CSS, and Ionic.",
              "Integrated real-time API data to display dynamic product specifications and energy usage stats.",
              "Created custom components for interactive forms, user inquiries, and responsive layouts across desktop and mobile.",
              "Worked closely with backend developers to ensure seamless integration of real-time system data and user management features.",
              "Contributed to multilingual support implementation, including English and French localizations.",
              "Optimized website for performance, accessibility, and mobile responsiveness."
            ]}
            aboutContent={[
              "Project Overview – ElNova: ElNova is an energy innovation company offering a range of solutions for energy storage, electric vehicle infrastructure, and smart energy systems for homes and businesses. The company is driven by the goal of making energy cleaner, more efficient, and accessible.",
              "Challenges:",
              "Multilingual Functionality: Ensuring full support for both English and French interfaces.",
              "Responsive Web & Mobile Design: Adapting the platform across a wide range of devices and screen sizes using Ionic for mobile and React for web.",
              "Real-Time Product Display: Integrating dynamic data to display live updates about products and solutions.",
              "Key Features:",
              "Smart Energy Solutions: Interactive showcase of energy storage, smart panels, and EV charging systems.",
              "Multilingual Support: Fully translated UI for French and English-speaking users.",
              "Contact and Inquiry Forms: Interactive forms with integrated backend support to handle customer outreach and quote requests.",
              "Implementation Details:",
              "Front-end: Built using React.js, Tailwind CSS, and Ionic Framework for a consistent cross-platform experience.",
              "Back-end: Integrated with Nest.js APIs and dynamic product data sources.",
              "Localization: Implemented internationalization (i18n) using language files for bilingual user experience.",
              "Mobile App: Developed using Ionic to provide access to ElNova’s energy platform on mobile devices.",
              "Conclusion: ElNova stands out as a forward-thinking platform empowering users to make smarter energy decisions. Through clean UI, mobile accessibility, multilingual support, and real-time system information, ElNova delivers a seamless experience for users looking to transition into a more energy-efficient future."
            ]}
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
