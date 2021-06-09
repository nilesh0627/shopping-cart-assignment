import styled from "styled-components";
const Main = styled("div")`
  font-family: sans-serif;
`;

const DropDownContainer = styled("div")`
  margin: 0 auto;
  background-color: #e8e9e8;
  color: #333;
`;

const DropDownHeader = styled("div")`
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  color: #fff;
  background-color: #b93153;
  cursor: pointer;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #586074;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
  &:hover {
    color: #b93153;
  }
`;

export { DropDownContainer, DropDownHeader, DropDownList, Main, ListItem };
