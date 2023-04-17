import { useState } from "react";

import truck from "@/assets/icons/svg/truck.svg";
import cart from "@/assets/icons/svg/shopping-cart.svg";
import user from "@/assets/icons/svg/user.svg";
import whishlist from "@/assets/icons/svg/whishlist.svg";
import user_white from "@/assets/icons/svg/user-white.svg";
import whishlist_white from "@/assets/icons/svg/whishlist-white.svg";
import logo from "@/assets/icons/svg/logo-letter.svg";

import Text from '@/components/Text';
import Link from '@/components/Link';
import Icon from "@/components/Icon";

import {
	StyledHeader,
	DivTop,
	DivBottom,
	DivTextIcon,
	Container,
	Nav,
	DivIcons,
	IconHover,
	DivDetails
} from './style';

import Input from "../Input";

const Header = () => {
	const [isHoverUser, setIsHoverUser] = useState(false)
	const [isHoverList, setIsHoverList] = useState(false)
	const [isFocusInput, setIsFocusInput] = useState(false);
	return (
		<StyledHeader
			onHoverStart={() => {
				setIsFocusInput(true);
			}}
			onHoverEnd={() => {
				setIsFocusInput(false);
			}}
		>
			<DivTop>
				<Container>
					<Link
						color='brand1'
						fontFamily='barlow'
						fontSize='12px'
						fontStyle='normal'
						fontWeight='700'
						textTransform='uppercase'
						text='Fale Conosco'
						textDecoration={'none'}
					/>
					<DivTextIcon>
						<img src={truck} alt={'truck-icon'} />
						<Text
							color='brand8'
							fontFamily='barlow'
							fontSize='10px'
							fontStyle='normal'
							fontWeight='700'
							textTransform='uppercase'
							text='Frete grátis a partir de R$ 199,90 para todo Brasil'
						/>
					</DivTextIcon>
					<Link
						color='brand1'
						fontFamily='barlow'
						fontSize='12px'
						fontStyle='normal'
						fontWeight='700'
						textTransform='uppercase'
						text='Blog.Blackskull'
						textDecoration={'none'}
					/>
				</Container>
			</DivTop>
			<DivBottom>
				<Container>
					<Icon
						icon={logo}
						height={'32px'}
						width={'166px'}
					/>
					<Nav>
						<Link
							color='brand7'
							fontFamily='barlow'
							fontSize='14px'
							fontStyle='normal'
							fontWeight='700'
							textTransform='uppercase'
							text='Categorias'
							textDecoration={'none'}
							animateOn
						/>
						<Link
							color='brand7'
							fontFamily='barlow'
							fontSize='14px'
							fontStyle='normal'
							fontWeight='700'
							textTransform='uppercase'
							text='Vestuário'
							textDecoration={'none'}
							animateOn
						/>
						<Link
							color='brand7'
							fontFamily='barlow'
							fontSize='14px'
							fontStyle='normal'
							fontWeight='700'
							textTransform='uppercase'
							text='Objetivos'
							textDecoration={'none'}
							animateOn
						/>
						<Link
							color='brand7'
							fontFamily='barlow'
							fontSize='14px'
							fontStyle='normal'
							fontWeight='700'
							textTransform='uppercase'
							text='Promoções'
							textDecoration={'none'}
							animateOn
						/>
						<Link
							color='brand7'
							fontFamily='barlow'
							fontSize='14px'
							fontStyle='normal'
							fontWeight='700'
							textTransform='uppercase'
							text='Atletas'
							textDecoration={'none'}
							animateOn
						/>
						<Link
							color='brand7'
							fontFamily='barlow'
							fontSize='14px'
							fontStyle='normal'
							fontWeight='700'
							textTransform='uppercase'
							text='Assinatura'
							textDecoration={'none'}
							animateOn
						/>
					</Nav>
					<DivDetails>
						<Input
							type={'search'}
							bgColor={'brand4'}
							border={'1px solid var(--brand6)'}
							borderFocus={'1px solid var(--brand7)'}
							borderRadius={'4px'}
							color={'brand7'}
							fontFamily={'barlow'}
							fontSize={'12px'}
							fontStyle={'normal'}
							fontWeight={'500'}
							width={'216px'}
							height={'40px'}
							hoverBgColor={'brand6'}
							padding={'13px 16px 13px 16px'}
							text={'Digite seu email'}
							focusBgColor={'brand6'}
							search
							monitoring={isFocusInput}
						/>
						<DivIcons>
							<IconHover
								onHoverStart={() => {
									setIsHoverUser(true);
								}}
								onHoverEnd={() => {
									setIsHoverUser(false);
								}}
								src={isHoverUser ? user_white : user}
							/>
							<IconHover
								onHoverStart={() => {
									setIsHoverList(true);
								}}
								onHoverEnd={() => {
									setIsHoverList(false);
								}}
								src={isHoverList ? whishlist_white : whishlist}
							/>
							<Icon
								icon={cart}
								height={'24px'}
								width={'24px'}
							/>
						</DivIcons>
					</DivDetails>
				</Container>
			</DivBottom>
		</StyledHeader>
	)
}

export default Header;
