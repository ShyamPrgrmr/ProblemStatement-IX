(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(t,e,a){t.exports=a(18)},15:function(t,e,a){},17:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(15),a(5)),l=a.n(o),s=a(7),u=a(1),d=a(2),p=a(4),h=a(3),m=a(6),f=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).componentDidMount=function(){n.setState(Object(m.a)({},n.props.data))},n.editProduct=function(t){t.preventDefault(),n.props.editProduct(n.state)},n.state={title:"",imgsrc:"",id:"",desc:""},n}return Object(d.a)(a,[{key:"render",value:function(){var t=this;this.props.data.title,this.props.data.desc,this.props.data.imgsrc;return r.a.createElement("div",{style:g.container},r.a.createElement("h2",{style:{textAlign:"center"}},"Edit Deatails"),r.a.createElement("label",{style:g.label},"Title"),r.a.createElement("input",{type:"text",value:this.state.title,placeholder:"Enter Title",onChange:function(e){t.setState({title:e.target.value})}}),r.a.createElement("label",{style:g.label},"Description"),r.a.createElement("input",{type:"text",value:this.state.desc,placeholder:"Enter Description",onChange:function(e){t.setState({desc:e.target.value})}}),r.a.createElement("label",{style:g.label},"Image source"),r.a.createElement("input",{type:"text",value:this.state.imgsrc,placeholder:"Enter Image Source",onChange:function(e){t.setState({imgsrc:e.target.value})}}),r.a.createElement("button",{onClick:this.editProduct,style:g.btn},"Edit"))}}]),a}(n.Component),g={container:{width:"350px",display:"flex",flexDirection:"column"},label:{marginTop:"5px"},btn:{backgroundColor:"#8080df",marginTop:"10px"}},b=(n.Component,{container:{width:"350px",display:"flex",flexDirection:"column"},label:{marginTop:"5px"},btn:{backgroundColor:"#8080df",marginTop:"10px"}}),v=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state=t.props,t}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{style:y.block},r.a.createElement("img",{style:y.img,src:this.state.data.imgsrc}),r.a.createElement("div",{style:y.productData},r.a.createElement("div",{style:{fontSize:"9px",color:"darkgrey"}},"Product ID : "+this.state.data.id),r.a.createElement("div",{style:{fontSize:"25px",fontWeight:"700"}},this.state.data.title),r.a.createElement("div",{style:{marginTop:"10px"}},this.state.data.desc)),r.a.createElement("div",{style:y.buttonContainer},r.a.createElement("button",{style:y.btn,onClick:function(e){e.preventDefault(),t.props.openEditDelete(t.state,"edit")}},"Edit"),r.a.createElement("button",{style:y.btn,onClick:function(e){e.preventDefault(),t.props.openEditDelete(t.state.data.id,"delete")}},"Delete")))}}]),a}(r.a.Component),y={block:{width:"80%",padding:"20px",margin:"10px",boxShadow:"2px 2px 2px 1px #8080df",display:"flex",borderRadius:"5px"},img:{minWidth:"100px",maxWidth:"100px",height:"100px",backgroundColor:"#000"},productData:{display:"flex",flexDirection:"column",paddingLeft:"10px"},buttonContainer:{marginLeft:"auto",display:"flex",height:"30px"},btn:{backgroundColor:"#8080df"}},x=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={title:"",desc:"",imgsrc:"",id:""},t.createProduct=function(e){e.preventDefault(),t.props.createProduct(t.state)},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{style:E.container},r.a.createElement("h2",{style:{textAlign:"center"}},"Create product"),r.a.createElement("label",{style:E.label},"Title"),r.a.createElement("input",{type:"text",onChange:function(e){t.setState({title:e.target.value})},placeholder:"Enter title"}),r.a.createElement("label",{style:E.label},"Description"),r.a.createElement("input",{type:"text",onChange:function(e){t.setState({desc:e.target.value})},placeholder:"Enter description"}),r.a.createElement("label",{style:E.label},"Image source"),r.a.createElement("input",{type:"text",onChange:function(e){t.setState({imgsrc:e.target.value})},placeholder:"Enter image src"}),r.a.createElement("button",{style:E.btn,onClick:this.createProduct},"Create"))}}]),a}(n.Component),E={container:{width:"350px",display:"flex",flexDirection:"column"},label:{marginTop:"5px"},btn:{backgroundColor:"#8080df",marginTop:"10px"}},w=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).componentDidMount=function(){n.setState(Object(m.a)({},n.props))},n.editProduct=function(t){t.preventDefault(),n.props.editProduct(n.state)},n.state={title:"",imgsrc:"",id:"",desc:""},n}return Object(d.a)(a,[{key:"render",value:function(){var t=this;this.props.title,this.props.desc,this.props.imgsrc;return r.a.createElement("div",{style:C.container},r.a.createElement("h2",{style:{textAlign:"center"}},"Edit Deatails"),r.a.createElement("label",{style:C.label},"Title"),r.a.createElement("input",{type:"text",value:this.state.title,placeholder:"Enter Title",onChange:function(e){t.setState({title:e.target.value})}}),r.a.createElement("label",{style:C.label},"Description"),r.a.createElement("input",{type:"text",value:this.state.desc,placeholder:"Enter Description",onChange:function(e){t.setState({desc:e.target.value})}}),r.a.createElement("label",{style:C.label},"Image source"),r.a.createElement("input",{type:"text",value:this.state.imgsrc,placeholder:"Enter Image Source",onChange:function(e){t.setState({imgsrc:e.target.value})}}),r.a.createElement("button",{onClick:this.editProduct,style:C.btn},"Edit"),r.a.createElement("button",{onClick:function(e){e.preventDefault(),t.props.openEditDelete(t.state.id,"delete")},style:C.btn},"Delete"))}}]),a}(n.Component),C={container:{width:"350px",display:"flex",flexDirection:"column"},label:{marginTop:"5px"},btn:{backgroundColor:"#8080df",marginTop:"10px"}},D=(a(17),function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={show:"list",products:[],data:{},id:"",url:"http://localhost:5000/"},t.fetchProduct=Object(s.a)(l.a.mark((function e(){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.state.url+"getproduct");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=[],n.success&&(r=n.products.map((function(t){return{id:t._id,title:t.title,imgsrc:t.imgsrc,desc:t.desc}}))),t.setState({products:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert("Error : "+e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),t.createProduct=function(){var e=Object(s.a)(l.a.mark((function e(a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.state.url+"createproduct",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent)?r.success&&(c=t.state.products,(new Date).getTime(),a.id=r.result._id,c.push(a),t.setState({products:c,show:"list"})):alert("Error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("error : "+e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),t.openEditDelete=function(e,a){if("edit"==a)t.setState({data:e,show:"edit"});else if("delete"==a){var n=e,r=t.state.products.filter((function(t){return t.id!==n}));1===t.state.products.length?t.setState({products:[],show:"list"}):t.setState({products:r,show:"list"})}},t.editProduct=function(){var e=Object(s.a)(l.a.mark((function e(a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.id,e.prev=1,e.next=4,fetch(t.state.url+"editproduct",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return r=e.sent,e.next=7,r.json();case 7:e.sent.success?(c=t.state.products.map((function(t){return t.id!==n?t:a})),t.setState({products:c,show:"list"})):t.setState({show:"list"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),alert("Error : "+e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),t.returnProduct=function(){return t.state.products.map((function(e){return r.a.createElement(v,{key:e.id,openEditDelete:t.openEditDelete,data:{title:e.title,desc:e.desc,imgsrc:e.imgsrc,id:e.id}})}))},t.componentDidMount=function(){t.fetchProduct()},t.show=function(){return"list"===t.state.show?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{}},"Product List"),t.returnProduct()):"create"===t.state.show?r.a.createElement(x,{createProduct:t.createProduct}):"edit"===t.state.show?r.a.createElement(f,Object.assign({},t.state.data,{editProduct:t.editProduct})):"search"===t.state.show?r.a.createElement(w,Object.assign({},t.state.data,{editProduct:t.editProduct,openEditDelete:t.openEditDelete})):void 0},t.searchById=function(e){e.preventDefault();var a=t.state.id,n=t.state.products.filter((function(t){return a===t.id}));1!==n.length?alert("Product is not found."):t.setState({show:"search",data:n[0]})},t.searchBar=function(){return"list"===t.state.show||"search"===t.state.show?r.a.createElement("div",{style:{marginLeft:"auto"}},r.a.createElement("input",{style:{marginRight:"10px"},onChange:function(e){t.setState({id:e.target.value})},placeholder:"Enter Product id"}),r.a.createElement("button",{style:k.btn,onClick:t.searchById},"Search")):null},t.navMenu=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{fontSize:"20px",fontWeight:"600"}},"Products"),r.a.createElement("div",{style:k.buttongrp},r.a.createElement("button",{className:"list"===t.state.show?"activebtn":"",onClick:function(e){e.preventDefault(),t.setState({show:"list"})}},"Show List"),r.a.createElement("button",{className:"create"===t.state.show?"activebtn":"",onClick:function(e){e.preventDefault(),t.setState({show:"create"})}},"Create Product")))},t}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:k.container},r.a.createElement("div",{style:k.navbar},this.navMenu()),r.a.createElement("div",{style:k.searchBar},this.searchBar()),r.a.createElement("div",{style:k.wrapper},this.show()))}}]),a}(r.a.Component)),k={container:{display:"flex",flexDirection:"column"},navbar:{height:"50px",backgroundColor:"#8080df",color:"#fff",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",paddingLeft:"10px"},menu:{display:"flex",padding:"10px",paddingTop:"0px",flexDirection:"row",backgroundColor:"#8080df"},buttongrp:{display:"flex",marginLeft:"auto",marginRight:"10px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center"},searchBar:{display:"flex",alignItems:"center",marginTop:"10px"},btn:{backgroundColor:"#8080df",marginRight:"10px"}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.f5f9cad6.chunk.js.map