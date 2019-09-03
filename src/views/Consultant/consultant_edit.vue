<template>
    <div>
        <div class="banner">
            <div class="warp d-flex align-center justify-center white--text">
                <h1 class="display-2 font-weight-bold">顾问管理页</h1>
            </div>
        </div>
        <v-card height="1000" class="mx-5 pa-5 mt-n12 mb-5" elevation="10">
            <v-data-table :headers="headers" :items="allConsultants" sort-by="date" class="elevation-1" calculate-width>
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>顾问一览</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="1000px" persistent>
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" dark class="mb-2" v-on="on">顾问添加</v-btn>
                            </template>
                            <v-card >
                                <v-toolbar flat>
                                    <span class="headline">{{ formTitle }}</span>
                                    <v-spacer></v-spacer>
                                    <v-btn color="#232332" @click="save" class="mx-3" dark>确认</v-btn>
                                    <v-btn @click="close" class="mx-2">取消</v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <v-container>
                                        <v-card class="pa-5 pt-10 my-5">
                                            <v-card color="#232332" class="pa-5" style="position: absolute;top: -30px"
                                                elevation="10" dark>
                                                <h3>基本信息</h3>
                                            </v-card>
                                            <v-row>
                                                <v-col cols="12">

                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.name" label="中文名" placeholder=" "
                                                        prepend-icon="fas fa-heading"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.name_en" label="英文名"
                                                        placeholder=" " prepend-icon="fas fa-map-marker-alt">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.email" label="邮箱" placeholder=" "
                                                        prepend-icon="fas fa-clipboard-list"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.position" label="职位"
                                                        placeholder=" " prepend-icon="fab fa-buromobelexperte">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.location" label="所在地"
                                                        placeholder=" " prepend-icon="fas fa-building"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-textarea v-model="editedItem.description" label="顾问描述"
                                                        placeholder=" " prepend-icon="fas fa-edit"></v-textarea>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                        <v-card class="pa-5 pt-10 my-12">
                                            <v-card color="#232332" class=" pa-5" style="position: absolute;top: -30px"
                                                elevation="10" dark>
                                                <h3>相关信息</h3>
                                            </v-card>
                                            <v-row>

                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.experience1" label="资历一"
                                                        placeholder=" " prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.experience2" label="资历二"
                                                        placeholder=" " prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="editedItem.experience3" label="资历三"
                                                        placeholder=" " prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4">
                                                    <v-text-field v-model="editedItem.field1" label="专业领域一"
                                                        placeholder=" " prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4">
                                                    <v-text-field v-model="editedItem.field2" label="专业领域二"
                                                        placeholder=" " prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4">
                                                    <v-text-field v-model="editedItem.field3" label="专业领域三"
                                                        placeholder=" " prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="editedItem.keyword1" label="关键词一"
                                                        placeholder=" " prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="editedItem.keyword2" label="关键词二"
                                                        placeholder=" " prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="editedItem.keyword3" label="关键词三"
                                                        placeholder=" " prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="editedItem.keyword4" label="关键词四"
                                                        placeholder=" " prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="editedItem.education1" label="教育背景一"
                                                        placeholder=" " prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="editedItem.education2" label="教育背景二"
                                                        placeholder=" " prepend-icon="fab fa-envira"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="#232332" text @click="save">确认</v-btn>
                                    <v-btn color="#232332" text @click="close">取消</v-btn>
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
                    text: '中文名',
                    align: 'left',
                    sortable: true,
                    value: 'name',
                    width: '100px'
                },
                {
                    text: 'Actions',
                    value: 'action',
                    sortable: false,
                    width: "100px",
                    class: 'primary--text'
                },
                {
                    text: '英文名',
                    value: 'name_en',
                    class: '',
                    width: '100px',
                    sortable: false,
                    
                },
                {
                    text: '邮箱',
                    value: 'email',
                    width: '100px',
                    sortable: false,
                },
                {
                    text: '职位',
                    value: 'position',
                    width: '100px',
                },
                {
                    text: '所在地',
                    value: 'location',
                    width: '100px',
                },
                {
                    text: '日期',
                    value: 'date',
                    width: '100px',
                    class: 'primary--text'
                },
                {
                    text: '描述',
                    value: 'description',
                    width: '300px',
                    sortable: false,
                },
                {
                    text: '资历一',
                    value: 'experience1',
                    width: '100px',
                    sortable: false,
                },
                {
                    text: '资历二',
                    value: 'experience2',
                    width: '100px',
                    sortable: false,

                },
                {
                    text: '资历三',
                    value: 'experience3',
                    width: '100px',
                    sortable: false,

                },
                {
                    text: '领域一',
                    value: 'field1',
                    width: '100px',
                    sortable: false,
                },
                {
                    text: '领域二',
                    value: 'field2',
                    width: '100px',
                    sortable: false,
                },
                {
                    text: '领域三',
                    value: 'field3',
                    width: '100px',
                    sortable: false,
                },
                {
                    text: '关键词一',
                    value: 'keyword1',
                    width: '100px',
                    sortable: false,
                },
                {
                    text: '关键词二',
                    value: 'keyword2',
                    width: '100px',
                    sortable: false,
                },
                {
                    text: '关键词三',
                    value: 'keyword3',
                    width: '100px',
                    sortable: false,
                },
                {
                    text: '关键词四',
                    value: 'keyword4',
                    width: '100px',
                    sortable: false,
                },
                {
                    text: '教育背景一',
                    value: 'education1',
                    width: '150px',
                    sortable: false,
                },
                {
                    text: '教育背景二',
                    value: 'education2',
                    width: '150px',
                    sortable: false,
                },
                {
                    text: '状态',
                    value: 'status',
                    width: '150px',
                },

            ],
            constants: [],
            editedIndex: -1,
            editedId: "",
            editedItem: {
                name: "",
                name_en: "",
                email: "",
                position: "",
                location: "",
                date: "",
                description: "",
                experience1: "",
                experience2: "",
                experience3: "",
                field1: "",
                field2: "",
                field3: "",
                keyword1: "",
                keyword2: "",
                keyword3: "",
                keyword4: "",
                education1: "",
                education2: "",
                status: "有效"
            },
            defaultItem: {
                name: "",
                name_en: "",
                email: "",
                position: "",
                location: "",
                date: "",
                description: "",
                experience1: "",
                experience2: "",
                experience3: "",
                field1: "",
                field2: "",
                field3: "",
                keyword1: "",
                keyword2: "",
                keyword3: "",
                keyword4: "",
                education1: "",
                education2: "",
                status: "有效"
            },
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? '创建顾问信息' : '编辑顾问信息'
            },
            ...mapGetters(["allConsultants"]),
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
        },

        created() {
            this.fetchConsultants()
        },

        methods: {
            ...mapActions(["fetchConsultants", "addConsultant", "deleteConsultant", "updateConsultant"]),


            editItem(item) {
                this.editedIndex = this.allConsultants.indexOf(item)
                this.editedId = item.id
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                confirm('确定要删除这条工作信息吗') && this.deleteConsultant(item.id)
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
                    this.updateConsultant(this.editedItem)
                } else {
                    this.editedItem.date = this.getDate()
                    this.addConsultant(this.editedItem)
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