import learn_more1 from "@/assets/images/learn-more-1.svg";
import learn_more2 from "@/assets/images/learn-more-2.svg";
import learn_more3 from "@/assets/images/learn-more-3.svg";
import learn_more_bg from "@/assets/images/learn-more-bg.svg";

import Text from '@/components/Text';
import Carousel from "@/components/CarouselCards";
import LearnMoreCard from "@/components/LearnMoreCard";
import Button from "@/components/Button";

import {
	StyledSectionLearnMore,
	DivTop, DivBottom,
	ContainerBottom,
	ContainerTop,
	ImgBg,
	Div,
	DivSeeAll
} from './style';

const SectionLearnMore = () => {

	return (
		<StyledSectionLearnMore>
			<DivTop>
				<ImgBg src={learn_more_bg} />
				<ContainerTop>
					<Div>
						<Text
							color='brand10'
							fontFamily='roboto'
							fontSize='32px'
							fontStyle='italic'
							fontWeight='700'
							textTransform='uppercase'
							text='Conheça a tropa '
							secondColor={'brand1'}
							secondText={'Black skull'}
							secondfontFamily='roboto'
							whiteSpace={'nowrap'}
							inline
						/>
					</Div>
				</ContainerTop>
			</DivTop>
			<DivBottom>
				<ContainerBottom>
					<Carousel
						width={'1280px'}
						carouselWidth={'999px'}
						containerWidth={'945px'}
						gap={0}
						numberPagination={3}
						
						numberSroll={3}
						card1={
							<LearnMoreCard
								image={learn_more1}
								text={'Cedric McMillan'}
							/>
						}
						card2={
							<LearnMoreCard
								image={learn_more2}
								text={'Cedric McMillan'}
							/>
						}
						card3={
							<LearnMoreCard
								image={learn_more3}
								text={'Cedric McMillan'}
							/>
						}
						card4={
							<LearnMoreCard
								image={learn_more1}
								text={'Cedric McMillan'}
							/>
						}
						card5={
							<LearnMoreCard
								image={learn_more2}
								text={'Cedric McMillan'}
							/>
						}
						card6={
							<LearnMoreCard
								image={learn_more3}
								text={'Cedric McMillan'}
							/>
						}
						card7={
							<LearnMoreCard
								image={learn_more1}
								text={'Cedric McMillan'}
							/>
						}
						card8={
							<LearnMoreCard
								image={learn_more2}
								text={'Cedric McMillan'}
							/>
						}
						card9={
							<LearnMoreCard
								image={learn_more3}
								text={'Cedric McMillan'}
							/>
						}
					/>
				</ContainerBottom>
			</DivBottom>
			<DivSeeAll>
				<Button
					color='brand3'
					fontFamily='barlow'
					fontSize='16px'
					fontStyle='normal'
					fontWeight={'700'}
					textTransform='uppercase'
					text='Ver todos'
					textAlign='center'
					width={'139px'}
					height={'48px'}
					bgColor={'brand1'}
					borderRadius={'4px'}
					padding={'14px 24px'}
					hoverBg={'brand2'}
				/>
			</DivSeeAll>
		</StyledSectionLearnMore>
	)
}

export default SectionLearnMore;
