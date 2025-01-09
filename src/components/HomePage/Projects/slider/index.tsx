"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import SlideOne from "./slides/SlideOne";
import SlideTwo from "./slides/SlideTwo";
import SlideThree from "./slides/SlideThree";
import fitfood from "../../../../../public/images/my-fit-food.png";
import stndrd from "../../../../../public/images/stndrd.png";
import foundation from "../../../../../public/images/1890-foundation.png";

import SlideResubale from "./slides/SlideResubale";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import FitFoodContribution from "../ProjectsContribution/my-fit-food";
import FitFoodAbout from "../AboutProjects/my-fit-food";

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
            projectName="My Fit Food"
            href="https://www.myfitfoods.com/"
            projectSummary="Transform your meal planning with My Fit Food. Enjoy a seamless
          experience through tailored meal options and personalized dietary
          filters, all supported by easy-to-use tools and smooth e-commerce
          integration."
            ImageSrc={fitfood}
            ProjectsContributionTitle="My contiubutions for My Fit Food are;"
            aboutProject="This is About Fit Food Project"
            projectsContributionContent={[
              "Built the Entire UI Using Prismic: Leveraged Prismic as a content management system to design and implement a dynamic and responsive user interface, ensuring a seamless experience across devices.",
              "Streamlined Content Management: Integrated Prismic's features to allow easy content updates and enhanced flexibility for non-technical users.",
              "Focus on User-Centric Design: Prioritized intuitive navigation and visual appeal while aligning with the project's branding and goals.",
            ]}
            aboutContent={[
              "Project Overview - My Fit Food Web App: The 'My Fit Food' project is a wellness-focused platform designed to help users achieve their fitness goals through personalized meal plans, nutritional insights, and wellness tips. It offers a seamless and user-friendly interface, enabling users to explore, customize, and adopt healthier dietary habits. The project combines innovative technology with a focus on health to promote a balanced and sustainable lifestyle.",
              "Challenges:",
              "Working with Headless Prismic UI ; Adapting to Prismic, a headless CMS, was a significant challenge as it was a new technology. Understanding its structure, integrating dynamic content, and ensuring a seamless user interface required a steep learning curve and problem-solving skills.",
              "Balancing Design and Functionality ; Achieving an aesthetic, user-friendly interface without compromising on functionality or performance, while ensuring the design allowed content updates in the CMS to dynamically reflect in the UI and maintain overall functionality.",
              "Key Features:",
              "Personalized Meal Plans ; Users can access tailored meal plans based on their fitness goals and dietary preferences.",
              "Customizable Preferences ;  Users can adjust meal plans or exclude specific ingredients to suit their dietary needs.",
              "Educational Content; Blogs ; tips, and articles to inspire healthier lifestyle choices and educate users on nutrition.",
              "Integration with Headless CMS ; Dynamic content updates through Prismic, ensuring consistency and flexibility.",
              "Implementation Details:",
              "Front-end ; We utilized Next.js for rapid rendering, TypeScript for enhanced reliability, Tailwind CSS for efficient UI development, whereas Prismic is used for the content management.",
              "Backend; Shopify's GraphQL API for seamless integration.",
              "Checkout Customization; Leveraged Shopify's checkout extensibility and GraphQL Branding API.",
              "State Management ; React Query for efficient cart queries and Jotai for React state management",
              "Conclusion: In conclusion, the 'My Fit Food' project successfully integrates innovative technology with health-focused content to deliver a personalized and engaging platform for users. By leveraging tools like Next.js, Prismic, and Shopify's APIs, the app ensures a seamless and dynamic user experience. Despite challenges such as adapting to new technologies and balancing design with functionality, the project provides a robust, scalable solution that empowers users to make informed dietary choices and adopt healthier lifestyles.",
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideResubale
            projectName="STNDRD"
            href="https://www.stndrd.app/"
            projectSummary="Elevate your fitness journey with STNDRD by Chris Bumstead. Experience
          premium training programs, top-quality apparel, and expert guidance
          that empowers you to achieve your bodybuilding goals with style and
          precision."
            ImageSrc={stndrd}
            ProjectsContributionTitle="My contribution in STNDRD by Chris Bumstead is as follows;"
            aboutProject="This is about Standrd Project"
            projectsContributionContent={[
              "Designed and Developed the User Dashboard UI: Built an intuitive and responsive user interface for the dashboard using Next.js and Tailwind CSS, ensuring cross-device compatibility.",
              "Firebase Authentication Integration: Developed the login and signup functionality using Firebase Authentication, enabling secure user registration and login with email and password, while implementing session management for maintaining user state and handling errors.",
              "Integrated Profile Picture Upload Feature: Implemented a user profile picture upload functionality, integrating with Firebase for storage and retrieval. Developed the functionality that a user can crop its image while uploading.",
              "Dynamic Screens Based on User State: Developed multiple screens for the checkout page, including the plan selection screen, signup/login screen, payment screen, and subscription success screen, which are conditionally displayed based on the user's state. Utilized Zustand as a state management solution to efficiently handle and manage the user's state throughout the checkout process.",
              "Scroll-Based Animation on Landing Page: Developed scroll-based animations on the landing page using GSAP (GreenSock Animation Platform), creating engaging visual effects that activate as the user scrolls, enhancing the overall user experience and interactivity.",
              "Reusable Drawer for User Information: Developed a reusable drawer to display different user information, which was utilized multiple times across the app for consistent user experience and efficient content presentation.",
              "Implemented Landing Page for Black Friday: Developed a promotional landing page with a real-time countdown timer component to enhance user engagement.",
            ]}
            aboutContent={[
              "Project Overview - STNDRD Fitness Web App: The STNDRD Fitness Web App was designed to elevate fitness enthusiasts' experiences by providing a platform tailored to their goals and aspirations. Created for Cbum's fitness community, the app serves as a hub for fitness resources, interactive tools, and personalized features. It offers a seamless way for users to manage their profiles, track fitness progress, and engage with premium content and programs. By integrating modern design principles with robust functionalities, the platform ensures an engaging and user-friendly experience, empowering users to achieve their fitness ambitions effectively. With its intuitive interface and comprehensive features, the STNDRD Fitness Web App establishes itself as a game-changing tool for those passionate about fitness and well-being.",
              "Challenges:",
              "Visual Engagement ; The primary challenge was to create a visually engaging web app, incorporating scroll-based animations that effectively showcased our subscription-based fitness services.",
              "Seamless Payment Processing ; Implementing an intuitive user experience while seamlessly integrating payment processing through Stripe required meticulous planning to ensure both security and user-friendliness.",
              "Scalability for Growing User Base ; Designing the app's architecture to handle a growing number of users without performance degradation. Ensuring that the web app remains fast and responsive, even with heavy media content and user interactions.",
              "Responsive Design for All Devices ; Making the app fully responsive so it performs well across desktops, tablets, and smartphones.",
              "Tight Deadlines ; The project had a tight schedule, requiring efficient time management.",
              "Cross-Browser Compatibility ; Ensuring seamless functionality across various browsers.",
              "Scope and Solution: ",
              "Captivating Landing Page; We introduced a captivating landing page powered by GSAP animations to immediately engage visitors.",
              "Subscription Management ; Users can effortlessly explore subscription plans and manage their profiles.",
              "Secure Payments ; The seamless integration of Stripe ensures secure and hassle-free subscription payments.",
              "Key Features:",
              "Captivating Landing Page ;Dynamic GSAP animations on the landing page immediately capture users' attention.",
              "Secure Payments; Subscription plans powered by Stripe ensure secure and seamless payments.",
              "Efficient Revenue Management; Integration of RevenueCat streamlined revenue management.",
              "User-Centric Dashboard; A user dashboard for subscription management and preferences.",
              "Personalized Engagement; Klaviyo integration ensures personalized email marketing and enhanced user engagement.",
              "Modern UI; Utilization of Next.js, TypeScript, Tailwind CSS, and GSAP creates a modern and dynamic user interface.",
              "Implementation Details:",
              "Front-end ; We utilized Next.js for rapid rendering, TypeScript for enhanced reliability, Tailwind CSS for efficient UI development, and GSAP for dynamic animations.",
              "Authentication and Data Management; Firebase played a crucial role in authentication, data management, file storage, and real-time updates.",
              "Back-end ; Node.js and Express were integrated with Firebase Cloud Functions for API development and server-side logic.",
              "Payment Processing; The seamless integration of Stripe's API on both client and server sides ensured secure subscription payments.",
              "Conclusion: The success of the STNDRD Web App project can be attributed to meticulous design, seamless integrations, and a modern tech stack. Our web app effectively captured users' interest and streamlined their access to fitness subscriptions. Through Next.js, TypeScript, Tailwind CSS, GSAP animations, Stripe, and Klaviyo integration, the web app achieved a harmonious blend of functionality and engagement, establishing itself as a standout in the fitness website landscape. STNDRD invites you to embark on this transformative fitness journey—a new era of fitness awaits.",
            ]}
          />
          {/* <div className="flex gap-10"> 
            <FitFoodContribution />
            <FitFoodAbout />
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <SlideResubale
            projectName="1890 Foundation"
            href="https://www.1890foundation.org/"
            projectSummary=" Support and empower the next generation with 1890 Foundation.
          Championing historically Black colleges and universities, this
          platform provides vital resources, scholarships, and opportunities to
          enhance educational outcomes and foster success for students across
          the nation."
            ImageSrc={foundation}
            ProjectsContributionTitle="My contribution in 1890 Foudation is as follows;"
            aboutProject="This is about 1890 Project"
            projectsContributionContent={[
              "Dynamic Sidebar with Mobile Responsiveness: Created a sidebar with conditional rendering for tab navigation and a hamburger menu for mobile users, ensuring a smooth user experience with auto-closing functionality on tab selection.",
              "Backend Integrations: Developed an API using Nodemailer to handle form submissions, sending responses to both the user and admin via email.",
              "UI Enhancements: Created various interactive sliders to enhance user engagement and deliver a captivating UI experience.",
            ]}
            aboutContent={[
              "Project Overview - 1890 Foundation Web App: The 1890 Foundation is dedicated to advancing the mission of the 1890 Historically Black Colleges and Universities (HBCUs) by enhancing their capacity to deliver high-quality education, promote research, and foster community engagement. Established to provide resources and support to these institutions, the foundation focuses on expanding access to academic and professional development opportunities for students, faculty, and staff. By strengthening partnerships, facilitating innovative programs, and securing funding, the 1890 Foundation aims to empower HBCUs to continue playing a pivotal role in shaping the future of higher education and society. Through its initiatives, the foundation supports the growth and sustainability of these historically significant institutions, ensuring they remain vibrant centers of learning, culture, and excellence.",
              "Challenges:",
              "Working with NodeMailer ; A key challenge while working with 1890 was integrating Nodemailer, as it was outside of my prior experience. However, I successfully learned and implemented it to handle email notifications effectively.",
              "Tight Deadlines ; The project had a tight schedule, requiring efficient time management.",
              "Cross-Browser Compatibility ; Ensuring seamless functionality across various browsers.",
              "Key Features:",
              "Nodemailer Integration;  Allows seamless communication by sending automated emails for form submissions, registrations, and notifications to both users and admins.",
              "Donation System; A secure payment system integrated for users to make donations to support the foundation and its programs.",
              "Responsive Design; Ensures the website is fully functional and visually appealing across all devices, providing an optimized user experience on both desktop and mobile.",
              "Implementation Details:",
              "Front-end ; We utilized Next.js for rapid rendering, TypeScript for enhanced reliability, Tailwind CSS for efficient UI development, and Animate On Scroll Library for scroll base animations.",
              "Back-end ; Node.js and Express were used for API development and server-side logic.",
              "Conclusion: In conclusion, the 1890 Foundation Web App successfully integrates advanced features such as Nodemailer for seamless communication, a secure donation system, and a responsive design to enhance user experience across devices. Despite challenges like tight deadlines and cross-browser compatibility, the project was completed efficiently, leveraging modern technologies like Next.js, TypeScript, and Node.js. The foundation's web platform now effectively supports its mission of empowering HBCUs and providing valuable resources to students, faculty, and staff.",
            ]}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
