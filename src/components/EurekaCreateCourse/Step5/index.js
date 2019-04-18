import React, { useState, useEffect } from 'react';
import { Upload, Button } from '@alifd/next';
import { DATA_UPLOAD_URL, container } from '@/utils/api';

const UploadDataFiles = ({ classroom }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    container.getDataFiles().then(({ data }) => {
      setFiles(data);
    });
  }, []);

  return (
    <div>
      <Upload listType="text" action={`${DATA_UPLOAD_URL}?classroomId=${classroom.id}`}>
        <Button>上传文件</Button>
      </Upload>
    </div>
  );
};

export default (current, formValue, form) => [{
  label: '上传数据',
  required: true,
  render: () => <UploadDataFiles classroom={form.state.classroomData} />,
}];
