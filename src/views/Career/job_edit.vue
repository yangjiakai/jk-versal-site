<template>
    <div>
        <div class="banner">
            <div class="warp d-flex align-center justify-center white--text">
                <h1 class="display-2 font-weight-bold">职位管理页</h1>
            </div>
        </div>
        <v-card class="mx-5 pa-5 mt-n12 mb-5" elevation="10">
            <v-data-table :headers="headers" :items="allJobs" sort-by="date" class="elevation-1" calculate-widths>
                <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title style="color: #232332">职位一览</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="1000px" persistent>
                            <template v-slot:activator="{ on }">
                                <v-btn color="#232332" dark class="mb-2" v-on="on">职位创建</v-btn>
                            </template>
                            <v-card>
                                <v-toolbar flat>
                                    <span class="headline">{{ formTitle }}</span>
                                    <v-spacer></v-spacer>
                                    <v-btn color="#232332" @click="save" class="mx-3" dark>确认</v-btn>
                                    <v-btn @click="close" class="mx-2">取消</v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <v-container>
                                        <v-card class="pa-5 pt-10 my-5">
                                            <v-card  color="#232332" class=" pa-5" style="position: absolute;top: -30px"
                                                elevation="10" dark>
                                                <h3>基本信息</h3>
                                            </v-card>
                                            <v-row>
                                                <v-col cols="12">

                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.title" label="标题" placeholder=" "
                                                        prepend-icon="fas fa-heading"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.location" label="地点"
                                                        placeholder=" " prepend-icon="fas fa-map-marker-alt">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.category" label="所属行业"
                                                        placeholder=" " prepend-icon="fas fa-clipboard-list">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.type" label="工作种类" placeholder=" "
                                                        prepend-icon="fab fa-buromobelexperte"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.company" label="公司"
                                                        placeholder=" " prepend-icon="fas fa-building"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.salary" label="薪资" placeholder=" "
                                                        prepend-icon="fas fa-money-bill-wave"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.email" label="发布者邮箱"
                                                        placeholder=" " prepend-icon="fas fa-envelope"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-textarea v-model="editedItem.description" label="岗位描述"
                                                        placeholder=" " prepend-icon="fas fa-edit"></v-textarea>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                        <v-card class="pa-5 pt-10 my-12">
                                            <v-card color="#232332" class="pa-5" style="position: absolute;top: -30px"
                                                elevation="10" dark>
                                                <h3>工作职责</h3>
                                            </v-card>
                                            <v-row>

                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.duty1" label="职责一" placeholder=" "
                                                        prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.duty2" label="职责二" placeholder=" "
                                                        prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.duty3" label="职责三" placeholder=" "
                                                        prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.duty4" label="职责四" placeholder=" "
                                                        prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.duty5" label="职责五" placeholder=" "
                                                        prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card>

                                        <v-card class="pa-5 pt-10 my-10">
                                            <v-card color="#232332" class=" pa-5" style="position: absolute;top: -30px"
                                                elevation="10" dark>
                                                <h3>任职要求</h3>
                                            </v-card>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.request1" label="要求一"
                                                        placeholder=" " prepend-icon="fas fa-dot-circle"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.request2" label="要求二"
                                                        placeholder=" " prepend-icon="fas fa-dot-circle"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.request3" label="要求三"
                                                        placeholder=" " prepend-icon="fas fa-dot-circle"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.request4" label="要求四"
                                                        placeholder=" " prepend-icon="fas fa-dot-circle"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.request5" label="要求五"
                                                        placeholder=" " prepend-icon="fas fa-dot-circle"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card>

                                        <v-card class="pa-5 pt-10 my-5">
                                            <v-card color="#232332" class=" pa-5" style="position: absolute;top: -30px"
                                                elevation="10" dark>
                                                <h3>公司信息</h3>
                                            </v-card>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.company_name" label="公司全名"
                                                        placeholder=" " prepend-icon="fas fa-building"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-textarea v-model="editedItem.company_address" label="公司详细地址"
                                                        placeholder=" " prepend-icon="fas fa-map-marker-alt">
                                                    </v-textarea>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-textarea v-model="editedItem.company_description" label="公司描述"
                                                        placeholder=" " prepend-icon="fas fa-tasks"></v-textarea>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="save">确认</v-btn>
                                    <v-btn color="blue" text @click="close">取消</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.action="{ item }" style="display: fixed">
                    <v-icon small class="mr-2" @click="editItem(item)" color="primary">
                        fas fa-edit
                    </v-icon>
                    <v-icon small @click="deleteItem(item)" color="orange">
                        fas fa-trash-alt
                    </v-icon>
                </template>
                <template v-slot:no-data>
                    <h2>没有数据</h2>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>


