<template>
<el-container>
    <el-header>
        <el-row>
            <el-col :span="24">
                <el-breadcrumb :separator-icon="ArrowRight" >
                    <el-breadcrumb-item 
                        v-for = "(directory, index) in directorys" 
                        :key="directory" 
                        v-on:click="parent(index)">
                            {{directory.substring(0, directory.length - 1)}}
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
    </el-header>
    <el-main>
        <el-table :data = "movies" table-layout="auto" >
                <el-table-column label="Name" width="300" sortable sort-by="name">
                    <template #default="scope">
                    <div>
                        <el-icon>
                            <Document v-if = "scope.row.type == 'file'" />
                            <Folder v-else />
                        </el-icon>
                        <a  
                            v-if = "scope.row.type == 'file'" 
                            v-bind:href="'player.html?target=' + backend + '/stream/' + directorys.slice(1).join('') + scope.row.name" 
                            target="_blank">
                                {{ scope.row.name }}
                        </a>
                        <span v-else
                            v-on:click="directoryClick(scope.row)">
                                {{ scope.row.name }}
                        </span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Create" prop="create" width="250" sortable/>
            <el-table-column label="Size" prop="size" width="250" sortable/>
        </el-table>
    </el-main>
</el-container>
</template>

<script lang="ts">
    import { getCurrentInstance, markRaw } from 'vue';
    import {Vue, Options} from 'vue-class-component';
    import axios from 'axios';
    import { ArrowRight, Folder, Document } from '@element-plus/icons-vue'
    axios.defaults.withCredentials = true; 
    interface Movie {
        size: string,
        name: string,
        create: string,
        type: string
    }
    @Options({
        components: {
            Folder: markRaw(Folder),
            Document: markRaw(Document),
            ArrowRight: markRaw(ArrowRight)
        }
    })
    export default class extends Vue {
        movies: Array <Movie> = [];
        backend: string = '';
        ArrowRight = ArrowRight;
        directorys: Array <string> = ["根目录/"];

        mounted(){
            this.backend = getCurrentInstance()?.appContext.config.globalProperties.$backend;
            this.getMovies();
        }
        directoryClick(movie: Movie) {
            this.directorys.push(movie.name + "/");
            this.getMovies();
        }
        parent(index: number) {
            this.directorys = this.directorys.slice(0, index + 1);
            this.getMovies();
        }
        getMovies() {
            axios.get(this.backend + '/query/movies?target=/' + this.directorys.slice(1).join(""))
            .then(res=>{
                this.movies = res.data;
            }).catch(err=>{
                if (err.response.status == 403) {
                    window.location.href = "/";
                }
            })
        }
    }
</script>
<style>

</style>