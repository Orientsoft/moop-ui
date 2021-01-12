import React, { Fragment, useState } from 'react';
import { Message } from '@alifd/next';
import BraftEditor from 'braft-editor';
import queryString from 'query-string';
import { report as reportAPI } from '@/utils/api';
import { getCurrentUser } from '@/utils/helper';
import get from 'lodash-es/get';

// const defaultstr = '<p style="text-align:center;" class="MsoNormal" align="center"><span style="line-height:3">北京物资学院信息学院实验报告</span></p><p class="MsoNormal"> <span style="line-height:2">课程: </span><u>_                                        </u>  <span style="line-height:2">实验名称:</span><u>_                                </u> <span style="line-height:2">第</span><u>_   </u> <span style="line-height:2">页 ／共</span><u>_   </u> <span style="line-height:2">页 </span></p><p class="MsoNormal"> <span style="line-height:2">系</span> <span style="line-height:2">别:</span><u>_                                                                     </u> <span style="line-height:2">     实验日期:  </span><u>_   </u> <span style="line-height:2">年 </span><u>_   </u><span style="line-height:2">月</span><u>_   </u><span style="line-height:2">日</span></p><p size="1" _root="[object Object]" __ownerid="undefined" __hash="undefined" __altered="false"><span style="line-height:1.5"> 专业班级:</span><u>_                                                               </u>       <span style="line-height:1.5">实验报告日期: </span> <u>_   </u> <span style="line-height:1.5">年 </span> <u>_   </u> <span style="line-height:1.5">月</span> <u>_   </u><span style="line-height:1.5">日</span></p><p class="MsoNormal"><span style="line-height:1.5"> 姓</span> <span style="line-height:1.5">名:</span><u>_                             </u> <span style="line-height:1.5">学号:</span><u>_                             </u> </p><p> </p><hr/><p></p><p class="MsoNormal">一、实验目的</p><p class="MsoNormal"></p><p></p><p></p><p></p><p class="MsoNormal">二、实验内容（描述实验任务）</p><p></p><p></p><p></p><p></p><p class="MsoNormal">三、实验环境（描述实验的软件、硬件环境）</p><p></p><p></p><p></p><p></p><p class="MsoNormal">四、实验步骤与结果</p><p>（描述实现实验内容的步骤和命令即在实验中做了什么事情，怎么做的，结果如何。）</p><p></p><p></p><p></p><p></p><p class="MsoNormal">五、总结</p><p class="MsoNormal">（说明实验过程中遇到的问题及解决办法；个人的收获；未解决的问题等）</p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>'
const defaultstr = '<p style="text-align:center;"><span style="color:#2d2e2e"><span style="background-color:#ffffff"><strong><span style="line-height:4"><span style="font-size:24px">北京物资学院《快递自提网点布局虚拟仿真》实验报告</span></span></strong></span></span></p><p style="text-align:left;"><span style="color:#2d2e2e"><span style="font-size:15px"><span style="background-color:#ffffff"><span style="line-height:2.5">院系:__________________________________ <span style="letter-spacing:0px">专业班级</span>:_______________________________</span></span></span></span></p><p style="text-align:left;"><span style="color:#2d2e2e"><span style="font-size:15px"><span style="background-color:#ffffff"><span style="line-height:2.5">学号:__________________________________ 姓名:___________________________________</span></span></span></span></p><p style="text-align:left;"><span style="color:#2d2e2e"><span style="font-size:15px"><span style="background-color:#ffffff"><span style="line-height:2.5">实验日期: _______年 _______月 ______日</span></span></span></span></p><hr/><p></p><p class="MsoNormal"><strong><span style="font-size:18px"><span style="line-height:2">一、实验目的</span></span></strong> <span style="line-height:1"><span style="font-size:14px">（描述实验目的）</span></span></p><p style="text-indent:2em;"></p><p></p><p></p><p></p><p class="MsoNormal"><strong><span style="font-size:18px">二、实验内容</span></strong><span style="font-size:14px">（描述实验任务）</span></p><p style="text-indent:2em;"></p><p></p><p></p><p></p><p></p><p class="MsoNormal"><span style="line-height:2"><strong><span style="font-size:18px">三、实验环境</span></strong></span><span style="font-size:14px"><span style="line-height:1">（描述实验的软件、硬件环境）</span></span></p><p style="text-indent:2em;"></p><p></p><p></p><p></p><p class="MsoNormal"><strong><span style="font-size:18px"><span style="line-height:2">四、实验步骤与结果</span></span></strong></p><p><span style="font-size:14px"><span style="line-height:1">（描述实现实验内容的步骤和命令即在实验中做了什么事情，怎么做的，结果如何。）</span></span></p><p style="text-indent:2em;"></p><p></p><p></p><p></p><p></p><p></p><p></p><p class="MsoNormal"><strong><span style="font-size:18px"><span style="line-height:2">五、总结</span></span></strong></p><p class="MsoNormal"><span style="font-size:14px"><span style="line-height:1">（说明实验过程中遇到的问题及解决办法；个人的收获；未解决的问题等）</span></span></p><p style="text-indent:2em;"></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>';

export default ({ history, location }) => {
  const [feedback, setFeedback] = useState(BraftEditor.createEditorState(defaultstr));
  const user = getCurrentUser();
  const onBack = () => {
    history.goBack();
  };
  const onSubmit = () => {
    console.log(feedback.toHTML());
    reportAPI.create({
      data: {
        participant: get(user, 'id'),
        classroom: get(queryString.parse(location.search), 'id'),
        summary: feedback ? feedback.toHTML() : '',
      },
    }).then(() => {
      Message.success('保存成功');
      setTimeout(onBack, 1000);
    });
  };

  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-7">
              <h2 className="large ">学生报告</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="container text-left m-t-40 p-b-60">
          <div className="row">
            <div className="col-sm-12">
              <form>
                <div className="form-group row">
                  <label className=" col-sm-2" />
                  <div className="col-sm-10 text-right">
                    <a className="btn btn-primary" style={{ color: 'white' }} onClick={onBack}>返回课程</a>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">学生姓名：</label>
                  <div className="fonts2 col-sm-10 ">{get(user, 'realname')}</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 ">实验报告内容：</label>
                  <div className="col-sm-10">
                    <BraftEditor value={feedback} onChange={setFeedback} style={{ border: '1px solid #C4C6CF ' }} />
                  </div>
                </div>
                <div className="form-group row m-t-20">
                  <label className="col-sm-2" />
                  <div className="col-sm-10">
                    <a onClick={onSubmit} className="btn btn-primary addcouse">提交</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