<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        data: () => ({
            dialog: false,
            headers: [{
                    text: '标题',
                    align: 'left',
                    value: 'title',
                    width: '150px'
                },
                {
                    text: '操作',
                    value: 'action',
                    sortable: false,
                    width: "100px",
                    class: "primary--text"
                },
                {
                    text: '地点',
                    value: 'location',
                    class: '',
                    width: '100px'
                },
                {
                    text: '所属行业',
                    value: 'category',
                    width: '100px'
                },
                {
                    text: '工作种类',
                    value: 'type',
                    width: '100px',
                },
                {
                    text: '薪资',
                    value: 'salary',
                    width: '100px'
                },
                {
                    text: '发布日期',
                    value: 'date',
                    width: '120px',
                    class: 'primary--text'
                },
                {
                    text: '发布者邮箱',
                    value: 'email',
                    width: '100px',
                    sortable: false,
                },
                {
                    text: '工作描述',
                    value: 'description',
                    width: '200px',
                    sortable: false,
                },
                {
                    text: '职责一',
                    value: 'duty1',
                    width: '200px'
                },
                {
                    text: '职责二',
                    value: 'duty2',
                    width: '200px',
                    sortable: false,
                },
                {
                    text: '职责三',
                    value: 'duty3',
                    width: '200px',
                    sortable: false,
                },
                {
                    text: '职责四',
                    value: 'duty4',
                    width: '200px',
                    sortable: false,
                },
                {
                    text: '职责五',
                    value: 'duty5',
                    width: '200px',
                    sortable: false,
                },
                {
                    text: '要求一',
                    value: 'request1',
                    width: '200px',
                    sortable: false,

                },
                {
                    text: '要求二',
                    value: 'request2',
                    width: '200px',
                    sortable: false,
                },
                {
                    text: '要求三',
                    value: 'request3',
                    width: '200px',
                    sortable: false,

                },
                {
                    text: '要求四',
                    value: 'request4',
                    width: '200px',
                    sortable: false,
                },
                {
                    text: '要求五',
                    value: 'request5',
                    width: '200px',
                    sortable: false,
                },
                {
                    text: '公司全名',
                    value: 'company_name',
                    width: '100px',
                    sortable: false,
                },
                {
                    text: '公司详址',
                    value: 'company_address',
                    width: '200px',
                    sortable: false,
                },
                {
                    text: '公司描述',
                    value: 'company_description',
                    width: '200px',
                    sortable: false,
                },
                {
                    text: '状态',
                    value: 'status',
                    width: '100px'
                },

            ],
            jobs: [],
            editedIndex: -1,
            editedId: "",
            editedItem: {
                id:0,
                title: "",
                location: "",
                category: "",
                type: "",
                company: "",
                salary: "",
                date: "",
                email: "",
                description: "",
                duty1: "",
                duty2: "",
                duty3: "",
                duty4: "",
                duty5: "",
                request1: "",
                request2: "",
                request3: "",
                request4: "",
                request5: "",
                company_name: "",
                company_address: "",
                company_description: " ",
                status: "有效"
            },
            defaultItem: {
                id: 0,
                title: "",
                location: "",
                category: "",
                type: "",
                company: "",
                salary: "",
                date: "",
                email: "",
                description: "",
                duty1: "",
                duty2: "",
                duty3: "",
                duty4: "",
                duty5: "",
                request1: "",
                request2: "",
                request3: "",
                request4: "",
                request5: "",
                company_name: "",
                company_address: "",
                company_description: " ",
                status: "有效"
            },
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? '创建职位信息' : '编辑职位信息'
            },
            ...mapGetters(["allJobs"]),

        },

        watch: {
            dialog(val) {
                val || this.close()
            },
        },

        created() {
            this.fetchJobs()

        },

        methods: {
            ...mapActions(["fetchJobs", "updateJob", "addJob", "deleteJob"]),

            editItem(item) {

                this.editedIndex = this.allJobs.indexOf(item)
                this.editedId = item.id
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                confirm('确定要删除这条工作信息吗') && this.deleteJob(item.id)
            },

            close() {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save() {
                if (this.editedIndex > -1) {
                    this.updateJob(this.editedItem)

                } else {
                    this.editedItem.id = +new Date()
                    this.editedItem.date = this.getDate()
                    this.addJob(this.editedItem)
                }
                this.close()
            },
            getDate() {
                let date = new Date()
                return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
            }
        },
    }
</script>

<style lang="css" scoped>
    .banner {
        width: 100%;
        height: 600px;
        background: url('../../assets/images/banner2.jpg');
        background-size: cover;
        background-position: 50% 50%;
    }

    .banner .warp {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }
</style>