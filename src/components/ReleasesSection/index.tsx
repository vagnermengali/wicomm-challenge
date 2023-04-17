import product from "@/assets/images/product-1.svg";

import Carousel from "@/components/CarouselCards";
import ProductsCards from "@/components/ProductCard";
import Text from "@/components/Text";

import { StyledReleasesSection, Div, Container } from './style';

const ReleasesSection = () => {

	return (
		<StyledReleasesSection>
			<Div>
				<Container>
					<Text
						color='brand4'
						fontFamily='roboto'
						fontSize='32px'
						fontStyle='italic'
						fontWeight='700'
						textTransform='uppercase'
						text={'Lançamentos'}
						whiteSpace="nowrap"
					/>
					<Carousel
						pagination
						numberPagination={4}
						width={'1280px'}
						carouselWidth={'1200px'}
						containerWidth={'1175px'}
						gap={0}
						numberSroll={4}
						autoplay
						card1={
							<ProductsCards
								image={product}
								title={'Whey Zero (Com Lactase) Black Skull - 900G'}
								price={'R$ 349,90'}
								installments={'ou 12x de R$ 29,16'}
							/>
						}
						card2={
							<ProductsCards
								image={product}
								title={'Whey Zero (Com Lactase) Black Skull - 900G'}
								price={'R$ 349,90'}
								installments={'ou 12x de R$ 29,16'}
							/>
						}
						card3={
							<ProductsCards
								image={product}
								title={'Whey Zero (Com Lactase) Black Skull - 900G'}
								price={'R$ 349,90'}
								installments={'ou 12x de R$ 29,16'}
							/>
						}
						card4={
							<ProductsCards
								image={product}
								title={'Whey Zero (Com Lactase) Black Skull - 900G'}
								price={'R$ 349,90'}
								installments={'ou 12x de R$ 29,16'}
							/>
						}
						card5={
							<ProductsCards
								image={product}
								title={'Whey Zero (Com Lactase) Black Skull - 900G'}
								price={'R$ 349,90'}
								installments={'ou 12x de R$ 29,16'}
							/>
						}
						card6={
							<ProductsCards
								image={product}
								title={'Whey Zero (Com Lactase) Black Skull - 900G'}
								price={'R$ 349,90'}
								installments={'ou 12x de R$ 29,16'}
							/>
						}
						card7={
							<ProductsCards
								image={product}
								title={'Whey Zero (Com Lactase) Black Skull - 900G'}
								price={'R$ 349,90'}
								installments={'ou 12x de R$ 29,16'}
							/>
						}
						card8={
							<ProductsCards
								image={product}
								title={'Whey Zero (Com Lactase) Black Skull - 900G'}
								price={'R$ 349,90'}
								installments={'ou 12x de R$ 29,16'}
							/>
						}
						card9={
							<ProductsCards
								image={product}
								title={'Whey Zero (Com Lactase) Black Skull - 900G'}
								price={'R$ 349,90'}
								installments={'ou 12x de R$ 29,16'}
							/>
						}
						card10={
							<ProductsCards
								image={product}
								title={'Whey Zero (Com Lactase) Black Skull - 900G'}
								price={'R$ 349,90'}
								installments={'ou 12x de R$ 29,16'}
							/>
						}
						card11={
							<ProductsCards
								image={product}
								title={'Whey Zero (Com Lactase) Black Skull - 900G'}
								price={'R$ 349,90'}
								installments={'ou 12x de R$ 29,16'}
							/>
						}
						card12={
							<ProductsCards
								image={product}
								title={'Whey Zero (Com Lactase) Black Skull - 900G'}
								price={'R$ 349,90'}
								installments={'ou 12x de R$ 29,16'}
							/>
						}
					/>
				</Container>
			</Div>
		</StyledReleasesSection>
	)
}

export default ReleasesSection;
