<template>
    <div>
        <div class="banner-warp">
            <div class="mask">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card max-width="1200" class="mx-auto" flat dark color="transparent">
                                <v-row class="fill-height flex-column pa-5" align="center" justify="center">
                                    <img src="@/assets/images/logo.png" alt="" style="width: 200px">
                                    <div class="top-decoration"></div>
                                    <div class="display-3 my-5 font-weight-black"><span class="main-title">Versal
                                            News</span>
                                    </div>
                                    <div class="display-1 mb-5">择仕新闻</div>
                                    <div class="bottom-decoration"></div>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
        <v-container fluid>
            <v-row class="px-0">
                <v-col>
                    <v-card class="mx-auto mt-n12 pa-5" elavation="10">
                        <v-card width="1200" class="mx-auto" flat>

                            <!-- NEWS8-->
                            <v-dialog v-model="news8" width="1000px">
                                <template v-slot:activator="{ on }">
                                    <v-card max-width="1200" class="mx-auto my-5" elevation="3" v-on="on">
                                        <v-list-item>
                                            <v-list-item-avatar color="#C88E67">
                                                <img src="../../assets/logo_icon.png" alt="">
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="headline">聚力前行|2021择仕中国外包团队年会庆典
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-img src="../../assets/images/news/801.webp" height="500"></v-img>
                                        <v-card-text>
                                            <!-- 暂无新闻 -->
                                        </v-card-text>
                                        <v-card-actions>

                                            <div class="flex-grow-1"></div>
                                            <v-chip>2021-01-20</v-chip>
                                            <v-btn icon>
                                                <v-icon>mdi-heart</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon>mdi-share-variant</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                                <!-- 文章8内容 -->
                                <v-card class="text-center article" dark color="red darken-4">
                                    <v-card-text style="color:#FBDCA2">
                                        <h1>聚力前行|2021择仕中国外包团队年会庆典</h1>
                                        <div>
                                            <h2>2021.01.17</h2>
                                            <p class="text-center">2021聚力前行·择仕中国外包年会庆典</p>
                                            <p class="text-center">Happy New Year's Day</p>
                                            <p class="text-center">择仕创始人Daniel、首席运营官Wendy等齐聚</p>
                                            <p class="text-center">总结过去一年取得的成绩，谋划新一年的发展方向。</p>
                                        </div>
                                        <v-divider class="mb-5"></v-divider>

                                        <h2>精彩回顾</h2>
                                        <v-img src="../../assets/images/news/801.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <v-divider class="mb-5"></v-divider>
                                        <p class="text-center">2020年每一天都是突破</p>
                                        <p class="text-center">离不开每一位的支持与努力</p>
                                        <p class="text-center">回眸完成的每一个项目，达成的每一个目标</p>
                                        <p class="text-center">都是大家齐心协力的结果</p>
                                        <p class="text-center">由于疫情，很多外地项目的同事不能到达现场</p>
                                        <p class="text-center">这是一次总结，也是一次开端</p>
                                        <p class="text-center">对于即将到来的2021</p>
                                        <p class="text-center">大家定将聚力同行</p>
                                        <p class="text-center">创造更多的里程碑</p>
                                        <v-divider class="mb-5"></v-divider>
                                        <v-row>
                                            <v-col cols="6">
                                                <v-img src="../../assets/images/news/802.webp" class="elevation-5 my-8">
                                                </v-img>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-img src="../../assets/images/news/803.webp" class="elevation-5 my-8">
                                                </v-img>
                                            </v-col>
                                        </v-row>
                                        <v-divider class="mb-5"></v-divider>
                                        <v-img src="../../assets/images/news/804.webp" class="elevation-5 my-8">
                                        </v-img>
                                        <h5>择仕创始人&外包业务负责人Daniel Xia</h5>
                                        <p>
                                            庆典上，择仕中国创始人&外包业务负责人Daniel总结了过去的一年，完成了业务成立以来的许多突破，2021年，择仕将不断精进业务同时提供上千个岗位，为我们的外包员工提供更丰富的职业发展通道和就业机会；未来三年，择仕将发展到3000人规模的外包团队；
                                        </p>
                                        <p>择仕2007年成立以来的为百余家世界500强公司和国内知名公司提供高端人才寻访服务，累计共有5000+名高端人才通过择仕的猎头服务入职我们的客户，并发挥了重要作用。
                                        </p>
                                        <p>近几年，公司在发展方向上积极响应国家关于企业数字化转型和产业升级的号召，择仕大力发展外包业务。我们的定位是为【头部领域的互联网，高科技以及工业互联网企业】提供初、中高级科技研发类人才，其中也包括像项目经理产品经理等综合性人才。
                                        </p>
                                        <p>在此，想借此机会特别感谢代表择仕奋斗在客户现场的每一位，是你们出色表现为择仕赢得了客户的信任和赞誉。2021年让我们共同成长，最后祝大家身体健康，事业进步，万事如意，新春快乐！
                                        </p>
                                        <v-divider class="mb-5"></v-divider>
                                        <v-img src="../../assets/images/news/805.webp" class="elevation-5 my-8">
                                        </v-img>
                                        <h5>择仕首席运营官 Wendy Mu</h5>
                                        <p>择仕的外包业务发展感谢在座每一位的付出，对公司来说，每一位都是公司的财富；对员工来说，通过外包入职会有相对来说更多的好处：外包这样的业务形式扩大了员工的就业机会，外包客户大多是实力强的知名企业，对于普通员工来说是进入名企的机会，加上由于人力成本上涨、人才流动加剧以及人才资质与需求的不匹配等原因，越来越多的企业选择人才外包来解决用工问题。
                                        </p>
                                        <p>作为择仕的员工，我们同时服务于不同行业众多客户，可以在候选人不用跳槽的前提下有机会和更多知名客户建立业务关系，于员工自身发展也非常有利。</p>
                                        <p>希望未来的一年，大家能够再创佳绩。</p>
                                        <v-divider class="mb-5"></v-divider>
                                        <h2>
                                            活动环节</h2>
                                        <p>在庆典上，晚宴还设置了激动人心的抽奖环节及丰厚的礼品，随着奖项的开启不断掀起年会的高潮。年会不仅给大家带来了欢声笑语，同时也让同事之间彼此的心更加贴近。恭喜获得奖项的同事，也希望这个好彩头伴随整个牛年，牛势大发。
                                        </p>
                                        <v-row>
                                            <v-col cols="6">
                                                <v-img src="../../assets/images/news/806.webp" class="elevation-5 my-8">
                                                </v-img>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-img src="../../assets/images/news/808.webp" class="elevation-5 my-8">
                                                </v-img>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="6">
                                                <v-img src="../../assets/images/news/807.webp" class="elevation-5 my-8">
                                                </v-img>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-img src="../../assets/images/news/809.webp" class="elevation-5 my-8">
                                                </v-img>
                                            </v-col>
                                        </v-row>

                                        <v-divider class="mb-5"></v-divider>
                                        <h2>互信共创荣</h2>
                                        <p>择仕的使命是人才赋能产业升级，希望给每一个择仕员工提供一个互创共荣的发展平台，所以，我们希望大家能够通过这个平台使自己的业务能力得到很好的提升，在职业发展上能够更上一个台阶。
                                        </p>
                                        <p>让自己的未来增值，为客户的业务赋能。</p>


                                        <v-img src="../../assets/images/news/811.webp" class="elevation-5 my-8">
                                        </v-img>
                                        <p class="text-center">人才赋能产业升级</p>
                                        <p class="text-center">VERSAL CHINA</p>
                                        <p class="text-center">2021聚力前行</p>
                                        <p class="text-center">与各位同行</p>
                                        <h2>
                                            END
                                        </h2>
                                    </v-card-text>
                                    <v-card-actions>
                                        <div class="flex-grow-1"></div>
                                        择仕中国
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>


                            <!-- NEWS7-->
                            <v-dialog v-model="news7" width="1000px">
                                <template v-slot:activator="{ on }">
                                    <v-card max-width="1200" class="mx-auto my-5" elevation="3" v-on="on">
                                        <v-list-item>
                                            <v-list-item-avatar color="#C88E67">
                                                <img src="../../assets/logo_icon.png" alt="">
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="headline">
                                                    择仕Versal荣获首届「谷露星选·中国猎头年度榜单」2020年最具成长性猎企大奖
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-img src="../../assets/images/news/701.webp" height="500"></v-img>
                                        <v-card-text>
                                            <!-- 暂无新闻 -->
                                        </v-card-text>
                                        <v-card-actions>

                                            <div class="flex-grow-1"></div>
                                            <v-chip>2021-01-19</v-chip>
                                            <v-btn icon>
                                                <v-icon>mdi-heart</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon>mdi-share-variant</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                                <!-- 文章7内容 -->
                                <v-card class="text-center article">
                                    <v-card-text>
                                        <h1 style="line-height:50px">择仕Versal荣获首届「谷露星选·中国猎头年度榜单」 <br />2020年最具成长性猎企大奖
                                        </h1>
                                        <v-img src="../../assets/images/news/701.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>2021年1月16日，谷露星选2020颁奖盛典暨猎头行业数字化大会在上海机遇中心落下帷幕。</p>
                                        <p>择仕Versal首席运营官Wendy女士出席了首届「谷露星选·中国猎头年度榜单」颁奖典礼，择仕Versal凭借2020年度优秀的表现，荣获“
                                            <b>2020年度最具成长性猎企”大奖！</b> </p>
                                        <v-img src="../../assets/images/news/702.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <v-img src="../../assets/images/news/703.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <h6>「谷露星选」年度榜单排名是猎头行业唯一基于真实业务数据的榜单评选活动。</h6>
                                        <v-divider class="my-5"></v-divider>
                                        <p>本次评选活动是通过基于谷露系统真实业务数据的比拼，寻找一批在充满变化的2020年积极实践数字化、探索新模式、获得出色成绩的猎企，用数据为中国猎头行业拨开迷雾、指引方向。
                                        </p>
                                        <p>本次累计有180+家猎企报名。初选是通过猎企自主提交的数据进行线上比拼，复选的标准则参考谷露系统中的真实业务数据。</p>
                                        <v-divider class="mb-5"></v-divider>
                                        <h1>择仕中国</h1>
                                        <p>择仕Versal创立于2007年，十三年磨砺，领跑行业。创立以来一直致力于中高端人才寻访、招聘流程外包、人才外包等业务；总部位于上海、于西安、青岛、大连、苏州已建立分公司。成立以来的十余年为无数世界500强企业和国内各行业知名企业提供全方位人力资源服务。
                                        </p>
                                        <p>择仕Versal的顾问团队，拥有丰富的行业背景和技术专长.
                                            同时，我们也因为组织的高速发展而不断吸引行业里优质的人才，并不断地培养和发展精英队伍。服务客户行业覆盖了大制造、互联网、消费品、医药、新能源、金融等多领域。

                                        </p>
                                        <p>我们始终相信每位客户值得拥有更好的服务，每位候选人值得拥有更好的职业生涯，每位服务顾问值得拥有更好的自我价值实现。</p>
                                        <v-img src="../../assets/images/news/704.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <h2>
                                            END
                                        </h2>
                                    </v-card-text>
                                    <v-card-actions>
                                        <div class="flex-grow-1"></div>
                                        择仕中国
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>


                            <!-- NEWS6-->
                            <v-dialog v-model="news6" width="1000px">
                                <template v-slot:activator="{ on }">
                                    <v-card max-width="1200" class="mx-auto my-5" elevation="3" v-on="on">
                                        <v-list-item>
                                            <v-list-item-avatar color="#C88E67">
                                                <img src="../../assets/logo_icon.png" alt="">
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="headline">汽车新四化时代·工程外包业务商务沙龙圆满举行
                                                </v-list-item-title>
                                                <v-list-item-subtitle>2021年1月13日择仕中国小范围邀请了行业内专家及各位伙伴进行交流探讨商务沙龙
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-img src="../../assets/images/news/601.webp" height="500"></v-img>
                                        <v-card-text>
                                            <!-- 暂无新闻 -->
                                        </v-card-text>
                                        <v-card-actions>

                                            <div class="flex-grow-1"></div>
                                            <v-chip>2021-01-14</v-chip>
                                            <v-btn icon>
                                                <v-icon>mdi-heart</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon>mdi-share-variant</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                                <!-- 文章6内容 -->
                                <v-card class="text-center article">
                                    <v-card-text>
                                        <h1>汽车新四化时代·工程外包业务商务沙龙圆满举行</h1>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>对于汽车新四化，小编简单做了以下了解：</p>
                                        <p>汽车行业的“新四化”是指：电动化、网联化、智能化、共享化。</p>
                                        <p>（1）电动化指的是新能源动力系统领域；</p>
                                        <p>（2）智能化指的是无人驾驶或者驾驶辅助系统；</p>
                                        <p>（3）网联化便指的是车联网布局；</p>
                                        <p>（4）共享化，指的是汽车共享与移动出行。</p>
                                        <v-img src="../../assets/images/news/601.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>
                                            当前，汽车产业正面临着百年未有的大变革。一方面，新一轮技术革命正在推动着汽车产业经历前所未有的变革，产业重组和洗牌趋势加剧；另一方面，受宏观经济下行压力和全球疫情蔓延的影响，汽车市场持续萎靡。面临这样严峻的形势，中国人才研究会会长何宪表示，必须坚定产业发展信心，牢固确立人才引领产业发展的战略定位，越是困难就越是要重视人才。
                                        </p>
                                        <p>随着汽车产业的发展，汽车产业人才呈现快速增长态势，在人才的质量、结构、管理效率等方面都有长足进步，但也存在着“新四化”人才匮乏、结构性矛盾突出、流动性强、管理创新不足等问题。
                                        </p>

                                        <v-img src="../../assets/images/news/602.png" class="elevation-5 my-8">
                                        </v-img>

                                        <v-divider class="mb-5"></v-divider>

                                        <h5>企业的解决方案，从效率和实施性上而言，工程外包的用工模式便是有效选择之一。</h5>

                                        <v-img src="../../assets/images/news/603.png" class="elevation-5 my-8">
                                        </v-img>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>活动中，邀请的嘉宾分别从三个角度对于汽车工程外包业务进行了发言：
                                        </p>
                                        <v-row>
                                            <v-col cols="6">
                                                <v-img src="../../assets/images/news/604.webp" class="elevation-5 my-8">
                                                </v-img>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-img src="../../assets/images/news/605.webp" class="elevation-5 my-8">
                                                </v-img>
                                            </v-col>
                                        </v-row>
                                        <h4 class="text-left">用工方代表—刘先生</h4>
                                        <p>刘先生有十几年汽车行业团队管理相关经验，在从0到1搭建团队的过程中，觉得当下用工模式，除了传统的雇佣关系以外，外包用工模式是非常适合提供企业快速发展用人需求；在与汽车工程外包公司的合作中，外包人员的快速到岗支持项目以及对于项目交付的专业性都是值得肯定的，对于企业的用人成本也可根据项目的发展灵活配置，企业也受益于降低成本、更快的招聘周期、并最终获得更多的市场份额和扩大客户群，这是非常好的用工合作模式。
                                        </p>
                                        <h4 class="text-left">乙方工程技术顾问代表: 刘洋先生</h4>
                                        <p>作为一位拥有十年汽车工程外包行业经验的资深顾问，刘先生在从事这项事业上的感受颇深，从一开始的单一职能到后期管理项目的经验，以客观的角度进行了分享：外包技术人员有非常多的跨平台、跨行业、跨流程的实践机会，可以积累非常丰富的经验，从2020年大家就肯定有非常深刻地感觉，对于未来而言，没有绝对的稳定工作，只有对于人才更加细致的要求，作为要在激烈就业竞争中有自己一席之地的技术从业人员，应该对于项目见多识广并且对于好的机会都多加尝试，这样丰富职业发展路径和降低自身可替代性。
                                        </p>
                                        <h4 class="text-left">嘉之道汽车咨询合伙人：李双琥先生</h4>
                                        <p>嘉之道汽车咨询合伙人李先生受邀参加此次活动，作为资深汽车行业人士的他表示对于择仕选择在汽车工程外包业务未来发展极为看好，择仕十几年来为大型车企以及汽车零配件公司中高端人才输送方面的积淀；嘉之道有很多对于汽车整体行业的报告参考，他对于行业内公司都在优化用工模式这一趋势非常看好，许多公司都在使用外包技术人员进行合作，各个分工细化也在加深；当企业遇到“项目性用工”、“规律性波动用工”等情况时，对于专业的技术岗位也有要求，而汽车工程外包这一用工方式也是众多大型车企及零配件公司的首选方式，可以帮助企业不影响项目进度，提升工作效率，降低企业用工风险等。
                                        </p>

                                        <v-row>
                                            <v-col cols="6">
                                                <v-img src="../../assets/images/news/606.webp" class="elevation-5 my-8">
                                                </v-img>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-img src="../../assets/images/news/607.webp" class="elevation-5 my-8">
                                                </v-img>
                                            </v-col>
                                        </v-row>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>活动中，择仕中国首席运营官Wendy女士对公司业务进行了详细介绍，也正式对外对于汽车工程外包业务官宣，阐述了择仕在外包业务这一板块上未来的规划和发展方向，也希望通过此次活动能有机会让各位全面的认识择仕中国。
                                        </p>
                                        <p>沙龙活动上大家畅所欲言，对于择仕中国所提供的汽车工程外包服务表示肯定且预祝业务蒸蒸日上。</p>

                                        <v-img src="../../assets/images/news/608.webp" class="elevation-5 my-8">
                                        </v-img>
                                        <p>聚散终有时，后期择仕中国将会定期举办此类商务沙龙活动，也欢迎各界合作伙伴及候选人的参与，与择仕建立紧密的联系及良好的合作关系。择仕将全力做好人才赋能产业升级。
                                        </p>
                                        <h2>
                                            END
                                        </h2>
                                    </v-card-text>
                                    <v-card-actions>
                                        <div class="flex-grow-1"></div>
                                        择仕中国
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <!-- NEWS2-->
                            <v-dialog v-model="news2" width="1000px">
                                <template v-slot:activator="{ on }">
                                    <v-card max-width="1200" class="mx-auto my-5" elevation="3" v-on="on">
                                        <v-list-item>
                                            <v-list-item-avatar color="#C88E67">
                                                <img src="../../assets/logo_icon.png" alt="">
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="headline">领导关怀 |
                                                    热烈欢迎上海市普陀区人力资源和社会保障局各位领导莅临指导工作</v-list-item-title>
                                                <!-- <v-list-item-subtitle>subtitle</v-list-item-subtitle> -->
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-img src="../../assets/images/news/news2_01.webp" height="500"></v-img>
                                        <v-card-text>
                                            <!-- 暂无新闻 -->
                                        </v-card-text>
                                        <v-card-actions>

                                            <div class="flex-grow-1"></div>
                                            <v-chip>2020-10-14</v-chip>
                                            <v-btn icon>
                                                <v-icon>mdi-heart</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon>mdi-share-variant</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                                <!-- 文章二内容 -->
                                <v-card class="text-center article">
                                    <v-card-text>
                                        <h1>热烈欢迎上海市普陀区人力资源和社会保障局各位领导莅临指导工作</h1>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>2020年10月14日，上海市上海市普陀区人力资源和社会保障局赵洪海副局长、真如投促中心常务副主任、上海臻如企业管理咨询有限公司执行董事兼总经理陈杨女士、区人社局就业科、人力资源科、劳动关系科的相关同志莅临指导，择仕中国创办人夏乾衡（Daniel）先生及COO木兰女士出席会议，会议上，Daniel向各位领导介绍了择仕中国14年的发展历程及今年的工作情况。
                                        </p>

                                        <v-img src="../../assets/images/news/news2_01.webp"
                                            class="elevation-5 my-8 my-8"></v-img>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>
                                            择仕中国近14年来积累了丰富的客户资源，均来自于前沿科技/智慧出行/智能制造/消费零售/互联网＋等多个领域，顾问来自于多个领域且拥有丰富的行业背景和技术专长。

                                            同时，我们也因为组织的高速发展而不断吸引行业里优质的人才，并不断地培养和发展精英队伍。

                                            总部位于上海、于西安、青岛、大连、苏州已建立分公司。
                                        </p>

                                        <v-img src="../../assets/images/news/news2_02.png" class="elevation-5 my-8">
                                        </v-img>

                                        <v-row>
                                            <v-col cols="6">
                                                <v-img src="../../assets/images/news/news2_03.webp"
                                                    class="elevation-5 my-8"></v-img>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-img src="../../assets/images/news/news2_04.webp"
                                                    class="elevation-5 my-8"></v-img>
                                            </v-col>
                                        </v-row>

                                        <h5>与会人员认真讨论行业情况</h5>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>2020年，在中国乃至世界发展备受考验的一年，在和各位领导的工作汇报中，Daniel谈到择仕在今年的发展中激流勇进，跟随国家的政策指导，做到人才赋能，产业升级，支持择仕中国的各位客户的业务增长。

                                            会议上，赵局长和陈总介绍了普陀区关于企业的相关政策，对于企业的扶持，在人才引进，人才公寓，高校毕业生等就业问题上都有非常优质的条件及合作的空间。
                                        </p>
                                        <v-img src="../../assets/images/news/news2_05.png" class="elevation-5 my-8">
                                        </v-img>
                                        <p>
                                            最后，Daniel向各领导莅临参观指导工作表达了衷心的感谢，表示将在普陀区人力资源和社会保障局领导和关心支持下，紧密团结，紧跟政府发展政策，夯实基础，稳步发展，把择仕的业务做大做强，立志成为普陀区标杆型企业。
                                        </p>
                                        <v-img src="../../assets/images/news/news2_06.webp" class="elevation-5 my-8">
                                        </v-img>
                                        <h2>
                                            END
                                        </h2>
                                    </v-card-text>
                                    <v-card-actions>
                                        <div class="flex-grow-1"></div>
                                        择仕中国
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>

                            <!-- NEWS5-->
                            <v-dialog v-model="news5" width="1000px">
                                <template v-slot:activator="{ on }">
                                    <v-card max-width="1200" class="mx-auto my-5" elevation="3" v-on="on">
                                        <v-list-item>
                                            <v-list-item-avatar color="#C88E67">
                                                <img src="../../assets/logo_icon.png" alt="">
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="headline">
                                                    喜报|择仕中国连续三年荣获年度“上海人力资源服务业咨询、培训、招聘机构百强”及诚信示范机构</v-list-item-title>
                                                <!-- <v-list-item-subtitle>subtitle</v-list-item-subtitle> -->
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-img src="../../assets/images/news/504.png" height="500"></v-img>
                                        <v-card-text>
                                            <!-- 暂无新闻 -->
                                        </v-card-text>
                                        <v-card-actions>

                                            <div class="flex-grow-1"></div>
                                            <v-chip>2020-8-18</v-chip>
                                            <v-btn icon>
                                                <v-icon>mdi-heart</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon>mdi-share-variant</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                                <!-- 文章五内容 -->
                                <v-card class="text-center article">
                                    <v-card-text>
                                        <h1 style="line-height:50px">择仕中国连续三年荣获年度 <br /> “上海人力资源服务业咨询、培训、招聘机构百强”及诚信示范机构
                                        </h1>
                                        <v-divider class="mb-5"></v-divider>

                                        <v-img src="../../assets/images/news/501.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>
                                            择仕中国创立于2007年，十三年磨砺，领跑行业。获得ISO9001等机构专业认证。
                                        </p>
                                        <p>
                                            创立以来一直致力于<b>中高端人才寻访、招聘流程外包、灵活用工</b>等业务；我们始终相信每位客户值得拥有更好的服务，每位候选人值得拥有更好的职业生涯，每位服务顾问值得拥有更好的自我价值实现。
                                        </p>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>
                                            为反映上海人力资源服务业整体状况和发展动态，树立行业标杆，促进行业更好更快发展，上海人才服务行业协会于2020年6月至8月组织开展“2019年度上海人力资源服务业咨询、培训、招聘机构排名”工作。百强收录都按照各企业税收数据进行百强收录。
                                        </p>
                                        <v-img src="../../assets/images/news/502.png" class="elevation-5 my-8 mx-auto"
                                            width="600"></v-img>
                                        <p>
                                            择仕中国<b>连续三年（2017-2019）荣获年度“上海人力资源服务业咨询、培训、招聘机构百强及诚信示范机构</b>
                                            ，在为企业和个人的未来增值的服务之路上坚定不移。迄今为止，择仕与众多大型知名企业一直保持着稳定的合作关系，专业、高效一直都是客户对择仕的评价。
                                        </p>
                                        <v-img src="../../assets/images/news/503.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>择仕中国经历十三年的发展，作为本土的人力资源综合服务企业。在这条路上不断地精进、前行；我们的顾问均来自于前沿科技/智能制造/消费零售/互联网等多个领域，拥有丰富的行业背景和技术专长。同时，我们也因为组织的高速发展而不断吸引行业里优质的人才，并不断地培养和发展精英队伍。总部位于上海、于西安、青岛、大连、苏州已建立分公司。
                                        </p>
                                        <v-img src="../../assets/images/news/504.png" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <h5>2020 助力人才赋能，产业升级是择仕中国坚定笃行之路。</h5>
                                        <v-divider class="mb-5"></v-divider>
                                        <v-img src="../../assets/images/news/505.jpg" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <h2>
                                            END
                                        </h2>
                                    </v-card-text>
                                    <v-card-actions>
                                        <div class="flex-grow-1"></div>
                                        择仕中国
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>

                            <!-- NEWS4-->
                            <v-dialog v-model="news4" width="1000px">
                                <template v-slot:activator="{ on }">
                                    <v-card max-width="1200" class="mx-auto my-5" elevation="3" v-on="on">
                                        <v-list-item>
                                            <v-list-item-avatar color="#C88E67">
                                                <img src="../../assets/logo_icon.png" alt="">
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="headline">匠心十三载，携手创新篇——择仕中国13周年庆
                                                </v-list-item-title>
                                                <v-list-item-subtitle>Versal China 择仕VERSAL</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-img src="../../assets/images/news/401.webp" height="600"></v-img>
                                        <v-card-text>
                                            7月31日，择仕中国迎来十三周年。各地分公司合伙人齐聚上海，分公司同事联动举办十三周年活动，共同为“择仕中国十三岁“庆生！
                                        </v-card-text>
                                        <v-card-actions>

                                            <div class="flex-grow-1"></div>
                                            <v-chip>2020-8-3</v-chip>
                                            <v-btn icon>
                                                <v-icon>mdi-heart</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon>mdi-share-variant</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                                <!-- 文章四内容 -->
                                <v-card class="text-center article">
                                    <v-card-text>
                                        <h1>匠心十三载，携手创新篇——择仕中国13周年庆</h1>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>7月31日，择仕中国迎来十三周年。各地分公司合伙人齐聚上海，分公司同事联动举办十三周年活动，共同为“择仕中国十三岁“庆生！
                                        </p>

                                        <v-img src="../../assets/images/news/401.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <p>“战疫”之下的择仕十三周年以回顾&分享为主，我们以最热情饱满的姿态迎接我们择仕人的十三周年。择仕人，你们是最棒的！
                                        </p>

                                        <v-img src="../../assets/images/news/402.webp" class="elevation-5 my-8 mx-auto"
                                            width="800"></v-img>
                                        <h5>部分视频截图</h5>
                                        <v-img src="../../assets/images/news/403.webp" class="elevation-5 my-8"></v-img>
                                        <h5>感谢各位择仕成立以来的各位朋友发来的祝福
                                        </h5>
                                        <p>择仕中国创始人Daniel
                                            Xia先生回顾了十三年来择仕的创业成长之路，过往的种种犹如昨天发生一般，一切精彩且充满回忆，每一位客户，候选人以及择仕人在择仕发展的里程碑里都是浓墨重彩的一笔。时代赋予了我们很好的大环境，每一位择仕人在时代的浪潮中努力拼搏和奋斗不息成就了现在的择仕。
                                        </p>
                                        <v-divider class="mb-5"></v-divider>
                                        <v-img src="../../assets/images/news/404.png" class="elevation-5 my-8 mx-auto"
                                            width="800"></v-img>
                                        <p>Daniel说到：这13年，无论发生什么，我们唯一不变的初心就是“让企业和个人未来增值”为客户提供全方位的人力资源综合服务。</p>
                                        <v-img src="../../assets/images/news/405.webp" class="elevation-5 my-8 mx-auto"
                                            width="800"></v-img>
                                        <v-divider class="mb-5"></v-divider>
                                        <v-img src="../../assets/images/news/406.webp" class="elevation-5 my-8"></v-img>
                                        <h5>择仕COO：Wendy Mu女士
                                        </h5>
                                        <p>择仕十三岁的这一年也迎来了我们最重要的一个择仕人——WendyMu女士，庆典上Wendy表示了祝福，进行了精彩的发言；一切“从心出发，明天会更好”</p>
                                        <v-divider class="mb-5"></v-divider>
                                        <v-img src="../../assets/images/news/407.png" class="elevation-5 my-8"></v-img>
                                        <p>
                                            2020年下半年<br>

                                            择仕人不仅乘风破浪<br>

                                            也要筑梦远行<br>

                                            每一位择仕人将一起创造更加辉煌的未来<br>

                                            ......
                                        </p>
                                        <v-img src="../../assets/images/news/408.webp" class="elevation-5 my-8"></v-img>
                                        <p>
                                            <h2>
                                                无论前路是挑战还是惊喜<br>

                                                Challenges Begin Now
                                            </h2>
                                    </v-card-text>
                                    <v-card-actions>
                                        <div class="flex-grow-1"></div>
                                        择仕中国
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>

                            <!-- NEWS3-->
                            <v-dialog v-model="news3" width="1000px">
                                <template v-slot:activator="{ on }">
                                    <v-card max-width="1200" class="mx-auto my-5" elevation="3" v-on="on">
                                        <v-list-item>
                                            <v-list-item-avatar color="#C88E67">
                                                <img src="../../assets/logo_icon.png" alt="">
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="headline">沪苏联动|祝贺择仕中国苏州Office开业大吉
                                                </v-list-item-title>
                                                <v-list-item-subtitle>Versal China 择仕VERSAL</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-img src="../../assets/images/news/302.webp" height="500"></v-img>
                                        <v-card-text>
                                            2020年，在择仕中国十三年的发展征途上，是值得铭记的一年；在疫情的对于市场影响下，择仕没有停下步伐。上半年，贵阳，大连Office的相继成立，在西南、北方地区开拓了择仕的业务版图，为择仕的发展注入了新鲜的血液。
                                        </v-card-text>
                                        <v-card-actions>

                                            <div class="flex-grow-1"></div>
                                            <v-chip>2020-6-8</v-chip>
                                            <v-btn icon>
                                                <v-icon>mdi-heart</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon>mdi-share-variant</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                                <!-- 文章三内容 -->
                                <v-card class="text-center article">
                                    <v-card-text>
                                        <h1>沪苏联动|祝贺择仕中国苏州Office开业大吉</h1>
                                        <v-divider class="mb-5"></v-divider>
                                        <v-img src="../../assets/images/news/301.webp"
                                            class="elevation-5 my-8 my-8 mx-auto" width="400"></v-img>
                                        <h5>VERSAL CHINA</h5>
                                        <h5>GUIYANG DALIAN SUZHOU</h5>
                                        <p>2020年，在择仕中国十三年的发展征途上，是值得铭记的一年；在疫情的对于市场影响下，择仕没有停下步伐。上半年，贵阳，大连Office的相继成立，在西南、北方地区开拓了择仕的业务版图，为择仕的发展注入了新鲜的血液。
                                        </p>
                                        <v-divider class="mb-5"></v-divider>
                                        <v-img src="../../assets/images/news/302.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <h5>古人云：上有天堂，下有苏杭</h5>
                                        <p>苏州，一直是江浙沪热门经济快速发展之地，此次苏州Office开业也是择仕在业务布局上浓墨重彩的一笔，与上海总部强强联动，支持江浙沪区域客户公司业务发展，更好的服务客户，让企业和个人的未来增值。苏州Office位于金鸡湖畔苏州工业园区，苏州工业园区累计有效期内国家高新技术企业超1400家，累计培育独角兽及独角兽（培育）企业50家，科技创新型企业6000多家。累计评审苏州工业园区科技领军人才项目近1700个，人才项目质量、规模快速提升，形成了“引进高层次人才、创办高科技企业、发展高新技术产业”的链式效应。
                                        </p>
                                        <v-divider class="mb-5"></v-divider>
                                        <p>开业仪式上，Daniel XIA、Wendy MU及总部代表Jason HUO，苏州Office负责人Duffy HU共同为分公司开业剪彩，共举香槟。
                                        </p>
                                        <v-img src="../../assets/images/news/303.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <v-img src="../../assets/images/news/305.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <v-divider class="mb-5"></v-divider>
                                        <v-img src="../../assets/images/news/307.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <h5>择仕中国COO Wendy MU</h5>
                                        <p>
                                            Wendy
                                            MU在开业仪式上代表择仕中国总部对苏州Office予以致辞，表达了对于未来“沪苏联动”的期许：2020年在历史上是值得铭记的一年，市场的不确定性更加考验大家的行业深耕程度及快速应变能力，此次苏州Office的成立，择仕中国对于整个江浙沪板块的客户提供更快、更高质量的人才交付，苏州工业园区的高新科技企业集中，发展潜力巨大，布局苏州是择仕业务布局上重要的一步。
                                        </p>
                                        <v-divider class="mb-5"></v-divider>
                                        <v-img src="../../assets/images/news/308.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <h5>
                                            苏州Office Duffy HU</h5>
                                        <p>
                                            Duffy
                                            HU首先感谢跟随他的团队，感谢他们的付出和努力；加入择仕中国，是被择仕中国让企业和个人未来增值这一理念所吸引，希望未来可以在业务上与总部及各个Office可以更好的合作，为多元化的客户交付高质量人才，相信明年6月7日苏州Office能实现业绩和人员的倍增
                                        </p>

                                        <v-divider class="mb-5"></v-divider>
                                        <v-img src="../../assets/images/news/309.webp" class="elevation-5 my-8 my-8">
                                        </v-img>
                                        <p>2020上半年，除了贵阳、苏州Office的成立，大连Office成立是择仕中国北方市场深耕的重要一步，与西安、青岛形成整个北方人力资源市场企业服务的强强联合，大连Office负责人Emma，9年从业经历，丰富的团队管理经验，深耕于消费品、新零售行业领域。Emma说：加入择仕大家庭是一个既慎重又兴奋的选择，择仕有在猎头领域沉淀下来的13年的历史，多年的稳健发展为接下来的开疆拓土打下了坚实的基础，将与各个地区Office通力合作，将业务布局延伸至北上广深等全国一线城市。
                                        </p>
                                        <p>在天时，地利，聚集人和之际祝愿择仕中国未来业绩红火，OFFER多多。</p>
                                        <v-divider class="mb-5"></v-divider>
                                        <h3 class="brown--text">择仕中国
                                            未来可期
                                            欢迎你的加入</h3>


                                        <v-img src="../../assets/images/news/310.webp" class="elevation-5 my-8"></v-img>

                                        <h2>
                                            END
                                        </h2>
                                    </v-card-text>
                                    <v-card-actions>
                                        <div class="flex-grow-1"></div>
                                        择仕中国
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>

                            <!-- NEWS1 -->
                            <v-dialog v-model="news1" width="1000px">
                                <template v-slot:activator="{ on }">
                                    <v-card max-width="1200" class="mx-auto my-5" elevation="3" v-on="on">
                                        <v-list-item>
                                            <v-list-item-avatar color="#C88E67">
                                                <img src="../../assets/logo_icon.png" alt="">
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="headline">择仕大事记 | 回首鎏金七月</v-list-item-title>
                                                <v-list-item-subtitle>行业协会秘书长访问择仕中国 | 择仕中国喜迁新居 | 择仕发布全新LOGO
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-img src="../../assets/images/news.jpg" height="500"></v-img>
                                        <v-card-actions class="pa-5">

                                            <div class="flex-grow-1"></div>
                                            <v-chip>2019-10-11</v-chip>
                                            <v-btn icon>
                                                <v-icon>mdi-heart</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon>mdi-share-variant</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                                <!-- 文章一内容 -->
                                <v-card class="text-center article">
                                    <v-card-text>
                                        <h1>行业协会秘书长访问择仕中国</h1>
                                        <p>7月22日，上海人才服务行业协会朱庆阳秘书长与陪同工作人员徐韫慧一行人前往择仕中国参观考察<br>
                                            择仕中国创始人夏乾衡先生，合伙人及业务总监樊申哲先生对于朱秘书长莅临指导表示热烈欢迎 <br>
                                            会议参加人员还有择仕中国的高管成员。<br>
                                            双方就上海人力服务行业发展和未来行进方向进行了讨论
                                        </p>

                                        <v-img src="../../assets/images/news/news1_01.jpg"
                                            class="elevation-5 my-8 my-8"></v-img>
                                        <p>
                                            朱秘书长在会议上听取了择仕中国分享的行业经验和公司发展目标，对择仕中国过去取得的成绩做出了肯定。<br>
                                            会议上，夏总向朱秘书长一行来访表示热烈欢迎。夏总表示，择仕中国多年来的发展，离不开协会的支持。<br>
                                            感谢上海人才服务协会一直以来的支持、指导与帮助，2019年，也是择仕中国全新出发的一年，择仕中国继续在人才服务行业不断进取、创新，为上海人力咨询行业做出择仕的支持及力量。<br>
                                        </p>

                                        <h2>会议现场</h2>
                                        <v-img src="../../assets/images/news/news1_02.jpg" class="elevation-5 my-8">
                                        </v-img>
                                        <h5>与会人员认真讨论行业情况</h5>
                                        <p>朱秘书长认同夏总的看法，对于协会来说，会给予企业关心和帮助，大家一起携手，共同继续做好上海乃至全国的人力资源服务工作。朱秘书长对择仕中国近年来的不断创新工作内容很有兴趣，双方约定了会继续定期就行业事宜展开合作与探讨。
                                        </p>
                                        <h2>
                                            参观访问
                                        </h2>
                                        <v-img src="../../assets/images/news/news1_03.jpg" class="elevation-5 my-8">
                                        </v-img>
                                        <p>
                                            会后，朱秘书长饶有兴趣的查看了择仕中国刚刚乔迁的“新家”。整洁明亮的办公环境与朝气蓬勃的择仕人，都令朱秘书长觉得择仕中国的未来发展大有可为。<br>
                                            <b>年轻!创新!进取!</b> <br>
                                            12年的择仕中国，依然青春焕发。面对行业机遇与挑战，身后有行业协会的关心和支持，择仕满怀信心，创新前行。
                                        </p>
                                        <h2>
                                            合影
                                        </h2>
                                        <v-img src="../../assets/images/news/news1_04.jpg" class="elevation-5 my-8">
                                        </v-img>
                                        <h5>择仕中国员工与行业秘书长合影</h5>

                                        <p>
                                            朱庆阳，上海人才服务行业协会秘书长。具有多年人力资源方面的经验。同时还担任中国人才交流协会副秘书长、全国人力资源服务标准化技术委员会委员、国家民政部社会组织人力资源管理专家、全国省级人力资源（人才）服务行业协会联席会秘书长、上海市现代服务业联合会副秘书长、上海职教协会副会长、普陀区工商联常委，上海市闸北区政协委员。<br>
                                            先后获评“上海市五一劳动奖章”、“上海市劳动模范”、“上海市推进学习型社会建设与终身教育先进个人”“上海市标准化工作先进个人”“上海名牌战略实施20
                                            年有影响 50 人”2010-2014 连续获评“上海市新经济组织党委优秀党务工作者”。
                                        </p>
                                        <h1>择仕中国喜迁新居</h1>
                                        <p>2019年7月1日，择仕中国正式把办公室搬迁到了<span
                                                class="address">上海市徐汇区宜山路425号光启城2311-12室。</span></p>
                                        <p>
                                            我们希望给客户提供专业、优质的全方位服务。<br>
                                            全新升级扩充的新办公场所，秉承择仕中国一贯以来的开放、创新、自信精神。
                                        </p>
                                        <v-img src="../../assets/images/news/news1_05.jpg" class="elevation-5 my-8">
                                        </v-img>
                                        <v-img src="../../assets/images/news/news1_06.jpg" class="elevation-5 my-8">
                                        </v-img>
                                        <v-img src="../../assets/images/news/news1_07.jpg" class="elevation-5 my-8">
                                        </v-img>
                                        <h5>空间明亮宽敞，布置简洁有序，放松而开放。</h5>
                                        <p>
                                            择仕中国致力于成为企业最信赖的合作伙伴，为每一位合作的企业提供最专业、最完备的人力资源全面解决方案<br>
                                            合作共赢，共创未来。<br>
                                            择仕中国的理念与坚持不仅体现在服务上，也体现在每个伙伴身上。<br>
                                            我们希望每个信任并加入择仕中国的伙伴，都在工作中收获成长与自由，得到锻炼和收获。<br>
                                            在每一个成就自我的闪光时刻，也实现人生的跨越。
                                        </p>
                                        <h1>择仕中国周年庆 发布全新LOGO</h1>
                                        <p>12年，恰如一年四季轮转，
                                            恰似一场圆满循环。
                                            积蓄了12年的力量，
                                            是一次自我突破的焕然而生。
                                            时光流逝，回忆过往
                                            奔向未来，全新升级
                                            2019
                                            择仕中国品牌全新升级
                                            发布焕然新生的品牌标识
                                        </p>
                                        <h2>
                                            择仕全新Logo亮相<br>
                                            通达人生，成就未来
                                        </h2>
                                        <v-img src="../../assets/images/news/news1_08.jpg" class="elevation-5 my-8">
                                        </v-img>
                                        <p>
                                            新标识在对原标识进行继承性创新的基础上，融入了更具年轻感、跃动感的设计语言。<br>
                                            全新logo字体采用金色与蓝色两色为底色，传承了前版logo的通达与色调，<br>
                                            蓝色是包容与智慧，金色是希望与激情。<br>
                                            跃动的圆形小点，俏皮的字体排列，充满了朝气与活力，彰显年轻、包容、成长的意境。<br>
                                            正如同择仕的12年，是为了孕育出崭新的未来，圆形底色中，V符号上跃动的俏皮圆点，<br>
                                            是一次跃动，一点活力，一个希望，一项尝试。<br>
                                            “动一动，你的未来更精彩”。<br>
                                            这个logo是对既往信念的坚守，是对过去探索的积淀，也是对全新未来的一次全新起航。<br>
                                            择仕中国以开放而真诚的态度面对企业与人才，尊重每个人的力量，始终信任自己的合作伙伴。<br>
                                            服务于企业与人才，从行业更高格局去把握核心本质，始终保持谦虚、智慧、自省、理性。<br>

                                        </p>
                                        <h5>
                                            为企业和个人的未来增值<br>
                                            敬请期待我们的更多精彩时光
                                        </h5>
                                    </v-card-text>
                                    <v-card-actions>
                                        <div class="flex-grow-1"></div>
                                        择仕中国
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                news1: false,
                news2: false

            }
        },
        methods: {

        },
        computed: {

        },
        created() {

        }

    }
</script>


<style lang="css" scoped>
    .banner-warp {
        background-image: url('../../assets/images/home/touch.jpg');
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
    }

    .mask {
        background-color: rgba(0, 2, 20, 0.6)
    }

    .top-decoration {
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-bottom: none;
        height: 5rem;
        width: 15rem;
    }

    .bottom-decoration {
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-top: none;
        height: 5rem;
        width: 15rem;
    }

    .article {
        padding: 10px;
    }

    .article p {
        text-align: left;
        line-height: 30px;
    }

    .article h1 {
        color: #C88E67;
        padding: 30px 0;
    }

    .article h2 {
        padding: 30px 0;
        line-height: 30px;
    }

    .article h5 {
        padding-bottom: 20px;
    }

    .article .address {
        font-weight: 800;
        color: chocolate;
    }
</style>