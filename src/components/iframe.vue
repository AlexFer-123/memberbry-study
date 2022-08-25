<template>
    <div>
        <div v-for="(item, index) in videoDash" :key="index">
            <iframe 
            :id="item.id" 
            :src="item.video_player" 
            style="border:none" 
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
            allowfullscreen=true width="720" height="360">
            </iframe>
        </div>
    </div>
</template>

<script>
import videos from '@/services/videos';


export default {
    name: "FrameVideo",
    data() {
        return {
            videoDash: {}
        }
    },
    mounted(){
        videos.listar()
            .then(response => {
                this.videoDash = response.data.videos;
                console.log(this.videoDash)
        });
    }

}
</script>

<style>

</style>