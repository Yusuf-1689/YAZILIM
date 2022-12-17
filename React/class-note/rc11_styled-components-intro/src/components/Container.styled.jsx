import styled from 'styled-components';

const Container = styled.div`
  /* background: ${(props) => props.bg || 'white'}; */
  background: ${({ bg }) => bg || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.6rem;
`;

export default Container;