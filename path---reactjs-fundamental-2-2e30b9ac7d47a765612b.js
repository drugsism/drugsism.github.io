webpackJsonp([0xf9f89e8436e],{775:function(e,t){e.exports={data:{post:{id:"/Users/drugsism/Documents/Persnal/sopesnote/content/posts/2019-02-14--Reactjs-Fundamental-2/index.md absPath of file >>> MarkdownRemark",html:'<p><br /><br /></p>\n<p align="center">\n<img src="https://www.import.io/wp-content/uploads/2017/10/React-logo-300x140.png">\n</p>\n<p><br /><br /></p>\n<p><code class="language-text">&#39;Programming JavaScript Applications&#39;</code>의 저자  Eric Elliott은 왜 이렇게 React가 관심을 받고있는가에 대해 <a href="https://medium.com/javascript-scene/top-javascript-libraries-tech-to-learn-in-2018-c38028e028e6">다음</a>과 같이 얘기하고 있다.</p>\n<blockquote>\n<p>React 직업 목록을 살펴보면서 나는 흥미로운 트렌드를 발견했다. 많은 직업들이 우리가 프론트엔드 웹 개발과 관련없다고 생각했던 것이었다.</p>\n<ul>\n<li>React Native(Vue.js와 관련된 직업의 수보다 React Native와 관련된 직업이 더 많을 것이다)</li>\n<li>React for IOT</li>\n<li>React for AR/VR (Oculus Rift가 채용을 주도하고 있다)</li>\n<li>들어본 적이 없는 모호한 컴퓨팅 작업을 위한 React</li>\n</ul>\n<p>React는 웹이라는 기본 틀에서 벗어났다.</p>\n<p>다양한 쓰임새는 React의 큰 강점 중의 하나다. 다른 많은 프레임워크와는 달리 React에 투자하는 것은 단순히 데이터 모델이나,\n브라우저나 DOM에 한정되지 않는다. </p>\n<p>사실 나는 자바스크립트를 언급조차 하지 않는 꽤 많은 수의 직업을 찾아냈다.</p>\n<p>또 React는 사실상의 표준이 되어 다양하고 풍부한 개발 생태계를 제공한다.\n이는 jQuery 플러그인이 웹을 지배한 이후로 없었던 일이다.</p>\n<p>문제는 더 이상 “어떤 프레임워크를 쓸 것인가?”가 아니라 “어떤 기술이 React와 가장 잘 맞는가”이다.</p>\n<p>어떤 프레임워크도 2018년에는 React의 위치를 넘어설 수 없을 것으로 보인다 (아마도 2019년에도).\n당신은 안전하다. 자바스크립트 피로감은 이제 진정될 것처럼 보인다.\n우리는 앱 개발에 필요한 멋진 프레임워크를 가지고 있으며 React를 중심으로 훌륭한 개발 생태계가 자리잡고 있다.</p>\n</blockquote>\n<p>웹 개발의 동향을 살펴보면, 최근 몇년간 SPA(단일 페이지 애플리케이션: <a href="https://en.wikipedia.org/wiki/Single-page_application">Single Page Application</a>)이 각광받고 있으며 이로인한 Agular, Backbone, Ember등 javascript프레임 워크가 많은 인기를 누리고 있다.</p>\n<p>리액트는 페이스북이 만든 라이브러리로 2013년 공개되었다. 리액트는 SPA 프레임워크가 아닌, 뷰 라이브러리(View Library)이다. </p>\n<p>그렇다면 왜 인기가 많은 프레임워크를 사용하지 않고 리액트를 선택하고 있을까?</p>\n<p>많은 문서를 분석해본 결과 다음과 같은 결론을 낼 수 있었다.</p>\n<ol>\n<li>프레임워크를 사용할 경우 자유롭게 다른 라이브러리와 기술을 도입하는데 제한적이다.</li>\n<li>좀 더 효율적인 프론트 개발을 원한다.</li>\n<li>기술 도입 시 러닝커브</li>\n<li>충분한 레퍼런스</li>\n</ol>\n<p>앞서 말한것 처럼, React는 MVC 패턴의 개발패턴 에서 view에 해당하는 <code class="language-text">라이브러리</code> 이다.</p>\n<p>React는 view를 컴포넌트 단위로 개발하며 각각의 컴포넌트는 계층구조로 연결되어 있다.\n블럭을 조립하는것 처럼 각 컴포넌트를 결합하여 사용하고 이 컴포넌트는 그대로 다른곳에 재사용될 수있다.</p>\n<br>\n<p align="center">\n<img src="https://cdn-images-1.medium.com/max/800/1*IWIeZaJGBd82ZnIk4vYtnw.png" width="600" height="250">\n</p>\n<p align="center">view.js&#xC6D4;&#xBCC4; &#xB2E4;&#xC6B4;&#xB85C;&#xB4DC; &#xC218;</p>\n<p><br /><br /></p>\n<p align="center">\n<img src="https://cdn-images-1.medium.com/max/800/1*AOyTSi4Fs5uKNHZoyFcfHQ.png" width="600" height="250">\n</p>\n<p align="center">Angular.js&#xC6D4;&#xBCC4; &#xB2E4;&#xC6B4;&#xB85C;&#xB4DC; &#xC218;</p>\n<br><br>\n<p align="center">\n<img src="https://cdn-images-1.medium.com/max/800/1*XKJokKyWBzwqNgG2Nzckiw.png" width="600" height="250">\n</p>\n<p align="center">react.js&#xC6D4;&#xBCC4; &#xB2E4;&#xC6B4;&#xB85C;&#xB4DC; &#xC218;</p>\n<br><br>\n<blockquote>\n<p>Vue.js의 성장 속도는 React보다 빠르다. 왜 2017년의 React vs Angular의 구도와는 다른 것일까?\n2016년 말, 자바스크립트 세계는 새로운 프레임워크를 받아들일 준비가 되어 있었다. Angular 유저는 무척 불만족스러운 상황이었고,\nReact의 유저들은 무척 만족스러운 상태였다. 많은 사람들이 React를 공부하려고 했고 소수의 사람들만이 Angular를 배우길 원했다.\n2017년 말 시점에 Angular 2+에 대한 만족도는 여전히 절반 이하인 49%다.</p>\n</blockquote>\n<p>우선 Angular는 버전을 업데이트 해가며 개발하는 개발자들이 대형 프로젝트를 개발하는데 이렇게 느낀 한계(프레임워크에 묶여있는 개발의 한계)\n가 view에 집중해서 개발하는 라이브러리로 해소 되어가는 느낌이다.</p>\n<p>React와 마찬가지로 vue 또한 <code class="language-text">Virtual DOM</code> 이를 채택하고 있다.</p>\n<p>같은 알고리즘을 채택하고 있지 않지만, 속도는 React보다 빠르고 CDN방식으로 다른 설치를 할 필요가 없다. </p>\n<p>하지만 템플릿과 같은 형식의 러닝커브(DSL, Domain-Specific Language)가 존재하며, 릴리즈가 상대적으로 느리다.</p>\n<p>자세한 내용은 <a href="http://ahnheejong.name/articles/why-i-prefer-react-over-vuejs/">React를 Vue.js보다 선호하는 이유</a>를 확인.</p>\n<p>React또한 마찬가지의 단점을 가지고있다. </p>\n<p>우선 Nodejs에 익숙해야하며, ECMA2015 문법을 잘 사용할 수있어야한다.(시작하는것은 어렵지 않지만…)\nJSX에 대한 거부감이 들고 적응이 안된다면 vue의 템플릿이 상대적인 단점이 될 수없다. Vue와 React 모두 거의 대부분의 일반적인 애플리케이션에서 속도가 빠른것이 장점이나, 높은 프레임 속도의 데이터 시각화 또는 애니메이션을 프로토 타이핑 할 때 Vue는 개발시 초당 10 프레임을 처리하는 반면 React는 초당 약 1 프레임으로 떨어지는 경우가 있다고 한다.</p>\n<p><br/><br/></p>\n<h3>결론</h3>\n<p>최고의 기술을 도입하는것이 목적이어서는 안된다. 모두 장점, 단점을 가지고 있기 때문이다.\n사실 프레임워크나 라이브러리들은 필요에 따라, 팀의 개발 효율성을 고려한 선택에 따라 사용하는 대상이지, 특정한 대세에 따라 도입되어야 할 부분은 아니다. </p>\n<p>반대로 어떠한 필요로 인해서, 구축해야 하는 서비스에 따라서, GitHub, Stack over flow등 레퍼런스가 충분하다면 고려 해볼 수있을 것이다.</p>\n<p>이러한 이유에서 Facebook을 비롯하여 Airbnb, Netflix, Dropbox, Twitter, Evernote, Uber 등 선도적인 서비스들이 React를 사용하고있다. 그들 모두가 리액트와 그 생태계에 만족하며 리액트의 발전을 위해 적극적으로 투자하고 기술을 발전 시켜나가고 있다.</p>\n<br/>\n<h3>사족</h3>\n<p><a href="https://youtu.be/u5QpfAUUxGc">토끼와 거북이: 토끼는 왜 멈춰 섰을까?</a></p>\n<p>‘개발자를 위한 개발을 해야한다.‘는 말을 듣고 혹자는 ‘아니야!! 고객을 위한 개발을 해야한다’고 하더라.</p>\n<p>부정하지 않았다. 하지만 ‘요구사항을 만족시키는것이 고객을 위한것이라면 그건 <strong><code class="language-text">기본</code></strong> 이고 확장, 운영, 유지보수까지 고려해야한다는건 생각을 하지 못하고있다’\n라는 생각이 들더라.</p>\n<p>현재 자바스크립트를 포함한 프로그래밍 언어들은 <strong>개발자를 위한 생산성 향상</strong> 에 촛점을 두고 지속적인 변화 중 이며,\n거기엔 분명히 이유가 있고 그 변화를 받아드릴 준비를 항상 해야할 것이다.</p>\n<p><br/><br/></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"br",properties:{},children:[]},{type:"element",tagName:"br",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{src:"https://www.import.io/wp-content/uploads/2017/10/React-logo-300x140.png"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"br",properties:{},children:[]},{type:"element",tagName:"br",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"'Programming JavaScript Applications'"}]},{type:"text",value:"의 저자  Eric Elliott은 왜 이렇게 React가 관심을 받고있는가에 대해 "},{type:"element",tagName:"a",properties:{href:"https://medium.com/javascript-scene/top-javascript-libraries-tech-to-learn-in-2018-c38028e028e6"},children:[{type:"text",value:"다음"}]},{type:"text",value:"과 같이 얘기하고 있다."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"React 직업 목록을 살펴보면서 나는 흥미로운 트렌드를 발견했다. 많은 직업들이 우리가 프론트엔드 웹 개발과 관련없다고 생각했던 것이었다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"React Native(Vue.js와 관련된 직업의 수보다 React Native와 관련된 직업이 더 많을 것이다)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"React for IOT"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"React for AR/VR (Oculus Rift가 채용을 주도하고 있다)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"들어본 적이 없는 모호한 컴퓨팅 작업을 위한 React"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"React는 웹이라는 기본 틀에서 벗어났다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"다양한 쓰임새는 React의 큰 강점 중의 하나다. 다른 많은 프레임워크와는 달리 React에 투자하는 것은 단순히 데이터 모델이나,\n브라우저나 DOM에 한정되지 않는다. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"사실 나는 자바스크립트를 언급조차 하지 않는 꽤 많은 수의 직업을 찾아냈다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"또 React는 사실상의 표준이 되어 다양하고 풍부한 개발 생태계를 제공한다.\n이는 jQuery 플러그인이 웹을 지배한 이후로 없었던 일이다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"문제는 더 이상 “어떤 프레임워크를 쓸 것인가?”가 아니라 “어떤 기술이 React와 가장 잘 맞는가”이다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"어떤 프레임워크도 2018년에는 React의 위치를 넘어설 수 없을 것으로 보인다 (아마도 2019년에도).\n당신은 안전하다. 자바스크립트 피로감은 이제 진정될 것처럼 보인다.\n우리는 앱 개발에 필요한 멋진 프레임워크를 가지고 있으며 React를 중심으로 훌륭한 개발 생태계가 자리잡고 있다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"웹 개발의 동향을 살펴보면, 최근 몇년간 SPA(단일 페이지 애플리케이션: "},{type:"element",tagName:"a",properties:{href:"https://en.wikipedia.org/wiki/Single-page_application"},children:[{type:"text",value:"Single Page Application"}]},{type:"text",value:")이 각광받고 있으며 이로인한 Agular, Backbone, Ember등 javascript프레임 워크가 많은 인기를 누리고 있다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"리액트는 페이스북이 만든 라이브러리로 2013년 공개되었다. 리액트는 SPA 프레임워크가 아닌, 뷰 라이브러리(View Library)이다. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"그렇다면 왜 인기가 많은 프레임워크를 사용하지 않고 리액트를 선택하고 있을까?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"많은 문서를 분석해본 결과 다음과 같은 결론을 낼 수 있었다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"프레임워크를 사용할 경우 자유롭게 다른 라이브러리와 기술을 도입하는데 제한적이다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"좀 더 효율적인 프론트 개발을 원한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"기술 도입 시 러닝커브"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"충분한 레퍼런스"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"앞서 말한것 처럼, React는 MVC 패턴의 개발패턴 에서 view에 해당하는 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"라이브러리"}]},{type:"text",value:" 이다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"React는 view를 컴포넌트 단위로 개발하며 각각의 컴포넌트는 계층구조로 연결되어 있다.\n블럭을 조립하는것 처럼 각 컴포넌트를 결합하여 사용하고 이 컴포넌트는 그대로 다른곳에 재사용될 수있다."}]},{type:"text",value:"\n"},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{src:"https://cdn-images-1.medium.com/max/800/1*IWIeZaJGBd82ZnIk4vYtnw.png",width:600,height:250},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"view.js월별 다운로드 수"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"br",properties:{},children:[]},{type:"element",tagName:"br",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{src:"https://cdn-images-1.medium.com/max/800/1*AOyTSi4Fs5uKNHZoyFcfHQ.png",width:600,height:250},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"Angular.js월별 다운로드 수"}]},{type:"text",value:"\n"},{type:"element",tagName:"br",properties:{},children:[]},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{src:"https://cdn-images-1.medium.com/max/800/1*XKJokKyWBzwqNgG2Nzckiw.png",width:600,height:250},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"react.js월별 다운로드 수"}]},{type:"text",value:"\n"},{type:"element",tagName:"br",properties:{},children:[]},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Vue.js의 성장 속도는 React보다 빠르다. 왜 2017년의 React vs Angular의 구도와는 다른 것일까?\n2016년 말, 자바스크립트 세계는 새로운 프레임워크를 받아들일 준비가 되어 있었다. Angular 유저는 무척 불만족스러운 상황이었고,\nReact의 유저들은 무척 만족스러운 상태였다. 많은 사람들이 React를 공부하려고 했고 소수의 사람들만이 Angular를 배우길 원했다.\n2017년 말 시점에 Angular 2+에 대한 만족도는 여전히 절반 이하인 49%다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"우선 Angular는 버전을 업데이트 해가며 개발하는 개발자들이 대형 프로젝트를 개발하는데 이렇게 느낀 한계(프레임워크에 묶여있는 개발의 한계)\n가 view에 집중해서 개발하는 라이브러리로 해소 되어가는 느낌이다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"React와 마찬가지로 vue 또한 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Virtual DOM"}]},{type:"text",value:" 이를 채택하고 있다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"같은 알고리즘을 채택하고 있지 않지만, 속도는 React보다 빠르고 CDN방식으로 다른 설치를 할 필요가 없다. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"하지만 템플릿과 같은 형식의 러닝커브(DSL, Domain-Specific Language)가 존재하며, 릴리즈가 상대적으로 느리다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"자세한 내용은 "},{type:"element",tagName:"a",properties:{href:"http://ahnheejong.name/articles/why-i-prefer-react-over-vuejs/"},children:[{type:"text",value:"React를 Vue.js보다 선호하는 이유"}]},{type:"text",value:"를 확인."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"React또한 마찬가지의 단점을 가지고있다. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"우선 Nodejs에 익숙해야하며, ECMA2015 문법을 잘 사용할 수있어야한다.(시작하는것은 어렵지 않지만…)\nJSX에 대한 거부감이 들고 적응이 안된다면 vue의 템플릿이 상대적인 단점이 될 수없다. Vue와 React 모두 거의 대부분의 일반적인 애플리케이션에서 속도가 빠른것이 장점이나, 높은 프레임 속도의 데이터 시각화 또는 애니메이션을 프로토 타이핑 할 때 Vue는 개발시 초당 10 프레임을 처리하는 반면 React는 초당 약 1 프레임으로 떨어지는 경우가 있다고 한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"br",properties:{},children:[]},{type:"element",tagName:"br",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"결론"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"최고의 기술을 도입하는것이 목적이어서는 안된다. 모두 장점, 단점을 가지고 있기 때문이다.\n사실 프레임워크나 라이브러리들은 필요에 따라, 팀의 개발 효율성을 고려한 선택에 따라 사용하는 대상이지, 특정한 대세에 따라 도입되어야 할 부분은 아니다. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"반대로 어떠한 필요로 인해서, 구축해야 하는 서비스에 따라서, GitHub, Stack over flow등 레퍼런스가 충분하다면 고려 해볼 수있을 것이다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이러한 이유에서 Facebook을 비롯하여 Airbnb, Netflix, Dropbox, Twitter, Evernote, Uber 등 선도적인 서비스들이 React를 사용하고있다. 그들 모두가 리액트와 그 생태계에 만족하며 리액트의 발전을 위해 적극적으로 투자하고 기술을 발전 시켜나가고 있다."}]},{type:"text",value:"\n"},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"사족"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://youtu.be/u5QpfAUUxGc"},children:[{type:"text",value:"토끼와 거북이: 토끼는 왜 멈춰 섰을까?"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"‘개발자를 위한 개발을 해야한다.‘는 말을 듣고 혹자는 ‘아니야!! 고객을 위한 개발을 해야한다’고 하더라."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"부정하지 않았다. 하지만 ‘요구사항을 만족시키는것이 고객을 위한것이라면 그건 "},{type:"element",tagName:"strong",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"기본"}]}]},{type:"text",value:" 이고 확장, 운영, 유지보수까지 고려해야한다는건 생각을 하지 못하고있다’\n라는 생각이 들더라."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"현재 자바스크립트를 포함한 프로그래밍 언어들은 "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"개발자를 위한 생산성 향상"}]},{type:"text",value:" 에 촛점을 두고 지속적인 변화 중 이며,\n거기엔 분명히 이유가 있고 그 변화를 받아드릴 준비를 항상 해야할 것이다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"br",properties:{},children:[]},{type:"element",tagName:"br",properties:{},children:[]}]}],data:{quirksMode:!1}},fields:{slug:"/Reactjs-Fundamental-2/",prefix:"2019-02-14"},frontmatter:{title:"Reactjs Fundamental 2",subTitle:"2. 왜 React인가?",cover:{childImageSharp:{resize:{src:"/static/1200px-React-icon.svg-580ffd26ccaa16481ed87c1829c74943-160fa.png"}}}}},author:{id:"/Users/drugsism/Documents/Persnal/sopesnote/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Sope</strong> Javascript Stack개발에 관심있는 웹 개발자입니다. 서비스 설계를 주로 하고, 모바일 생태계에도 관심이 많습니다.\n잘 치지 못하지만 기타연주를 취미로 가지고 있고, 가끔 초상화를 그리기도 합니다.</p>"},footnote:{id:"/Users/drugsism/Documents/Persnal/sopesnote/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>\n<p>All constent copyright 2018 powerd by sope All right reserved</p>\n</li>\n<li>\n<p>built with <a href="https://www.gatsbyjs.org">Gatsby</a> &#x26; <a href="https://reactjs.org/">React</a></p>\n</li>\n<li>\n<p>delivered by <a href="https://pages.github.com/">Github pages</a></p>\n</li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"..."}}}},pathContext:{slug:"/Reactjs-Fundamental-2/"}}}});
//# sourceMappingURL=path---reactjs-fundamental-2-2e30b9ac7d47a765612b.js.map