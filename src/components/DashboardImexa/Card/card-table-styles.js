import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableElements = styled.th`
  border: 1px solid #eee;
  padding: 5px;
`;

export const TableData = styled(TableElements)``;

export const TableHeader = styled(TableElements)`
  background-color: tomato;
  color: whitesmoke;
  text-align: center;
`;
export const TableRow = styled.tr`
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody`
  &:nth-child(even) {
    background-color: gray;
  }

  &:hover {
    background-color: #aaa;
    cursor: pointer;
    color: floralwhite;
  }
`;
