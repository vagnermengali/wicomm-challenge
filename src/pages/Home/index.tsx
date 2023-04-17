import Header from "@/components/Header";
import SectionCarousel from "@/components/SectionCarousel";
import PromotionsSection from "@/components/PromotionsSection";
import BlogSection from "@/components/BlogSection";
import GoalsAndAbout from "@/components/GoalsAndAbout";
import Footer from "@/components/Footer";
import SectionLearnMore from "@/components/SectionLearnMore";
import ButtonDownAndFAQ from "@/components/ButtonDownAndFAQ";
import CategoriesSection from "@/components/CategoriesSection";
import ReleasesSection from "@/components/ReleasesSection";

import { StyledHome } from "./style";

const HomePage = () => {

	return (
		<StyledHome>
			<Header />
			<SectionCarousel />
			<CategoriesSection />
			<ReleasesSection />
			<SectionLearnMore />
			<PromotionsSection />
			<BlogSection />
			<GoalsAndAbout />
			<Footer />
			<ButtonDownAndFAQ />
		</StyledHome>
	)
}

export default HomePage;
