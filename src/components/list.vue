<template>
    <div>
        <Scroll :on-reach-bottom="jiazai">
        <Card dis-hover v-for="(item, index) in list" :key="index" style="margin: 32px 0">
            Content {{ item }}
        </Card>
    </Scroll>
    </div>
</template>
<script>
export default {
    data:()=>({
        list:[1,2,3],
        donghua:"animated bounceInRight",
    }),
    methods:{
        jiazai(){
            return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.list[this.list.length - 1];
                        for (let i = 1; i < 4; i++) {
                            this.list.push(last + i);
                        }
                        resolve();
                    }, 2000);
                });
        }
    }
}
</script>
<style scoped>

</style>
