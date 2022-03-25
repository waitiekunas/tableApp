import { TableTexts } from '../../constants/texts';
import { TableData } from '../../types/api.types';
import { TableElementType } from '../../types/general.types';
import Row from './Row';

type Props = {
  tableData: TableData[];
};

function Table({ tableData }: Props) {
  return (
    <table>
      <thead>
        <Row firstColumnValue={TableTexts.NUMBER} secondColumnValue={TableTexts.NAME} elementType={TableElementType.TH} />
      </thead>
      <tbody>
        {tableData.map((value, index) => (
          <Row
            key={`${index}_${value.name}`}
            firstColumnValue={value.id}
            secondColumnValue={value.name}
            elementType={TableElementType.TR}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
