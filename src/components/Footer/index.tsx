import certified_vtex from "@/assets/icons/svg/certified-vtex.svg";
import certified_bit from "@/assets/icons/svg/certified-bit.svg";
import bank from "@/assets/icons/svg/bank.svg";
import logo from "@/assets/icons/svg/logo-letter.svg";
import wicomm from "@/assets/icons/svg/wicomm.svg";
import vtex from "@/assets/icons/svg/vtex.svg";
import facebook from "@/assets/icons/svg/facebook.svg";
import instagram from "@/assets/icons/svg/instagram.svg";
import twitter from "@/assets/icons/svg/twitter.svg";
import tiktok from "@/assets/icons/svg/tiktok.svg";
import yuotube from "@/assets/icons/svg/youtube.svg";

import Text from '@/components/Text';
import Link from '@/components/Link';
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Input from "@/components/Input";

import {
	ContainerTop,
	ContainerBottom,
	StyledFooter,
	DivTop,
	DivBottom,
	DivLeft,
	DivRight,
	DivIcons,
	ContentBottom,
	ContentLeft,
	ContentRight,
	ContentTop,
	DivSocialMidia,
	List,
	DivCertified,
	Form,
	Icons
} from './style';


const Footer = () => {

	return (
		<StyledFooter>
			<DivTop>
				<ContainerTop>
					<DivLeft>
						<ContentLeft>
							<Link
								text={
									<Icon
										icon={logo}
										height={'40.83px'}
										width={'213.37px'}
									/>
								}
							/>
							<DivSocialMidia>
								<Text
									color='brand10'
									fontFamily='barlow'
									fontSize='16px'
									fontStyle='normal'
									fontWeight='400'
									textTransform='none'
									text='Nos siga:'
								/>
								<Icons>
									<Link
										text={
											<Icon
												icon={facebook}
												width={'24px'}
												height={'24px'}
											/>}
									/>
									<Link
										text={
											<Icon
												icon={instagram}
												width={'24px'}
												height={'24px'}
											/>}
									/>
									<Link
										text={
											<Icon
												icon={yuotube}
												width={'24px'}
												height={'24px'}
											/>}
									/>
									<Link
										text={
											<Icon
												icon={twitter}
												width={'24px'}
												height={'24px'}
											/>}
									/>
									<Link
										text={
											<Icon
												icon={tiktok}
												width={'24px'}
												height={'24px'}
											/>}
									/>
								</Icons>
							</DivSocialMidia>
						</ContentLeft>
						<ContentRight>
							<ContentTop>
								<List>
									<Text
										color='brand10'
										fontFamily='barlow'
										fontSize='16px'
										fontStyle='normal'
										fontWeight='700'
										textTransform='uppercase'
										text='Blackskull USA'
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Sobre Nós'
										textDecoration={'none'}
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Black Skull é confiável?'
										textDecoration={'none'}
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Atletas Black Skull'
										textDecoration={'none'}
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Nosso Blog'
										textDecoration={'none'}
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Seja um Revendedor'
										textDecoration={'none'}
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Entre em Contato'
										textDecoration={'none'}
									/>
								</List>
								<List>
									<Text
										color='brand10'
										fontFamily='barlow'
										fontSize='16px'
										fontStyle='normal'
										fontWeight='700'
										textTransform='uppercase'
										text='Institucional'
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Trocas e Devoluções'
										textDecoration={'none'}
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Política de Entregas'
										textDecoration={'none'}
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Política de Privacidade'
										textDecoration={'none'}
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Política de Cancelamentos'
										textDecoration={'none'}
									/>
								</List>
								<List>
									<Text
										color='brand10'
										fontFamily='barlow'
										fontSize='16px'
										fontStyle='normal'
										fontWeight='700'
										textTransform='uppercase'
										text='Afiliados'
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Programa de Afiliados'
										textDecoration={'none'}
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Desconto para Militares'
										textDecoration={'none'}
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Benefícios para
										Profissionais da Saúde'
										textDecoration={'none'}
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Benefícios para
										Profs. de Educação Física'
										textDecoration={'none'}
									/>
									<Link
										color='brand7'
										fontFamily='barlow'
										fontSize='14px'
										fontStyle='normal'
										fontWeight='400'
										textTransform='none'
										text='Assinaturas'
										textDecoration={'none'}
									/>
								</List>
							</ContentTop>
							<ContentBottom>
								<List>
									<Text
										color='brand10'
										fontFamily='barlow'
										fontSize='16px'
										fontStyle='normal'
										fontWeight='700'
										textTransform='uppercase'
										text='Formas de Pagamento'
										whiteSpace={'nowrap'}
									/>
									<Icon
										width={'202px'}
										height={'56px'}
										icon={bank}
									/>
								</List>
								<List>
									<Text
										color='brand10'
										fontFamily='barlow'
										fontSize='16px'
										fontStyle='normal'
										fontWeight='700'
										textTransform='uppercase'
										text='Segurança'
									/>
									<DivCertified>
										<Icon
											width={'80px'}
											height={'48px'}
											icon={certified_vtex}
										/>
										<Icon
											width={'38px'}
											height={'52px'}
											icon={certified_bit}
										/>
									</DivCertified>
								</List>
							</ContentBottom>
						</ContentRight>
					</DivLeft>
					<DivRight>
						<Form>
							<Text
								color='brand10'
								fontFamily='roboto'
								fontSize='32px'
								fontStyle='italic'
								fontWeight='700'
								textTransform='uppercase'
								text='Fique por '
								secondColor={'brand1'}
								secondText={'Dentro'}
								secondfontFamily='roboto'
								textAlign={'center'}
							/>
							<Text
								color='brand7'
								fontFamily='barlow'
								fontSize='14px'
								fontStyle='normal'
								fontWeight='400'
								textTransform='none'
								textAlign={'center'}
								text='Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e muito mais!'
							/>
							<Input
								type={'text'}
								bgColor={'brand4'}
								border={'1px solid var(--brand6)'}
								borderFocus={'1px solid var(--brand7)'}
								borderRadius={'4px'}
								color={'brand7'}
								fontFamily={'barlow'}
								fontSize={'12px'}
								fontStyle={'normal'}
								fontWeight={'500'}
								width={'266px'}
								height={'56px'}
								hoverBgColor={'brand6'}
								padding={'13px 16px 13px 16px'}
								text={'Digite seu nome'}
								focusBgColor={'brand6'}
							/>
							<Input
								type={'email'}
								bgColor={'brand4'}
								border={'1px solid var(--brand6)'}
								borderFocus={'1px solid var(--brand7)'}
								borderRadius={'4px'}
								color={'brand7'}
								fontFamily={'barlow'}
								fontSize={'12px'}
								fontStyle={'normal'}
								fontWeight={'500'}
								width={'266px'}
								height={'56px'}
								hoverBgColor={'brand6'}
								padding={'13px 16px 13px 16px'}
								text={'Digite seu email'}
								focusBgColor={'brand6'}
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
						</Form>
					</DivRight>
				</ContainerTop>
			</DivTop>
			<DivBottom>
				<ContainerBottom>
					<Text
						color='brand10'
						fontFamily='barlow'
						fontSize='16px'
						fontStyle='normal'
						fontWeight='400'
						textTransform='none'
						text={`Black Skull ${new Date().getFullYear()}. Todos os direitos reservados.`}
					/>
					<DivIcons>
						<Link
							text={<Icon
								icon={wicomm}
								width={'96px'}
								height={'24px'}
							/>}
						/>
						<Link
							text={
								<Icon
									icon={vtex}
									width={'66px'}
									height={'24px'}
								/>
							}
						/>

					</DivIcons>
				</ContainerBottom>
			</DivBottom>
		</StyledFooter>
	)
}

export default Footer;
