import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Dialog, Button, Tag, Table, Pagination } from '@alifd/next';
import { project } from '@/utils/api';

const { Row, Col } = Grid;
const { Group: TagGroup, Selectable: SelectableTag } = Tag;

export default () => {
  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const onOk = () => {
    setVisible(false);
  };
  const queryProjects = (id) => {
    project.selectAll({ params: { tag: id } }).then(({ data }) => {
      setProjects(data);
    });
  };

  useEffect(() => {
    project.categories().then(({ data }) => {
      setCategories(data);
    });
  }, []);

  return (
    <div className="m-b-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <form className="needs-validation" >
        <div className="form-row row m-t-20">
          <label className="import col-sm-2 col-form-label">选择实验</label>
          <div className="col-sm-8">
            <button type="button" className="btn btn-primary" onClick={() => setVisible(true)}>
              添加实验模板
            </button>
            <ul className="list-group list-group-flush m-t-20 course">
              <li className="list-group-item">
                <a href="#" role="button" data-toggle="modal" data-target=".bd-example-modal-lg" >一、 Python 3 Programming 专项实验</a>
                <a href="#" className="cbtn cclose" data-toggle="modal" data-target="#exampleclose"><span aria-hidden="true" >×</span></a>
                <a href="#" className="cbtn"><span aria-hidden="true">↑</span></a>
                <a href="#" className="cbtn"><span aria-hidden="true">↓</span></a>
                <a href="#" className="cbtn" role="button" data-toggle="modal" data-target=".bd-example-modal-lg" ><span aria-hidden="true">✎</span></a>
                <a href="#" className="cbtn"><span aria-hidden="true">■</span></a>
              </li>
              <li className="list-group-item">
                <a href="#" >二、Python 3零基础完全入门</a>
                <a href="#" className="cbtn cclose" data-toggle="modal" data-target="#exampleclose"><span aria-hidden="true">×</span></a>
                <a href="#" className="cbtn"><span aria-hidden="true">↑</span></a>
                <a href="#" className="cbtn"><span aria-hidden="true">↓</span></a>
                <a href="#" className="cbtn"><span aria-hidden="true">✎</span></a>
                <a href="#" className="cbtn playcbtn"><span aria-hidden="true">►</span></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-row row m-t-20">
          <label htmlFor="validationCustom03" className="col-sm-2 col-form-label" />
          <div className="col-sm-8">
            <div className="col-sm-8">
              <p className="m-t-20"><Link to="#" className="btn btn-primary  addcouse">下一步 </Link></p>
            </div>
          </div>
        </div>
      </form>
      <Dialog title="选择实验模版" shouldUpdatePosition closeable={false} hasMask={false} visible={visible} onOk={onOk} onCancel={() => setVisible(false)} style={{ width: 600 }}>
        <TagGroup>
          {categories.reduce((all, { type }) => all.concat(type.map(({ id, name, count }) => (
            <SelectableTag key={id} onChange={() => queryProjects(id)}>{name}({count})</SelectableTag>
          ))), [])}
        </TagGroup>
        <Table dataSource={projects}>
          <Table.Column title="项目名称" dataIndex="title" />
        </Table>
      </Dialog>
    </div>
  );
};
