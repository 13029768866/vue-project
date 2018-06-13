<template>
    <div class="footer">
        <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>    
        </router-link>
        <router-link to="/list">
        <i class="iconfont icon-liebiaoyemian"></i>
        <span>列表</span>    
        </router-link>
        <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>    
        </router-link>
        <router-link to="/add">
        <i class="iconfont icon-tianjia"></i>
        <span>添加</span>   
        </router-link>
    </div>
</template>

<style scoped lang="less">
    .footer{
        position: fixed;
        display: flex;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px; 
        border-top: 1px solid #ccc;
        a{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            color: skyblue;
             &.router-link-active{
                color: red;
            } 
        } 
               
            
    }
</style>
<script type="text/javascript">
/*var a = [1,2,3]
var b = [5,6]
function change(a,b){	
	a[0] = 4;
	var c = a;
	a = b;
	b = c;
	console.log(a)
	console.log(b)
}
change(a,b);
console.log(a)
console.log(b)*/

function foo(){console.log(1)}
function bar(){console.log(2)}
function test(){
	console.log(typeof foo);
	console.log(typeof bar)
	foo();bar();
	function foo(){console.log(3)}
	var bar = function(){console.log(4)}		
}
test()
</script>
