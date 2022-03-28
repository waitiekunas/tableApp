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
      <DynamicTypeRow elementType={elementType} content={firstColumnValue} />
      <DynamicTypeRow elementType={elementType} content={secondColumnValue} />
    </tr>
  );
}

export default Row;
