webpackJsonp([0x67f2eac0a474],{770:function(e,t){e.exports={data:{post:{id:"/Users/drugsism/Documents/Persnal/sopesnote/content/posts/2019-01-29--Gatsby로-블로그-만들기/index.md absPath of file >>> MarkdownRemark",html:'<br/>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/gatsby_name-6cc2c4dfe3e2a57f57d0dede087206a3-817f2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 437px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 26.31578947368421%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAAsSAAALEgHS3X78AAABJUlEQVQY02N4/+rrmgknZlXsXth04O7FF//////39x+Q/P37918w+AcGIPF//379+gUUBzIgUgxAnVPyt5d7LWmNXVcbtOLVk49AdceOHSsuLl6/fj1Ez/v3769duwZkb9q0afv27UAGUCeQZOhM3LCgfn+k0gSg/qbI1ad33gGK5ubk3r9/f/bs2dOmTevp6ampqUlLS5s5c2Z3d3dBQUFfX9+KFSuWL1/OMLN895EN1+fW7OtK3ri888jNs0+BmtvbOzo7O+Pj4xMTE6uqqrKysmbNmgV0S3BwMJBsa2tLSEhobW1luHn22ZK2Q4taDs6p3rtl9tn/YPD9+/etW7c+evToy5cvhw4devr06evXr69fvw4UOXr06IsXL9rb2x8/fgwAufDbW4d62FIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="unsplash.com"\n        title=""\n        src="/static/gatsby_name-6cc2c4dfe3e2a57f57d0dede087206a3-817f2.png"\n        srcset="/static/gatsby_name-6cc2c4dfe3e2a57f57d0dede087206a3-130d2.png 200w,\n/static/gatsby_name-6cc2c4dfe3e2a57f57d0dede087206a3-8761e.png 400w,\n/static/gatsby_name-6cc2c4dfe3e2a57f57d0dede087206a3-817f2.png 437w"\n        sizes="(max-width: 437px) 100vw, 437px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<br/><br/></p>\n<h3>Gatsby는 ‘정적 페이지생성 프레임워크’다.</h3>\n<p><code class="language-text">정적 페이지 생성 프레임워크</code>라는 말부터 어렵게 들릴지 모르나, 별 복잡할건 없다.<br/>\n서버나 데이터베이스가 아닌 HTML과 CSS로만 만들어진 페이지라고 생각하면 된다.<br/></p>\n<h3>Gatsby</h3>\n<p><a href="https://www.gatsbyjs.org/">Gatsby</a>는 위에서 말한것 처럼 정적 페이지로 블로그를 만들어준다. jekyll이나 Hexo를 사용하는 것은 취사선택이지만\nGatsby를 선택한 이유는 다음과 같다.</p>\n<blockquote>\n<ul>\n<li>포스트 마크다운으로 작성</li>\n<li>React로 개발 되어짐(<a href="https://reactjs.org/">React홈페이지</a>도 gatsby로 개발되어졌다)<br/></li>\n<li>GraphQL조합<br/></li>\n<li>Webpack과 기타 Nodejs 진영 모듈을 사용하는 플러그인 제공<br/></li>\n</ul>\n</blockquote>\n<p>요즘 프론트엔드 개발자라면 React나 Vue정도는 다들 잘 다룬다지만, 내 입장에서는 아직 실제 프로젝트를 진행해본적이 없기에\nreact를 익히기 좋은 환경이 될거라 생각한다.</p>\n<p>아래는 Gatsby가 정적페이지를 생성해 주는 과정을 보여준다.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/gatsby-diagram-9f0b5cd877a457a4f504f10960b9d38d-9031a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 54.26008968609865%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABFklEQVQoz4VSu04EMQzc//8Q/oCKnpqShgpRcHC3j7wT27lJsoTcLRKWFUX2TGyPM7EwMZxISLJIzu0sceF6757pJ5irTZFJR6eiVcGyILMnEtMWTMfhLZwmOoBxkQqbYiBvo1l99AmRTr6zFscLKJ1rd4UcPDkT1ey8TcxyT65jdHKKZHX4rXzzPOZmRhcNcaxMiZ0ZyMBtF3v51DgJ1CxPDy/Pj6/Ird9m+TLzSZvNEwuYanGIBJdaPxMIGBvNpwDJJRF/vJ1P7ytyUCHAXSopKWS9OAwI0Xa121RNf8yM2uvZAPFn21Bnmx0Wu1dG2zEkoCHGuKoDuawKjRgVCqjNLKPlf1Y1LKGRxz8kcvulDi4dU+wKAKiI78lyMS8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="unsplash.com"\n        title=""\n        src="/static/gatsby-diagram-9f0b5cd877a457a4f504f10960b9d38d-48538.png"\n        srcset="/static/gatsby-diagram-9f0b5cd877a457a4f504f10960b9d38d-bed0f.png 200w,\n/static/gatsby-diagram-9f0b5cd877a457a4f504f10960b9d38d-5fd34.png 400w,\n/static/gatsby-diagram-9f0b5cd877a457a4f504f10960b9d38d-48538.png 800w,\n/static/gatsby-diagram-9f0b5cd877a457a4f504f10960b9d38d-9031a.png 892w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n이 블로그는 <a href="https://pages.github.com/">Github Pages</a>에 git repositiry를 구성해서 Gatsby를 통해 deploy한다.</p>\n<blockquote>\n<p>Github에 Gatsby repository 관리 -> Github pages repository에 Deploy -> Github pages repository Push하여 적용</p>\n</blockquote>\n<p>배포 과정이 귀찮긴 하지만, 개인적으로 이 정도는 감수할 만하다고 생각한다.</p>\n<p>기본 Starter 혹은 다른 개발자가 만들어둔 boiler Starter로 간단하게 시작할 수있다.\n이 블로그는 <a href="https://github.com/greglobinski/gatsby-starter-personal-blog">이 스타터</a>로 시작했다.</p>\n<p><a href="https://www.gatsbyjs.org/tutorial/">공식 튜토리얼</a>을 통해 시작하는 방법을 참고 하길 바란다.</p>\n<p>이 블로그도 시간나는데로 수정 개발할 생각이다. 우선 구조를 파악하고 Facebook 댓글을 없에고 disqus로 변경하는 정도의 작업만 해놓은 상태이다.</p>\n<p>아직 변변치 않은 블로그이지만 어떻게 세팅했는지 기록 해둘겸, 포스트를 작성해 나갈 예정이다.\n<br/>\n<br/></p>\n<p>Gatsby develop</p>\n<p>Gatsby build</p>\n<p>npm run deploy</p>\n<p>cp -Rf  public/* ../drugsism.github.io\n<br/>\n<br/></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/gatsby_name-6cc2c4dfe3e2a57f57d0dede087206a3-817f2.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 437px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 26.31578947368421%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAAsSAAALEgHS3X78AAABJUlEQVQY02N4/+rrmgknZlXsXth04O7FF//////39x+Q/P37918w+AcGIPF//379+gUUBzIgUgxAnVPyt5d7LWmNXVcbtOLVk49AdceOHSsuLl6/fj1Ez/v3769duwZkb9q0afv27UAGUCeQZOhM3LCgfn+k0gSg/qbI1ad33gGK5ubk3r9/f/bs2dOmTevp6ampqUlLS5s5c2Z3d3dBQUFfX9+KFSuWL1/OMLN895EN1+fW7OtK3ri888jNs0+BmtvbOzo7O+Pj4xMTE6uqqrKysmbNmgV0S3BwMJBsa2tLSEhobW1luHn22ZK2Q4taDs6p3rtl9tn/YPD9+/etW7c+evToy5cvhw4devr06evXr69fvw4UOXr06IsXL9rb2x8/fgwAufDbW4d62FIAAAAASUVORK5CYII='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"unsplash.com",title:"",src:"/static/gatsby_name-6cc2c4dfe3e2a57f57d0dede087206a3-817f2.png",srcSet:["/static/gatsby_name-6cc2c4dfe3e2a57f57d0dede087206a3-130d2.png 200w","/static/gatsby_name-6cc2c4dfe3e2a57f57d0dede087206a3-8761e.png 400w","/static/gatsby_name-6cc2c4dfe3e2a57f57d0dede087206a3-817f2.png 437w"],sizes:["(max-width:","437px)","100vw,","437px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    \n"},{type:"element",tagName:"br",properties:{},children:[]},{type:"element",tagName:"br",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Gatsby는 ‘정적 페이지생성 프레임워크’다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"정적 페이지 생성 프레임워크"}]},{type:"text",value:"라는 말부터 어렵게 들릴지 모르나, 별 복잡할건 없다."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n서버나 데이터베이스가 아닌 HTML과 CSS로만 만들어진 페이지라고 생각하면 된다."},{type:"element",tagName:"br",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Gatsby"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/"},children:[{type:"text",value:"Gatsby"}]},{type:"text",value:"는 위에서 말한것 처럼 정적 페이지로 블로그를 만들어준다. jekyll이나 Hexo를 사용하는 것은 취사선택이지만\nGatsby를 선택한 이유는 다음과 같다."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"포스트 마크다운으로 작성"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"React로 개발 되어짐("},{type:"element",tagName:"a",properties:{href:"https://reactjs.org/"},children:[{type:"text",value:"React홈페이지"}]},{type:"text",value:"도 gatsby로 개발되어졌다)"},{type:"element",tagName:"br",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"GraphQL조합"},{type:"element",tagName:"br",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Webpack과 기타 Nodejs 진영 모듈을 사용하는 플러그인 제공"},{type:"element",tagName:"br",properties:{},children:[]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"요즘 프론트엔드 개발자라면 React나 Vue정도는 다들 잘 다룬다지만, 내 입장에서는 아직 실제 프로젝트를 진행해본적이 없기에\nreact를 익히기 좋은 환경이 될거라 생각한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"아래는 Gatsby가 정적페이지를 생성해 주는 과정을 보여준다.\n\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/gatsby-diagram-9f0b5cd877a457a4f504f10960b9d38d-9031a.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 54.26008968609865%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABFklEQVQoz4VSu04EMQzc//8Q/oCKnpqShgpRcHC3j7wT27lJsoTcLRKWFUX2TGyPM7EwMZxISLJIzu0sceF6757pJ5irTZFJR6eiVcGyILMnEtMWTMfhLZwmOoBxkQqbYiBvo1l99AmRTr6zFscLKJ1rd4UcPDkT1ey8TcxyT65jdHKKZHX4rXzzPOZmRhcNcaxMiZ0ZyMBtF3v51DgJ1CxPDy/Pj6/Ird9m+TLzSZvNEwuYanGIBJdaPxMIGBvNpwDJJRF/vJ1P7ytyUCHAXSopKWS9OAwI0Xa121RNf8yM2uvZAPFn21Bnmx0Wu1dG2zEkoCHGuKoDuawKjRgVCqjNLKPlf1Y1LKGRxz8kcvulDi4dU+wKAKiI78lyMS8AAAAASUVORK5CYII='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"unsplash.com",title:"",src:"/static/gatsby-diagram-9f0b5cd877a457a4f504f10960b9d38d-48538.png",srcSet:["/static/gatsby-diagram-9f0b5cd877a457a4f504f10960b9d38d-bed0f.png 200w","/static/gatsby-diagram-9f0b5cd877a457a4f504f10960b9d38d-5fd34.png 400w","/static/gatsby-diagram-9f0b5cd877a457a4f504f10960b9d38d-48538.png 800w","/static/gatsby-diagram-9f0b5cd877a457a4f504f10960b9d38d-9031a.png 892w"],sizes:["(max-width:","800px)","100vw,","800px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    \n이 블로그는 "},{type:"element",tagName:"a",properties:{href:"https://pages.github.com/"},children:[{type:"text",value:"Github Pages"}]},{type:"text",value:"에 git repositiry를 구성해서 Gatsby를 통해 deploy한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Github에 Gatsby repository 관리 -> Github pages repository에 Deploy -> Github pages repository Push하여 적용"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"배포 과정이 귀찮긴 하지만, 개인적으로 이 정도는 감수할 만하다고 생각한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"기본 Starter 혹은 다른 개발자가 만들어둔 boiler Starter로 간단하게 시작할 수있다.\n이 블로그는 "},{type:"element",tagName:"a",properties:{href:"https://github.com/greglobinski/gatsby-starter-personal-blog"},children:[{type:"text",value:"이 스타터"}]},{type:"text",value:"로 시작했다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.gatsbyjs.org/tutorial/"},children:[{type:"text",value:"공식 튜토리얼"}]},{type:"text",value:"을 통해 시작하는 방법을 참고 하길 바란다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이 블로그도 시간나는데로 수정 개발할 생각이다. 우선 구조를 파악하고 Facebook 댓글을 없에고 disqus로 변경하는 정도의 작업만 해놓은 상태이다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"아직 변변치 않은 블로그이지만 어떻게 세팅했는지 기록 해둘겸, 포스트를 작성해 나갈 예정이다.\n"},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"br",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Gatsby develop"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Gatsby build"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"npm run deploy"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"cp -Rf  public/* ../drugsism.github.io\n"},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"br",properties:{},children:[]}]}],data:{quirksMode:!1}},fields:{slug:"/Gatsby로-블로그-만들기/",prefix:"2019-01-29"},frontmatter:{title:"Gatcby로 블로그 만들기 1",subTitle:"Gatsby를 알아보자",cover:{childImageSharp:{resize:{src:"/static/gatsby-0f713e181860072e019f252394045e47-160fa.png"}}}}},author:{id:"/Users/drugsism/Documents/Persnal/sopesnote/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Sope</strong> Javascript Stack개발에 관심있는 웹 개발자입니다. 서비스 설계를 주로 하고, 모바일 생태계에도 관심이 많습니다.\n잘 치지 못하지만 기타연주를 취미로 가지고 있고, 가끔 초상화를 그리기도 합니다.</p>"},footnote:{id:"/Users/drugsism/Documents/Persnal/sopesnote/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>\n<p>All constent copyright 2018 powerd by sope All right reserved</p>\n</li>\n<li>\n<p>built with <a href="https://www.gatsbyjs.org">Gatsby</a> &#x26; <a href="https://reactjs.org/">React</a></p>\n</li>\n<li>\n<p>delivered by <a href="https://pages.github.com/">Github pages</a></p>\n</li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"..."}}}},pathContext:{slug:"/Gatsby로-블로그-만들기/"}}}});
//# sourceMappingURL=path---gatsby로-블로그-만들기-604abb8f8ad07e213b28.js.map