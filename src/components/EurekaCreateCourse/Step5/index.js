import React, { Fragment, useState, useEffect } from 'react';
import { Upload, Button, Grid } from '@alifd/next';
import get from 'lodash-es/get';
import { DATA_UPLOAD_URL, container } from '@/utils/api';

const { Row, Col } = Grid;

export default ({ labelSpan, wrapperSpan, getClassroom, toNext }) => {
  const [files, setFiles] = useState({ data: [], count: 0 });
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
            <Upload listType="text" action={`${DATA_UPLOAD_URL}?classroomId=${get(getClassroom(), 'id', '')}`} onSuccess={onListFiles}>
              <Button type="primary">上传 .zip 文件</Button>
            </Upload>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={labelSpan + wrapperSpan} className="m-t-20">
            {files.data.map((file, i) => <div key={i}>{file.filename}</div>)}
            {files.count > files.data.length ? <div>还有 {files.count - files.data.length} 个文件未显示</div> : null}
          </Col>
        </Row>
        <Row justify="center" className="m-t-20">
          <Col span={4}>
            <Button type="primary"  onClick={toNext} className="serverbtn">下一步</Button>
          </Col>
        </Row>
      </Fragment>
    </div>
  );
};
