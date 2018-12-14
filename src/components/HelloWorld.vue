<template>
  <div class="hello">
    <div>
      <input type="text" v-model="myVal3">
      <p>{{myVal4}}</p>
      <audio src="../assets/1.wav" controls="controls">不支持</audio>
    </div>
    <!-- 使用router-view来引入 -->
    <!-- 直接通过导入的名称作为标签引入 -->
    <!-- 这里的number=15是向子组件里传递15这个字符串参数，如果需要传递值往下看~ -->
    <componentA number="15"></componentA>
    <!-- 如果需要传递值，则需要使用v-band也就是在前面加个：就可以传值了 -->
    <!-- 但需要注意的是在子组件接受的时候需要在那边声明类型，否则会报错 -->
    <component-a :text="list[1].name"></component-a>
    <!-- 子组件使用事件向向父组件传值 -->
    <!-- 但是此处需要注意的是，子组件一旦添加之后在父组件这边只要有任何调用此子组件的表情都会有相应的更新，但是能得到数据的只有 -->
    <!-- 添加了@Key的这个子组件标签可以触发 -->
    <component-a @my-event="getmyevent">
      <p slot="header">这是头~</p>只有这里才能点
      <p slot="footer">这是屁股~</p>
    </component-a>
    <!-- 也可以使用is来引入，但是在引入后，有大写的地方都要用-来转换成小写 -->
    <p is="component-a"></p>
    <!-- 绑定之后的优点在于可以动态的引入 -->
    <p :is="comToRender"></p>
    <h1>{{ msg }}</h1>
    {{ num + 5 }}
    <!-- v-for渲染数组 -->
    <!-- 使用animated动画效果，在class中使用animated 加动画名称即可 -->
    <div v-for="(item,index) in list" :key="item.index" class="animated bounceInDown">
      <!-- 和ionic一样的用法，只不过要输出数列下表的时候index时要注意 -->
      {{item.name}}-{{item.price}}-{{index}}
    </div>
    <!-- 添加按钮 -->
    <button v-on:click="additem">输出日志</button>
    <!-- V-bind应用 -->
    <a :href="link">去百度</a>
    <a v-bind:class="classStr">去百度</a>
    <!-- 使用对象的方式 -->
    <a v-bind:class="className"></a>
    <!-- 使用v-bind绑定样式 -->
    <a :style="linkcss">测试数据</a>
    <!--使用数组的方式同对象 -->
    <!-- 条件渲染 -->
    <a v-if="isPartA">PartA</a>
    <!-- v-else在v-if值为false是显示，必须紧跟上面的v-if -->
    <a v-else>no data</a>
    <a v-show="!isPartA">PartB</a>
    <!-- v-on可缩写为@ -->
    <button v-on:click="clickA">按钮</button>
    <!-- v-for渲染对象 -->
    <div v-for="value in objList" :key="value.id">
      <!-- 如果是对象的话，就直接写in前面的，会把对象展示出来 -->
      {{value}}
    </div>
    <!-- 在表单中绑定数据使用v-model -->
    <div>
      <!-- 而在v-model中，有几种修饰符，修饰符用.xxx来引用，如：.lazy这个就是用来延迟同步数据，一般用于很消耗资源的方面 -->
      <input type="text" name v-model="myVal">
    </div>
    <div>{{myVal}}</div>
    <div>{{myVal1}}</div>
    <div>{{myVal2}}</div>
    <div>
      <!-- checkbox的应用 -->
      <input type="checkbox" name value="apple" v-model="myVal">
      <label>apple</label>
      <input type="checkbox" name value="banana" v-model="myVal">
      <label>banana</label>
      <input type="checkbox" name value="orange" v-model="myVal">
      <label>orange</label>
    </div>
    <div>
      <!-- radio的应用 -->
      <input type="radio" name value="apple" v-model="myVal1">
      <label>apple</label>
      <input type="radio" name value="banana" v-model="myVal1">
      <label>banana</label>
      <input type="radio" name value="orange" v-model="myVal1">
      <label>orange</label>
    </div>
    <div>
      <!-- select（下拉选择）的应用 -->
      <select v-model="myVal2">
        <option v-for="item in list" :value="item.price" :key="item.id">{{item.name}}</option>
      </select>
    </div>
    <div v-for="(value,key) in objList" :key="key">
      <!-- 如果是对象的话，就直接写in前面的，会把对象展示出来在必要时的时候需要展示key或者用到key值 -->
      {{key+value}}
    </div>
    <!-- v-for渲染组件 -->
    <componentA v-for="(item,index) in list" :key="index"></componentA>
    <div>
      <!-- 过渡效果 -->
      <button v-on:click="show1">点一下</button>
      <transition name="xiaoguo">
        <p v-show="xs">字符串</p>
      </transition>
    </div>
    <!--mock模拟数据-->
    <div v-for="(item,index) in mocklist" :key="index">{{item.title}} {{item.content}}</div>
    <button @click="clickB">跳转</button>
    <button @click="gettext">点击</button>
  </div>
