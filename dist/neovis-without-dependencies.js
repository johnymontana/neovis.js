!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@babel/runtime-corejs3/helpers/defineProperty"),require("neo4j-driver"),require("@babel/runtime-corejs3/core-js/get-iterator"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js-stable/object/keys"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/core-js-stable/object/values"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("vis-network/dist/vis-network.min"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/object/define-property"),require("@babel/runtime-corejs3/core-js-stable/object/define-properties"),require("@babel/runtime-corejs3/core-js-stable/instance/filter"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/core-js-stable/array/is-array"),require("@babel/runtime-corejs3/helpers/typeof"),require("@babel/runtime-corejs3/core-js-stable/instance/splice"),require("@babel/runtime-corejs3/core-js-stable/instance/index-of"),require("@babel/runtime-corejs3/core-js-stable/symbol"),require("vis-network/dist/vis-network.min.css")):"function"==typeof define&&define.amd?define(["@babel/runtime-corejs3/helpers/defineProperty","neo4j-driver","@babel/runtime-corejs3/core-js/get-iterator","@babel/runtime-corejs3/regenerator","@babel/runtime-corejs3/core-js-stable/object/keys","@babel/runtime-corejs3/helpers/classCallCheck","@babel/runtime-corejs3/helpers/createClass","@babel/runtime-corejs3/core-js-stable/object/values","@babel/runtime-corejs3/core-js-stable/instance/for-each","@babel/runtime-corejs3/helpers/asyncToGenerator","vis-network/dist/vis-network.min","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor","@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols","@babel/runtime-corejs3/core-js-stable/promise","@babel/runtime-corejs3/core-js-stable/object/define-property","@babel/runtime-corejs3/core-js-stable/object/define-properties","@babel/runtime-corejs3/core-js-stable/instance/filter","@babel/runtime-corejs3/core-js-stable/set-timeout","@babel/runtime-corejs3/core-js-stable/instance/map","@babel/runtime-corejs3/core-js-stable/instance/concat","@babel/runtime-corejs3/core-js-stable/array/is-array","@babel/runtime-corejs3/helpers/typeof","@babel/runtime-corejs3/core-js-stable/instance/splice","@babel/runtime-corejs3/core-js-stable/instance/index-of","@babel/runtime-corejs3/core-js-stable/symbol","vis-network/dist/vis-network.min.css"],r):"object"==typeof exports?exports.NeoVis=r(require("@babel/runtime-corejs3/helpers/defineProperty"),require("neo4j-driver"),require("@babel/runtime-corejs3/core-js/get-iterator"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js-stable/object/keys"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/core-js-stable/object/values"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("vis-network/dist/vis-network.min"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/object/define-property"),require("@babel/runtime-corejs3/core-js-stable/object/define-properties"),require("@babel/runtime-corejs3/core-js-stable/instance/filter"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/core-js-stable/array/is-array"),require("@babel/runtime-corejs3/helpers/typeof"),require("@babel/runtime-corejs3/core-js-stable/instance/splice"),require("@babel/runtime-corejs3/core-js-stable/instance/index-of"),require("@babel/runtime-corejs3/core-js-stable/symbol"),require("vis-network/dist/vis-network.min.css")):e.NeoVis=r(e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0])}(window,(function(e,r,t,n,o,s,i,a,c,l,u,d,b,p,f,h,j,v,m,_,g,y,x,k,w,q,N){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=27)}([function(r,t){r.exports=e},function(e,t){e.exports=r},function(e,r){e.exports=t},function(e,r){e.exports=n},function(e,r){e.exports=o},function(e,r){e.exports=s},function(e,r){e.exports=i},function(e,r){e.exports=a},function(e,r){e.exports=c},function(e,r){e.exports=l},function(e,r){e.exports=u},function(e,r){e.exports=d},function(e,r){e.exports=b},function(e,r){e.exports=p},function(e,r){e.exports=f},function(e,r){e.exports=h},function(e,r){e.exports=j},function(e,r){e.exports=v},function(e,r){e.exports=m},function(e,r){e.exports=_},function(e,r){e.exports=g},function(e,r){e.exports=y},function(e,r){e.exports=x},function(e,r){e.exports=k},function(e,r){e.exports=w},function(e,r){e.exports=q},function(e,r){e.exports=N},function(e,r,t){"use strict";t.r(r);var n=t(15),o=t.n(n),s=t(16),i=t.n(s),a=t(11),c=t.n(a),l=t(12),u=t.n(l),d=t(17),b=t.n(d),p=t(13),f=t.n(p),h=t(18),j=t.n(h),v=t(14),m=t.n(v),_=t(7),g=t.n(_),y=t(19),x=t.n(y),k=t(20),w=t.n(k),q=t(21),N=t.n(q),E=t(3),O=t.n(E),C=t(22),I=t.n(C),L=t(8),T=t.n(L),S=t(2),A=t.n(S),P=t(9),V=t.n(P),D=t(23),M=t.n(D),R=t(24),U=t.n(R),H=t(4),W=t.n(H),z=t(5),F=t.n(z),G=t(6),$=t.n(G),B=t(0),Y=t.n(B),Q=t(25),J=t.n(Q),K=t(1),X=t.n(K),Z=t(10),ee=(t(26),{neo4j:{initialQuery:"MATCH (n) WHERE exists(n.pagerank)\n                        WITH (n), RAND() AS random\n                        ORDER BY random LIMIT 3000\n                        OPTIONAL MATCH (n)-[r]-(m)\n                        //WITH n,r,m WHERE exists(n.pagerank) AND exists(m.pagerank) AND exists(m.community)\n                        RETURN n, r, m;",neo4jUri:"bolt://localhost:7687",neo4jUser:"neo4j",neo4jPassword:"neo4j",encrypted:"ENCRYPTION_OFF",trust:"TRUST_ALL_CERTIFICATES"},data:{initial_nodes:[],node_expansion_query:"match p = (node) -[] -> () where ID(node) = $nodeid return p limit $limit",default_neighbour_limit:25,nodeid_parameter:"$nodeid",limit_parameter:"$limit"},visjs:{interaction:{hover:!0,hoverConnectedEdges:!0,selectConnectedEdges:!1,multiselect:"alwaysOn",zoomView:!1,experimental:{}},physics:{barnesHut:{damping:.1}},nodes:{mass:4,shape:"neo",labelHighlightBold:!1,widthConstraint:{maximum:40},heightConstraint:{maximum:40}},edges:{hoverWidth:0,selectionWidth:0,smooth:{type:"continuous",roundness:.15},font:{size:9,strokeWidth:0,align:"top"},color:{inherit:!1},arrows:{to:{enabled:!0,type:"arrow",scaleFactor:.5}}}}}),re=function(){function e(){var r;F()(this,e),this._handlers=(r={},Y()(r,"completed",[]),Y()(r,"error",[]),Y()(r,"clickNode",[]),Y()(r,"clickEdge",[]),Y()(r,"doubleClickNode",[]),Y()(r,"doubleClickEdge",[]),r)}return $()(e,[{key:"register",value:function(e,r){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);this._handlers[e].push(r)}},{key:"generateEvent",value:function(e,r){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);var t=!0,n=!1,o=void 0;try{for(var s,i=A()(this._handlers[e]);!(t=(s=i.next()).done);t=!0){(0,s.value)(r)}}catch(e){n=!0,o=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}}}]),e}();function te(e,r){var t=W()(e);if(f.a){var n=f()(e);r&&(n=b()(n).call(n,(function(r){return u()(e,r).enumerable}))),t.push.apply(t,n)}return t}function ne(e){for(var r=1;r<arguments.length;r++){var t,n=null!=arguments[r]?arguments[r]:{};if(r%2)T()(t=te(Object(n),!0)).call(t,(function(r){Y()(e,r,n[r])}));else if(c.a)i()(e,c()(n));else{var s;T()(s=te(Object(n))).call(s,(function(r){o()(e,r,u()(n,r))}))}}return e}t.d(r,"NEOVIS_DEFAULT_CONFIG",(function(){return oe})),t.d(r,"default",(function(){return se}));var oe=J()(),se=function(){function e(r){F()(this,e),Y()(this,"_nodes",{}),Y()(this,"_edges",{}),Y()(this,"_data",{}),Y()(this,"_network",null),Y()(this,"_events",new re),Y()(this,"_expanded_nodes",[]),Y()(this,"_self",{}),this._init(r),this._consoleLog(r),this._consoleLog(ee)}var r;return $()(e,[{key:"_consoleLog",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log";("log"!==r||this._config.console_debug)&&console[r](e)}},{key:"_init",value:function(e){if(e.labels&&e.labels[oe])for(var r=0,t=W()(e.labels);r<t.length;r++){var n=t[r];e=ne({},e,{labels:ne({},e.labels,Y()({},n,ne({},e.labels[oe],{},e.labels[n])))})}if(e.relationships&&e.relationships[oe])for(var o=0,s=W()(e.relationships);o<s.length;o++){var i=s[o];e=ne({},e,{relationships:ne({},e.relationships,Y()({},i,ne({},e.relationships[oe],{},e.relationships[i])))})}this._config=e,this._encrypted=e.encrypted||ee.neo4j.encrypted,this._trust=e.trust||ee.neo4j.trust,this._driver=X.a.driver(e.server_url||ee.neo4j.neo4jUri,X.a.auth.basic(e.server_user||ee.neo4j.neo4jUser,e.server_password||ee.neo4j.neo4jPassword),{encrypted:this._encrypted,trust:this._trust}),this._container=document.getElementById(e.container_id),this._expanded_nodes=e.initial_nodes||ee.data.initial_nodes,this._query=this._nodelist_to_cypher(this._expanded_nodes)||e.initial_cypher;var a=this;this._events.register("doubleClickNode",(function(e){var r;console.log("Clicked on "+e.nodeId);var t,n=e.nodeId,o=U()(r=a._expanded_nodes).call(r,n);o>=0?M()(t=a._expanded_nodes).call(t,o,1):a._expanded_nodes.push(n);a._query=a._nodelist_to_cypher(a._expanded_nodes),a.render()}))}},{key:"_addNode",value:function(e){this._nodes[e.id]=e}},{key:"_addEdge",value:function(e){this._edges[e.id]=e}},{key:"_nodelist_to_cypher",value:function(e){var r="",t=ee.data;e.length<1&&this._events.generateEvent("error",{error_msg:"Node list does not contain a single node id"});var n=e[0];r+=t.node_expansion_query.replace(t.nodeid_parameter,n).replace(t.limit_parameter,t.default_neighbour_limit);for(var o=1;o<e.length;o++){var s=e[o];r+=" UNION ",r+=t.node_expansion_query.replace(t.nodeid_parameter,s).replace(t.limit_parameter,t.default_neighbour_limit)}return r}},{key:"buildNodeVisObject",value:(r=V()(O.a.mark((function e(r){var t,n,o,s,i,a,c,l,u,d,b,p,f,h,j,v,m,_,g,y,x,k,w,q=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=q.length>1&&void 0!==q[1]?q[1]:null,n={},o=r.labels[0],s=this._config&&this._config.labels&&(this._config.labels[o]||this._config.labels[oe]),i=s&&s.caption,a=s&&s.size,c=s&&s.sizeCypher,l=s&&s.community,u=s&&s.title_properties||W()(r.properties),n.id=r.identity.toInt(),!c){e.next=36;break}return t=t||this._driver.session(),e.next=14,t.run(c,{id:X.a.int(n.id)});case 14:for(d=e.sent,b=!0,p=!1,f=void 0,e.prev=18,h=A()(d.records);!(b=(j=h.next()).done);b=!0)v=j.value,T()(v).call(v,(function(e){"number"==typeof e?n.value=e:X.a.isInt(e)&&(n.value=e.toNumber())}));e.next=26;break;case 22:e.prev=22,e.t0=e.catch(18),p=!0,f=e.t0;case 26:e.prev=26,e.prev=27,b||null==h.return||h.return();case 29:if(e.prev=29,!p){e.next=32;break}throw f;case 32:return e.finish(29);case 33:return e.finish(26);case 34:e.next=37;break;case 36:"number"==typeof a?n.value=a:(m=r.properties[a])&&"number"==typeof m?n.value=m:m&&"object"===I()(m)&&X.a.isInt(m)&&m.inSafeRange()?n.value=m.toNumber():n.value=1;case 37:if(n.label="function"==typeof i?i(r):r.properties[i]||o||"",l)try{r.properties[l]?n.group=r.properties[l].toNumber()||o||0:n.group=0}catch(e){n.group=0}else n.group=o;for(n.title="",_=!0,g=!1,y=void 0,e.prev=43,x=A()(u);!(_=(k=x.next()).done);_=!0)w=k.value,r.properties.hasOwnProperty(w)&&(n.title+=this.propertyToString(w,r.properties[w]));e.next=51;break;case 47:e.prev=47,e.t1=e.catch(43),g=!0,y=e.t1;case 51:e.prev=51,e.prev=52,_||null==x.return||x.return();case 54:if(e.prev=54,!g){e.next=57;break}throw y;case 57:return e.finish(54);case 58:return e.finish(51);case 59:return e.abrupt("return",n);case 60:case"end":return e.stop()}}),e,this,[[18,22,26,34],[27,,29,33],[43,47,51,59],[52,,54,58]])}))),function(e){return r.apply(this,arguments)})},{key:"buildEdgeVisObject",value:function(e){var r=this._config&&this._config.relationships&&(this._config.relationships[e.type]||this._config.relationships[oe]),t=r&&r.thickness,n=r&&r.caption,o={};for(var s in o.id=e.identity.toInt(),o.from=e.start.toInt(),o.to=e.end.toInt(),o.title="",e.properties)e.properties.hasOwnProperty(s)&&(o.title+=this.propertyToString(s,e.properties[s]));return o.value=t&&"string"==typeof t?e.properties[t]:t&&"number"==typeof t?t:1,o.label="boolean"==typeof n?n?e.type:"":n&&"string"==typeof n?e.properties[n]||"":e.type,o}},{key:"propertyToString",value:function(e,r){var t;if(N()(r)&&r.length>1){var n="<strong>".concat(e,":</strong><br /><ul>"),o=!0,s=!1,i=void 0;try{for(var a,c=A()(r);!(o=(a=c.next()).done);o=!0){var l=a.value;n+="<li>".concat(l,"</li>")}}catch(e){s=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(s)throw i}}return n+"</ul>"}return w()(t="<strong>".concat(e,":</strong> ")).call(t,r,"<br>")}},{key:"render",value:function(){var e,r=this,t=0,n=this._driver.session(),o=[];n.run(this._query,{limit:30}).subscribe({onNext:function(e){var s;t++,r._consoleLog("CLASS NAME"),r._consoleLog(e&&e.constructor.name),r._consoleLog(e);var i=x()(s=g()(e.toObject())).call(s,function(){var e=V()(O.a.mark((function e(t){var o,s,i,a,c,l,u,d,b,p,f,h,j,v,m,_,g,y;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r._consoleLog("Constructor:"),r._consoleLog(t&&t.constructor.name),!(t instanceof X.a.types.Node)){e.next=9;break}return e.next=5,r.buildNodeVisObject(t,n);case 5:o=e.sent;try{r._addNode(o)}catch(e){r._consoleLog(e,"error")}e.next=97;break;case 9:if(!(t instanceof X.a.types.Relationship)){e.next=14;break}s=r.buildEdgeVisObject(t),r._addEdge(s),e.next=97;break;case 14:if(!(t instanceof X.a.types.Path)){e.next=62;break}return r._consoleLog("PATH"),r._consoleLog(t),e.next=19,r.buildNodeVisObject(t.start,n);case 19:return i=e.sent,e.next=22,r.buildNodeVisObject(t.end,n);case 22:a=e.sent,r._addNode(i),r._addNode(a),c=!0,l=!1,u=void 0,e.prev=28,d=A()(t.segments);case 30:if(c=(b=d.next()).done){e.next=46;break}return p=b.value,e.t0=r,e.next=35,r.buildNodeVisObject(p.start,n);case 35:return e.t1=e.sent,e.t0._addNode.call(e.t0,e.t1),e.t2=r,e.next=40,r.buildNodeVisObject(p.end,n);case 40:e.t3=e.sent,e.t2._addNode.call(e.t2,e.t3),r._addEdge(r.buildEdgeVisObject(p.relationship));case 43:c=!0,e.next=30;break;case 46:e.next=52;break;case 48:e.prev=48,e.t4=e.catch(28),l=!0,u=e.t4;case 52:e.prev=52,e.prev=53,c||null==d.return||d.return();case 55:if(e.prev=55,!l){e.next=58;break}throw u;case 58:return e.finish(55);case 59:return e.finish(52);case 60:e.next=97;break;case 62:if(!(t instanceof Array)){e.next=97;break}f=!0,h=!1,j=void 0,e.prev=66,v=A()(t);case 68:if(f=(m=v.next()).done){e.next=83;break}if(_=m.value,r._consoleLog("Array element constructor:"),r._consoleLog(_&&_.constructor.name),!(_ instanceof X.a.types.Node)){e.next=79;break}return e.next=75,r.buildNodeVisObject(_,n);case 75:g=e.sent,r._addNode(g),e.next=80;break;case 79:_ instanceof X.a.types.Relationship&&(y=r.buildEdgeVisObject(_),r._addEdge(y));case 80:f=!0,e.next=68;break;case 83:e.next=89;break;case 85:e.prev=85,e.t5=e.catch(66),h=!0,j=e.t5;case 89:e.prev=89,e.prev=90,f||null==v.return||v.return();case 92:if(e.prev=92,!h){e.next=95;break}throw j;case 95:return e.finish(92);case 96:return e.finish(89);case 97:case"end":return e.stop()}}),e,null,[[28,48,52,60],[53,,55,59],[66,85,89,97],[90,,92,96]])})));return function(r){return e.apply(this,arguments)}}());o.push(m.a.all(i))},onCompleted:(e=V()(O.a.mark((function e(){var s,i,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.all(o);case 2:n.close(),s={nodes:{shape:"dot",font:{size:26,strokeWidth:7},scaling:{}},edges:{arrows:{to:{enabled:r._config.arrows||!1}},length:200},layout:{improvedLayout:!1,hierarchical:{enabled:r._config.hierarchical||!1,sortMethod:r._config.hierarchical_sort_method||"hubsize"}},physics:{adaptiveTimestep:!0,stabilization:{iterations:200,fit:!0}}},i=r._container,r._data={nodes:new Z.DataSet(g()(r._nodes)),edges:new Z.DataSet(g()(r._edges))},r._consoleLog(r._data.nodes),r._consoleLog(r._data.edges),r._network=new Z.Network(i,r._data,s),r._consoleLog("completed"),j()((function(){r._network.stopSimulation()}),1e4),r._events.generateEvent("completed",{record_count:t}),a=r,r._network.on("click",(function(e){if(e.nodes.length>0){var r=this.getNodeAt(e.pointer.DOM);a._events.generateEvent("clickNode",{nodeId:r,node:a._nodes[r]})}else if(e.edges.length>0){var t=this.getEdgeAt(e.pointer.DOM);a._events.generateEvent("clickEdge",{edgeId:t,edge:a._edges[t]})}})),r._network.on("doubleClick",(function(e){if(e.nodes.length>0){var r=this.getNodeAt(e.pointer.DOM);a._events.generateEvent("doubleClickNode",{nodeId:r,node:a._nodes[r]})}else if(e.edges.length>0){var t=this.getEdgeAt(e.pointer.DOM);a._events.generateEvent("doubleClickEdge",{edgeId:t,edge:a._edges[t]})}}));case 15:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),onError:function(e){r._consoleLog(e,"error"),r._events.generateEvent("error",{error_msg:e})}})}},{key:"clearNetwork",value:function(){this._nodes={},this._edges={},this._network.setData([])}},{key:"registerOnEvent",value:function(e,r){this._events.register(e,r)}},{key:"reinit",value:function(e){this._init(e),this.render()}},{key:"reload",value:function(){this.clearNetwork(),this.render()}},{key:"stabilize",value:function(){this._network.stopSimulation(),this._consoleLog("Calling stopSimulation")}},{key:"renderWithCypher",value:function(e){this.clearNetwork(),this._query=e,this.render()}}]),e}()}])}));
//# sourceMappingURL=neovis-without-dependencies.js.map