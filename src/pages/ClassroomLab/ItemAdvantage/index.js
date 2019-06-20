import React from 'react';
import Markdown from 'react-markdown';

export default ({ data = {} }) => {
  return (
    <div className="m-b-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <Markdown source={data.characteristic} escapeHtml={false} />
    </div>
  );
};
