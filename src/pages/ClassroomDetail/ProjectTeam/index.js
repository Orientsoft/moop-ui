import React from 'react';
import Markdown from 'react-markdown';

export default () => {
  return (
    <div className="m-b-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <h5 className="m-b-20">实验教学项目负责人情况</h5>
      <Markdown source="# this 阿萨德撒地方 `console.log(this)`" />
      <div className="text-secondary">
        <table className="table table-bordered part-table">
          <tbody>
            <tr>
              <th>姓名</th>
              <td>刘财</td>
              <th>性别</th>
              <td>男</td>
              <th>出生年月</th>
              <td>1963-09-26</td>
            </tr>
            <tr>
              <th>学历</th>
              <td>博士研究生</td>
              <th>学位</th>
              <td>博士</td>
              <th>专业技术职务</th>
              <td>教授</td>
            </tr>
            <tr>
              <th>行政职务</th>
              <td>实验中心主任</td>
              <th>院系</th>
              <td>吉林大学地球探测科学与技术学院</td>
              <th>邮编</th>
              <td>130026</td>
            </tr>
            <tr>
              <th>地址</th>
              <td colspan="5">吉林省长春市西民主大街938号</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5 className="m-b-20 m-t-40">教学研究情况</h5>
      <div className="part-content">
        <p className="fangsong">（主持的教学研究课题（含课题名称、来源、年限，不超过5项）；作为第一署名人在国内外公开发行的刊物上发表的教学研究论文（含题目、刊物名称、时间，不超过10项）；获得的教学表彰/奖励（不超过5项））</p>
        <p >
          <strong>教学研究课题：</strong>
        </p>
        <p>
          1.应用地球物理实践专题体系建设，吉林省重点教学项目 2003-2005</p>
        <p>
          2.应用地球物理卓越人才培养实践教学体系建设，吉林大学重大教学项目(ZD110410)，2011-2013
        </p>
        <p>
          3.固体地球物理学研究生专题体系建设，吉林大学研究生重点教学项目，2011-2013
        </p>
        <p>
          4.应用地球物理卓越人才培养实践教学体系建设，吉林省重点教研项目，2012-2015
        </p>
        <p>
          5.勘查技术与工程专业综合改革试点，吉林大学高校“专业综合改革试点”项目，2014-2016
        </p>
        <p><strong>教学研究论文：</strong></p>
        <p>1.刘财，杜晓娟等，应用地球物理卓越人才培养体系构建与实践，中国大学教学，2013，No.12，（CSSCI检索，影响因子1.08）</p>
        <p>2.刘财 杜晓娟 高淑贞，潘保芝 陆继龙，地质资源立体探测虚拟仿真实验教学中心建设的探索与实践，实验技术与管理，2014，vol.31,No.10</p>
        <p>3.刘财等，勘查技术与工程专业卓越工程师培养的探索与实践，中国地质教育，2013，No.2</p>
        <p>4.刘财等，坚持“研、严、妍”，培养高质量人才，中国教育（高校版），2008，No.4</p>
        <p>5.刘财等．建立专业思想，寻找知识增长点．高教论丛，1998，No.1</p>
        <p>6.刘财等，新生—如何适应新的大学学习生活，高教论丛，2000，No.1</p>
        <p>7.刘财等．浅谈本科生毕业论文(设计)．高教论丛，1996，No.4</p>
        <p>8.刘财．注重链式教学法的首环，培养高质量的应用型人才．高教论丛，1995，No.1</p>
        <p>9.刘财等．专业基础课的承上启下教学法．高教论丛，1993，No.1</p>
        <p>10.刘财等，地球探测与信息技术学科实践教学研究，《创新、改革与实践》，吉林大学教务处编，吉林大学出版社，2006.7</p>
        <p><strong>教学表彰/奖励：</strong></p>
        <p>1.全国高校黄大年式教师团队（地球探测与信息技术教师团队）负责人，2017年</p>
        <p>2.吉林省高校优秀教学团队负责人（勘探地震学教学团队），2012年</p>
        <p>3.宝钢教育奖优秀教师奖，2007年</p>
        <p>4.吉林省教学名师，2014年</p>
        <p>5.吉林省优秀教学成果奖一等奖（应用地球物理教学体系建设创新与实践，2009年；应用地球物理卓越人才培养体系与实践，2014；理工融合构建地球物理人才培养体系，2018年）排名1</p>
        <div className="moreBox"><a href="" title="查看更多" className="showMore">查看更多<i className="iconfont"></i></a></div>
      </div>
      <h5 className="m-b-20 m-t-40">学术研究情况</h5>
      <div className="part-content" >
        <p className="fangsong">（近五年来承担的学术研究课题（含课题名称、来源、年限、本人所起作用，不超过5项）；在国内外公开发行刊物上发表的学术论文（含题目、刊物名称、署名次序与时间，不超过5项）；获得的学术研究表彰/奖励（含奖项名称、授予单位、署名次序、时间，不超过5项））</p>
        <p>
          暂无内容
        </p>
      </div>
      <h5 className="m-b-20 m-t-40">实验教学项目教学服务团队情况</h5>
      <div className="tip">项目团队总人数：6 人高校人员数量：5人 企业人员数量：1人</div>
      <div className="part-content" >
        <table className="part-table" id="mainTable">
          <caption>团队主要成员</caption>
          <tbody>
            <tr>
              <th >序号</th>
              <th>姓名</th>
              <th>所在单位</th>
              <th>专业技术职务</th>
              <th>行政职务</th>
              <th>承担任务</th>
              <th>备注</th>
            </tr>
            <tr>
              <td >1</td>
              <td>朱平平</td>
              <td>中国科学技术大学</td>
              <td>教授</td>
              <td>化学实验教学中心主任</td>
              <td>实验教学、虚拟仿真项目开发</td>
              <td>-</td>
            </tr>
            <tr>
              <td >2</td>
              <td>杨海洋</td
              ><td>中国科学技术大学</td>
              <td>副教授</td>
              <td>课程组 组长</td>
              <td>实验教学、虚拟仿真项目开发</td>
              <td>-</td>
            </tr>
            <tr>
              <td >3</td>
              <td>谢永军</td>
              <td>中国科学技术大学</td>
              <td>博士后</td>
              <td>（无）</td><td>实验教学、虚拟仿真项目开发</td>
              <td>-</td>
            </tr>
            <tr>
              <td >4</td>
              <td>何平笙</td>
              <td>中国科学技术大学</td>
              <td>教授</td><td>（无）</td>
              <td>虚拟仿真项目开发</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <table className="part-table" id="otherTable">
          <caption>
            团队其他成员
          </caption>
          <tbody>
            <tr>
              <th >序号</th>
              <th>姓名</th>
              <th>所在单位</th>
              <th>专业技术职务</th>
              <th>行政职务</th>
              <th>承担任务</th>
              <th>备注</th>
            </tr>
            <tr>
              <td >1</td>
              <td>王俊飞</td>
              <td>合肥博创科技有限公司</td>
              <td>软件工程师</td>
              <td>（无）</td>
              <td>技术支持</td>
              <td>技术支持人员</td>
            </tr>
            <tr>
              <td >2</td>
              <td>魏伟</td>
              <td>中国科学技术大学</td>
              <td>助理实验师</td>
              <td>（无）</td>
              <td>平台维护与更新</td>
              <td>在线教学服务人员</td>
            </tr>
          </tbody>
        </table>
         <div className="fangsong ">
            注：1.教学服务团队成员所在单位需如实填写，可与负责人不在同一单位。
            2.教学服务团队须有在线教学服务人员和技术支持人员，请在备注中说明。
         </div>
      </div>
   </div>
  );
};
