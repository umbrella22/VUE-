import Mock from 'mockjs'

Mock.mock('api/getNewList',{
  'list':[
    {
      url: 'xxx',
      title: 'title1'
    },
    {
      url: 'xxx2',
      title: 'title2'
    },
    {
      url: 'xxx3',
      title: 'title3'
    },
    {
      url: 'xxx4',
      title: 'title4'
    },
  ]
});
