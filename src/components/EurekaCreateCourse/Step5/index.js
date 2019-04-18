import React, { useState, useEffect } from 'react';
import { Upload, Button } from '@alifd/next';
import { DATA_UPLOAD_URL, container } from '@/utils/api';

const UploadDataFiles = ({ classroom }) => {
  const [files, setFiles] = useState({ data: [], count: 0 });
  const onListFiles = () => {
    container.getDataFiles({
      params: {
        classroomId: classroom.id,
      },
    }).then(({ data }) => {
      setFiles({ data: data.data.slice(0, 5), count: data.data.length });
    });
  };

  useEffect(() => {
    onListFiles();
  }, []);

  return (
    <div>
      <Upload listType="text" action={`${DATA_UPLOAD_URL}?classroomId=${classroom.id}`} onSuccess={onListFiles}>
        <Button>上传文件</Button>
      </Upload>
      <div className="m-t-20">
        {files.data.map((file, i) => <div key={i}>{file.filename}</div>)}
        {files.count > files.data.length ? <div>还有 {files.count - files.data.length} 个文件未显示</div> : null}
      </div>
    </div>
  );
};

export default (current, formValue, form) => [{
  label: '上传数据',
  required: true,
  render: () => <UploadDataFiles classroom={form.state.classroomData} />,
}];
