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
                                        <div class="display-3 my-5 font-weight-black"><span class="main-title">Versal News</span>
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
                                <!-- NEWS1 -->
                                <v-dialog v-model="news1" width="1000px">
                                    <template v-slot:activator="{ on }">
                                        <v-card max-width="1200" class="mx-auto my-5" elevation="3" v-on="on">
                                            <v-list-item>
                                                <v-list-item-avatar color="blue">
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
    
                                            <v-img src="../../assets/images/news/news1_01.jpg" class="elevation-5 my-8 my-8"></v-img>
                                            <p>
                                                朱秘书长在会议上听取了择仕中国分享的行业经验和公司发展目标，对择仕中国过去取得的成绩做出了肯定。<br>
                                                会议上，夏总向朱秘书长一行来访表示热烈欢迎。夏总表示，择仕中国多年来的发展，离不开协会的支持。<br>
                                                感谢上海人才服务协会一直以来的支持、指导与帮助，2019年，也是择仕中国全新出发的一年，择仕中国继续在人才服务行业不断进取、创新，为上海人力咨询行业做出择仕的支持及力量。<br>
                                            </p>
    
                                            <h2>会议现场</h2>
                                            <v-img src="../../assets/images/news/news1_02.jpg" class="elevation-5 my-8"></v-img>
                                            <h5>与会人员认真讨论行业情况</h5>
                                            <p>朱秘书长认同夏总的看法，对于协会来说，会给予企业关心和帮助，大家一起携手，共同继续做好上海乃至全国的人力资源服务工作。朱秘书长对择仕中国近年来的不断创新工作内容很有兴趣，双方约定了会继续定期就行业事宜展开合作与探讨。
                                            </p>
                                            <h2>
                                                参观访问
                                            </h2>
                                            <v-img src="../../assets/images/news/news1_03.jpg" class="elevation-5 my-8"></v-img>
                                            <p>
                                                会后，朱秘书长饶有兴趣的查看了择仕中国刚刚乔迁的“新家”。整洁明亮的办公环境与朝气蓬勃的择仕人，都令朱秘书长觉得择仕中国的未来发展大有可为。<br>
                                                <b>年轻!创新!进取!</b> <br>
                                                12年的择仕中国，依然青春焕发。面对行业机遇与挑战，身后有行业协会的关心和支持，择仕满怀信心，创新前行。
                                            </p>
                                            <h2>
                                                合影
                                            </h2>
                                            <v-img src="../../assets/images/news/news1_04.jpg" class="elevation-5 my-8"></v-img>
                                            <h5>择仕中国员工与行业秘书长合影</h5>
    
                                            <p>
                                                朱庆阳，上海人才服务行业协会秘书长。具有多年人力资源方面的经验。同时还担任中国人才交流协会副秘书长、全国人力资源服务标准化技术委员会委员、国家民政部社会组织人力资源管理专家、全国省级人力资源（人才）服务行业协会联席会秘书长、上海市现代服务业联合会副秘书长、上海职教协会副会长、普陀区工商联常委，上海市闸北区政协委员。<br>
                                                先后获评“上海市五一劳动奖章”、“上海市劳动模范”、“上海市推进学习型社会建设与终身教育先进个人”“上海市标准化工作先进个人”“上海名牌战略实施20
                                                年有影响 50 人”2010-2014 连续获评“上海市新经济组织党委优秀党务工作者”。
                                            </p>
                                            <h1>择仕中国喜迁新居</h1>
                                            <p>2019年7月1日，择仕中国正式把办公室搬迁到了<span class="address">上海市徐汇区宜山路425号光启城2311-12室。</span></p>
                                            <p>
                                                我们希望给客户提供专业、优质的全方位服务。<br>
                                                全新升级扩充的新办公场所，秉承择仕中国一贯以来的开放、创新、自信精神。
                                            </p>
                                            <v-img src="../../assets/images/news/news1_05.jpg" class="elevation-5 my-8"></v-img>
                                            <v-img src="../../assets/images/news/news1_06.jpg" class="elevation-5 my-8"></v-img>
                                            <v-img src="../../assets/images/news/news1_07.jpg" class="elevation-5 my-8"></v-img>
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
                                            <v-img src="../../assets/images/news/news1_08.jpg" class="elevation-5 my-8"></v-img>
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
                                                <h5>
                                                    为企业和个人的未来增值<br>
                                                    敬请期待我们的更多精彩时光
                                                </h5>
                                            </p>
                                        </v-card-text>
                                        <v-card-actions>
                                            <div class="flex-grow-1"></div>
                                            择仕中国
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
    
                                <!-- NEWS2 -->
                                <!-- <v-dialog v-model="news2" width="600px">
                                    <template v-slot:activator="{ on }">
                                        <v-card max-width="1200" class="mx-auto my-5" elevation="3" v-on="on">
                                            <v-list-item>
                                                <v-list-item-avatar color="blue">
                                                    <img src="../../assets/logo_icon.png" alt="">
                                                </v-list-item-avatar>
                                                <v-list-item-content>
                                                    <v-list-item-title class="headline">title</v-list-item-title>
                                                    <v-list-item-subtitle>subtitle</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
    
                                            <v-img src="../../assets/images/外包.jpg" height="300"></v-img>
                                            <v-card-text>
                                                暂无新闻
                                            </v-card-text>
                                            <v-card-actions>
    
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
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">Use Google's location service?</span>
                                        </v-card-title>
                                        <v-card-text>Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra
                                            urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit
                                            non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin
                                            condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum
                                            volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu.
                                            Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id
                                            quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus
                                            luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet,
                                            nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque
                                            pellentesque, nulla vel erat.
                                            Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida
                                            metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy
                                            pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra
                                            scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit
                                            condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer
                                            maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at
                                            dictum sed
                                            semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque
                                            ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae
                                            vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis
                                            sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum
                                            vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus
                                            pretium venenatis.
                                            Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet
                                            amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque
                                            adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque
                                            vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci
                                            sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis
                                            vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi
                                            donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit
                                            dapibus, quis metus suspendisse nibh.
                                        </v-card-text>
                                        <v-card-actions>
                                            <div class="flex-grow-1"></div>
                                            <p>择仕中国</p>
    
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog> -->
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
    
        .main-title {
            position: relative;
            text-shadow: 5px 5px 2px rgba(0, 0, 0, .5);
            z-index: 1;
        }
    
        .main-title::before {
            content: "";
            position: absolute;
            top: -50px;
            left: -70px;
            width: 150px;
            height: 150px;
            border-radius: 75px;
            z-index: -1;
            background-color: rgba(0, 112, 192, .9);
            box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
            transform: rotate(-3deg);
        }
    
        .bottom-decoration {
            border: 1px solid rgba(255, 255, 255, 0.7);
            border-top: none;
            height: 5rem;
            width: 15rem;
        }
    
        .article{
            padding: 10px;
        }
    
        .article p {
            text-align: left;
            line-height: 30px;
        }
    
        .article h1 {
            color: rgba(0, 112, 192, .9);
            padding:30px 0;
        }
    
        .article h2{
            padding:30px 0;
            line-height: 30px;
        }
    
        .article h5{
            padding-bottom:20px;
        }
        
        .article .address{
            font-weight: 800;
            color: chocolate;
        }
    </style>