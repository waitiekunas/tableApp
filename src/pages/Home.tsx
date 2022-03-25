import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/Button';
import { Table } from '../components/Table';
import { ButtonTexts } from '../constants/texts';
import { filterEvenNumbers, filterOddNumbers } from '../functions/utils';
import { getTableDataAction } from '../store/actions/api.actions';
import { selectTableData } from '../store/selectors/api.selectors';
import { TableData } from '../types/api.types';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const tableInitialData = useSelector(selectTableData);
  const [tableData, setTableData] = useState<TableData[]>([]);

  useEffect(() => {
    setTableData(tableInitialData);
  }, [tableInitialData]);

  useEffect(() => {
    dispatch(getTableDataAction());
  }, []);

  return (
    <div className="centeredFlex">
      <div className="mainCenteredFlex marginTopMedium">
      <div className="columnFlex">
        <Table tableData={tableData} />
        <div className="rowSpaceEvenly marginTopMedium">
          <Button onClick={() => setTableData(tableInitialData)} buttonText={ButtonTexts.SHOWALL} />
          <Button
            onClick={() => setTableData(filterEvenNumbers(tableInitialData))}
            buttonText={ButtonTexts.SHOWEVEN}
          />
          <Button
            onClick={() => setTableData(filterOddNumbers(tableInitialData))}
            buttonText={ButtonTexts.SHOWODD}
          />
        </div>
      </div>
      </div>
    </div>
  );
};
