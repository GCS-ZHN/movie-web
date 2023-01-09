<template>
    <div class="prism-player" id="player-con">
    </div>
</template>

<!-- 这里不要使用ts，因为ts会报错，不知道为什么，所以使用js -->
<script>
import { Vue } from 'vue-class-component';
import { ElMessage } from 'element-plus';
export default class extends Vue {
    mounted() {
        location.search.substring(1).split('&').forEach(function(item) {
            var s = item.split('=');
            if (s[0] == 'target') {
                let src = decodeURIComponent(s[1]);
                /* eslint-disable*/
                var player = new Aliplayer({
                    "id": "player-con",
                    "source": src,
                    "width": "100%",
                    "height": "500px",
                    "autoplay": true,
                    "isLive": false,
                    "rePlay": false,
                    "playsinline": true,
                    "preload": true,
                    "controlBarVisibility": "hover",
                    "useH5Prism": true
                    }, function (player) {
                        console.log("The player is created");
                        player.on('error', function (e) {
                            console.log(e);
                            ElMessage.error('视频加载失败');
                        });
                    }
                );
                console.log(player);
            }
        });
    }
}
</script>

<style>
</style>