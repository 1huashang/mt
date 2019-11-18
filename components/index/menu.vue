<template>
    <div class="m-menu">
      <dl clss="nav">
        <dt>全部分类</dt>
        <dd v-for="(item,idx) in menu" :key="idx">
          <i :class="item.type"/>{{item.name}}<span class="arrow"/>
        </dd>
      </dl>
    </div>
</template>

<script>
    export default {
        name: "menu",
        data(){
            return{
                menu:[{
                    type:'food',
                    name:'美食'
                },
                    {
                        type:'takeout',
                        name:'外卖'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    },
                    {
                        type:'hotel',
                        name:'酒店'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
