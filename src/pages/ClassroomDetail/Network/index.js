import React from 'react';

export default () => {
  return (
    <div className="m-b-30 tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <h5 className="m-b-20">网络条件要求</h5>
      <div className="part-content">
        <p>说明客户端到服务器的带宽要求（需提供测试带宽服务）</p>
        <p className="fangsong">（1）	说明客户端到服务器的带宽要求该实验平台需满足10Mbps及以上带宽即可实现正常通讯。</p>
        <p className="fangsong">说明能够提供的并发响应数量（需提供在线排队提示服务）</p>
      </div>
      <h5 className="m-b-20 m-t-40">用户操作系统要求（如Window、Unix、iOS、Android等）</h5>
      <div className="part-content">
        <p>计算机操作系统和版本要求：</p>
        <p className="fangsong">Win7\Win8\Win10系统的,32位或64位。</p>
        <p>其他计算机终端操作系统和版本要求：</p>
        <p className="fangsong">无其他终端</p>
        <p>支持移动端：</p>
        <p className="fangsong">否</p>
      </div>
      <h5 className="m-b-20 m-t-40">用户非操作系统软件配置要求（如浏览器、特定软件等）</h5>
      <div className="part-content">
        <p className="fangsong">需要特定插件：否</p>
        <p className="fangsong">插件名称：暂无内容</p>
        <p className="fangsong">插件容量：暂无内容</p>
        <p className="fangsong">下载链接：暂无内容</p>
        <p className="fangsong">其他计算机终端非操作系统软件配置要求（需说明是否可提供相关软件下载服务）</p>
      </div>
      <h5 className="m-b-20 m-t-40">用户硬件配置要求（如主频、内存、显存、存储容量等）</h5>
      <div className="part-content">
        <p className="fangsong">计算机硬件配置要求： 内存1Gb，显示1280*720以上</p>
        <p className="fangsong">其他计算终端硬件配置要求：无</p>
      </div>
      <h5 className="m-b-20 m-t-40">用户特殊外置硬件配置要求（如可穿戴设备等）</h5>
      <div className="part-content">
        <p className="fangsong">计算机特殊外置硬件要求：无</p>
        <p className="fangsong">其他计算终端特殊外置硬件要求：无</p>
      </div>
   </div>
  );
};
