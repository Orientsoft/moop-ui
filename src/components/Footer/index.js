import React from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash-es/get';
import trim from 'lodash-es/trim';
import { getCurrentTenant } from '@/utils/helper';

export default () => {
  const tenant = getCurrentTenant();

  return (
		<footer className="">
			<div className="container-bwz">
				<div className="row">
					<div className="col-lg-3">
						<img className="" src="images/logo.png"/>
					</div>
					<div className="col-lg-5">
						<div>
							<p>地址：北京市通州区富河大街321号 邮编：101149</p>
							<p>电话：010-89534628 学院邮箱：office@bwu.edu.cn </p>
							<p>北京物资学院 版权所有 Copyright © 2020 All Rights Reserved.</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div>
							<p>京ICP备19057977号</p>
							<p>京公网安备110402430103号</p>
						</div>
					</div>
				</div>
			</div>	
		</footer>
  );
};
