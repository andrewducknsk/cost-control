import { keyframes } from 'styled-components';

export const openAnimation = keyframes`
from { opacity: 0 }
to { opacity: 1 }
`;

export const closeAnimation = keyframes`
from { opacity: 1 }
to { opacity: 0 }
`;
