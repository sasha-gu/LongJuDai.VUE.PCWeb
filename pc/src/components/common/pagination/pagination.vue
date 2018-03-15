<template>
    <div class="pages">
        <span class="first-page" @click="goPage(1)">首页</span>
        <span class="pre" :class="{disabled:curPage==1}" @click="goPage(curPage==1?1:curPage-1)"></span>
        <span class="page-num" :class="{active:page==curPage}" v-for="page in showPageBtn" v-if="page" @click="goPage(page)">{{page}}</span>
        <span class="page-num" v-else>...</span>
        <span class="next" :class="{disabled:curPage==allpages}" @click="goPage(curPage==allpages?allpages:curPage+1)"></span>
        <span class="last-page" @click="goPage(allpages)">尾页</span>
    </div>
</template>
<script>
export default {
  name:'pagination',
  data() {
    return {
      curPage: 1,
      _this:this
    };
  },
  props: {
    allpages: {
      type: Number,
      default: 1
    },
    current: {
      type: Number,
      default: 1
    }
  },
  computed: {
    showPageBtn() {
      let pageNum = this.allpages;
      let index = this.curPage;
      let arr = [];
      if (pageNum <= 5) {
        for (let i = 1; i <= pageNum; i++) {
          arr.push(i);
        }
        return arr;
      }
      if (index <= 2) return [1, 2, 3, 0, pageNum];
      if (index >= pageNum - 1)
        return [1, 0, pageNum - 2, pageNum - 1, pageNum];
      if (index === 3) return [1, 2, 3, 4, 0, pageNum];
      if (idnex === pageNum - 2)
        return [1, 0, pageNum - 3, pageNum - 2, pageNum - 1, pageNum];
      return [1, 0, index - 1, index, index + 1, 0, pageNum];
    }
  },
  methods: {
    goPage(page) {
      if (page != this.curPage) {
        this.curPage = page;
        this.$emit("update:current", page);
        this.$emit("navpage", this.curPage);
      } else {
        console.log("Already in the current page");
      }
    }
  }
};
</script>
<style media="screen" scoped>
/* 页码 */

.pages {
    margin-top: 87px;
    text-align: center;
}

.pages span {
    display: inline-block;
    padding: 0 14px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-weight: bold;
    background: #e7e5e5;
    vertical-align: middle;
    cursor: pointer;
    box-sizing: border-box;
}

.pages .disabled {
    cursor: not-allowed;
}

.pages .disabled:hover {
    background-color: #e7e5e5;
    color: #fff;
}

.pages span:hover {
    background-color: #ff9420;
    color: #fff;
}

.pages span.active {
    background: #ff9420;
}

.pages span.page-num {
    margin: 0 2px;
}

.pages .pre {
    background: #e7e5e5 url(./resource/page-pre.png) no-repeat;
    background-size: auto;
    background-position: center center;
}

.pages .next {
    background: #e7e5e5 url(./resource/page-next.png) no-repeat;
    background-size: auto;
    background-position: center center;
}
</style>
