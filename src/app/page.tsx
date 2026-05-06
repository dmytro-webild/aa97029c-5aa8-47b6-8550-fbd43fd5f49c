"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumLarge"
        background="floatingGradient"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Portfolio",
          id: "portfolio",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Siegraphix"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "radial-gradient",
      }}
      title="Your Vision, Elevated."
      description="I’m Sienna (Siegraphix), an expert graphic designer with 7 years of experience bringing cinematic, eye-catching posters and advertisements to life."
      buttons={[
        {
          text: "View My Work",
          href: "#portfolio",
        },
        {
          text: "Get a Quote",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/brushstroke-texture-modern-design_23-2151910224.jpg",
          imageAlt: "Cinematic Poster Design 1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-woman-single-s-day-banner_23-2149520233.jpg",
          imageAlt: "Cinematic Poster Design 2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hawaii-illustration-retro-comic-style_23-2151771068.jpg",
          imageAlt: "Cinematic Poster Design 3",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/graphic-2d-colorful-wallpaper-with-grainy-gradients_23-2151001667.jpg",
          imageAlt: "Cinematic Poster Design 4",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-shooting-with-projector-front-view_23-2149424933.jpg",
          imageAlt: "Cinematic Poster Design 5",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/burning-paper-background-still-life_23-2150093337.jpg",
          imageAlt: "Cinematic Poster Design 6",
        },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "About Siegraphix",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/blue-light-portrait-background_23-2149594645.jpg",
          alt: "Sienna Graphic Designer",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          tag: "Design",
          title: "Movie & TV Posters",
          subtitle: "Cinematic Edge",
          description: "High-impact posters designed for visual storytelling.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-single-s-day-banner_23-2149520237.jpg",
        },
        {
          tag: "Brand",
          title: "Promotional Ads",
          subtitle: "Drive Growth",
          description: "Static ads that stop the scroll.",
          imageSrc: "http://img.b2bpic.net/free-photo/technology-growth-freelance-video-graphic-online_1421-647.jpg",
        },
        {
          tag: "Creative",
          title: "Custom Visuals",
          subtitle: "Fully Custom",
          description: "Everything from album art to book covers.",
          imageSrc: "http://img.b2bpic.net/free-photo/real-life-zodiac-collage_23-2149588386.jpg",
        },
      ]}
      title="What I Can Create"
      description="Professional-grade creative services for all your visual needs."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          tag: "Start",
          price: "$75 AUD",
          period: "Fixed",
          description: "High-quality, minimal layouts for essential promo.",
          button: {
            text: "Select Basic",
          },
          featuresTitle: "Includes",
          features: [
            "Minimalist layout",
            "Strong typography",
            "4 day delivery",
            "3 revisions",
          ],
        },
        {
          id: "standard",
          tag: "Cinematic",
          price: "Custom",
          period: "Project",
          description: "High-detail character integration with enhanced lighting.",
          button: {
            text: "Select Standard",
          },
          featuresTitle: "Includes",
          features: [
            "Cinematic finish",
            "Enhanced lighting",
            "Movie/Marketing style",
            "3 revisions",
          ],
        },
        {
          id: "premium",
          tag: "Director's Cut",
          price: "Custom",
          period: "Project",
          description: "Fully custom Siegraphix style with unlimited creative freedom.",
          button: {
            text: "Select Premium",
          },
          featuresTitle: "Includes",
          features: [
            "Unlimited revisions",
            "High-priority",
            "Masterpiece level design",
            "Signature style",
          ],
        },
      ]}
      title="Design Packages"
      description="Choose the perfect plan for your project."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Cyberpunk Movie Poster",
          price: "View",
          imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-warrior-urban-scenery_23-2150712514.jpg",
        },
        {
          id: "p2",
          name: "Minimalist Book Cover",
          price: "View",
          imageSrc: "http://img.b2bpic.net/free-photo/rendering-inspirational-mood-board_23-2150975930.jpg",
        },
        {
          id: "p3",
          name: "Retro Album Art",
          price: "View",
          imageSrc: "http://img.b2bpic.net/free-photo/retro-pickup-machine_23-2150711828.jpg",
        },
        {
          id: "p4",
          name: "Event Promo Ad",
          price: "View",
          imageSrc: "http://img.b2bpic.net/free-vector/music-festival-poster-template-with-liquid-effect_23-2148247302.jpg",
        },
        {
          id: "p5",
          name: "Character Spotlight Poster",
          price: "View",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-grunge-room-interior-with-spotlight-shining-down_1048-9845.jpg",
        },
        {
          id: "p6",
          name: "Promotional Social Visual",
          price: "View",
          imageSrc: "http://img.b2bpic.net/free-photo/hashtag-online-digital-media-icon_53876-15092.jpg",
        },
      ]}
      title="Featured Work"
      description="See my cinematic posters and branding projects."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Netflix",
        "Warner Bros",
        "HBO",
        "Studio A24",
        "Universal",
        "Disney",
        "Sony",
      ]}
      title="Trusted by Creators"
      description="50,000+ followers on Instagram trust my design process."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alex Smith",
          role: "Film Producer",
          company: "IndieCinema",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-grey-background_613910-3695.jpg",
        },
        {
          id: "t2",
          name: "Maria Garcia",
          role: "Music Label Mgr",
          company: "Harmony",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-african-american-person-smiling-working-his-living-room_482257-126267.jpg",
        },
        {
          id: "t3",
          name: "Jordan Lee",
          role: "Author",
          company: "PageTurner",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-old-man-portrait_23-2148831058.jpg",
        },
        {
          id: "t4",
          name: "Casey Jones",
          role: "Creator",
          company: "StudioOne",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-unknown-young-man-posing_23-2149417572.jpg",
        },
        {
          id: "t5",
          name: "Taylor Swiftly",
          role: "Brand Manager",
          company: "Vogue",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-man-with-eyeglasses-smiling-office_329181-14553.jpg",
        },
      ]}
      title="Client Feedback"
      description="Hear what creators say about working with Siegraphix."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "What do you need to get started?",
          content: "I need your concept, text, preferred styles/colors, and any reference images you might have.",
        },
        {
          id: "f2",
          title: "How do revisions work?",
          content: "Depending on your package, we offer either 3 revisions or unlimited revisions for the Director's Cut.",
        },
        {
          id: "f3",
          title: "Do you accept custom commissions?",
          content: "Everything I create is fully custom and tailored to your specific vision.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about working with Sienna."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Start Your Project"
      description="Inquire today to bring your cinematic vision to life."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell me about your idea...",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/blue-watercolor-background-desktop-wallpaper-abstract-design_53876-138985.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Portfolio",
              href: "#portfolio",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/Siegraphix",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
      ]}
      logoText="Siegraphix"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
