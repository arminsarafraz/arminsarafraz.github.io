import{a as de,b as ce}from"./chunk-6DG7VOKJ.js";import{a as se}from"./chunk-BJAJRZYL.js";import{b as Z,c as X,d as ee,e as te,h as ie,k as ne,l as ae,m as re,o as oe,u as le}from"./chunk-4XF6GU7U.js";import{a as v}from"./chunk-C7XZ7IYY.js";import{$ as o,C as k,Ea as p,Fd as K,G as y,Ia as f,Ja as w,L as h,M as g,P as T,Pa as i,Pd as Q,Qa as D,Ra as C,Sa as J,Vb as G,Wc as Y,Ya as _,bc as U,ca as M,cd as z,da as R,dd as q,ea as I,ed as $,hb as P,jb as A,kc as L,ma as d,mb as N,pc as V,sc as O,tc as j,uc as H,va as B,wa as F,wc as W,xa as t,ya as e,za as a}from"./chunk-OCUKRC6P.js";import{a as u}from"./chunk-Q7L6LLAK.js";var me=(()=>{class s{constructor(){this.mainChart={type:"line"},this.initMainChart()}random(n,l){return Math.floor(Math.random()*(l-n+1)+n)}initMainChart(n="Month"){let l=v("--cui-success")??"#4dbd74",r=v("--cui-info")??"#20a8d8",c=`rgba(${v("--cui-info-rgb")}, .1)`,b=v("--cui-danger")??"#f86c6b";this.mainChart.elements=n==="Month"?12:27,this.mainChart.Data1=[],this.mainChart.Data2=[],this.mainChart.Data3=[];for(let m=0;m<=this.mainChart.elements;m++)this.mainChart.Data1.push(this.random(50,240)),this.mainChart.Data2.push(this.random(20,160)),this.mainChart.Data3.push(65);let x=[];if(n==="Month")x=["January","February","March","April","May","June","July","August","September","October","November","December"];else{let m=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];x=m.concat(m,m,m)}let E=[{backgroundColor:c,borderColor:r,pointHoverBackgroundColor:r,borderWidth:2,fill:!0},{backgroundColor:"transparent",borderColor:l||"#4dbd74",pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:b||"#f86c6b",pointHoverBackgroundColor:b,borderWidth:1,borderDash:[8,5]}],ue=[u({data:this.mainChart.Data1,label:"Current"},E[0]),u({data:this.mainChart.Data2,label:"Previous"},E[1]),u({data:this.mainChart.Data3,label:"BEP"},E[2])],he={legend:{display:!1},tooltip:{callbacks:{labelColor:m=>({backgroundColor:m.dataset.borderColor})}}},ge=this.getScales(),ve={maintainAspectRatio:!1,plugins:he,scales:ge,elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};this.mainChart.type="line",this.mainChart.options=ve,this.mainChart.data={datasets:ue,labels:x}}getScales(){let n=v("--cui-border-color-translucent"),l=v("--cui-body-color");return{x:{grid:{color:n,drawOnChartArea:!1},ticks:{color:l}},y:{border:{color:n},grid:{color:n},max:250,beginAtZero:!0,ticks:{color:l,maxTicksLimit:5,stepSize:Math.ceil(250/5)}}}}static{this.\u0275fac=function(l){return new(l||s)}}static{this.\u0275prov=k({token:s,factory:s.\u0275fac,providedIn:"any"})}}return s})();var fe=(s,S)=>S.name,pe=()=>({"marginTop.px":40});function ye(s,S){if(s&1&&(t(0,"tr")(1,"td",69),a(2,"c-avatar",70),e(),t(3,"td")(4,"div"),i(5),e(),t(6,"div",71)(7,"span"),i(8),e()()(),t(9,"td",69),h(),a(10,"svg",72),e(),g(),t(11,"td")(12,"div",73)(13,"div",74)(14,"strong"),i(15),e()(),t(16,"div",75)(17,"small",17),i(18),e()()(),a(19,"c-progress",76),e(),t(20,"td",69),h(),a(21,"svg",77),e(),g(),t(22,"td")(23,"div",3),i(24,"Last login"),e(),t(25,"div",78),i(26),e()()()),s&2){let n=S.$implicit;o(2),f("src",n.avatar),f("status",n.status),d("size","md"),o(3),D(n.name),o(3),J(" ",n.state," | Registered: ",n.registered," "),o(2),f("id",n.country+n.name),w("name","cif",n.country,""),f("title",n.country),o(5),C("",n.usage,"%"),o(3),C(" ",n.period," "),o(),f("color",n.color),d("value",n.usage),o(2),w("name","cibCc",n.payment,""),o(5),D(n.activity)}}var Ae=(()=>{class s{constructor(){this.#t=y(T),this.#i=y(A),this.#n=y(M),this.#e=y(me),this.doughnutData={labels:["Female","Male"],datasets:[{backgroundColor:["#41B883","#E46651"],data:[37,63]}]},this.doughnutOptions={responisive:!0,maintainAspectRatio:!1},this.users=[{name:"Yiorgos Avraamu",state:"New",registered:"Jan 1, 2021",country:"Us",usage:50,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Mastercard",activity:"10 sec ago",avatar:"./assets/images/avatars/1.jpg",status:"success",color:"success"},{name:"Avram Tarasios",state:"Recurring ",registered:"Jan 1, 2021",country:"Br",usage:10,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Visa",activity:"5 minutes ago",avatar:"./assets/images/avatars/2.jpg",status:"danger",color:"info"},{name:"Quintin Ed",state:"New",registered:"Jan 1, 2021",country:"In",usage:74,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Stripe",activity:"1 hour ago",avatar:"./assets/images/avatars/3.jpg",status:"warning",color:"warning"},{name:"En\xE9as Kwadwo",state:"Sleep",registered:"Jan 1, 2021",country:"Fr",usage:98,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Paypal",activity:"Last month",avatar:"./assets/images/avatars/4.jpg",status:"secondary",color:"danger"},{name:"Agapetus Tade\xE1\u0161",state:"New",registered:"Jan 1, 2021",country:"Es",usage:22,period:"Jun 11, 2021 - Jul 10, 2021",payment:"ApplePay",activity:"Last week",avatar:"./assets/images/avatars/5.jpg",status:"success",color:"primary"},{name:"Friderik D\xE1vid",state:"New",registered:"Jan 1, 2021",country:"Pl",usage:43,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Amex",activity:"Yesterday",avatar:"./assets/images/avatars/6.jpg",status:"info",color:"dark"}],this.mainChart={type:"line"},this.mainChartRef=R(void 0),this.#a=P(()=>{this.mainChartRef()&&this.setChartStyles()}),this.chart=[],this.trafficRadioGroup=new te({trafficRadio:new ie("Month")})}#t;#i;#n;#e;#a;ngOnInit(){this.initCharts(),this.updateChartOnColorModeChange()}initCharts(){this.mainChart=this.#e.mainChart}setTrafficPeriod(n){this.trafficRadioGroup.setValue({trafficRadio:n}),this.#e.initMainChart(n),this.initCharts()}handleChartRef(n){n&&this.mainChartRef.set(n)}updateChartOnColorModeChange(){let n=this.#n.listen(this.#i.documentElement,"ColorSchemeChange",()=>{this.setChartStyles()});this.#t.onDestroy(()=>{n()})}setChartStyles(){this.mainChartRef()&&setTimeout(()=>{let n=u({},this.mainChart.options),l=this.#e.getScales();this.mainChartRef().options.scales=u(u({},n.scales),l),this.mainChartRef().update()})}static{this.\u0275fac=function(l){return new(l||s)}}static{this.\u0275cmp=I({type:s,selectors:[["ng-component"]],decls:251,vars:31,consts:[[1,"my-4"],["sm","5"],["id","traffic",1,"card-title","mb-0"],[1,"small","text-body-secondary"],["sm","7",1,"d-none","d-md-block"],["cButton","","color","primary","aria-label","Download",1,"float-end"],["cIcon","","name","cilCloudDownload"],[3,"formGroup"],["role","group",1,"float-end","me-3"],["formControlName","trafficRadio","type","radio","value","Day","id","dayRadio",1,"btn-check"],["cButton","","cFormCheckLabel","","color","secondary","variant","outline","for","dayRadio",3,"click"],["formControlName","trafficRadio","type","radio","value","Month","id","radioMonth",1,"btn-check"],["cButton","","cFormCheckLabel","","color","secondary","variant","outline","for","radioMonth",3,"click"],["formControlName","trafficRadio","type","radio","value","Year","id","radioYear",1,"btn-check"],["cButton","","cFormCheckLabel","","color","secondary","variant","outline","for","radioYear",3,"click"],[3,"chartRef","data","height","ngStyle","options","type"],[1,"text-center","mb-2",3,"xl","lg","sm","xs","gutter"],[1,"text-body-secondary"],["thin","","color","success","value","40","aria-label","User visits",1,"mt-2"],[1,"fw-semibold","text-truncate"],["thin","","color","info","value","20","aria-label","Unique users",1,"mt-2"],["thin","","color","warning","value","60","aria-label","Page views",1,"mt-2"],["thin","","color","danger","value","80","aria-label","New users",1,"mt-2"],[1,"d-none","d-xl-block"],["thin","","value","40","aria-label","Bounce rate",1,"mt-2"],[3,"withCharts"],[1,"mt-4"],["xs",""],[1,"mb-4"],["md","6","xl","6","xs","12"],["xs","6"],[1,"border-start","border-start-4","border-start-info","py-1","px-3","mb-3"],[1,"text-body-secondary","text-truncate","small"],[1,"fs-5","fw-semibold"],[1,"border-start","border-start-4","border-start-danger","py-1","px-3","mb-3"],[1,"mt-0"],[1,"progress-group","mb-4"],[1,"progress-group-prepend"],[1,"text-body-secondary","small"],[1,"progress-group-bars"],["thin","","color","info","value","34","aria-label","Monday new clients"],["thin","","color","danger","value","78","aria-label","Monday recurring clients"],["thin","","color","info","value","56","aria-label","Tuesday new clients"],["thin","","color","danger","value","94","aria-label","Tuesday recurring clients"],["thin","","color","info","value","12","aria-label","Wednesday new clients"],["thin","","color","danger","value","67","aria-label","Wednesday recurring clients"],["thin","","color","info","value","43","aria-label","Thursday new clients"],["thin","","color","danger","value","91","aria-label","Thursday recurring clients"],["thin","","color","info","value","22","aria-label","Friday new clients"],["thin","","color","danger","value","73","aria-label","Friday recurring clients"],["thin","","color","info","value","53","aria-label","Saturday new clients"],["thin","","color","danger","value","82","aria-label","Saturday recurring clients"],["thin","","color","info","value","9","aria-label","Sunday new clients"],["thin","","color","danger","value","69","aria-label","Sunday recurring clients"],[1,"legend","text-center","d-none","d-md-block"],[1,"badge","badge-pill","badge-sm","bg-info"],[1,"badge","badge-pill","badge-sm","bg-danger"],[1,"border-start","border-start-4","border-start-warning","py-1","px-3","mb-3"],[1,"border-start","border-start-4","border-start-success","py-1","px-3","mb-3"],["xs","12"],["type","doughnut",3,"data","options"],[1,"divider","d-flex","justify-content-center"],["cButton","","color","transparent","size","sm","type","button","aria-label","Options",1,"text-muted","btn-link"],["cIcon","","name","cil-options"],["align","middle","cTable","",1,"mb-0","border",3,"hover","responsive","striped"],[1,"text-nowrap","text-truncate"],[1,"bg-body-tertiary","text-center"],["cIcon","","name","cilPeople"],[1,"bg-body-tertiary"],[1,"text-center"],[3,"size","src","status"],[1,"small","text-body-secondary","text-nowrap"],["cIcon","","size","xl",3,"id","name","title"],[1,"d-flex","justify-content-between"],[1,"float-start"],[1,"float-end","ms-1","text-nowrap"],["thin","","aria-label","Usage",3,"value","color"],["cIcon","","size","xl",3,"name"],[1,"fw-semibold","text-nowrap"]],template:function(l,r){l&1&&(a(0,"app-widgets-dropdown"),t(1,"c-card",0)(2,"c-card-body")(3,"c-row")(4,"c-col",1)(5,"h4",2),i(6,"Traffic"),e(),t(7,"div",3),i(8,"January - December 2023"),e()(),t(9,"c-col",4)(10,"button",5),h(),a(11,"svg",6),e(),g(),t(12,"form",7)(13,"c-button-group",8),a(14,"input",9),t(15,"label",10),p("click",function(){return r.setTrafficPeriod("Day")}),i(16," Day "),e(),a(17,"input",11),t(18,"label",12),p("click",function(){return r.setTrafficPeriod("Month")}),i(19," Month "),e(),a(20,"input",13),t(21,"label",14),p("click",function(){return r.setTrafficPeriod("Year")}),i(22," Year "),e()()()()(),t(23,"c-chart",15),p("chartRef",function(b){return r.handleChartRef(b)}),i(24," Main chart "),e()(),t(25,"c-card-footer")(26,"c-row",16)(27,"c-col")(28,"div",17),i(29,"Visits"),e(),t(30,"strong"),i(31,"29.703 Users (40%)"),e(),a(32,"c-progress",18),e(),t(33,"c-col")(34,"div",17),i(35,"Unique"),e(),t(36,"div",19),i(37,"24.093 Users (20%)"),e(),a(38,"c-progress",20),e(),t(39,"c-col")(40,"div",17),i(41,"Page views"),e(),t(42,"div",19),i(43,"78.706 Views (60%)"),e(),a(44,"c-progress",21),e(),t(45,"c-col")(46,"div",17),i(47,"New Users"),e(),t(48,"div",19),i(49,"22.123 Users (80%)"),e(),a(50,"c-progress",22),e(),t(51,"c-col",23)(52,"div",17),i(53,"Bounce Rate"),e(),t(54,"div",19),i(55,"Average Rate (40.15%)"),e(),a(56,"c-progress",24),e()()()(),t(57,"c-card",0)(58,"c-card-body")(59,"c-row")(60,"c-col",1)(61,"h4",2),i(62,"Traffic"),e(),t(63,"div",3),i(64,"January - December 2023"),e()(),t(65,"c-col",4)(66,"button",5),h(),a(67,"svg",6),e(),g(),t(68,"form",7)(69,"c-button-group",8),a(70,"input",9),t(71,"label",10),p("click",function(){return r.setTrafficPeriod("Day")}),i(72," Day "),e(),a(73,"input",11),t(74,"label",12),p("click",function(){return r.setTrafficPeriod("Month")}),i(75," Month "),e(),a(76,"input",13),t(77,"label",14),p("click",function(){return r.setTrafficPeriod("Year")}),i(78," Year "),e()()()()(),t(79,"c-chart",15),p("chartRef",function(b){return r.handleChartRef(b)}),i(80," Main chart "),e()(),t(81,"c-card-footer")(82,"c-row",16)(83,"c-col")(84,"div",17),i(85,"Visits"),e(),t(86,"strong"),i(87,"29.703 Users (40%)"),e(),a(88,"c-progress",18),e(),t(89,"c-col")(90,"div",17),i(91,"Unique"),e(),t(92,"div",19),i(93,"24.093 Users (20%)"),e(),a(94,"c-progress",20),e(),t(95,"c-col")(96,"div",17),i(97,"Page views"),e(),t(98,"div",19),i(99,"78.706 Views (60%)"),e(),a(100,"c-progress",21),e(),t(101,"c-col")(102,"div",17),i(103,"New Users"),e(),t(104,"div",19),i(105,"22.123 Users (80%)"),e(),a(106,"c-progress",22),e(),t(107,"c-col",23)(108,"div",17),i(109,"Bounce Rate"),e(),t(110,"div",19),i(111,"Average Rate (40.15%)"),e(),a(112,"c-progress",24),e()()()(),a(113,"app-widgets-brand",25),t(114,"c-row",26)(115,"c-col",27)(116,"c-card",28)(117,"c-card-header"),i(118),e(),t(119,"c-card-body")(120,"c-row")(121,"c-col",29)(122,"c-row")(123,"c-col",30)(124,"div",31)(125,"div",32),i(126,"New Clients"),e(),t(127,"div",33),i(128,"9,123"),e()()(),t(129,"c-col",30)(130,"div",34)(131,"div",32),i(132," Recurring Clients "),e(),t(133,"div",33),i(134,"22,643"),e()()()(),a(135,"hr",35),t(136,"div",36)(137,"div",37)(138,"span",38),i(139,"Monday"),e()(),t(140,"div",39),a(141,"c-progress",40)(142,"c-progress",41),e()(),t(143,"div",36)(144,"div",37)(145,"span",38),i(146,"Tuesday"),e()(),t(147,"div",39),a(148,"c-progress",42)(149,"c-progress",43),e()(),t(150,"div",36)(151,"div",37)(152,"span",38),i(153,"Wednesday"),e()(),t(154,"div",39),a(155,"c-progress",44)(156,"c-progress",45),e()(),t(157,"div",36)(158,"div",37)(159,"span",38),i(160,"Thursday"),e()(),t(161,"div",39),a(162,"c-progress",46)(163,"c-progress",47),e()(),t(164,"div",36)(165,"div",37)(166,"span",38),i(167,"Friday"),e()(),t(168,"div",39),a(169,"c-progress",48)(170,"c-progress",49),e()(),t(171,"div",36)(172,"div",37)(173,"span",38),i(174,"Saturday"),e()(),t(175,"div",39),a(176,"c-progress",50)(177,"c-progress",51),e()(),t(178,"div",36)(179,"div",37)(180,"span",38),i(181,"Sunday"),e()(),t(182,"div",39),a(183,"c-progress",52)(184,"c-progress",53),e()(),t(185,"div",54),i(186,`
              `),t(187,"small"),i(188,`
                `),t(189,"sup"),i(190,`
                  `),t(191,"span",55),i(192,"\xA0"),e(),i(193,`
                `),e(),i(194,`
                `),t(195,"span"),i(196,"New clients"),e(),i(197,`
                \xA0\xA0
                `),t(198,"sup"),i(199,`
                  `),t(200,"span",56),i(201,"\xA0"),e(),i(202,`
                `),e(),i(203,`
                `),t(204,"span"),i(205,"Recurring clients"),e(),i(206,`
              `),e(),i(207,`
            `),e()(),t(208,"c-col",29)(209,"c-row")(210,"c-col",30)(211,"div",57)(212,"div",32),i(213,"Page views"),e(),t(214,"div",33),i(215,"78,623"),e()()(),t(216,"c-col",30)(217,"div",58)(218,"div",32),i(219,"Organic"),e(),t(220,"div",33),i(221,"49,123"),e()()()(),a(222,"hr",35),t(223,"c-row")(224,"c-col",59),a(225,"c-chart",60),e()(),t(226,"div",61)(227,"button",62),h(),a(228,"svg",63),e()()()()()()()(),g(),t(229,"c-row")(230,"c-col",27)(231,"c-card",28)(232,"c-card-body")(233,"table",64)(234,"thead",65)(235,"tr")(236,"th",66),h(),a(237,"svg",67),e(),g(),t(238,"th",68),i(239,"User"),e(),t(240,"th",66),i(241,"Country"),e(),t(242,"th",68),i(243,"Usage"),e(),t(244,"th",66),i(245,"Payment Method"),e(),t(246,"th",68),i(247,"Activity"),e()()(),t(248,"tbody"),B(249,ye,27,17,"tr",null,fe),e()()()()()()),l&2&&(o(12),d("formGroup",r.trafficRadioGroup),o(11),d("data",r.mainChart.data)("height",300)("ngStyle",_(29,pe))("options",r.mainChart.options)("type",r.mainChart.type),o(3),d("xl",5)("lg",4)("sm",2)("xs",1)("gutter",4),o(42),d("formGroup",r.trafficRadioGroup),o(11),d("data",r.mainChart.data)("height",300)("ngStyle",_(30,pe))("options",r.mainChart.options)("type","bar"),o(3),d("xl",5)("lg",4)("sm",2)("xs",1)("gutter",4),o(31),d("withCharts",!0),o(5),C("Users ","&"," Sales"),o(107),d("data",r.doughnutData)("options",r.doughnutOptions),o(8),d("hover",!0)("responsive",!0)("striped",!0),o(16),F(r.users))},dependencies:[ce,O,j,q,z,U,G,le,ne,Z,ae,X,ee,re,oe,V,Y,se,N,H,$,K,de,W,Q,L],styles:["[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:x-small}"]})}}return s})();export{Ae as DashboardComponent};