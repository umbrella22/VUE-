import Mock from 'mockjs'
import arms from '@/witamdata/arms.json'

Mock.mock('api/get_all_arms','post',{
    arms
})