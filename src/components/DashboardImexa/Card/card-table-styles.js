import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #062925;
  border-radius: 4px;
  overflow: hidden;
  color: #eee;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
`;

export const TableElements = styled.th`
  padding: 5px;
`;

export const TableData = styled(TableElements)``;

export const TableHeader = styled(TableElements)`
  color: #eee;
  text-align: center;
`;
export const TableRow = styled.tr``;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody`
  background-color: #044A42;
  border: 1px solid rgb(255, 255, 255, 0.4);

  &:nth-child(even) {
  }

  &:hover {
    background-color: #3A9188;
    cursor: pointer;
    color: #eee;
  }
`;
