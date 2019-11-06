import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Fragment>
      <div className="bg-conttop p-t-60 p-b-60">
        <div className="container  text-left">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="large ">K@S Lab 服务协议</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white m-t-40 p-b-60">
        <div className="container p-b-60 ">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="list-group">
                <Link to="/about" className="list-group-item list-group-item-action ">
                关于我们
                </Link>
                {/* <Link to="#" className="list-group-item list-group-item-action">联系我们</Link> */}
                {/* <Link to="#" className="list-group-item list-group-item-action">常见问题</Link> */}
                <Link to="/help" className="list-group-item list-group-item-action active">服务协议</Link>
                {/* <Link href="#" className="list-group-item list-group-item-action disabled">意见反馈</Link> */}
              </div>
            </div>
            <div className="col-12 col-md-9">
              <h2>K@S Lab数据科学开放实验室服务协议</h2><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;欢迎使用K@S Lab数据科学开放实验室在线课程学习平台（以下简称：“K@S Lab”），为了保障您的权益，请在使用K@S Lab 数据科学开放实验室提供的服务之前，详细阅读此服务协议（以下简称“本协议”）所有内容，特别是加粗部分。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;本协议内容包括协议正文、本协议下述协议明确援引的其他协议及将来可能发布的各类规则。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。除另行明确声明外，您使用K@S Lab提供的服务均受本协议约束。</p><br />
              <h4>第一条 定义</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;K@S Lab是由Jupyter China社区和北京百智享科技有限公司共同推出的线上数据科学开放实验平台，整合数据科学的顶尖课程，面向高校教师、数据科学家提供的科研教学在线平台服务。</p><br /><br />
              <h4>第二条 K@S Lab服务协议的修订</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;K@S Lab有权在必要时通过K@S Lab移动客户端软件或网页上发出公告等合理方式修改本协议及相关服务条款。您在使用K@S Lab服务时，应当及时查阅了解修改的内容，并自觉遵守本服务条款的相关内容。您如继续使用K@S Lab，则视为对修改内容的同意，当发生有关争议时，以最新的服务条款为准；您在不同意修改内容的情况下，有权停止使用本服务条款涉及的服务。</p>
              <br />
              <h4>第三条 服务的变更或中止</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;K@S Lab始终在不断变更和改进服务。K@S Lab可能会增加或删除部分服务，也可能暂停或彻底停止本项服务。您同意K@S Lab有权行使上述权利且不需对您或第三方承担任何责任。</p><br />
              <h4>第四条 帐号使用规则</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;您可浏览K@S Lab上的课题信息，如您希望加入该课题，您需先登录您的帐号，或注册帐号并登录。您在学习课程时登录的帐号是K@S Lab确认您身份的唯一依据。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;您确认：您是具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织，有能力对您使用K@S Lab提供的服务的一切行为独立承担责任。若您不具备前述主体资格，K@S Lab在依据法律规定或本协议约定要求您承担责任时，有权向您的监护人追偿。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;您在使用K@S Lab提供的服务时填写、登录、使用的帐号名称、头像、个人简介等帐号信息资料应遵守法律法规、社会主义制度、国家利益、公民合法权益、公共秩序、社会道德风尚和信息真实性等七条底线，不得在帐号信息资料中出现违法和不良信息，且您保证在填写、登录、使用帐号信息资料时，不得有以下情形：</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（1）违反宪法或法律法规规定的；</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（3）损害国家荣誉和利益的，损害公共利益的；</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（4）煽动民族仇恨、民族歧视，破坏民族团结的；</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（5）破坏国家宗教政策，宣扬邪教和封建迷信的；</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;6）散布谣言，扰乱社会秩序，破坏社会稳定的；</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（8）侮辱或者诽谤他人，侵害他人合法权益的；</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（9）含有法律、行政法规禁止的其他内容的。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;若您登录、使用帐号头像、个人简介等帐号信息资料存在违法和不良信息的，K@S Lab有权采取通知限期改正、暂停使用等措施。对于冒用关联机构或社会名人登录、使用、填写帐号名称、头像、个人简介的，K@S Lab有权取消该帐号的使用，并向政府主管部门进行报告。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;您应保管好自己的帐号和密码，如因您未保管好自己的帐号和密码而对自己、K@S Lab或第三方造成损害的，您将自负全部责任。另外，您应对您帐号中的所有活动和事件负全责。您可随时改变帐号的密码。您同意若发现有非法使用您的帐号或出现安全漏洞的情况，立即通告Jupyter China社区或北京百智享科技有限公司，将会尽力予以妥善解决。</p><br />                   
              <h4>第五条 数据</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;K@S Lab承诺，对用户存放在K@S Lab课题中的数据进行隔离，除课题参与人授权之外，使用任何其他方式访问、破解、下载或拦截课题中的数据或代码将会承担法律责任。</p >                  
              <h4>第六条 K@S Lab使用规则</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;您须对自己在使用K@S Lab服务过程中的行为承担法律责任。您承担法律责任的形式包括但不限于：对受到侵害者进行赔偿；以及在K@S Lab首先承担了因您的行为导致的行政处罚或侵权损害赔偿责任后，您应给予K@S Lab等额的赔偿。</p >
              <p>&nbsp;&nbsp;&nbsp;&nbsp;您了解并同意，如您涉嫌侵犯他人合法权益，则K@S Lab有权在初步判断涉嫌侵权行为存在的情况下，向权利人提供关于您的前述必要信息。</p><br />
              <h4>第七条 隐私制度</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;您知悉并同意，为便于向您提供更好的服务，K@S Lab将在您自愿选择服务或者提供信息的情况下收集您的个人信息，并将这些信息进行整合。在您使用K@S Lab服务时，服务器会自动记录一些信息，包括但不限于URL、IP地址、浏览器类型、使用语言、访问日期和时间等。为方便您登录或使用K@S Lab服务，K@S Lab在有需要时将使用cookies等技术，并将收集到的信息发送到对应的服务器。您可以选择接受或者拒绝cookies。如您选择拒绝cookies，则您有可能无法登录或使用依赖于cookies的服务或者功能。K@S Lab收集的信息将成为K@S Lab常规商业档案的一部分，且有可能因为转让、合并、收购、重组等原因而被转移到K@S Lab的继任公司或者指定的一方。K@S Lab同意善意使用收集的信息，且采取各项措施保证信息安全。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;尊重用户个人隐私是K@S Lab的一项基本政策。所以，K@S Lab不会公开或透露您的注册资料及保存在K@S Lab服务中的非公开内容，除非K@S Lab在诚信的基础上认为透露这些信息在以下几种情况是必要的：</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（1）事先获得您的明确授权；</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（2）遵守有关法律规定，包括在国家有关机关查询时，提供您的注册信息、您在网易的网页上发布的信息内容及其发布时间、互联网地址或者域名；</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（3）保持维护K@S Lab的知识产权和其他重要权利；</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（4）在紧急情况下竭力维护您个人和社会大众的隐私安全；</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;（5）根据本条款相关规定或者K@S Lab认为必要的其他情况下。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;K@S Lab可能会与第三方合作向您提供K@S Lab的相关服务，在此情况下，如该第三方同意承担与K@S Lab同等的保护用户隐私的责任，则K@S Lab可将您的信息提供给该第三方。</p><br />
              <h4>第八条 其他约定</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;不可抗力：K@S Lab对不可抗力导致的损失不承担责任。本服务条款所指不可抗力包括：天灾、法律法规或政府指令的变更，因网络服务特性而特有的原因，例如境内外基础电信运营商的故障、计算机或互联网相关技术缺陷、互联网覆盖范围限制、计算机病毒、黑客攻击等因素，及其他合法范围内的不能预见、不能避免并不能克服的客观情况。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;服务中止、中断及终止：K@S Lab根据自身商业决策等原因可能会选择中止、中断及中止平台服务。如有此等情形发生，K@S Lab会采取公告的形式通知您。经国家行政或司法机关的生效法律文书确认您存在违法或侵权行为，或者K@S Lab根据自身的判断，认为您的行为涉嫌违反《网易邮箱帐号服务条款》、本协议内容或K@S Lab不时公布的使用规则等内容，或涉嫌违反法律法规的规定的，则K@S Lab有权中止、中断或终止向您提供服务，且无须为此向您或任何第三方承担责任。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;所有权及知识产权：K@S Lab上所有内容，包括但不限于文字、软件、声音、图片、录像、图表、网站架构、网站画面的安排、网页设计、K@S Lab为您提供的标有“版权所有，禁止转载”字样的课程内容均由K@S Lab或其他权利人依法拥有其知识产权，包括但不限于著作权、商标权、专利权等。非经K@S Lab或其他权利人书面同意您不得擅自使用、修改、复制、传播、改变、散布、发行或发表上述内容。如有违反，您同意承担由此给K@S Lab或其他权利人造成的一切损失。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;通知：所有发给您的通知都可通过电子邮件、常规的信件或在网站显著位置公告的方式进行传送。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;本协议适用中华人民共和国的法律（不含冲突法）。 当本协议的任何内容与中华人民共和国法律相抵触时，应当以法律规定为准，同时相关内容将按法律规定进行修改或重新解释，而本协议其他部分的法律效力不变。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;凡因本协议引起的或与本协议有关的任何争议，均应提交中国国际经济贸易仲裁委员会，按照申请仲裁时该会现行有效的仲裁规则进行仲裁，并由3名仲裁员进行审理。仲裁裁决是终局的，对双方均有约束力。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;本协议自发布之日起实施，并构成您和K@S Lab之间的共识。</p><br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;K@S Lab不行使、未能及时行使或者未充分行使本协议或者按照法律规定所享有的权利，不应被视为放弃该权利，也不影响K@S Lab的运营实体在将来行使该权利。</p><br />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
