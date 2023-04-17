import blog1 from "@/assets/images/blog-1.svg";
import blog2 from "@/assets/images/blog-2.svg";
import blog3 from "@/assets/images/blog-3.svg";

import Text from '@/components/Text';
import Button from "@/components/Button";

import { StyledBlogSection, DivTop, DivBottom, ContainerBottom, ContainerTop } from './style';
import BlogCard from "../BlogCard";
import Carousel from "../CarouselCards";


const BlogSection = () => {

	return (
		<StyledBlogSection>
			<DivTop>
				<ContainerTop>
					<Text
						color='brand10'
						fontFamily='roboto'
						fontSize='32px'
						fontStyle='italic'
						fontWeight='700'
						textTransform='uppercase'
						text='Confira o '
						secondColor={'brand1'}
						secondText={'Nosso Blog'}
						secondfontFamily='roboto'
						whiteSpace={'nowrap'}
						inline
					/>
					<Button
						color='brand3'
						fontFamily='barlow'
						fontSize='14px'
						fontStyle='normal'
						fontWeight='700'
						textTransform='uppercase'
						text='Enviar'
						textAlign='center'
						width={'138px'}
						height={'40px'}
						bgColor={'brand1'}
						borderRadius={'4px'}
						padding={'14px 24px'}
						hoverBg={'brand2'}
					/>
				</ContainerTop>
			</DivTop>
			<DivBottom>
				<ContainerBottom>
					<Carousel
						width={'1280px'}
						carouselWidth={'1200px'}
						containerWidth={'1175px'}
						numberPagination={3}
						gap={0}
						numberSroll={3}
						card1={
							<BlogCard
								date={'03.05.21'}
								image={blog1}
								title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							/>
						}
						card2={
							<BlogCard
								date={'03.05.21'}
								image={blog2}
								title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							/>
						}
						card3={
							<BlogCard
								date={'03.05.21'}
								image={blog3}
								title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							/>
						}
						card4={
							<BlogCard
								date={'03.05.21'}
								image={blog1}
								title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							/>
						}
						card5={
							<BlogCard
								date={'03.05.21'}
								image={blog2}
								title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							/>
						}
						card6={
							<BlogCard
								date={'03.05.21'}
								image={blog3}
								title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							/>
						}
						card7={
							<BlogCard
								date={'03.05.21'}
								image={blog1}
								title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							/>
						}
						card8={
							<BlogCard
								date={'03.05.21'}
								image={blog2}
								title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							/>
						}
						card9={
							<BlogCard
								date={'03.05.21'}
								image={blog3}
								title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							/>
						}
					/>
				</ContainerBottom>
			</DivBottom>
		</StyledBlogSection>
	)
}

export default BlogSection;
