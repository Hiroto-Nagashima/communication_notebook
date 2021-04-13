import { VFC } from "react";
import styled from "styled-components";

export type Props={
  label: string
}
export const Footer:VFC<Props> = (props) => {
  const { label } = props
  return <SFooter >{label}</SFooter>;
};
const SFooter = styled.footer`
  background-color: #3f51b5;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;