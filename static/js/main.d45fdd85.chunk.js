(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(7),c=t.n(i),s=(t(13),t(2)),p=t(3),o=t(5),d=t(4),b=(t(14),t(15),t(0)),l=function(e){Object(o.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){var e,n="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return Object(b.jsxs)("div",{className:"pokecard",children:[Object(b.jsx)("h1",{className:"pokedex-title",children:this.props.name}),Object(b.jsx)("div",{className:"pokecard-image",children:Object(b.jsx)("img",{src:n,alt:this.props.name})}),Object(b.jsxs)("div",{className:"pokecard-data",children:[" Type:",this.props.type," "]}),Object(b.jsxs)("div",{className:"pokecard-data",children:["Exp: ",this.props.base_experiece]})]})}}]),t}(a.Component),m=function(e){Object(o.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){var e;return e=this.props.isWinner?Object(b.jsx)("h1",{className:"pokedex-winner",children:"Winner"}):Object(b.jsx)("h1",{className:"pokedex-loser",children:"Loser"}),Object(b.jsxs)("div",{className:"pokedex",children:[Object(b.jsx)("h1",{children:"Pokedex"}),Object(b.jsxs)("p",{children:["Total Experience: ",this.props.exp]}),e,Object(b.jsx)("div",{className:"pokedex-cards",children:this.props.pokemon.map((function(e){return Object(b.jsx)(l,{id:e.id,name:e.name,type:e.type,base_experience:e.base_experience})}))})]})}}]),t}(a.Component);m.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var x=m,j=t(8),u=function(e){Object(o.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){for(var e=[],n=Object(j.a)(this.props.pokemon);e.length<n.length;){var t=Math.floor(Math.random()*n.length),a=n.splice(t,1)[0];e.push(a)}var r=e.reduce((function(e,n){return e+n.base_experience}),0),i=n.reduce((function(e,n){return e+n.base_experience}),0);return Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{pokemon:e,isWinner:r>i,exp:r}),Object(b.jsx)(x,{pokemon:n,isWinner:i>r,exp:i})]})}}]),t}(a.Component);u.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var h=u;t(17);var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(h,{})})};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.d45fdd85.chunk.js.map