<template>
    <div>
        <video id="myMovie" class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9">
            <source id="source" />
        </video>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import videojs from 'video.js';
import { ElMessage } from 'element-plus';

/**
 * 初始化视频播放器的组件
 */
export default class extends Vue {
    mounted() {
        location.search.substring(1).split('&').forEach(function(item) {
            var s = item.split('=');
            if (s[0] == 'target') {
                let src = decodeURIComponent(s[1]);
                let type = "";
                if (src.endsWith(".mp4")) {
                    type = "video/mp4";
                } else if (src.endsWith(".m3u8")) {
                   type = "application/x-mpegURL"
                } else return;
                videojs('myMovie', {
                    controls: true,
                    autoplay: true,
                    preload: 'auto',
                    sources: [{
                        src: src,
                        type: type
                    }]
                }, function()  {
                    this.on('error', function(){
                        ElMessage.error("视频加载失败，请确认视频是否存在或您是否有访问权限");
                    })
                    this.play();
                });
            }
        });
    }
}
</script>

<style>
</style>