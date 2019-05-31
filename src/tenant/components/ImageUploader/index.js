import React, { useState, forwardRef } from 'react';
import { Upload, Button } from '@alifd/next';
import { IMAGE_UPLOAD_URL } from '../../api';

export default forwardRef(({ buttonText = '上传照片', tips, value, width = 100, height = 100, ...props }, ref) => {
  const [url, setUrl] = useState(value || '');
  const onSuccess = ({ response }) => {
    setUrl(response.url);
    if (props.onSuccess) {
      props.onSuccess(response);
    }
  };

  return (
    <div>
      <div style={{ float: 'left', width, height, lineHeight: `${height}px`, border: '1px solid #c4c6cf', backgroundColor: '#ededed', textAlign: 'center', backgroundSize: 'cover', backgroundImage: `url(${url})` }}>
        {!url && <span>暂无预览</span>}
      </div>
      <div style={{ paddingLeft: width + 20 }}>
        <Upload action={IMAGE_UPLOAD_URL} accept="image/*" ref={ref} {...props} onSuccess={onSuccess}>
          <Button type="primary">{buttonText}</Button>
        </Upload>
        <p>{tips}</p>
      </div>
    </div>
  );
});