</template>

<script>
// 导入组件
import componentA from "./a";
import Vue from "Vue";
import axios from "axios";

export default {
  // 注册组件
  components: { componentA },
  name: "HelloWorld",
  data() {
    return {
      //因为很多时候会使用驼峰命名方式（大小写参杂）来标记不同的变量，所以在大写前面加-并且大写转小写这样区分。
      comToRender: "component-a",
      myVal: [],
      myVal1: [],
      myVal2: [],
      mocklist: [],
      myVal3: "",
      myVal4: "此处应为变更",
      msg: "Welcome",
      link: "http://www.baidu.com",
      dataA: 12,
      //css样式在js中要使用对象的形式
      linkcss: {
        color: "red",
        "font-size": "20px"
      },
      xs: false,
      isPartA: true,
      classStr: "red-found",
      className: {
        "red-found": true,
        "blue-found": false
      },
      num: 1,
      status: true,
      list: [
        {
          name: "apple",
          price: 66
        },
        {
          name: "banana",
          price: 66
        },
        {
          name: "uiuia",
          price: 66
        }
      ],
      objList: {
        name: "apple",
        price: 66,
        color: "red",
        weight: 14
      },
      mocklist: [
        {
          title: "这是标题1",
          content: "这是内容"
        },
        {
          title: "这是标题2",
          content: "这是内容"
        },
        {
          title: "这是标题3",
          content: "这是内容"
        },
        {
          title: "这是标题4",
          content: "这是内容"
        }
      ],
      componentdata: [{}, {}]
    };
  },
  //属性监听，当一个属性被改变时相应什么操作
  //这个watch本身是一个数组，KEY就是要监听的属性名
  watch: {
    myVal3: function(newmyVal3) {
      this.myVal4 = "已更改";
    },
    list: function(newlist) {
      alert("列表已发生更改");
    }
  },
  //计算属性
  computed: {
    myValwithout() {
      return Date.now();
    }
  },
  mounted() {
    // this.get();
    // this.get1();
    this.gettext();
  },
  methods: {
    //使用方法来计算属性，但区别是，通过上述方法得来的时间戳只会是第一次运行时候的数据，数据不会实时更新，只有方法
    //是每次调用的时候使用的是调用时的。
    getmyValwithout() {
      return Date.now();
    },
    additem() {
      console.log(this.list);
      //向list中添加数据
      this.list.push({
        name: "panapple",
        price: 77
      });
      //强制修改某一项
      Vue.set(this.list, 1, {
        name: "panapples",
        price: 55
      });
    },
    clickA() {
      this.isPartA = !this.isPartA;
    },
    clickB() {
      this.$router.push("404");
    },
    //此处的参数则就是在子组件中传递过来的值
    getmyevent(hello) {
      console.log("事件已接收并启动", hello);
      //接受的参数也可以同ionic那样使用
      this.list.push(hello);
    },
    show1() {
      this.xs = !this.xs;
    },
    get() {
      axios
        .get("api/getparentPost")
        .then(res => {
          console.log(res);
          //  this.mocklist = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    get1() {
      axios
        .get("api/subPost")
        .then(res => {
          console.log(res);
          //  this.mocklist = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    gettext() {
      axios.post("api/get_all_arms").then(res => {
        console.log(res);
      }).catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
/*激活阶段的动画展示*/
.xiaoguo-enter-active,
.xiaoguo-leave-active {
  transition: all 0.5s;
}
.xiaoguo-enter,
.xiaoguo-leave {
  opacity: 0;
}
</style>
