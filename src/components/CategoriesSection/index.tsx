import product from "@/assets/images/categories-1.svg";

import CategoriesCards from "@/components/CategoriesCards";
import Carousel from "@/components/CarouselCards";

import { StyledCategoriesSection, Div, Container } from './style';

const CategoriesSection = () => {

	return (
		<StyledCategoriesSection>
			<Div>
				<Container>
					<Carousel
						numberPagination={6}
						width={'1280px'}
						carouselWidth={'1200px'}
						containerWidth={'1175px'}
						gap={0}
						numberSroll={1}
						autoplay
						card1={
							<CategoriesCards
								image={product}
								title={'Protéinas'}
							/>
						}
						card2={
							<CategoriesCards
								image={product}
								title={'Hipercalóricos'}
							/>
						}
						card3={
							<CategoriesCards
								image={product}
								title={'Creatina'}
							/>
						}
						card4={
							<CategoriesCards
								image={product}
								title={'Packs'}
							/>
						}
						card5={
							<CategoriesCards
								image={product}
								title={'Aminoácidos'}
							/>
						}
						card6={
							<CategoriesCards
								image={product}
								title={'Saúde'}
							/>
						}
						card7={
							<CategoriesCards
								image={product}
								title={'Protéinas'}
							/>
						}
						card8={
							<CategoriesCards
								image={product}
								title={'Hipercalóricos'}
							/>
						}
						card9={
							<CategoriesCards
								image={product}
								title={'Creatina'}
							/>
						}
						card10={
							<CategoriesCards
								image={product}
								title={'Packs'}
							/>
						}
						card11={
							<CategoriesCards
								image={product}
								title={'Aminoácidos'}
							/>
						}
						card12={
							<CategoriesCards
								image={product}
								title={'Saúde'}
							/>
						}
					/>
				</Container>
			</Div>
		</StyledCategoriesSection>
	)
}

export default CategoriesSection;
