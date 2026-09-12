import React from 'react';
import { CvRequestPanel } from './CvRequestPanel';

export const ProfileSection: React.FC = () => {
  return (
    <section className="profile-layout" id="profile">
      <article className="professional-ledger sheet">
        <div className="professional-public-stamp" aria-hidden="true">
          PUBLIC COPY
        </div>
        <p className="section-code">FILE 02 · PROFESSIONAL BACKGROUND</p>
        <h2>
          把行业经验，
          <br />
          变成可用的能力。
        </h2>
        <p className="professional-intro">
          我的经历横跨英国学习、企业经营与汽车行业实践，也包括客户服务、团队管理、销售、新媒体渠道和新能源相关协作。这里仅保留经历形成的方向与能力；更完整、针对具体机会整理的履历，可在合适的专业沟通中提供。
        </p>

        <div className="professional-records">
          <article className="professional-record">
            <span className="professional-index">02.1</span>
            <div>
              <div className="professional-record-heading">
                <h3>英国学习与管理基础</h3>
                <span>STUDY / UNITED KINGDOM</span>
              </div>
              <p>
                在英国学习和生活期间，围绕财务、金融与国际商业建立了管理基础，也训练了数据意识、独立判断、跨文化沟通与持续学习能力。
              </p>
            </div>
          </article>

          <article className="professional-record">
            <span className="professional-index">02.2</span>
            <div>
              <div className="professional-record-heading">
                <h3>汽车行业与客户服务</h3>
                <span>INDUSTRY / AUTOMOTIVE PRACTICE</span>
              </div>
              <p>
                多年参与汽车后市场及相关服务，从销售、市场和经营，到产品与技术咨询，持续理解客户需求、方案沟通、交付与长期关系维护。
              </p>
            </div>
          </article>

          <article className="professional-record">
            <span className="professional-index">02.3</span>
            <div>
              <div className="professional-record-heading">
                <h3>团队、销售与数字渠道</h3>
                <span>MANAGEMENT / SALES & MEDIA</span>
              </div>
              <p>
                在真实业务中参与团队搭建、成员带教、销售目标与复盘，也持续实践内容运营、线上咨询和新媒体渠道建设。
              </p>
            </div>
          </article>

          <article className="professional-record">
            <span className="professional-index">02.4</span>
            <div>
              <div className="professional-record-heading">
                <h3>新能源与数字工具</h3>
                <span>TRANSITION / NEW ENERGY & DIGITAL</span>
              </div>
              <p>
                持续参与新能源车主服务与行业协作，并把 AI 工具、自建软件和自动化工作流用于信息整理、内容生产与日常业务改进。
              </p>
            </div>
          </article>
        </div>

        <div
          className="professional-withheld"
          aria-label="公开版未展示雇主、职务与日期"
        >
          <span>EMPLOYERS / TITLES / DATES WITHHELD FROM PUBLIC COPY</span>
          <i />
          <i />
          <i />
        </div>
      </article>

      <CvRequestPanel />
    </section>
  );
};
