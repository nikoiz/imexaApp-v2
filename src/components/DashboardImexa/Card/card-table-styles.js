import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #316b83;
  border-radius: 4px;
  overflow: hidden;
  color: #fefbf3;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
`;

export const TableElements = styled.th`
  padding: 5px;
`;

export const TableData = styled(TableElements)``;

export const TableHeader = styled(TableElements)`
  color: whitesmoke;
  text-align: center;
`;
export const TableRow = styled.tr``;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody`
  background-color: #8ca1a5;
  border: 1px solid rgb(255, 255, 255, 0.4);

  &:nth-child(even) {
  }

  &:hover {
    background-color: #aaa;
    cursor: pointer;
    color: floralwhite;
  }
`;
