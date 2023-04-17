import box from "@/assets/icons/svg/package.svg";
import dollar from "@/assets/icons/svg/currency-circle-dollar.svg";
import goal1 from "@/assets/images/goal-1.svg";
import goal2 from "@/assets/images/goal-2.svg";
import goal3 from "@/assets/images/goal-3.svg";
import goal4 from "@/assets/images/goal-4.svg";
import logo from "@/assets/icons/svg/logo-white.svg";

import Text from '@/components/Text';
import GoalCard from "@/components/GoalCard";
import AdvertisingCard from "@/components/AdvertisingCards";
import Icon from "@/components/Icon";

import { 
	StyledGoalsAndAbout, 
	DivTop, DivBottom, 
	DivCards, 
	ContainerBottom, 
	ContainerTop 
} from './style';

const GoalsAndAbout = () => {

	return (
		<StyledGoalsAndAbout>
			<DivTop>
				<ContainerTop>
					<Text
						color={'brand4'}
						fontFamily={'roboto'}
						fontSize={'32px'}
						fontStyle={'italic'}
						fontWeight={'700'}
						textTransform={'uppercase'}
						text={'Objetivos'}
					/>
					<DivCards>
						<GoalCard
							firstText={'Ganho de massa'}
							image={goal1}
						/>
						<GoalCard
							firstText={'Energia'}
							image={goal2}
						/>
						<GoalCard
							firstText={'Recuperação'}
							image={goal3}
						/>
						<GoalCard
							firstText={'Emagrecimento'}
							image={goal4}
						/>
					</DivCards>
					<DivCards>
						<AdvertisingCard
							firstText={'Garanta o'}
							secondText={'Frete grátis'}
							icon={box}
							textButton={'Consulte'}
							animated={'package'}
						/>
						<AdvertisingCard
							firstText={'Seu dinheiro'}
							secondText={'De volta'}
							icon={dollar}
							textButton={'Entenda'}
							animated={'dollar'}
						/>
					</DivCards>
				</ContainerTop>
			</DivTop>
			<DivBottom>
				<ContainerBottom>
					<Icon
						width={'160px'}
						height={'160px'}
						icon={logo}
					/>
					<Text
						color={'brand4'}
						fontFamily={'roboto'}
						fontSize={'32px'}
						fontStyle={'italic'}
						fontWeight={'700'}
						textTransform={'uppercase'}
						text={'Sobre a Black Skull'}
						overlaid
						bottom={'170px'}
					/>
					<Text
						width={'643px'}
						color={'brand4'}
						fontFamily={'barlow'}
						fontSize={'16px'}
						fontStyle={'normal'}
						fontWeight={'400'}
						textTransform={'none'}
						text={'A Black Skull USA é uma marca de suplementos alimentares com foco em atletas de alta performance. Nossa sede no Brasil está alocada em Embu das Artes – SP, com mais de 12.000 m² de área construída, com alta capacidade produtiva. Nossos produtos trabalham com as melhores matérias-primas do mercado e tem como principal característica maior concentração de insumos, que proporcionam níveis de pureza mais altos e por consequência otimizam a qualidade de nossos produtos.'}
						textAlign={'center'}
					/>
				</ContainerBottom>
			</DivBottom>
		</StyledGoalsAndAbout>
	)
}

export default GoalsAndAbout;
