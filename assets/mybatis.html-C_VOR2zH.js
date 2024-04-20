import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,f as t}from"./app-Dy2w7Es1.js";const e={},p=t(`<h1 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis"><span>Mybatis</span></a></h1><h2 id="传递参数的方法" tabindex="-1"><a class="header-anchor" href="#传递参数的方法"><span>传递参数的方法</span></a></h2><h3 id="匿名参数-顺序传递参数" tabindex="-1"><a class="header-anchor" href="#匿名参数-顺序传递参数"><span>匿名参数 顺序传递参数</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectByGenderAndAge</span><span class="token punctuation">(</span><span class="token class-name">Short</span> gender<span class="token punctuation">,</span><span class="token class-name">String</span> age <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectByGenderAndAge<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
  select * from employee where gender = #{gender} and age = #{age}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意这里按参数名去引用的话会报如下错误，mybatis错误提示很细致，这里明确给我们提示，匿名参数只能使用arg1, arg0, param1, param2 类似的形式</p><p>这种传参方式的缺点是不够灵活，必须严格按照参数顺序来引用</p><p><code>BindingException: Parameter &#39;gender&#39; not found. Available parameters are [arg1, arg0, param1, param2]</code></p><p>所以正确的引用方式如下：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectByGenderAndAge<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
    select *  from employee where gender = #{param1} and age = #{param2}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-param注解" tabindex="-1"><a class="header-anchor" href="#使用-param注解"><span>使用@Param注解</span></a></h3><p>使用@Param注解显示的告诉mybatis参数的名字，这样在xml中就可以按照参数名去引用了</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectByGenderAndAge</span><span class="token punctuation">(</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;gender&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Short</span> gender<span class="token punctuation">,</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> age <span class="token punctuation">)</span><span class="token punctuation">;</span>
xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectByGenderAndAge<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
  select * from employee where gender = #{gender} and age = #{age}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用map传递参数" tabindex="-1"><a class="header-anchor" href="#使用map传递参数"><span>使用Map传递参数</span></a></h3><p>实际开发中使用map来传递多个参数是一种推荐的方式</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectByMapParams</span><span class="token punctuation">(</span><span class="token class-name">Map</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectByMapParams<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  select * from employee where gender = #{gender} and age = #{age}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用java-bean传递多个参数" tabindex="-1"><a class="header-anchor" href="#用java-bean传递多个参数"><span>用java bean传递多个参数</span></a></h3><p>也可以使用bean的方式来传递多个参数，使用时parameterType指定为对应的bean类型即可</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectByBeans</span><span class="token punctuation">(</span><span class="token class-name">Employee</span> employee<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数的引用直接使用bean的字段</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;select id=&quot;selectByBeans&quot; resultMap=&quot;BaseResultMap&quot; parameterType=&quot;com.wg.demo.po.Employee&quot;&gt;
  select
  *
  from employee where gender = #{gender} and age = #{age}
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="直接使用json传递参数" tabindex="-1"><a class="header-anchor" href="#直接使用json传递参数"><span>直接使用JSON传递参数</span></a></h3><p>这也是推荐的一种传参方式，controller层收到JSON型数据后，直接传递给mapper层进行查询操作，简单 方便</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByJSONObject</span><span class="token punctuation">(</span><span class="token class-name">JSONObject</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>findByJSONObject<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.alibaba.fastjson.JSONObject<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  select
  *
  from employee where gender = #{gender} and age = #{age}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传递集合类型参数list、set、array" tabindex="-1"><a class="header-anchor" href="#传递集合类型参数list、set、array"><span>传递集合类型参数List、Set、Array</span></a></h3><p>在一些复杂的查询中（如 sql中的 in操作），传统的参数传递已无法满足需求，这时候就要用到List、Set、Array类型的参数传递：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByList</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>findByList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
SELECT * from employee where age in
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span> <span class="token attr-name">close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      #{age}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里foreach表示循环操作，具体的参数含义如下：</p><p>foreach元素的属性主要有 item，index，collection，open，separator，close。<br> item表示集合中每一个元素进行迭代时的别名，<br> index指定一个名字，用于表示在迭代过程中，每次迭代到的位置，<br> open表示该语句以什么开始，<br> separator表示在每次进行迭代之间以什么符号作为分隔符， close表示以什么结束</p><p>在使用foreach的时候最关键的也是最容易出错的就是collection属性，该属性是必须指定的，但是在不同情况下，该属性的值是不一样的，主要有一下3种情况：</p><ol><li>如果传入的是单参数且参数类型是一个List的时候，collection属性值为list</li><li>如果传入的是单参数且参数类型是一个array数组的时候，collection的属性值为array</li><li>如果传入的参数是多个的时候，我们就需要把它们封装成一个Map或者Object</li></ol><h3 id="参数类型为对象-集合" tabindex="-1"><a class="header-anchor" href="#参数类型为对象-集合"><span>参数类型为对象+集合</span></a></h3><p>该类参数与java Bean参数形式类似，只不过更复杂一些，如下面的Department类，除了基本字段还包括一个Employee的列表</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Department</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> deptName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> descr<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> employees<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByDepartment</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;department&quot;</span><span class="token punctuation">)</span><span class="token class-name">Department</span> department<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>findByDepartment<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.wg.demo.po.Department<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    SELECT * from employee where dept_id =#{department.id} and age in
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>department.employees<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span> <span class="token attr-name">close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>employee<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        #{employee.age}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里foreach 对应Departmen部门中的List employees</p>`,41),l=[p];function c(o,i){return n(),s("div",null,l)}const d=a(e,[["render",c],["__file","mybatis.html.vue"]]),k=JSON.parse(`{"path":"/note/mybatis.html","title":"Mybatis","lang":"en-US","frontmatter":{"description":"Mybatis 传递参数的方法 匿名参数 顺序传递参数 注意这里按参数名去引用的话会报如下错误，mybatis错误提示很细致，这里明确给我们提示，匿名参数只能使用arg1, arg0, param1, param2 类似的形式 这种传参方式的缺点是不够灵活，必须严格按照参数顺序来引用 BindingException: Parameter 'gende...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/mybatis.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"Mybatis"}],["meta",{"property":"og:description","content":"Mybatis 传递参数的方法 匿名参数 顺序传递参数 注意这里按参数名去引用的话会报如下错误，mybatis错误提示很细致，这里明确给我们提示，匿名参数只能使用arg1, arg0, param1, param2 类似的形式 这种传参方式的缺点是不够灵活，必须严格按照参数顺序来引用 BindingException: Parameter 'gende..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-20T02:59:58.000Z"}],["meta",{"property":"article:author","content":"NULL"}],["meta",{"property":"article:modified_time","content":"2024-04-20T02:59:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-20T02:59:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"NULL\\"}]}"]]},"headers":[{"level":2,"title":"传递参数的方法","slug":"传递参数的方法","link":"#传递参数的方法","children":[{"level":3,"title":"匿名参数 顺序传递参数","slug":"匿名参数-顺序传递参数","link":"#匿名参数-顺序传递参数","children":[]},{"level":3,"title":"使用@Param注解","slug":"使用-param注解","link":"#使用-param注解","children":[]},{"level":3,"title":"使用Map传递参数","slug":"使用map传递参数","link":"#使用map传递参数","children":[]},{"level":3,"title":"用java bean传递多个参数","slug":"用java-bean传递多个参数","link":"#用java-bean传递多个参数","children":[]},{"level":3,"title":"直接使用JSON传递参数","slug":"直接使用json传递参数","link":"#直接使用json传递参数","children":[]},{"level":3,"title":"传递集合类型参数List、Set、Array","slug":"传递集合类型参数list、set、array","link":"#传递集合类型参数list、set、array","children":[]},{"level":3,"title":"参数类型为对象+集合","slug":"参数类型为对象-集合","link":"#参数类型为对象-集合","children":[]}]}],"git":{"createdTime":1713581998000,"updatedTime":1713581998000,"contributors":[{"name":"null","email":"null","commits":1}]},"readingTime":{"minutes":3.01,"words":903},"filePathRelative":"note/mybatis.md","localizedDate":"April 20, 2024","autoDesc":true}`);export{d as comp,k as data};