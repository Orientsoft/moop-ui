import React, { Fragment, useState, useEffect } from 'react';
import { Upload, Button, Grid, Checkbox } from '@alifd/next';
import get from 'lodash-es/get';
import { DATA_UPLOAD_URL, container } from '@/utils/api';

const { Row, Col } = Grid;

export default ({ labelSpan, wrapperSpan, getClassroom }) => {
  const [files, setFiles] = useState({ data: [], count: 0 });
  const [overwrite, setOverwrite] = useState(false);
  const onListFiles = () => {
    container.getDataFiles({
      params: {
        classroomId: get(getClassroom(), 'id', ''),
      },
    }).then(({ data }) => {
      setFiles({ data: data.data.slice(0, 5), count: data.data.length });
    });
  };

  useEffect(() => {
    onListFiles();
  }, []);

  return (
    <div className="centminheight">
      <Fragment>
        <Row justify="center">
          <Col span={labelSpan + wrapperSpan}>
            <Upload listType="text" action={`${DATA_UPLOAD_URL}?overwrite=${Number(overwrite)}&classroomId=${get(getClassroom(), 'id', '')}`} onSuccess={onListFiles}>
              <Button type="primary">上传 .zip 文件</Button>
              <Checkbox style={{ marginLeft: 16 }} checked={overwrite} onChange={v => setOverwrite(v)}>清空所有旧文件</Checkbox>
            </Upload>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={labelSpan + wrapperSpan} className="m-t-20">
            {files.data.map((file, i) => <div key={i}>{file.filename}</div>)}
            {files.count > files.data.length ? <div>还有 {files.count - files.data.length} 个文件未显示</div> : null}
          </Col>
        </Row>
      </Fragment>
    </div>
  );
};
