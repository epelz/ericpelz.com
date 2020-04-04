(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});var n=a(7),A=a.n(n),r=a(0),i=a.n(r),o=a(153),c=a(160),l=a(157),s=a(158),d=a(154),u=a(168),p=a(178),m=(a(151),function(e){function t(){return e.apply(this,arguments)||this}A()(t,e);var a=t.prototype;return a.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return i.a.createElement(l.a,{location:this.props.location,title:t},i.a.createElement(s.a,{keywords:["blog","javascript","typescript","react","simplicity","engineering","coding","product"]}),i.a.createElement(c.a,null),i.a.createElement("h1",{className:"BlogIndex-iconRow",style:{marginBottom:"0",marginTop:Object(d.a)(.5)}},this._renderIcon(i.a.createElement(p.a,null),"https://www.github.com/epelz/"),this._renderIcon(i.a.createElement(p.b,null),"https://www.linkedin.com/in/epelz/"),this._renderIcon(i.a.createElement(p.c,null),"https://twitter.com/PelzEric")),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},i.a.createElement(o.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),i.a.createElement("small",null,Object(u.a)(t)),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},a._renderIcon=function(e,t){return i.a.createElement("a",{className:"BlogIndex-socialIcon",style:{paddingRight:Object(d.a)(.25)},href:t},e)},t}(i.a.Component));t.default=m;var g="698885152"},153:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),A=a.n(n),r=a(4),i=a.n(r),o=a(32),c=a.n(o);a.d(t,"a",function(){return c.a});a(155);var l=A.a.createContext({}),s=function(e){return A.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var n=a(165),A=a.n(n),r=a(166),i=a.n(r);i.a.overrideThemeStyles=function(){return{h2:{borderBottom:"none"}}},delete i.a.googleFonts;var o=new A.a(i.a);var c=o.rhythm,l=o.scale},155:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},156:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),A=a.n(n),r=a(4),i=a.n(r),o=a(54),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return A.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},157:function(e,t,a){"use strict";a(33);var n=a(7),A=a.n(n),r=a(0),i=a.n(r),o=a(153),c=a(154),l=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,A=t.children;return e="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},i.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):i.a.createElement("h2",{style:Object.assign({},Object(c.b)(1.2),{marginTop:0,color:"#696969"})},i.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},i.a.createElement("header",null,e),i.a.createElement("main",null,A))},t}(i.a.Component);t.a=l},158:function(e,t,a){"use strict";var n=a(159),A=a(0),r=a.n(A),i=a(4),o=a.n(i),c=a(167),l=a.n(c);function s(e){var t=e.description,a=e.lang,A=e.meta,i=e.keywords,o=e.title,c=n.data.site,s=t||c.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,defaultTitle:c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(A)})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string},t.a=s},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Eric Pelz",description:"Eric Pelz is a software engineer",author:"Eric Pelz"}}}}},160:function(e,t,a){"use strict";a(161);var n=a(163),A=a(0),r=a.n(A),i=a(153),o=a(164),c=a.n(o),l=a(154);var s="4120859956";t.a=function(){return r.a.createElement(i.b,{query:s,render:function(e){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",null,"I'm a software engineer at"," ",r.a.createElement("a",{href:"https://www.asana.com/"},"Asana"),". I manage a few engineers and am the program & tech lead on a product team. I spend a lot of time thinking about running effective teams, fostering growth, product+engineering collaboration, and engineering design patterns."))},data:n})}},163:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwX/xAAXAQEAAwAAAAAAAAAAAAAAAAADAAEC/9oADAMBAAIQAxAAAAGjjZOSbVqnj4HOwHr/xAAbEAEBAQACAwAAAAAAAAAAAAABAgADERITIv/aAAgBAQABBQKnoPZLuQ+ZBrx1rppwqf/EABcRAAMBAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8Bd0//xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oACAECAQE/AclyCQv/xAAaEAEAAgMBAAAAAAAAAAAAAAABADEQESEy/9oACAEBAAY/Aq7NqJPOA5KzbP/EABsQAQEAAwEBAQAAAAAAAAAAAAEAESFBMWGh/9oACAEBAAE/IUoXwJyp1E5uNbvcRspjO/JSc7qOP7X/2gAMAwEAAgADAAAAEA/Xf//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxBWysLL/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQETH/2gAIAQIBAT8QDGgE1cn/xAAeEAEBAQEAAAcAAAAAAAAAAAABEQAhMVFxkaHB0f/aAAgBAQABPxCjSrhfCutkU4gx5zOT5zIKDp746FHI+XfrV/WsqYpgLkAInXIQvTP/2Q==",width:50,height:50,src:"/static/4374dba29272687f08ad00b7ab820636/7e494/ericpelz.jpg",srcSet:"/static/4374dba29272687f08ad00b7ab820636/7e494/ericpelz.jpg 1x,\n/static/4374dba29272687f08ad00b7ab820636/36cc2/ericpelz.jpg 1.5x,\n/static/4374dba29272687f08ad00b7ab820636/0a3a6/ericpelz.jpg 2x,\n/static/4374dba29272687f08ad00b7ab820636/75d16/ericpelz.jpg 3x"}}}}}},168:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(0),A=a.n(n);function r(e){return A.a.createElement(A.a.Fragment,null,e.frontmatter.date," ▪ ",e.fields.readingTime.text)}}}]);
//# sourceMappingURL=component---src-pages-index-js-7823fe7b2e7b50061f1c.js.map