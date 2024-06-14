export default {
  content: `### 这是一篇没有代码的文

![a5aba04d1c06499f86a2456f94c3f7b3_tplv-k3u1fbpfcp-watermark.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/587037990e794bb7bf8b75c0f977a4c7~tplv-k3u1fbpfcp-watermark.image)
### DESC
自node升级到5.x 版本之后，当我们下载npm包的时候，增加package.json 的同时也会增加一个package-lock.json, 所以它是什么? 他用来干什么的？于是去找了下[官方文档](https://www.npmjs.cn/files/package-lock.json/),翻译一下。
>对于 npm 修改 node_modules 或 手动修改package.json 的任何操作，都会自动生成 package-lock.json。它描述了生成的依赖树，以便后续安装下载成相同版本的包，而不管在此期间对应的包是否更新版本。

通俗的说， package-lock.json的作用就是锁定安装时的版本号，保证他人的npm install时的下载依赖保持一直。

__所以？ 为什么要这么做？在此之前我们需要了解一定的背景。__

#### 版本控制

正常的时候，如今我们开发构建一个程序，会下载各种各样的所需要的工具包，每个包都有对应的版本号， 一个版本号由三个部分构成， X, Y, Z, 分别是主版本号， 次版本号， 补丁版本号。列如现在的node Current版本是 16.3.0， 所以主版本号为16， 次为3， 补丁为0。

__约定成俗中：补丁版本中的更改表示不会破坏任何内容的错误修复，次版本的更改表示不会破坏任何现有功能的新功能的更新，主版本更改表示极大的破坏了兼容性的大更改。__ 

__所以能理解最近热议的python之父说[Python 4.0可能不会来了](https://blog.csdn.net/itcodexy/article/details/117458477)。大版本意味着大的更改，大的学习,和必然的条件。__

#### 包管理 

npm 的诞生一定程度上是为了项目中的包管理更加容易，开发项目中我们会下载数百个包，每个包又会有n个依赖项，所以node_modules 就必然变得沉重繁杂。为了更加明了的去管理这些包，npm在安装一个包的时候，会在package中增加一个语义化版本，包括包名和版本号，例如我们安装dayjs，__npm i dayjs -S__. package会插入一个 键值对， __"dayjs" : "^1.10.5"__, 这意味着我们至少是使用1.10.5之上的dayjs版本，但是主版本号1 是不能更改的。

#### 项目协同开发&&共享

package.json中表明项目中所需要的依赖项和依赖项的版本号的好处在于，任何下载到项目中的依赖都会记录在其中，以便于我们统一管理，但是随之而来就有另外一个问题。  

比如我们刚刚下载的dayjs包为1.10.5， 这个时候开发dayjs维护者发布了一个错误的版本1.10.6，新同事在代码文件夹中运行npm install，由于dayjs拥有相同主版本的更高版本，所以这个时候项目中下载的版本就是1.10.6， 从理论上来说，这两个版本并无冲突，但是这个时候你就会发现。

新同事的代码不能运行，而你的代码可以运行。 

__于是你用余光看了他一眼__。

#### package-lock

package-lock 目的就是为了避免上述的类似情况发生，所以我们会发现在安装包的时候同时也会生成一个package-lock.json ，除非你[禁用](https://www.cnblogs.com/davidgu/p/9862497.html)他。

package-lock.json会列出我们每个依赖项目的详细信息，比如应该安装特定的版本，模块的URI，需要的依赖列表，包列表，等等等，这里我们以express为例子。

有了以上信息之后，npm在安装包的时候，用的就是package-lock.json ,而不是package.json， 这种情况下就保证了我们在项目种安装的对应包，和包里面对应依赖等在协同开发的情况下都达到了统一。


#### 产生的问题

package-lock.json 在新增的时候，其实是有很大的歧义的，甚至我们能够搜索到的npm关于package-lock.json 的内容很大部分都是关于禁用的内容。

增加package-lock之前，我们都是以package.json的内容为包的信息内容。当我们引入package-lock.json 的时候，npm在下载包的时候就以package-lock.json为基准了，这个时候就有一些问题产生:

1. 比如在上面我们安装了一个express 包的版本为 4.17.1， 然后我们想安装一个更低版本的包，比如4.16.1， 这个时候我们肯定会修改 package.json种的内容为4.16.1，然后删除node_modules 对应内容，然后npm install,这个时候就发现，下载的express包还是4.17.1

2. 比如当我们不小心删了package-lock.json几个包内容，这个时候package.json的内容是还有那几个包的信息的，所以我们就npm install，然后就发现项目运行不起来，就各种找问题，老同事就告诉你，你把node_modules包和package-lock.json删了重新npm install一下或许可以。
然后你试了，真的可以，__大神就是牛__.

......

针对以上问题, npm在v5.10版本发布更新，如果用户更新了package.json包的内容，就会导致package-lock.json对应的锁定的包版本不生效，同时使用package.json 包的版本进行修改，并且将当前下载依赖包的版本以及其他信息添加到package-lock.json中。

__同时认为，当我们发现自己的项目跑不起来，而同事的可以跑起来，这个时候有一种排查方式是查找报错的包的位置，看到版本号，与同事本地的对比，看是否统一。__


### 参考文档
[https://www.cnblogs.com/dreamsqin/p/10938767.html](https://www.cnblogs.com/dreamsqin/p/10938767.html)  
[https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8)  
[https://www.npmjs.cn/files/package-lock.json/](https://www.npmjs.cn/files/package-lock.json/)  `,
};
