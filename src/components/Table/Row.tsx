import { TableElementType } from '../../types/general.types';
import DynamicTypeRow from './DynamicTypeRow';

type Props = {
  firstColumnValue: string | number;
  secondColumnValue: string;
  elementType: TableElementType;
};

function Row({ firstColumnValue, secondColumnValue, elementType }: Props) {
  return (
    <tr>
      <DynamicTypeRow elementType={elementType}>{firstColumnValue}</DynamicTypeRow>
      <DynamicTypeRow elementType={elementType}>{secondColumnValue}</DynamicTypeRow>
    </tr>
  );
}

export default Row;
