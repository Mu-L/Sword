import React, { PureComponent } from 'react';
import { Card, Col, Collapse, Row, Divider, Tag } from 'antd';
import styles from '../../layouts/Sword.less';

import PageHeaderWrapper from '../../components/PageHeaderWrapper';
import ThirdRegister from '../../components/ThirdRegister';

const { Panel } = Collapse;

class Workplace extends PureComponent {
  render() {
    return (
      <PageHeaderWrapper>
        <Card className={styles.card} bordered={false}>
          <Row gutter={24}>
            <Col span={24}>
              <ThirdRegister />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <div style={{ textAlign: 'center' }}>
                <img src="https://img.shields.io/badge/Release-V4.6.0-green.svg" alt="Downloads" />
                <img src="https://img.shields.io/badge/JDK-17+-green.svg" alt="Build Status" />
                <img
                  src="https://img.shields.io/badge/Spring%20Cloud-2025-blue.svg"
                  alt="Coverage Status"
                />
                <img
                  src="https://img.shields.io/badge/Spring%20Boot-3.5-blue.svg"
                  alt="Downloads"
                />
                <a href="https://bladex.cn">
                  <img
                    src="https://img.shields.io/badge/Sword%20Author-Small%20Chill-ff69b4.svg"
                    alt="Downloads"
                  />
                </a>
                <a href="https://bladex.cn">
                  <img
                    src="https://img.shields.io/badge/Copyright%20-@BladeX-%23ff3f59.svg"
                    alt="Downloads"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Card>
        <Row gutter={24}>
          <Col span={16}>
            <Card className={styles.card} bordered={false}>
              <Collapse bordered={false} defaultActiveKey={['1', '2', '3', '5']}>
                <Panel header="欢迎使用Sword" key="1">
                  <div>1.Sword是SpringBlade前端UI系统</div>
                  <div>2.对现有的ant design pro库进行二次封装</div>
                  <div>3.100%兼容原生ant design pro库</div>
                  <div>4.配合后端代码生成系统可以快速搭建完整的功能模块</div>
                  <div>5.使用Sword可以大幅度提升开发效率，不再为重复工作发愁</div>
                </Panel>
                <Panel header="什么是BladeX" key="2">
                  <div>1.BladeX是一款精心设计的微服务架构，提供 SpringCloud 全套解决方案</div>
                  <div>2.开源中国首批完美集成 SpringCloud Alibaba 系列组件的微服务架构</div>
                  <div>3.基于稳定生产的商业项目升级优化而来，更加贴近企业级的需求</div>
                  <div>4.追求企业开发更加高效，部署更加方便，生产更加稳定</div>
                  <div>5.GVP-码云最有价值开源项目</div>
                  <div>
                    6.BladeX授权地址:<a href="https://bladex.cn/#/vip">点击授权</a>
                  </div>
                </Panel>
                <Panel header="为何需要BladeX" key="3">
                  <div>1.经历过较长的线上生产，积累了很多企业痛点的解决方案。</div>
                  <div>2.一套代码兼容MySql、Oracle、PostgreSQL，适应企业各种不同场景的需求。</div>
                  <div>
                    3.集成了很多企业急切所需的例如多租户、Oauth2授权认证、工作流、分布式事务等等功能。
                  </div>
                  <div>
                    4.深度定制了Flowable工作流，完美支持SpringCloud分布式服务的场景，以远程调用的方式进行操作。
                  </div>
                  <div>
                    5.升级了核心驱动，新功能完全可以开箱即用，而开源版需要自己再花时间进行集成，需要花掉更多的时间成本。
                  </div>
                  <div>
                    6.拥抱微服务时代，很多企业由于项目转型或升级，传统的技术已然不能满足，反而会花更多成本，而BladeX就是为此而生。
                  </div>
                  <div>
                    7.同时提供SpringCloud版本和SpringBoot版本，两个版本的api可以与Sword和Saber无缝对接，为小型项目至大型项目保驾护航。
                  </div>
                  <div>
                    8.授权购买即永久，源码没有混淆，后续升级完全免费。企业只需花很少的钱即可获得一整套成熟的解决方案，你还在等什么？
                  </div>
                </Panel>
                <Panel header="拥有的核心功能" key="4">
                  <div>
                    1.前后端分离-采用前后端分离模式，前端提供两套架构，Sword基于React，Saber基于Vue
                  </div>
                  <div>
                    2.
                    分布式单体式后端架构-提供两套后端架构，基于SpringCloud的分布式架构以及基于SpringBoot的单体式架构
                  </div>
                  <div>
                    3.API完全兼容-两套后端架构与两套前端架构，共四套架构可以任意组合，所有API完全兼容
                  </div>
                  <div>
                    4.前后端代码生成-定制针对两套前端与后端的代码生成模板，轻松生成整个模块的前后端代码，减少重复工作量
                  </div>
                  <div>
                    5.组件化、插件化架构-针对功能深度定制各个starter，引入开箱即用，为整个架构解耦，提升效率
                  </div>
                  <div>6.Nacos-集成阿里巴巴的Nacos完成统一的服务注册与配置</div>
                  <div>
                    7.Sentinel-集成Sentinel从流量控制、熔断降级、系统负载等多个维度保护服务的稳定性
                  </div>
                  <div>8.Dubbo-完美集成Dubbo最新版，支持远程RPC调用</div>
                  <div>9.多租户系统-完整的SaaS多租户架构</div>
                  <div>10.Oauth2-集成Oauth2协议，完美支持多终端的接入与认证授权</div>
                  <div>
                    11.工作流-深度定制SpringCloud分布式场景的Flowable工作流，为复杂流程保驾护航。同时提供SpringBoot集成版本
                  </div>
                  <div>12.独立流程设计器-提供独立的完全汉化的流程设计器，轻松定制流程模型</div>
                  <div>13.动态网关-集成基于Nacos的轻量级、高拓展性动态网关</div>
                  <div>14.动态聚合文档-实现基于Nacos的Swagger SpringCloud聚合文档</div>
                  <div>
                    15.分布式文件服务-集成minio、qiniu、alioss等优秀的第三方，提供便捷的文件上传与管理
                  </div>
                  <div>
                    16.多租户对象存储系统-在SaaS系统中，各租户可自行配置文件上传至自己的私有OSS
                  </div>
                  <div>17.权限管理-精心设计的权限管理方案，角色权限精确到按钮</div>
                  <div>
                    18.动态数据权限-高度灵活的动态数据权限，提供注解+Web可视化两种配置方式，Web配置无需重启直接生效
                  </div>
                  <div>
                    19.动态接口权限-高度灵活的动态接口权限，提供注解+Web可视化两种配置方式，Web配置无需重启直接生效
                  </div>
                  <div>
                    20.多租户顶部菜单配置-提供给每个租户独立的顶部菜单配置模块，可以自定义顶部菜单切换
                  </div>
                  <div>
                    21.主流数据库兼容-一套代码完全兼容Mysql、Postgresql、Oracle三大主流数据库
                  </div>
                  <div>22.动态网关鉴权-基于Nacos的动态网关鉴权，可在线配置，实时生效</div>
                  <div>
                    23.全能代码生成器-支持自定义模型、模版
                    、业务建模，支持多种模板引擎，在线配置。大幅度提升开发效率，不再为重复工作发愁。
                  </div>
                  <div>
                    24.Seata分布式事务-定制集成Seata，支持分布式事务，无代码侵入，不失灵活与简洁
                  </div>
                  <div>25.未完待续...</div>
                </Panel>
                <Panel header="软件定制开发合作" key="5">
                  <div>1.接BladeX系列架构的定制服务</div>
                  <div>
                    2.接3个月以内工期的react、vue、springboot、springcloud、app、小程序等软件定制服务
                  </div>
                  <div>3.有意向请联系官方商务微信：<a target="_blank" href="https://bladex.cn/#/contract">点击查看</a></div>
                </Panel>
              </Collapse>
            </Card>
          </Col>
          <Col span={8}>
            <Row gutter={24}>
              <Card className={styles.card} bordered={false}>
                <span>产品名称</span>
                <Divider type="vertical" />
                <Tag color="#108ee9">SpringBlade企业级微服务开发平台</Tag>
                <Divider style={{ margin: '12px 0' }} />
                <span>账号密码</span>
                <Divider type="vertical" />
                <Tag color="magenta">管理员(admin)</Tag>
                <Divider style={{ margin: '12px 0' }} />
                <span>官网地址</span>
                <Divider type="vertical" />
                <a href="https://bladex.cn" target="_blank">
                  https://bladex.cn
                </a>
                <Divider style={{ margin: '12px 0' }} />
                <span>社区地址</span>
                <Divider type="vertical" />
                <a href="https://sns.bladex.cn" target="_blank">
                  https://sns.bladex.cn
                </a>
                <Divider style={{ margin: '12px 0' }} />
                <span>获取文档</span>
                <Divider type="vertical" />
                <Tag color="#91e253" style={{ cursor: 'pointer' }}>
                  <a href="https://sns.bladex.cn/note/view/1.html" target="_blank">
                    免费版
                  </a>
                </Tag>
                <Divider type="vertical" />
                <Tag color="#f5827b" style={{ cursor: 'pointer' }}>
                  <a href="https://www.kancloud.cn/@smallchill" target="_blank">
                    收费版
                  </a>
                </Tag>
                <Divider style={{ margin: '12px 0' }} />
                <span>获取源码</span>
                <Divider type="vertical" />
                <Tag color="#87d068" style={{ cursor: 'pointer' }}>
                  <a href="https://gitee.com/smallc/SpringBlade" target="_blank">
                    开源版
                  </a>
                </Tag>
                <Divider type="vertical" />
                <Tag color="#f50" style={{ cursor: 'pointer' }}>
                  <a href="https://bladex.cn/#/vip" target="_blank">
                    商业版
                  </a>
                </Tag>
              </Card>
            </Row>
            <Row gutter={24}>
              <Card className={styles.card} bordered={false}>
                <Collapse bordered={false} defaultActiveKey={['42']}>
                  <Panel header="4.6.0发布 升级适配 SpringCloud2025 SpringBoot3.5" key="42">
                    <div>1.[升级]Spring 至 6.2.8</div>
                    <div>2.[升级]SpringBoot 至 3.5.3</div>
                    <div>3.[升级]SpringCloud 至 2025.0.0</div>
                    <div>4.[升级]SpringCloud Alibaba 至 2023.0.3.3</div>
                    <div>5.[升级]Nacos 至 3.0.2</div>
                    <div>6.[升级]MybatisPlus 至 3.5.12</div>
                    <div>7.[新增]Ureport报表Token鉴权逻辑</div>
                    <div>8.[新增]登录认证IP锁定逻辑</div>
                    <div>9.[新增]excel封装，将easyexcel切换为fastexcel</div>
                    <div>10.[优化]适配优化knife4j与springboot3.5版本的兼容性</div>
                  </Panel>
                  <Panel header="4.5.0发布 新增账号锁定与解锁功能，新增腾讯云对象存储支持" key="41">
                    <div>1.[新增]账号锁定与解锁功能</div>
                    <div>2.[新增]腾讯云对象存储支持</div>
                    <div>3.[新增]blade-starter-redis 发布订阅支持延迟加载</div>
                    <div>4.[新增]国密key、令牌key支持从环境变量读取与设置</div>
                    <div>5.[优化]增强kv的创建功能</div>
                    <div>6.[优化]脱敏工具类增加ip与mac地址类型</div>
                    <div>7.[优化]oss config bean 构造，减少 bean 冲突</div>
                    <div>8.[优化]BeanUtil toMap toBean 改为 jackson 工具类实现</div>
                    <div>9.[优化]BladeRedis部分方法</div>
                    <div>10.[优化]部分工具类方法</div>
                    <div>11.[修复]调整关闭 mybatis 默认的日志，避免 NoClassDefFoundError</div>
                    <div>12.[修复]github #16 JWT无法设置过长失效时间</div>
                  </Panel>
                  <Panel header="4.4.0发布 新增黑白名单、脱敏工具、BladeRedis新版工具" key="40">
                    <div>1.[升级]Spring 至 6.1.15</div>
                    <div>2.[升级]SpringBoot 至 3.2.12</div>
                    <div>3.[新增]黑名单与白名单IP配置功能</div>
                    <div>4.[新增]自定义URL拦截功能，默认屏蔽外部访问actuator接口</div>
                    <div>5.[新增]脱敏工具类</div>
                    <div>6.[新增]BladeRedis工具类代替RedisUtil工具类</div>
                    <div>7.[新增]基于Redisson，支持redis pub/sub 发布</div>
                    <div>8.[新增]@TenantIgnore注解用于接口排除租户逻辑</div>
                    <div>9.[优化]jackson序列化时支持空字符串转换为null对象</div>
                    <div>10.[优化]调整 sql 日志打印实现逻辑</div>
                    <div>11.[优化]关闭 mybatis 默认的日志</div>
                    <div>12.[优化]默认放行feign接口，特定前缀的feign接口不再二次鉴权</div>
                  </Panel>
                  <Panel header="4.3.0发布 多租户支持线程模式指定租户ID与忽略租户" key="39">
                    <div>1.[升级]SpringBoot 至 6.1.14</div>
                    <div>2.[升级]SpringBoot 至 3.2.10</div>
                    <div>3.[升级]SpringCloud 至 2023.0.3</div>
                    <div>4.[升级]SpringCloud Alibaba 至 2023.0.1.2</div>
                    <div>5.[升级]MybatisPlus 至 3.5.8</div>
                    <div>6.[升级]Nacos 至 2.4.3</div>
                    <div>7.[新增]blade-starter-tenant</div>
                    <div>8.[新增]blade-starter-cache</div>
                    <div>9.[新增]TenantUtil支持租户指定与忽略</div>
                    <div>10.[新增]添加模块名，架构模块化</div>
                    <div>11.[优化]代码生成器字段</div>
                    <div>12.[优化]历史工具类逻辑</div>
                    <div>13.[优化]调整BladeApplication参数顺序</div>
                    <div>14.[优化]调整copyright维护日期</div>
                    <div>15.[优化]调整copyright联系邮箱</div>
                  </Panel>
                  <Panel header="4.2.0发布 底层架构升级，分类core模块与starter模块" key="38">
                    <div>1.[升级]SpringBoot 至 3.2.9</div>
                    <div>2.[升级]SpringCloud 至 2023.0.3</div>
                    <div>3.[升级]底层架构升级，分类core模块与starter模块</div>
                    <div>4.[新增]Geo坐标工具</div>
                    <div>5.[新增]JsonUtil新增readListMap方法</div>
                    <div>6.[优化]将user模块合并至system模块，统一api入口</div>
                    <div>7.[修复]vue3版本报表列表跳转路径出错的问题</div>
                    <div>8.[修复]excel导出工具类版本冲突的问题</div>
                  </Panel>
                  <Panel header="4.1.0发布 登录认证升级国密算法，数据库password字段无需变动" key="37">
                    <div>1.[升级]SpringBoot 至 3.2.7</div>
                    <div>2.[升级]SpringCloud 至 2023.0.2</div>
                    <div>3.[升级]AlibabaCloud 至 2023.0.1.0</div>
                    <div>4.[升级]Nacos 至 2.3.2</div>
                    <div>5.[升级]MybatisPlus 至 3.5.7</div>
                    <div>6.[新增]登录认证升级为国密sm2算法，数据库字段无需变动</div>
                    <div>7.[新增]oss内网上传后转换返回外网地址</div>
                    <div>8.[新增]saber2与saber3支持nodejs18编译</div>
                    <div>9.[优化]完善swagger与springdoc的配置</div>
                    <div>10.[优化]重构StringUtil的format方法</div>
                    <div>11.[优化]saveOrUpdate方法增加业务字段更新逻辑</div>
                  </Panel>
                  <Panel header="4.0.0发布 升级 SpringBoot3 SpringCloud2023 JDK17" key="36">
                    <div>1.[升级]JDK 至 Java17</div>
                    <div>2.[升级]SpringBoot 至 3.2.4</div>
                    <div>3.[升级]SpringBootAdmin 至 3.2.3</div>
                    <div>4.[升级]SpringCloud 至 2023.0.1</div>
                    <div>5.[升级]AlibabaCloud 至 2022.0.0</div>
                    <div>6.[升级]Knife4j 至 4.5.0</div>
                    <div>7.[升级]Mybatis-Plus 至 3.5.6</div>
                    <div>8.[升级]MybatisSpring 至 3.0.3</div>
                    <div>9.[升级]Druid 至 1.2.22</div>
                    <div>10.[升级]Nacos 至 2.3.1</div>
                    <div>11.[升级]EasyExcel 至 3.3.4</div>
                    <div>12.[替换]原Swagger2改为OpenAPI3</div>
                    <div>13.[替换]原独立blade-swagger服务改为blade-gateway聚合文档</div>
                    <div>14.[新增]Sentinel新版API适配</div>
                    <div>15.[新增]生产环境屏蔽详细的异常信息返回</div>
                    <div>16.[新增]SpringDoc-OpenAI3集成支持</div>
                    <div>17.[优化]更新代码生成脚本适配最新版API</div>
                    <div>18.[优化]问号挂参的路由不再开启新tab</div>
                    <div>19.[优化]vue3支持base路径的配置和部署</div>
                    <div>20.[优化]默认错误提示</div>
                    <div>21.[修复]vue3用户个人信息切换后提交报错的问题</div>
                  </Panel>
                  <Panel header="3.7.1发布 升级系统安全性能" key="35">
                    <div>1.升级 SpringBoot 至 2.7.18</div>
                    <div>2.升级 SpringBootAdmin 至 2.7.14</div>
                    <div>3.升级 Mybatis-Plus 至 3.5.4.1</div>
                    <div>4.升级 Mybatis-Plus-Generator 至 3.5.4.1</div>
                    <div>5.升级 Knife4j 至 4.3.0</div>
                    <div>6.优化 防SQL注入逻辑避免双写等情况出现</div>
                    <div>7.调整 重要API调用等级防止被恶意调用</div>
                    <div>8.调整 默认关闭通知公告模块的Token加密功能</div>
                  </Panel>
                  <Panel header="3.7.0发布 新增Token加密传输功能" key="34">
                    <div>1.升级 SpringCloud 至 2021.0.8</div>
                    <div>2.升级 SpringBoot 至 2.7.15</div>
                    <div>3.升级 Mybatis-Plus 至 3.5.3.2</div>
                    <div>4.升级 Mybatis-Plus-Generator 至 3.5.3.2</div>
                    <div>5.升级 Druid 至 1.2.19</div>
                    <div>6.升级 Avue2 至 2.10.16</div>
                    <div>7.升级 Avue3 至 3.2.19</div>
                    <div>8.新增 Token加密传输功能，提升系统安全性</div>
                    <div>9.新增 后端对Token加密增加强制校验的功能</div>
                    <div>10.优化 INode树形节点封装，增加泛型支持</div>
                    <div>11.优化 Sql防注入的功能</div>
                  </Panel>
                  <Panel header="3.6.0发布 基于vue3的前端架构正式发布" key="33">
                    <div>1.升级 SpringCloud 至 2021.0.6</div>
                    <div>2.升级 SpringBoot 至 2.7.10</div>
                    <div>3.升级 SpringBootAdmin 至 2.7.10</div>
                    <div>4.升级 AlibabaCloud 至 2021.0.5.0</div>
                    <div>5.升级 Mybatis-Plus 至 3.5.3.1</div>
                    <div>6.升级 Mybatis-Plus-Generator 至 3.5.3.1</div>
                    <div>7.升级 Nacos 至 2.1.2</div>
                    <div>8.升级 Seata 至 1.6.1</div>
                    <div>9.升级 Knife4j 至 4.1.0</div>
                    <div>10.升级 Log4j 至 2.20.0</div>
                    <div>11.升级 Avue2 至 2.10.10</div>
                    <div>12.升级 Avue3 至 3.2.13</div>
                    <div>13.新增 基于Vue3与Element-Plus版本的Saber正式发布</div>
                    <div>14.新增 关闭Token默认签名，用户需自行设置后启动服务</div>
                    <div>15.新增 Vue3版代码生成</div>
                    <div>16.优化 pom依赖机制</div>
                  </Panel>
                  <Panel header="3.5.0发布 新增报文加密 令牌签名校验提示" key="32">
                    <div>1.新增 报文加密功能</div>
                    <div>2.新增 日志开关功能</div>
                    <div>3.新增 Minio封装</div>
                    <div>4.新增 Token签名校验</div>
                    <div>5.重构 oss模块</div>
                  </Panel>
                  <Panel header="3.4.1发布 重构Swagger封装" key="31">
                    <div>1.重构Swagger封装，适配cloud最新版</div>
                  </Panel>
                  <Panel header="3.4.0发布 新增灰度服务功能" key="30">
                    <div>1.升级 SpringCloud 至 2021.0.3</div>
                    <div>2.升级 SpringBoot 至 2.7.1</div>
                    <div>3.升级 SpringBootAdmin 至 2.7.1</div>
                    <div>4.升级 Mybatis-Plus 至 3.5.2</div>
                    <div>5.升级 Mybatis-Plus-Generator 至 3.5.3</div>
                    <div>6.升级 Nacos 至 2.1.0</div>
                    <div>7.升级 Seata 至 1.5.1.1</div>
                    <div>8.升级 FastJson 至 1.2.83</div>
                    <div>9.升级适配 SpringBoot 2.7.1 新版API</div>
                    <div>10.新增基于 LoadBalancer 的灰度服务功能</div>
                  </Panel>
                  <Panel header="3.3.1发布 升级适配代码生成器API" key="29">
                    <div>1.升级 SpringBoot 至 2.6.6</div>
                    <div>2.升级 Mybatis-Plus-Generator 至 3.5.2</div>
                    <div>3.代码生成适配最新版API</div>
                  </Panel>
                  <Panel header="3.3.0发布 升级适配 SpringCloud 2021" key="28">
                    <div>1.升级 SpringBoot 至 2.6.3</div>
                    <div>2.升级 SpringBootAdmin 至 2.6.2</div>
                    <div>3.升级 SpringCloud 至 2021.0.1</div>
                    <div>4.升级 AlibabaCloud 至 2021.0.1.0</div>
                    <div>5.升级 Nacos 至 2.0.4</div>
                    <div>6.升级 Mybatis-Plus 至 3.5.1</div>
                    <div>7.升级 Mybatis-Plus-Generator 至 3.5.1</div>
                    <div>8.重构 Xss运行逻辑</div>
                    <div>9.修复 nacos地址信息配置，支持灵活自定义</div>
                  </Panel>
                  <Panel header="3.2.0发布 新增灵活数据权限特性" key="27">
                    <div>1.升级 SpringBoot 至 2.5.6</div>
                    <div>2.升级 SpringBootAdmin 至 2.5.3</div>
                    <div>3.升级 SpringCloud 至 2020.0.4</div>
                    <div>4.升级 Nacos 至 2.0.3</div>
                    <div>5.升级 Knife4j 至 2.0.9</div>
                    <div>6.升级 Mybatis-Plus 至 3.4.3.4</div>
                    <div>7.新增注解配置数据权限特性</div>
                    <div>8.新增Web在线配置数据权限特性</div>
                    <div>9.新增自定义Sql配置数据权限特性</div>
                    <div>10.新增懒加载表格树特性</div>
                    <div>11.新增部门管理祖级节点字段</div>
                    <div>12.新增CacheUtil工具类</div>
                    <div>13.优化部门管理新增逻辑</div>
                    <div>14.优化租户拦截器初始化逻辑</div>
                    <div>15.优化适配各新版本API变动</div>
                  </Panel>
                  <Panel header="3.1.0发布 底层架构升级适配" key="26">
                    <div>1.升级 SpringBoot 至 2.5.2</div>
                    <div>2.升级 SpringBootAdmin 至 2.4.2</div>
                    <div>3.升级 SpringCloud 至 2020.0.3</div>
                    <div>4.升级 AlibabaCloud 至 2021.1</div>
                    <div>5.升级 Nacos 至 2.0.2</div>
                    <div>6.升级 Seata 至 1.4.2</div>
                    <div>7.升级 Mybatis-Plus 至 3.4.3.1</div>
                    <div>8.优化适配各新版本API变动</div>
                    <div>9.移除部分过时的配置</div>
                  </Panel>
                  <Panel header="3.0.3发布 新增kuboard-k8s脚本一键部署方案" key="25">
                    <div>1.新增blade-develop的dockerfile</div>
                    <div>2.新增blade-develop推送docker配置</div>
                    <div>3.新增saber的dockerfile</div>
                    <div>4.新增kuboard k8s部署脚本</div>
                    <div>5.新增kuboard k8s部署方案</div>
                    <div>6.优化pom配置适配新版部署方案</div>
                    <div>7.优化swagger加载逻辑默认开启knife4j</div>
                  </Panel>
                  <Panel header="3.0.2.发布 支持Nacos2.0长链接特性" key="24">
                    <div>1.升级 SpringBoot 至 2.4.4</div>
                    <div>2.升级 SpringCloud 至 2020.0.2</div>
                    <div>3.升级 AlibabaCloud 至 2.2.5.RELEASE</div>
                    <div>4.升级 FastJson 至 1.2.75</div>
                    <div>5.升级 Avue 至 2.8.2</div>
                    <div>6.升级 ElementUI 至 2.15.1</div>
                    <div>7.新增支持Nacos2.0长链接特性</div>
                    <div>8.优化七牛云地域配置为自动获取</div>
                    <div>9.优化Xss过滤支持通配符匹配逻辑</div>
                    <div>10.优化接口放行支持通配符匹配逻辑</div>
                    <div>11.修复Feign请求头传递丢失的问题</div>
                    <div>12.修复用户管理导出查询功能失效的问题</div>
                  </Panel>
                  <Panel header="3.0.1.发布 新增Swagger独立网关，优化代码生成" key="23">
                    <div>1.升级 SpringBoot 至 2.4.2</div>
                    <div>2.升级 SpringCloud 至 2020.0.1</div>
                    <div>3.升级 Mybatis-Plus 至 3.4.2</div>
                    <div>4.升级 Avue 至 2.7.6</div>
                    <div>5.升级适配 Knife4j 2.0.8</div>
                    <div>6.新增独立的Swagger网关</div>
                    <div>7.新增代码生成的SqlServer驱动判断</div>
                    <div>8.新增代码生成菜单Sql的ID</div>
                    <div>9.优化SentinelFeign实现以适配最新API</div>
                    <div>10.优化Saber个人中心实现以适配最新API</div>
                    <div>11.修复Saber菜单图标选择失效的问题</div>
                  </Panel>
                  <Panel header="3.0.0.发布 架构升级适配SpringCloud2020" key="22">
                    <div>1.升级 SpringBoot 至 2.4.1</div>
                    <div>2.升级 SpringCloud 至 2020.0.0</div>
                    <div>3.升级 SpringBootAdmin 至 2.3.1</div>
                    <div>4.升级 Junit 至 5.7.0</div>
                    <div>5.升级 Mybatis-Plus 至 3.4.1</div>
                    <div>6.升级 Knife4j 至 2.0.8</div>
                    <div>7.升级 Seata 至 1.4.1</div>
                    <div>8.升级 Avue 至 2.7.5</div>
                    <div>9.新增Sentinel自动熔断逻辑</div>
                    <div>10.新增Sentinel全局限流控制器</div>
                    <div>11.新增BladeCloudApplication注解</div>
                    <div>12.重构Feign自动熔断逻辑以适配最新API</div>
                    <div>13.重构Junit统一运行器以适配最新API</div>
                    <div>14.重构Seata部分模块以适配最新API</div>
                    <div>15.修改配置文件以适配最新API</div>
                    <div>16.优化Gateway全局异常处理器</div>
                    <div>17.优化部署脚本</div>
                  </Panel>
                  <Panel header="2.8.0发布 增加在线报表模块" key="21">
                    <div>1.升级 SpringBoot 至 2.2.11.RELEASE</div>
                    <div>2.升级 SpringCloud 至 Hoxton.SR8</div>
                    <div>3.升级 AlibabaCloud 至 2.2.3.RELEASE</div>
                    <div>4.升级 Knife4j 至 2.0.6</div>
                    <div>5.升级 Swagger 至 2.10.5</div>
                    <div>6.升级 SwaggerModel 至 1.6.2</div>
                    <div>7.升级 SpringPlugin 至 2.2.0.RELEASE</div>
                    <div>8.升级 JustAuth 至 1.15.8</div>
                    <div>9.升级 FastJson 至 1.2.74</div>
                    <div>10.升级 Guava 至 30.0-jre</div>
                    <div>11.升级 JJWT 至 0.11.2</div>
                    <div>12.集成UReport2，新增在线报表模块</div>
                    <div>13.优化Swagger封装以支持Knife4j最新API</div>
                    <div>14.引入Knife4j增强配置,生产环境将完全隔离文档访问</div>
                    <div>15.优化架构，适配最新版本API</div>
                    <div>16.优化部署脚本</div>
                  </Panel>
                  <Panel header="2.7.3发布 增强多租户功能" key="20">
                    <div>1.升级至 SpringCloud Hoxton.SR8</div>
                    <div>2.升级至 Mybatis-Plus 3.4.0</div>
                    <div>3.重构Mybatis-Plus封装适配最新版</div>
                    <div>4.多租户增加域名绑定功能</div>
                    <div>5.创建多租户的同时创建对应的管理用户</div>
                    <div>6.优化日志模块分页排序</div>
                    <div>7.关闭日志模块外置api放行</div>
                  </Panel>
                  <Panel header="2.7.2发布 集成JustAuth支持第三方登录" key="19">
                    <div>1.升级至 SpringCloud Hoxton.SR7</div>
                    <div>2.升级至 SpringBoot 2.2.9.RELEASE</div>
                    <div>3.升级至 Seata 1.3.0</div>
                    <div>4.升级至 SpringBootAdmin 2.3.0</div>
                    <div>5.升级至 Kinfe4j 2.0.4</div>
                    <div>6.升级至 FastJson 1.2.73</div>
                    <div>7.集成JustAuth支持第三方登录</div>
                    <div>8.优化请求日志打印工具</div>
                    <div>9.优化Token返回字段集合</div>
                    <div>10.修复菜单列表API报空指针的问题</div>
                    <div>11.修复角色配置数据量较大导致失败的问题</div>
                  </Panel>
                  <Panel header="2.7.1发布 增加行政区划管理，支持seata1.2" key="18">
                    <div>1.升级至 SpringCloud Hoxton.SR5</div>
                    <div>2.升级至 SpringBoot 2.2.7.RELEASE</div>
                    <div>3.升级至 Seata 1.2.0</div>
                    <div>4.升级至 MybatisPlus 3.3.2</div>
                    <div>5.升级至 Kinfe4j 2.0.3</div>
                    <div>6.升级至 FastJson 1.2.70</div>
                    <div>7.升级至 Avue 2.5.3</div>
                    <div>8.新增行政区划管理模块</div>
                    <div>9.优化用户导入的密码配置逻辑</div>
                    <div>10.优化INode结构支持懒加载数据格式</div>
                    <div>11.优化代码生成模板，支持最新版Saber结构</div>
                    <div>12.修复Log模块在多线程、异步场景下报错的问题</div>
                  </Panel>
                  <Panel header="2.7.0发布 内核全面升级，增加岗位管理，用户导入导出" key="17">
                    <div>1.升级至 SpringCloud Hoxton.SR3</div>
                    <div>2.升级至 SpringBoot 2.2.6.RELEASE</div>
                    <div>3.升级至 Avue 2.5.0</div>
                    <div>4.升级Saber内核，采用最新版本API，优化交互体验</div>
                    <div>5.新增岗位管理模块</div>
                    <div>6.新增用户导入导出模块</div>
                    <div>7.数据库主键统一改成bigint并采用snowflake算法</div>
                    <div>8.优化INode类，主键跟随修改为Long类型</div>
                    <div>9.优化鉴权逻辑，支持header以及parameter两种方式</div>
                    <div>10.优化代码生成模板以支持最新版API</div>
                  </Panel>
                  <Panel header="2.6.1发布 增加登陆验证码，支持seata1.0" key="16">
                    <div>1.升级SpringBoot 2.2.5.RELEASE</div>
                    <div>2.升级SpringCloud Hoxton.SR2</div>
                    <div>3.升级Seata 1.1.0</div>
                    <div>4.增加阿里云对象存储封装</div>
                    <div>5.优化BladeFeignTargeter的加载逻辑</div>
                    <div>6.优化系统配置</div>
                  </Panel>
                  <Panel header="2.6.1发布 增加登陆验证码，支持seata1.0" key="15">
                    <div>1.升级SpringBoot 2.2.4.RELEASE</div>
                    <div>2.升级Alibaba Cloud 2.2.0.RELEASE</div>
                    <div>3.升级Mybatis-Plus 3.3.1</div>
                    <div>4.增加登陆验证码功能</div>
                    <div>5.增加验证码对应的CaptchaTokenGranter</div>
                    <div>6.增加RedisUtil，方便业务操作</div>
                    <div>7.增加Condition类getQueryWrapper自定义排除参数的入口</div>
                    <div>8.优化Seata封装，完美支持1.0.0版本</div>
                  </Panel>
                  <Panel header="2.6.0发布 升级Hoxton.SR1 适配最新架构" key="14">
                    <div>1.升级SpringCloud Hoxton.SR1</div>
                    <div>2.升级SpringBoot 2.2.2.RELEASE</div>
                    <div>3.升级Alibaba Cloud 2.1.1.RELEASE</div>
                    <div>4.升级Seata 1.0.0</div>
                    <div>5.升级Swagger-Bootstrap-UI为最新的Knife4j 2.0.1</div>
                    <div>6.升级Xss过滤机制以适配最新架构</div>
                    <div>7.升级前端请求机制以适配最新架构</div>
                    <div>8.修复blade-resource无法进行docker打包的问题</div>
                    <div>9.修复blade-demo没有配置LauncherService导致启动失败的问题</div>
                  </Panel>
                  <Panel header="2.5.4发布 增加多数据源示例工程" key="13">
                    <div>1.增加示例工程，增加多种常见场景的解决方案</div>
                    <div>2.增加不同包名运行的示例</div>
                    <div>3.增加多数据源调用运行的示例</div>
                    <div>4.增加自定义加载Naocs配置文件的示例</div>
                    <div>5.增加根据Nacos命名空间读取配置、注册服务的示例</div>
                    <div>6.修复Condition类没有过滤分页字段的问题</div>
                    <div>7.拆分CommonConstant出LauncherConstant</div>
                  </Panel>
                  <Panel header="2.5.3发布 集成分布式链路追踪" key="12">
                    <div>1.封装集成zipkin，支持分布式链路追踪</div>
                    <div>2.seata升级至0.9.0，解决部分分布式事务遇到的bug</div>
                    <div>3.springboot版本升级至2.1.9</div>
                  </Panel>
                  <Panel header="2.5.2发布 增加个人中心" key="11">
                    <div>1.增加个人中心，支持用户信息自定义修改</div>
                    <div>2.增加网关鉴权配置示例</div>
                    <div>3.token的SIGN_KEY修改为一致</div>
                    <div>4.admin模块增加对seata服务的过滤</div>
                    <div>5.blade-tool增加部分工具类方法</div>
                  </Panel>
                  <Panel header="2.5.1发布 增加网关动态鉴权" key="10">
                    <div>1.增加网关动态鉴权</div>
                    <div>2.secure安全模块token校验默认关闭，交由网关处理</div>
                    <div>3.boot版本开启secure token校验功能</div>
                    <div>4.优化blade-gateway代码逻辑</div>
                    <div>5.修复blade-resource无法启动的问题</div>
                  </Panel>
                  <Panel header="2.5.0发布 集成seata支持分布式事务" key="9">
                    <div>1.封装集成seata，支持分布式事务</div>
                    <div>2.重写blade-core-cloud模块，增强cloud场景支持</div>
                    <div>3.增加hystrix自动fallback功能</div>
                    <div>4.升级springboot至2.1.8.RELEASE</div>
                    <div>5.升级springcloud至Greenwich.SR3</div>
                  </Panel>
                  <Panel header="2.4.1发布 代码生成增加多数据源，强化代码生成功能" key="8">
                    <div>1.升级SpringBoot至2.1.7</div>
                    <div>2.代码生成增加多数据源配置</div>
                    <div>3.增强代码生成功能，支持可选基础业务、包装器配置</div>
                    <div>4.优化代码生成模板</div>
                  </Panel>
                  <Panel header="2.4.0发布 升级AlibabaCloud毕业版本" key="7">
                    <div>1.升级AlibabaCloud毕业版本</div>
                    <div>2.升级支持Naocs 1.1.0、Sentinel 1.6.3</div>
                    <div>3.租户系统的tenantCode统一更改为tenantId</div>
                    <div>4.优化代码生成模板</div>
                    <div>5.优化mybatis-plus新版配置</div>
                    <div>6.修复排序字段sql注入问题</div>
                  </Panel>
                  <Panel header="2.3.3发布 重构令牌逻辑, 增强令牌功能" key="6">
                    <div>1.重构令牌发放逻辑，可自定义令牌类型，增强可拓展性</div>
                    <div>2.增加动态配置token过期时间、令牌续期功能</div>
                    <div>3.增加GateWay动态聚合文档功能，简化配置</div>
                    <div>4.优化Wrapper定义，代码更加简洁</div>
                    <div>5.Swagger增加多包扫描</div>
                    <div>6.使用 Swagger-Bootstrap-UI 最新版排序注解</div>
                    <div>7.升级 SpringBoot 2.1.6，SpringCloud Greenwich.SR2</div>
                    <div>8.升级 Mybatis-Plus 3.1.2</div>
                    <div>9.修复排序字段可能导致的sql注入问题</div>
                    <div>10.修复部分缓存清除失效的问题</div>
                  </Panel>
                  <Panel header="2.3.2发布 增加 OSS 封装及单元测试封装" key="5">
                    <div>1.增加七牛云oss-starter</div>
                    <div>2.增加blade-resource模块，对外提供服务，支持分布式下的oss场景</div>
                    <div>3.LauncherService增加排序功能</div>
                    <div>4.增加单元测试starter，可在启动过程中便捷地指定profile以及启动参数</div>
                    <div>5.增加指定启动参数的单元测试demo</div>
                    <div>6.优化docker脚本配置</div>
                  </Panel>
                  <Panel header="2.3.1发布 升级业务架构" key="4">
                    <div>1.升级 SpringBoot 2.1.5</div>
                    <div>2.前端框架Saber升级 element-ui 2.8.2</div>
                    <div>3.Saber业务代码升级</div>
                    <div>4.优化Saber代码生成模板</div>
                    <div>5.统一日志业务表基础字段</div>
                    <div>6.优化租户过滤逻辑</div>
                    <div>7.BaseEntity放开主键限制，子类可自定义主键类型</div>
                    <div>8.XssFilter增加放行配置，可配置放行微信api接口</div>
                  </Panel>
                  <Panel header="2.3.0发布 升级SpringCloud Greenwich与SpringBoot" key="3">
                    <div>1.升级 SpringCloud Greenwich</div>
                    <div>
                      2.升级 SpringCloud Alibaba
                      组件版本为0.9.0.RELEASE，支持最新版本的nacos与sentinel
                    </div>
                    <div>3.升级 SpringBoot 2.1.4</div>
                    <div>4.升级 mysql 驱动版本</div>
                    <div>5.优化 LauncherService 关于环境的判断逻辑</div>
                    <div>6.修复 blade-core-log 在部分情况下获取request为空的问题</div>
                    <div>7.修复多租户插件判断租户过滤的逻辑</div>
                    <div>8.修复请求日志打印插件部分格式空指针的问题</div>
                    <div>9.降低nacos心跳日志等级，关闭心跳日志显示</div>
                  </Panel>
                  <Panel header="2.2.0发布 升级为多终端令牌认证系统" key="2">
                    <div>1.增加多终端令牌认证系统</div>
                    <div>2.增加多租户开关</div>
                    <div>3.修复部分模块没有筛选已删除的问题</div>
                    <div>4.调整角色分配会越权的问题</div>
                    <div>5.优化部署脚本</div>
                  </Panel>
                  <Panel header="2.1.0发布 升级为SaaS多租户系统" key="1">
                    <div>1.升级为SaaS多租户系统</div>
                    <div>2.优化代码生成逻辑</div>
                    <div>3.代码生成增加菜单sql</div>
                    <div>4.增加SysClient，提供系统信息远程调用</div>
                    <div>5.优化部署脚本，增加前端部署实例</div>
                    <div>6.增加父子角色过滤，使得角色无法越权配置</div>
                  </Panel>
                  <Panel header="2.0.0发布 全面升级为SpringCloud微服务架构" key="0">
                    <div>
                      1.SpringBlade 2.0
                      是由一个商业级项目升级优化而来的SpringCloud微服务架构，采用Java8
                      API重构了业务代码，完全遵循阿里巴巴编码规范
                    </div>
                    <div>
                      2.采用Spring Boot 2 、Spring Cloud Greenwich 、Mybatis
                      等核心技术，用于快速搭建企业级的微服务系统平台
                    </div>
                    <div>
                      3.SpringBlade
                      致力于创造新颖的开发模式，将开发中遇到的痛点、生产中所踩的坑整理归纳，并将解决方案都融合到框架中
                    </div>
                  </Panel>
                </Collapse>
              </Card>
            </Row>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default Workplace;
