import ReactDOM from 'react-dom';
import router from '@/router';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';
import BraftEditor from 'braft-editor';
import Table from 'braft-extensions/dist/table';
import Markdown from 'braft-extensions/dist/markdown';

const ICE_CONTAINER = document.getElementById('ice-container');

if (!ICE_CONTAINER) {
  throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

BraftEditor.use(Table());
BraftEditor.use(Markdown());

ReactDOM.render(router, ICE_CONTAINER);
