import styled from 'styled-components';

export const PropsButton = styled.button`
  background: ${(props) => props.color ? props.color : "green"};
  color: white;
  padding: ${(props) => props.padding ? props.padding: "2rem"};
  font-size: ${(props) => props.big ? "4rem": "2rem"};
  margin: 1rem;
`;

export const BigButton = styled(PropsButton)`
  margin: 0.5rem;
  font-size: 3rem;
  text-transform: capitalize
`

export const DangerButton = styled(PropsButton)`
  background: red;
`

export const SuccessButton = styled(PropsButton)`
  background: lightgreen;
  color: darkgrey;
`

export default PropsButton;
