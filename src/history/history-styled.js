import styled from 'styled-components';
import ButtonStyled from '../controls/button/button-styled';

const HistoryStyled = styled.section`
	display: flex;
	flex-direction: column;
`;

const HistoryItemHeaderStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HistoryItemTitleStyled = styled.h2``;

const HistoryItemButton = styled(ButtonStyled.Button)`
	position: absolute;
	bottom: 15px;
	left: 50%;
	width: 280px;
	margin-left: -160px;
`;

export default {
	History: HistoryStyled,
	Header: HistoryItemHeaderStyled,
	Title: HistoryItemTitleStyled,
	Button: HistoryItemButton,
};
