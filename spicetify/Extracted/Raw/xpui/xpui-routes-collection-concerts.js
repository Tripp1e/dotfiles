"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[5783],{90696:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(79474),o=n(41028),s=n(98764),i=n(85786),r=n(30957),c=n(14152),l=n(14485);const d="MUiWCNTfb6FcSwVPvQ1V",u="_eSrMs5LTUjW7l0vfuBg",m="UAk3bMhekwJTV_wIyfsT",g="X9w6LPfKsZHMCs38sVIQ",v="NXn5KjeUOjLGlAfS1Gao",h="N0wgFMDDvCiby4QB5kLJ",p="nloNe2BLRHjz9dxlwfLU",x="FyD0hF1e2PKzRxQ6sYDQ",j="GR08E4L_rOGljyQQX30R";var f=n(13274);const y=(0,a.memo)((e=>{const{uri:t,title:n,imageUrl:a,date:y,subTitle:_,firstParty:C,onClick:N}=e,b=y?(0,l.l4)(y):void 0;return(0,f.jsx)(r.Link,{to:t,className:d,"data-testid":"concert-card",onClick:N,children:(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)(c.b,{children:(0,f.jsx)("div",{role:"img",className:j,style:{backgroundImage:`url(${a})`},children:!a&&(0,f.jsx)(o.r,{role:"img",size:"xxlarge",semanticColor:"textSubdued"})})}),b&&(0,f.jsxs)("time",{className:m,dateTime:y,children:[(0,f.jsx)(s.E,{as:"div",variant:"bodySmall",children:(0,l.tj)(b)}),(0,f.jsx)(s.E,{as:"div",variant:"bodyMediumBold",children:(0,l.Py)(b)})]}),(0,f.jsxs)("div",{className:g,dir:"auto",children:[(0,f.jsx)(s.E,{as:"h2",variant:"bodyMedium",className:v,children:n}),(0,f.jsxs)("div",{className:h,children:[C&&(0,f.jsx)("span",{className:x,children:(0,f.jsx)(i.D,{size:"small"})}),(0,f.jsx)(s.E,{as:"span",className:p,variant:"bodySmall","data-testid":"location-name",semanticColor:"textSubdued",children:_})]})]})]})})}))},73628:(e,t,n)=>{n.r(t),n.d(t,{default:()=>wn});var a=n(22215),o=n(19498),s=n(79474),i=n(99754),r=n(83648),c=n(60096),l=n(59841),d=n(50145),u=n(58829),m=n(733),g=n(11283),v=n(30190),h=n(14570),p=n(47052),x=n(32970),j=n(14056),f=n(38417),y=n(29117),_=n(6950),C=n(27699),N=n(39517),b=n(46545),R=n(31350),I=n(14494),S=n(52792),k=n(67302),D=n(82548),E=n(98764),L=n(66675),F=n(64647),U=n(90495),w=n(82089),M=n(96642),T=n(42397),B=n(23689),A=n(22259),P=n(22269),O=n(14712),H=n(83856),V=n(30957),z=n(14485);const G="Ig5vKQ7dYBd1EvrAFxNe",K="h_q319q68ujja24YIoXY",W="dFTQKQt3imsoOza3VE4G",$="M8LA1p3y53Qnge37zUmz",q="HZi6Ziy6mVJMFZsPf4wk",X="KNX0R2c0r90zNTPYZm6X",Z="JI0woT5IN6EnNKnilhcg",Q="kAi1CfiOMYDExKkXuw44",Y="Zwr6T4ceJI7KfyNxa4tS",J="mW3O8RnDMDY6MfRJKqd5",ee="raQK_4Eaqa5Zj06_aBm7",te="AOuYgrCnrYvPKsyzxqVy",ne="P1dra4DUpn36RnCkuwa_",ae="zBCfaF04WlTsiUcov2oJ",oe="JxTPZX9AoptKanJg0zIw";var se=n(13274);const ie=(0,s.memo)((e=>{const{concert:t,position:n,modalSpec:a}=e,o=(0,z.l4)(e.concert.startDateIsoString),i=(0,H.o_)(e.concert.uri),r=(0,s.useMemo)((()=>a?.eventRowFactory({position:n,uri:t.uri})),[a,n,t]),c=(0,I.s)();return(0,se.jsxs)(V.Link,{to:`/concert/${i?.id}`,className:Q,onClick:()=>{r&&c.logInteraction(r.hitUiNavigate({destination:`/concert/${i?.id}`}))},children:[(0,se.jsxs)("div",{className:Y,"aria-hidden":!0,children:[(0,se.jsx)(E.E,{as:"div",variant:"marginalBold",className:J,children:(0,z.tj)(o)}),(0,se.jsx)(E.E,{as:"div",variant:"bodyMediumBold",className:ee,children:(0,z.Py)(o)})]}),(0,se.jsxs)("div",{className:te,children:[(0,se.jsx)(E.E,{as:"div",variant:"bodySmallBold",className:ne,"data-testid":"event-title",children:t.title}),(0,se.jsx)(O.s,{children:(0,z.Fn)(o)}),(0,se.jsxs)(E.E,{as:"div",variant:"bodySmall",className:ae,children:[(0,z.VJ)(o)," • ",(0,z.WB)(o)]}),(0,se.jsx)(E.E,{as:"div",variant:"bodySmall",className:oe,"data-testid":"event-venue",children:[t.location.venue,t.location.city].join(j.Ru.getSeparator())})]})]},t.uri)})),re=e=>{const t=(0,s.useMemo)((()=>e.feedSpec?.groupedEventModalFactory({uri:e.artist.uri||""})),[e.feedSpec,e.artist]),n=(0,I.s)(),a=(0,S.t)(t),o=()=>{t&&n.logInteraction(t.closeButtonFactory().hitUiHide()),e.onClose()};return(0,se.jsx)(P.A,{contentLabel:j.Ru.get("live_events.label"),isOpen:!0,className:G,onRequestClose:o,children:(0,se.jsxs)("section",{className:K,ref:a,children:[(0,se.jsx)("div",{className:W,children:(0,se.jsx)(ce,{"aria-label":j.Ru.get("close"),iconOnly:B.M,size:"small",onClick:o})}),(0,se.jsxs)("div",{className:$,children:[(0,se.jsx)(A._,{height:"48",width:"48",className:q,src:e.artist.imageUri}),(0,se.jsxs)("div",{className:X,children:[(0,se.jsx)(E.E,{as:"h3",variant:"bodyMediumBold",className:Z,"data-testid":"event-venue",children:e.artist.name}),(0,se.jsx)(E.E,{as:"h3",variant:"bodySmall","data-testid":"event-venue",children:j.Ru.get("concerts.count_near_location",e.concerts.length,e.location.city)})]})]}),e.concerts.map(((e,n)=>(0,se.jsx)(ie,{concert:e,position:n,modalSpec:t},e.uri)))]})})};var ce=(0,T.Ay)(g.H).withConfig({displayName:"ConcertModal___StyledButtonTertiary",componentId:"sc-179c8vh-0"})({color:"#FFFFFF",backgroundColor:"#000000",cursor:"pointer"});const le=(0,s.memo)((e=>{const{event:t,onClose:n,feedSpec:a}=e,o=t?.concerts[0]?.concert,i=o?.artists[0],r=(0,s.useMemo)((()=>a?.groupedEventModalFactory({uri:i?.uri||""})),[a,i]),c=(0,I.s)();if(!t||!o||!i)return null;return(0,se.jsx)(re,{artist:{imageUri:i.imageUri,name:i.name,uri:i.uri},location:{city:o.location,venue:o.venue},concerts:t.concerts.map((e=>({uri:`spotify:concert:${e.concert.id}`,title:e.concert.title,startDateIsoString:e.concert.date,location:{city:e.concert.location,venue:e.concert.venue}}))),onClose:()=>{r&&c.logInteraction(r.closeButtonFactory().hitUiHide()),n()}})}));var de=n(28049),ue=n(35430),me=n(16579),ge=n(21361),ve=n(39944);const he=async()=>(await(0,ve.oF)(ge.n.getInstance())).body,pe=6e5,xe=(e,t=a.NC)=>{const n=t(o.b3k);return(0,de.I)({queryKey:["concerts",e],queryFn:()=>(async(e,t)=>(await(0,ve.Ki)(ge.n.getInstance(),e,t)).body)(e.geonameId,n),staleTime:pe,placeholderData:ue.rX})},je=e=>{const t=(0,a.NC)(o.b3k);return(0,me.q)({queryKey:["concerts","all",e],queryFn:({pageParam:n})=>(async(e=1,t,n)=>{const{geonameId:a,startDate:o,endDate:s}=t;return(await(0,ve.DX)(ge.n.getInstance(),{page:e,geonameId:a,startDate:o,endDate:s,skipLocationUpdate:n})).body})(n,e,t),staleTime:pe,initialPageParam:1,placeholderData:ue.rX,getNextPageParam:(e,t)=>{if(!(t.length>=50)&&0!==e.events.length)return t.length+1}})},fe=e=>{const t=(0,a.NC)(o.b3k);return(0,de.I)({queryKey:["concerts","popular",{geonameId:e}],queryFn:()=>(async(e,t)=>(await(0,ve.ZV)(ge.n.getInstance(),void 0,e,t)).body)(e,t),staleTime:pe,placeholderData:ue.rX})},ye=/^(\d+)/,_e=e=>{const t=(()=>{const{location:e}=(0,r.g)(),[,t]=e?.match(ye)||[];if(t)try{return parseInt(t,10)}catch(e){return}})(),[n]=(0,c.ok)(),a=n.get("filter")?.trim();return e.isAnonymous&&!a||"all"===a?{type:"all",geonameId:t}:e.isInterestedEnabled&&"saved"===a?{type:"saved"}:{type:"foryou",geonameId:t}};var Ce=n(53933),Ne=n(36471);const be="MVPegsivznZB6gdkcnkH",Re="MlK79hskRbFrN2OBjMkl",Ie="VxaXFH9Uq1NU0LtsVhIu",Se="vktIWsUczavLRrl4SkRt",ke="Y1JeRPqrmHKXI1KcstYN",De="S667J_S5yumhYS1VoZyw",Ee="DbrdfLxSkMqLs3HHrKfo",Le="ofURwIKv0qEXJGTraIis",Fe="LOJZO2MnGW5dCIawF767",Ue="tyc7QRlEJigVFIAeLGOB",we="PoljWhTLU3MKqIx2gSPY",Me="ajxCNAuBJSgYfKUUBWBT",Te="WR2h2Li5XTrBn_Rdme_k",Be="WNhsvOyu4doInF525pLE",Ae="qSR4imCvzdznIQ4F2kBO",Pe="jFxUCv1gagc6erXmpgYw",Oe="LNAJMvRlTPqWsmZvV7Kg",He="jP10ZUl0Jn2Ijue3fZux",Ve="ncN9bwTgIRk6xruAt5T8",ze="hKG8XDR5S00bjBAibgbI",Ge="XMhrCtHCVSPsNW67vM1m",Ke="vT0t_YE1HgmbnHLLhJD9",We=(0,s.memo)((e=>{const{geonameId:t,locationName:n,spec:a}=e,[o,i]=(0,s.useState)(!1),r=(0,S.t)(a),c=`https://concerts.spotifycdn.com/feed_city_images_1/${t}.jpg`;return(0,s.useEffect)((()=>{const e=()=>{i(!0)},t=()=>{i(!1)},n=new Image;return n.addEventListener("load",e),n.addEventListener("error",t),n.src=c,()=>{n.removeEventListener("load",e),n.removeEventListener("error",t)}}),[c]),(0,se.jsx)(se.Fragment,{children:(0,se.jsxs)("div",{className:ze,ref:r,children:[o&&(0,se.jsx)(A._,{src:c,className:Ge,circle:!0,imageHeight:"56px",imageWidth:"56px"}),(0,se.jsxs)("div",{children:[(0,se.jsx)(E.E,{variant:"bodyMedium",semanticColor:"textSubdued",as:"p",children:j.Ru.get("live_events.city_info_find_tickets",n)}),(0,se.jsx)(E.E,{variant:"bodyMedium",semanticColor:"textSubdued",as:"p",children:j.Ru.get("live_events.city_info_view_details")})]})]})})}));var $e=n(38064),qe=n(50761),Xe=n(90696);const Ze=(0,s.memo)((e=>{const{concert:t,isVirtual:n,onClick:a}=e,{venue:o,location:s}=t,i=t.artists[0];return(0,se.jsx)(Xe.A,{uri:(0,H.B4)(t.id).toURI(),title:(0,qe.a9)(t),imageUrl:i.imageUri,date:t.startDate.localDate,subTitle:n?o:[o,s].join(j.Ru.getSeparator()),firstParty:(0,$e.he)(t),onClick:a})})),Qe=(0,s.memo)((e=>{const{event:t,onClick:n}=e,a=(0,s.useCallback)((e=>{e.preventDefault(),n(t)}),[t,n]),o=(0,z.l4)(t.openingDate),i=(0,z.l4)(t.closingDate),r=t.concerts[0].concert,c=r.artists[0];return(0,se.jsx)(Xe.A,{title:(0,qe.a9)(r),subTitle:`${(0,z.WZ)(o,i)} • ${j.Ru.get("concerts.count",t.concerts.length)}`,onClick:a,imageUrl:c.imageUri,uri:(0,H.B4)(r.id).toURI()})})),Ye=(0,s.memo)((e=>{const{event:t,position:n,sectionSpec:a,onOpenGroupedEvent:o}=e,i=t.concerts[0]?.concert,r=i?.id,c=i&&(0,H.B4)(i.id).toURI(),l=(0,I.s)(),d=(0,s.useMemo)((()=>a?.eventCardFactory({identifier:r??"",position:n,uri:c??""})),[a,r,c,n]),u=(0,S.t)(d),m=e=>{o(e),d&&l.logInteraction(d.hitUiReveal())};if(t.concerts.length>1)return(0,se.jsx)("div",{ref:u,children:(0,se.jsx)(Qe,{event:t,onClick:m})});return(0,se.jsx)("div",{ref:u,children:(0,se.jsx)(Ze,{concert:i,isVirtual:"online"===t.source,onClick:()=>{d&&l.logInteraction(d.hitUiNavigate({destination:c}))}})})})),Je="D_V60ibMxH9Vy7kyvWvc",et="anRK1X9LKn5HxZQJB5Tl",tt="shUifmqVle_F5ILRpCqe",nt="LHhL2094jqvK0MNwlGAu",at="yRQGIh3Y05BG51IHUW2b",ot="fT86P9Div4C8GXI9hZ36",st="G8sU0RZZT_ZhaEv7B26V",it=(0,s.memo)((({date:e,image:t,title:n,subTitle:a,dateRange:o,uri:s,onClick:i})=>{const r=e?(0,z.l4)(e):void 0;return(0,se.jsxs)(V.Link,{to:(0,H.B4)(s).toURI(),className:Je,"data-testid":"concert-row",onClick:i,children:[(0,se.jsx)("time",{dateTime:e,className:et,children:r&&(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(E.E,{as:"div",variant:"bodySmall",children:(0,z.tj)(r)}),(0,se.jsx)(E.E,{variant:"bodyMediumBold",children:(0,z.Py)(r)})]})}),(0,se.jsx)(A._,{src:t,alt:"",role:"presentation",className:tt}),(0,se.jsxs)("div",{className:nt,children:[(0,se.jsxs)("div",{className:at,children:[(0,se.jsx)(E.E,{variant:"bodyMedium",children:n}),(0,se.jsx)(E.E,{variant:"bodySmall","data-testid":"event-venue",semanticColor:"textSubdued",children:a})]}),(0,se.jsx)(E.E,{as:"span",variant:"bodyMedium",semanticColor:"textSubdued",className:ot,children:o}),(0,se.jsx)("div",{className:st,children:r&&(0,se.jsx)(E.E,{variant:"bodyMedium",semanticColor:"textSubdued",children:(0,z.WB)(r)})})]})]})})),rt=(0,s.memo)((e=>{const{event:t,onClick:n}=e,a=(0,s.useCallback)((e=>{e.preventDefault(),n(t)}),[t,n]),o=(0,z.l4)(t.openingDate),i=(0,z.l4)(t.closingDate),r=t.concerts[0].concert,c=r.artists[0];return(0,se.jsx)(it,{image:c?.imageUri,title:(0,qe.a9)(r),subTitle:j.Ru.get("concerts.count",t.concerts.length),dateRange:(0,z.WZ)(o,i),uri:r?.id,onClick:a})})),ct=(0,s.memo)((e=>{const{concert:t,isVirtual:n,onClick:a}=e,{venue:o,location:s}=t,i=t.artists[0],r=(0,z.l4)(t.startDate.localDate);return(0,se.jsx)(it,{date:t.startDate.localDate,image:i?.imageUri,title:(0,qe.a9)(t),subTitle:n?o:[o,s].join(j.Ru.getSeparator()),dateRange:(0,z.Y)(r),uri:t?.id,onClick:a})})),lt=(0,s.memo)((e=>{const{event:t,position:n,sectionSpec:a,onOpenGroupedEvent:o}=e,i=t.concerts[0]?.concert,r=i?.id,c=i&&(0,H.B4)(i.id).toURI(),l=(0,I.s)(),d=(0,s.useMemo)((()=>a?.eventRowFactory({identifier:r??"",position:n,uri:c??""})),[a,r,c,n]),u=(0,S.t)(d),m=e=>{o(e)};if(t.concerts.length>1)return(0,se.jsx)("div",{ref:u,children:(0,se.jsx)(rt,{event:t,onClick:m})});return(0,se.jsx)("div",{ref:u,children:(0,se.jsx)(ct,{concert:i,isVirtual:"online"===t.source,onClick:()=>{d&&l.logInteraction(d.hitUiNavigate({destination:c??""}))}})})})),dt=e=>{const t=e?.match(/(202\d)-([01]\d)-([0-3]\d)/);if(!t)return;const[,n,a,o]=t;return new Date(parseInt(n,10),parseInt(a,10)-1,parseInt(o,10))},ut=()=>{const[e]=(0,c.ok)(),t=e.get("startDate")?.trim(),n=e.get("endDate")?.trim(),a=dt(t),o=dt(n);return a&&o&&{from:a,to:o}};var mt=n(78124),gt=n(3498),vt=n(53577),ht=(n(62168),n(61080)),pt=n(7079),xt=n(12058),jt=n(42534);const ft=e=>{const t=new Date(e);t.setDate(e.getDate()+(6-e.getDay()));const n=new Date(t);return n.setDate(t.getDate()+1),{from:t,to:n}},yt=e=>{const t=new Date(e);t.setDate(e.getDate()+(6-e.getDay()));const n=new Date(t);n.setDate(t.getDate()+7);const a=new Date(n);return a.setDate(n.getDate()+1),{from:n,to:a}},_t=(e,t)=>!!(e?.from&&e?.to&&t?.from&&t?.to)&&((0,xt.r)(e.from,t.from)&&(0,xt.r)(e.to,t.to)),Ct=e=>(0,jt.x)(e,{representation:"date"}),Nt="C1USyigFSYyc22_BmsgB",bt="Cwo5ZgH_QLzFbSjWjglf",Rt="iL7PRv0yTC9UFjHfDJDW",It="oxBa3kaduGMhYxc9I_Uu",St="x0xbkRE3CyGK_i406MSX",kt="zT6EzYpjnj9pMKhMFQB7",Dt="YOLVSXg5_gdh0VfL2oNl",Et="ynXemVsankd4H506x8D2",Lt={formatCaption:e=>j.Ru.formatDate(e,{month:"long",year:"numeric"}),formatDay:e=>j.Ru.formatDate(e,{day:"numeric"}),formatWeekdayName:e=>j.Ru.formatDate(e,{weekday:"short"})},Ft=(0,s.memo)((e=>{const{onDone:t,onClose:n,spec:a}=e,[o,i]=(0,s.useState)(e.dateRange),r=(0,pt.W)(),c=(0,S.t)(a),l=(0,I.s)(),d=new Date,u=ft(d),m=yt(d),v=_t(o,u),h=_t(o,m);return(0,se.jsx)("div",{ref:c,children:(0,se.jsx)(P.A,{isOpen:!0,children:(0,se.jsxs)("section",{className:Nt,children:[(0,se.jsx)(g.H,{className:bt,iconOnly:B.M,size:"small",onClick:n,"aria-label":j.Ru.get("close_button_action")}),(0,se.jsxs)("div",{className:Rt,children:[(0,se.jsx)(E.E,{as:"h3",variant:"bodyMediumBold",children:j.Ru.get("live_events.date_picker_dialog_title")}),(0,se.jsxs)("div",{className:It,children:[(0,se.jsx)(gt.v,{className:St,size:"md",selectedColorSet:"brightAccent",selected:v,onClick:()=>{i(v?void 0:u),a&&l.logInteraction(a.datePresetButtonFactory({identifier:"thisWeekend",position:0}).hitUiSelect())},children:j.Ru.get("live_events.this_weekend_preset")}),(0,se.jsx)(gt.v,{className:St,size:"md",selectedColorSet:"brightAccent",selected:h,onClick:()=>{i(h?void 0:m),a&&l.logInteraction(a.datePresetButtonFactory({identifier:"nextWeekend",position:1}).hitUiSelect())},children:j.Ru.get("live_events.next_weekend_preset")})]})]}),(0,se.jsx)(vt.hv,{mode:"range",selected:o,onSelect:i,numberOfMonths:2,defaultMonth:e.dateRange?.from,fromDate:new Date,formatters:Lt,dir:r?"rtl":"ltr",modifiersClassNames:{today:kt}}),(0,se.jsxs)("div",{className:Dt,children:[(0,se.jsx)(g.H,{className:Et,size:"small",onClick:()=>{i(void 0)},disabled:!o?.from,children:j.Ru.get("live_events.date_picker_dialog_clear")}),(0,se.jsx)(ht.$,{size:"small",onClick:()=>{if(o?.from){const{from:e,to:n}=o;t({from:e,to:n||e})}else t()},children:j.Ru.get("live_events.date_picker_dialog_done")})]})]})})})})),Ut="WnIhxhr9MIQjVvkvUQTf",wt="ETRYfT8oEUJuUDLgOBUX",Mt=e=>{const[t,n]=(0,s.useState)(!1),[,a]=(0,c.ok)(),o=(0,I.s)(),i=(0,s.useMemo)((()=>e.spec?.datePickerModalFactory()),[e.spec]),r=(0,s.useMemo)((()=>e.spec?.headerFactory()),[e.spec]),l=ut(),d=ft(new Date),u=yt(new Date),m=(0,s.useCallback)((e=>{const t={filter:"all"};if(e&&(t.startDate=Ct(e.from),t.endDate=Ct(e.to),i)){const e=new URLSearchParams(t).toString();o.logInteraction(i.doneButtonFactory({uri:e}).hitUiNavigate({destination:e}))}n(!1),a(t),i&&o.logInteraction(i.doneButtonFactory({uri:new URLSearchParams(t).toString()}).hitUiHide())}),[a,i,o]),g=(0,s.useCallback)((e=>{const t={filter:"all"};_t(l,e)||(t.startDate=Ct(e.from),t.endDate=Ct(e.to)),a(t)}),[l,a]);return(0,se.jsxs)("div",{className:Ut,children:[(0,se.jsx)("div",{children:(0,se.jsx)(L.n,{className:wt,iconLeading:mt.R,onClick:()=>{n(!0),r&&o.logInteraction(r.datePickerButtonFactory().hitUiReveal())},size:"small",children:l?(0,z.tX)(l):j.Ru.get("live_events.date_picker_button_text")})}),t&&(0,se.jsx)(Ft,{onClose:()=>{n(!1),i&&o.logInteraction(i.closeButtonFactory().hitUiHide())},onDone:m,dateRange:l,spec:i}),(0,se.jsxs)("div",{children:[(0,se.jsx)(gt.v,{size:"sm",selectedColorSet:"brightAccent",selected:_t(l,d),onClick:()=>{if(g(d),r){const e={startDate:Ct(d.from),endDate:Ct(d.to)},t=new URLSearchParams(e).toString();o.logInteraction(r.datePresetButtonFactory({uri:t,identifier:"thisWeekend",position:0}).hitUiNavigate({destination:t}))}},className:wt,children:j.Ru.get("live_events.this_weekend_preset")}),(0,se.jsx)(gt.v,{size:"sm",selectedColorSet:"brightAccent",selected:_t(l,u),onClick:()=>{if(g(u),r){const e={startDate:Ct(u.from),endDate:Ct(u.to)},t=new URLSearchParams(e).toString();o.logInteraction(r.datePresetButtonFactory({uri:t,identifier:"nextWeekend",position:1}).hitUiNavigate({destination:t}))}},className:wt,children:j.Ru.get("live_events.next_weekend_preset")})]})]})},Tt=(0,s.memo)((e=>{const{eventGroups:t,locationName:n,isLoading:a,feedSpec:o,onOpenGroupedEvent:i,layout:r}=e,c=(0,s.useMemo)((()=>o?.eventSectionFactory({identifier:"all",position:1})),[o]),l=(0,S.t)(c);return a?(0,se.jsx)(w.A,{hasError:!1,errorMessage:""}):t?0===t.length||0===t[0].events.length?(0,se.jsx)(U.p,{title:j.Ru.get("concerts.error.no_concerts_found_title"),message:j.Ru.get("concerts.error.no_concerts_found_message",n),renderInline:!0}):(0,se.jsx)("div",{ref:l,children:t.map((e=>(0,se.jsxs)("div",{className:Be,children:["grid"===r&&(0,se.jsx)(M.$,{total:e.events.length,title:j.Ru.formatDate(new Date(`${e.date}T00:00:00`),{weekday:"long",day:"numeric",month:"long",year:"numeric"}),showAll:!0,withEncoreCards:!1,children:e.events.map(((e,t)=>{const n=e.concerts[0]?.concert;return(0,se.jsx)(Ye,{event:e,position:t,sectionSpec:c,onOpenGroupedEvent:i},n?.id)}))}),"list"===r&&(0,se.jsxs)("div",{children:[(0,se.jsx)(E.E,{as:"h2",variant:"titleSmall",semanticColor:"textBase",className:Se,children:j.Ru.formatDate(new Date(`${e.date}T00:00:00`),{weekday:"long",day:"numeric",month:"long",year:"numeric"})}),e.events.map(((e,t)=>{const n=e.concerts[0]?.concert;return(0,se.jsx)(lt,{event:e,position:t,sectionSpec:c,onOpenGroupedEvent:i},n?.id)}))]})]},e.date)))}):null})),Bt=(0,s.memo)((e=>{const{geonameId:t,spec:n,layout:a,onLocationNameChange:o}=e,i=ut(),l=(0,r.Zp)(),[d]=(0,c.ok)(),[u,m]=(0,s.useState)(),g=(0,Ne.W)(),v=(0,s.useMemo)((()=>n?.headerFactory()),[n]),h=(0,s.useMemo)((()=>n?.cityInfoFactory()),[n]),{data:p,isLoading:x,hasNextPage:f,isFetchingNextPage:y,fetchNextPage:_}=je({geonameId:t,startDate:i&&(0,$e.bU)(i.from),endDate:i&&(0,$e.bU)(i.to)}),C=(0,s.useMemo)((()=>(0,$e.fD)(p?.pages??[])),[p?.pages]),N=p?.pages[0]?.userLocation;(0,s.useEffect)((()=>{N&&o?.(N)}),[N,o]);const b=N||j.Ru.get("concerts.default_location");return(0,se.jsxs)("div",{children:[(0,se.jsx)(F.Q,{children:`${j.Ru.get("concerts_shows_in")} ${b}`}),(0,se.jsxs)("div",{className:Pe,children:[(0,se.jsx)(Ce.A,{handleLocationChange:e=>{g({type:"click",intent:"change-live-events-location"}),e?.geonameId&&l({pathname:(0,$e.nm)(e.geonameId,e.location),search:`?${d.toString()}`})},locationStr:b,headerSpec:v}),(0,se.jsx)(Mt,{})]}),(0,se.jsx)(Tt,{isLoading:x,locationName:b,eventGroups:C,onOpenGroupedEvent:e=>{m(e);const t=e.concerts[0]?.concert.artistUris[0];g({type:"click",intent:"open-grouped-live-event",targetUri:t})},feedSpec:n,layout:a}),f&&(0,se.jsx)("div",{className:Ae,children:(0,se.jsx)(L.n,{disabled:y,onClick:()=>{_()},children:j.Ru.get("concerts.load_more")})}),(0,se.jsx)(le,{event:u,locationName:b,feedSpec:n,onClose:()=>m(void 0)}),(0,se.jsx)(E.E,{variant:"marginal",semanticColor:"textSubdued",children:j.Ru.get("live_events.disclaimer")}),p&&p.pages[0]&&p.pages[0].userLocationGeonameId&&(0,se.jsx)(We,{geonameId:p.pages[0].userLocationGeonameId,locationName:b,spec:h})]})}));var At=n(23464),Pt=n(14431),Ot=n(95999);const Ht=(0,s.memo)((e=>{const{title:t="",identifier:n,position:a,events:o,feedSpec:i,onOpenGroupedEvent:r,layout:c}=e,l=(0,s.useMemo)((()=>i?.eventSectionFactory({identifier:n,position:a})),[i,n,a]),d=(0,S.t)(l);return 0===o.length?null:(0,se.jsxs)("div",{className:be,ref:d,children:["grid"===c&&(0,se.jsx)(Ot.pZ,{value:"headered-grid",index:a,children:(0,se.jsx)(M.$,{total:o.length,title:t,showAll:!0,withEncoreCards:!1,children:o.map(((e,t)=>{const n=e.concerts[0]?.concert;return(0,se.jsx)(Ye,{event:e,position:t,sectionSpec:l,onOpenGroupedEvent:r},n?.id)}))})}),"list"===c&&(0,se.jsxs)("div",{children:[(0,se.jsx)(E.E,{as:"h2",variant:"titleSmall",semanticColor:"textBase",className:Se,children:t}),o.map(((e,t)=>{const n=e.concerts[0]?.concert;return(0,se.jsx)(lt,{event:e,position:t,sectionSpec:l,onOpenGroupedEvent:r},n?.id)}))]})]})})),Vt=(0,s.memo)((e=>{const{spec:t,layout:n,onLocationNameChange:a}=e,[o,i]=(0,s.useState)(),[l]=(0,c.ok)(),d=fe(e.geonameId),u=d.data?.userLocation||j.Ru.get("concerts.default_location"),m=(0,s.useMemo)((()=>t?.headerFactory()),[t]),g=(0,r.Zp)();return(0,s.useEffect)((()=>{d.data?.userLocation&&a?.(d.data.userLocation)}),[d.data?.userLocation,a]),(0,se.jsxs)("div",{children:[(0,se.jsx)(F.Q,{children:`${j.Ru.get("concerts_shows_in")} ${u}`}),(0,se.jsx)("div",{className:Pe,"data-testid":"location-selector",children:(0,se.jsx)(Ce.A,{handleLocationChange:e=>{(0,At.d)({action_type:"click",action_intent:"change-live-events-location",view_uri:"",item_id:""}),e?.geonameId&&g({pathname:(0,$e.nm)(e.geonameId,e.location),search:`?${l.toString()}`})},locationStr:u,headerSpec:m})}),(0,se.jsxs)("div",{className:Oe,children:[(0,se.jsx)(E.E,{variant:"titleSmall",semanticColor:"textBase",children:j.Ru.get("live_events.for_you_anonymous_heading")}),(0,se.jsx)(E.E,{variant:"bodyMedium",className:He,semanticColor:"textSubdued",children:j.Ru.get("live_events.for_you_anonymous_subheading")}),(0,se.jsx)(ht.$,{colorSet:"invertedLight",className:Ve,onClick:()=>(0,Pt.ie)(),children:j.Ru.get("live_events.sign_up_free")})]}),d.data&&(0,se.jsx)(Ht,{title:j.Ru.get("concerts.popular_concerts_near",u),identifier:"popular",position:0,events:d.data.events,onOpenGroupedEvent:e=>{i(e);const t=e.concerts[0]?.concert.artistUris[0];(0,At.d)({action_type:"click",action_intent:"open-grouped-live-event",target_uri:t,view_uri:"",item_id:""})},feedSpec:t,layout:n}),(0,se.jsx)(le,{event:o,locationName:u,feedSpec:t,onClose:()=>i(void 0)}),(0,se.jsx)(E.E,{variant:"marginal",semanticColor:"textSubdued",children:j.Ru.get("live_events.disclaimer")}),d.data&&d.data.userLocationGeonameId&&(0,se.jsx)(We,{geonameId:d.data.userLocationGeonameId,locationName:u})]})})),zt=(0,s.memo)((e=>{const{isLoading:t,events:n,locationName:a,spec:o,layout:s,onOpenGroupedEvent:i}=e;if(t)return(0,se.jsx)(w.A,{hasError:!1,errorMessage:""});if(0===n.length)return(0,se.jsx)(U.p,{title:j.Ru.get("concerts.error.no_concerts_found_title"),message:j.Ru.get("concerts.error.no_concerts_found_message",a),renderInline:!0});const r=(e=>{const t={popular:[],recommended:[],online:[]};return e.forEach((e=>{switch(e.source){case"recommendation":t.recommended.push(e);break;case"popular":t.popular.push(e);break;case"online":t.online.push(e)}})),t})(n);return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(Ht,{title:j.Ru.get("concerts_upcoming_virtual_events"),identifier:"online",position:0,events:r.online,onOpenGroupedEvent:i,feedSpec:o,layout:s}),(0,se.jsx)(Ht,{title:j.Ru.get("concerts_recommended_for_you"),identifier:"recommended",position:1,events:r.recommended,onOpenGroupedEvent:i,feedSpec:o,layout:s}),(0,se.jsx)(Ht,{title:j.Ru.get("concerts.popular_concerts_near",a),identifier:"popular",position:2,events:r.popular,onOpenGroupedEvent:i,feedSpec:o,layout:s})]})}));var Gt=n(7125),Kt=n(72423),Wt=n(42529),$t=n(24577),qt=n(3775),Xt=n(16990);const Zt=new qt.l("promoCardPlaylist","query","ad0959194c2cec8bf10b87c74923628dd7c2ef2abbd217374279b0bc728c3cc2",null),Qt="Cot6ZntaldMo77XCx1dt",Yt="vfWT92cAm89qtD3Lwfrc",Jt="XyJgy3JOLfeFBo2CiltA",en="UI2hGxMrqbScQtyg3FzT",tn="mnwdEtmP084CWa7aUEzN",nn=()=>{const e=(0,Gt.V)(),t=(0,s.useContext)(Wt.w),{data:n}=(0,de.I)({queryKey:["cny-resolve"],queryFn:()=>t.resolvePlaylistFormatURI("spotify:playlist-format:concerts-near-you"),enabled:!e,staleTime:1/0}),{data:a}=(o={uri:n},i={enabled:!!n},(0,Xt.I)(Zt,o,i));var o,i;if("Playlist"===a?.playlistV2.__typename)return a.playlistV2},an=(0,s.memo)((e=>{const t=nn();if(!t)return null;const n=(0,$t.g)(t.images.items[0]?.sources,{desiredSize:88});return(0,se.jsxs)(V.default,{to:t.uri,className:Qt,children:[(0,se.jsx)(Kt._,{src:n?.url,loading:"lazy",alt:"",ariaHidden:!0,className:Yt}),(0,se.jsxs)("div",{className:Jt,children:[(0,se.jsx)(E.E,{as:"h3",variant:"bodyMediumBold",className:en,children:t.name}),(0,se.jsx)(E.E,{as:"p",variant:"bodySmall",className:tn,children:t.description})]})]})})),on=(0,s.memo)((e=>{const{geonameId:t,spec:n,layout:i,onLocationNameChange:c}=e,l=(0,r.Zp)(),[d,u]=(0,s.useState)(),m=(0,Ne.W)(),g=(0,s.useMemo)((()=>n.headerFactory()),[n]),{data:v,isLoading:h}=xe({geonameId:t});(0,s.useEffect)((()=>{v?.userLocation&&c?.(v.userLocation)}),[v?.userLocation,c]);const p=(0,a.NC)(o.P98,{loadingValue:!1}),x=v?.userLocation||j.Ru.get("concerts.default_location");return(0,se.jsxs)("div",{children:[(0,se.jsx)(F.Q,{children:`${j.Ru.get("concerts_shows_in")} ${x}`}),(0,se.jsx)("div",{className:Pe,"data-testid":"location-selector",children:(0,se.jsx)(Ce.A,{handleLocationChange:e=>{m({type:"click",intent:"change-live-events-location"}),e?.geonameId&&l((0,$e.nm)(e.geonameId,e.location))},locationStr:x,headerSpec:g})}),p&&(0,se.jsx)("div",{className:Ke,children:(0,se.jsx)(an,{})}),(0,se.jsx)(zt,{isLoading:h,events:v?.events||[],locationName:x,spec:n,onOpenGroupedEvent:e=>{u(e);const t=e.concerts[0]?.concert.artistUris[0];m({type:"click",intent:"open-grouped-live-event",targetUri:t})},layout:i}),(0,se.jsx)(le,{event:d,locationName:x,feedSpec:n,onClose:()=>u(void 0)}),(0,se.jsx)(E.E,{variant:"marginal",semanticColor:"textSubdued",children:j.Ru.get("live_events.disclaimer")}),v&&v.userLocationGeonameId&&(0,se.jsx)(We,{geonameId:v.userLocationGeonameId,locationName:x})]})})),sn=(0,s.memo)((e=>{const{spec:t,layout:n}=e,[a,o]=(0,s.useState)(),i=(0,de.I)({queryKey:["savedConcerts"],queryFn:he}),r=(0,Ne.W)(),c=i.data?.userLocation,l=c||j.Ru.get("concerts.default_location");return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(F.Q,{children:`${j.Ru.get("live_events.label")}`}),i.data?.events.length?(0,se.jsx)(se.Fragment,{children:(0,se.jsx)(Ht,{title:j.Ru.get("concerts_upcoming"),identifier:"saved",position:0,events:i.data?.events,feedSpec:t,onOpenGroupedEvent:e=>{o(e);const t=e.concerts[0]?.concert.artistUris[0];r({type:"click",intent:"open-grouped-live-event",targetUri:t})},layout:n})}):(0,se.jsxs)("div",{className:Fe,children:[(0,se.jsx)(E.E,{as:"h2",variant:"titleSmall",semanticColor:"textBase",className:Me,children:j.Ru.get("concerts_interested_in_live_events")}),(0,se.jsx)(E.E,{as:"p",className:Te,children:j.Ru.get("concerts_no_events_description")}),(0,se.jsx)(V.default,{to:"/concerts",className:Ue,children:(0,se.jsx)(L.n,{as:"span",className:we,children:j.Ru.get("concerts_browse_more_events")})})]}),(0,se.jsx)(E.E,{variant:"marginal",semanticColor:"textSubdued",children:j.Ru.get("live_events.disclaimer")}),(0,se.jsx)(le,{event:a,locationName:l,feedSpec:t,onClose:()=>o(void 0)})]})})),rn=l.blueViolet100,cn=()=>{const{isAnonymous:e}=(0,i.d4)(R.Ht),t=(0,r.zy)(),n=t.pathname+t.search,o=(0,I.s)(),l=(0,a.NC)(D.oq),[E,L]=(0,s.useState)("grid"),{spec:F}=(0,k.r)(x.s,{}),[U,w]=(0,c.ok)(),M=_e({isAnonymous:e,isInterestedEnabled:l}),T=(0,s.useMemo)((()=>F.headerFactory().liveEventsNavbarFactory({uri:n,reason:M.type})),[F,M,n]),B=(0,S.t)(T),[A,P]=(0,s.useState)(),O=[{value:"foryou",label:j.Ru.get("live_events.for_you_tab"),content:e?(0,se.jsx)(Vt,{geonameId:M.geonameId,spec:F,layout:E,onLocationNameChange:P}):(0,se.jsx)(on,{geonameId:M.geonameId,spec:F,layout:E,onLocationNameChange:P})},{value:"all",label:j.Ru.get("live_events.all_events_tab"),content:(0,se.jsx)(Bt,{geonameId:M.geonameId,spec:F,layout:E,onLocationNameChange:P})},{value:"saved",label:j.Ru.get("concerts_interested"),content:(0,se.jsx)(sn,{spec:F,layout:E})}],H=()=>{const e=F.headerFactory().layoutToggleFactory().hitToggleState({stateBeforeToggle:E,stateAfterToggle:"grid"===E?"list":"grid"});o.logInteraction(e),L("grid"===E?"list":"grid")},V=e&&A?j.Ru.get("live_events.location_concert_tickets",A):j.Ru.get("live_events.label");return(0,se.jsxs)("section",{className:Re,children:[(0,se.jsxs)(y.z,{size:y.K.SMALL,backgroundColor:rn,children:[(0,se.jsx)(_.Y,{children:(0,se.jsx)(b.mm,{children:V})}),(0,se.jsx)(C.h,{children:(0,se.jsx)(N.X,{text:V})})]}),(0,se.jsxs)("div",{className:Ie,children:[(0,se.jsx)(f.K,{backgroundColor:rn}),(0,se.jsx)("div",{className:De,ref:B,children:(0,se.jsxs)(d.t,{currentTab:M.type,onTabChange:(e,n)=>{if(void 0===n)return;const a=O[n].value,s=`${t.pathname}?filter=${a}`,i=F.headerFactory().liveEventsNavbarFactory({uri:s,reason:a}).hitUiNavigate({destination:s});o.logInteraction(i),w({filter:a})},children:[(0,se.jsxs)("div",{className:Le,children:[(0,se.jsx)(u.w,{"aria-label":"live events navbar",children:O.map((e=>(0,se.jsx)(m.V,{value:e.value,id:e.value,label:e.label,className:Ee},e.value)))}),"grid"===E&&(0,se.jsx)(g.H,{"aria-label":j.Ru.get("concerts.feed_list_layout"),iconOnly:v.N,className:ke,onClick:H,size:"small"}),"list"===E&&(0,se.jsx)(g.H,{"aria-label":j.Ru.get("concerts.feed_grid_layout"),iconOnly:h.D,className:ke,onClick:H,size:"small"})]}),O.map((e=>(0,se.jsx)(p.K,{value:e.value,children:e.content},e.value)))]})})]})]})};var ln=n(24277),dn=n(33273),un=n(15891),mn=n(26360);const gn=new qt.l("concertFeed","query","96b33182d0c3f6299216f944248fb1fea45e03f17432243984d615af498e2b5d",null),vn=(e,t=me.q)=>{const{request:n}=(0,s.useContext)(un.j),a=t({queryKey:["concert-feed",e.geoHash,e.geonameId,e.dateRange],queryFn:({pageParam:t})=>(0,mn.c)(n,gn,{...e,paginationKey:""===t?null:t}),staleTime:6e4,gcTime:6e4,enabled:!!e.geoHash||!!e.geonameId,initialPageParam:"",getNextPageParam:e=>{if(!(0,dn.Bw)(e?.data?.liveEventsFeed))return"";const t=e.data.liveEventsFeed.sections.find((e=>"AllEvents"===e.__typename))??{};return(0,dn.dR)(t)?t.paginationKey:""}}),o=(e=>{const t=e?.reduce(((e,t)=>{const n=e?.liveEventsFeed,a=t?.data?.liveEventsFeed;if(!(0,dn.Bw)(a)||!(0,dn.Bw)(n))return e;const o=n.sections.find((e=>"AllEvents"===e.__typename))??{},s=(0,dn.dR)(o)?o.sections:[];return{liveEventsFeed:{sections:a.sections.map((e=>{if("AllEvents"!==e.__typename&&!(0,dn.dR)(e))return e;const t=s.map((t=>{const n=t.key,a=e.sections.find((e=>e.key===n));return{...t,concerts:[...t.concerts,...a?.concerts??[]]}})),n=e.sections.filter((e=>t.findIndex((t=>t.key===e.key))));return{...e,sections:[...t,...n]}}))}}}),{liveEventsFeed:{sections:[]}});return t})(a.data?.pages);return{...a,data:o}},hn=e=>{const[t]=e;if(!("visuals"in t.data))return;const[n]=t.data.visuals.avatarImage?.sources??[];return n?.url},pn=e=>{const[t,n]=(0,s.useState)(!1),a=(0,s.useMemo)((()=>{if(!(0,dn.ys)(e))return;const[t]=e.concerts;if(!(0,dn.$V)(t))return;const n=(0,H.o_)(t.data.uri);return e.spec?.eventCardFactory({identifier:n?.id,position:e.position,uri:t.data.uri})}),[e]),o=(0,I.s)(),i=(0,S.t)(a);if(!(0,dn.ys)(e))return;const[r]=e.concerts;if(!(0,dn.$V)(r))return;const[c]=r.data.artists.items,l=hn(r.data.artists.items),{startDate:d,endDate:u}=(0,z.Vi)(e.concerts);return{isModalOpen:t,handleClick:e=>{e.preventDefault(),n(!0),a&&o.logInteraction(a.hitUiReveal())},handleClose:()=>n(!1),concert:{uri:r.data.uri,title:r.data.title,imageUrl:l,dateRange:(0,z.WZ)(d,u),startDateIsoString:r.data.startDateIsoString},artist:{uri:"uri"in c.data?c.data.uri:"",name:"profile"in c.data?c.data.profile.name:"",image:l??""},location:{city:r.data.location.city,venue:r.data.location.name},totalConcerts:e.concerts.length,concerts:e.concerts.map((e=>(0,dn.$V)(e)?{uri:e.data.uri,title:e.data.title,location:{city:e.data.location.city,venue:e.data.location.name},startDateIsoString:e.data.startDateIsoString}:null)).filter(dn.se),ref:i}},xn=e=>{const t=(0,I.s)(),n=(0,s.useMemo)((()=>{const t=(0,H.o_)((0,dn.$V)(e)?e.data.uri:"");return e.spec?.eventCardFactory({identifier:t?.id,position:e.position,uri:t?.toURI()??""})}),[e]);if(!(0,dn.$V)(e))return;return{imageUrl:hn(e.data.artists.items)??"",uri:e.data.uri,title:e.data.title,subTitle:[e.data.location.name,e.data.location.city].join(j.Ru.getSeparator()),date:e.data.startDateIsoString,dateRange:(0,z.Y)(new Date(e.data.startDateIsoString)),handleClick:()=>n&&t.logInteraction(n.hitUiNavigate({destination:e.data.uri}))}},jn="V5SKycHF8ljKTRcTXM52",fn="CzWhnZA1N50SUeRTGNXg",yn="kA_2O3KDNrREQ60CWtsH",_n="eIRhBzZ6DVZOR5G3KjAQ",Cn="o9A1xL55C2qn_cIvXSfJ",Nn={ConcertGroup:e=>{const t=pn(e);return t?(0,se.jsxs)("div",{ref:t.ref,children:[(0,se.jsx)(it,{onClick:t.handleClick,uri:t.concert.uri,title:t.concert.title,image:t.concert.imageUrl??"",subTitle:j.Ru.get("concerts.count",t.concerts.length),dateRange:t.concert.dateRange}),t.isModalOpen&&(0,se.jsx)(re,{onClose:t.handleClose,artist:t.artist,location:t.location,concerts:t.concerts})]}):null},ConcertV2ResponseWrapper:e=>{const t=xn(e);return t?(0,se.jsx)(it,{uri:t.uri,title:t.title,subTitle:t.subTitle,image:t.imageUrl,date:t.date,onClick:t.handleClick}):null}},bn=e=>{const t=(0,s.useMemo)((()=>e.spec?.eventSectionFactory({identifier:"all",position:e.position??0})),[e.spec,e.position]),n=(0,S.t)(t);return 0===e.concerts.length?null:(0,se.jsxs)("div",{ref:n,className:Cn,children:[(0,se.jsx)(E.E,{as:"h2",variant:"titleSmall",semanticColor:"textBase",children:e.title}),e.concerts.map(((e,n)=>{if(a=e.__typename,!Object.keys(Nn).includes(a??""))return null;var a;const o=Nn[e.__typename];return(0,se.jsx)(o,{position:n,spec:t,...e},n)})).filter(dn.se)]})},Rn={ConcertGroup:e=>{const t=pn(e);return t?(0,se.jsxs)("div",{ref:t.ref,children:[(0,se.jsx)(Xe.A,{onClick:t.handleClick,uri:t.concert.uri,title:t.concert.title,imageUrl:t.concert.imageUrl,subTitle:`${t.concert.dateRange} • ${j.Ru.get("concerts.count",t.totalConcerts)}`}),t.isModalOpen&&(0,se.jsx)(re,{onClose:t.handleClose,artist:t.artist,location:t.location,concerts:t.concerts})]}):null},ConcertV2ResponseWrapper:e=>{const t=xn(e);return t?(0,se.jsx)(Xe.A,{uri:t.uri,title:t.title,subTitle:t.subTitle,imageUrl:t.imageUrl,date:t.date,onClick:t.handleClick}):null}},In=e=>{const t=(0,s.useMemo)((()=>e.spec?.eventSectionFactory({identifier:"all",position:e.position??0})),[e.spec,e.position]),n=(0,S.t)(t);return(0,se.jsx)("div",{ref:n,children:(0,se.jsx)(M.$,{total:e.concerts.length,title:e.title,showAll:!0,withEncoreCards:!1,children:e.concerts.map(((e,n)=>{if(a=e.__typename,!Object.keys(Rn).includes(a??""))return null;var a;const o=Rn[e.__typename];return(0,se.jsx)(o,{position:n,spec:t,...e},n)})).filter(dn.se)})})},Sn={AllEvents:e=>{if(!(0,dn.dR)(e))return null;const t="grid"===e.layout?In:bn;return(0,se.jsxs)("div",{children:[e.sections.map(((n,a)=>{return(0,se.jsx)(t,{position:a,title:(o=n.key,o?.match(/^(\d{4})-(\d{2})-(\d{2})$/)?(0,z.Fn)(new Date(o)):j.Ru.get("live_events.all_events_tab")),concerts:n.concerts,spec:e.spec},a);var o})),e.fetchNextPage&&(0,se.jsx)(L.n,{onClick:()=>e.fetchNextPage&&e.fetchNextPage(),children:j.Ru.get("concerts.load_more")})]})},RecommendedEvents:e=>{if(!(0,dn.XE)(e))return null;const t="grid"===e.layout?In:bn;return(0,se.jsx)(t,{title:j.Ru.get("concerts_recommended_for_you"),concerts:e.concerts,spec:e.spec})}},kn=e=>{const{data:t,isLoading:n,error:a,fetchNextPage:o}=vn({geoHash:e.location.geoHash||null,geonameId:e.location.geonameId||null,dateRange:e.dateRange?.from&&e.dateRange?.to?{from:(0,$e.bU)(e.dateRange?.from),to:(0,$e.bU)(e.dateRange.to)}:null});return n?(0,se.jsx)(w.A,{hasError:!1,errorMessage:""}):!(0,dn.Bw)(t?.liveEventsFeed)||0===t.liveEventsFeed.sections.length||a?(0,se.jsx)(U.p,{title:j.Ru.get("concerts.error.no_concerts_found_title"),message:j.Ru.get("concerts.error.no_concerts_found_message",e.location.name),renderInline:!0}):(0,se.jsx)("div",{children:t?.liveEventsFeed.sections.map(((t,n)=>{if(!(0,dn.w1)(t))return null;const a=Sn[t.__typename];return(0,se.jsx)(a,{layout:e.layout,spec:e.spec,fetchNextPage:o,...t},n)})).filter(dn.se)})},Dn=new qt.l("concertLocationDetails","query","b13f195349f188fee25480ae889d782852d68663bf07743c654244454750d681",null),En=e=>{if(!e||!("items"in e))return;const[t]=e.items;return t},Ln=(e,t)=>{if(!e)return"/concerts";const n=t?.normalize().replaceAll(/\W+/g,"-");return n?`/concerts/location/${e}-${n}`:`/concerts/location/${e}`},Fn=(e=r.g)=>{const t=(0,Ne.W)(),{isAnonymous:n}=(0,i.d4)(R.Ht),{location:a}=e(),o=(0,r.Zp)(),[,c]=a?.match(/^(\d+)/)??[],[l,d]=(0,s.useState)(c?{geonameId:Number(c)}:void 0),{data:u}=(m={geonameId:l?.geonameId?String(l?.geonameId):null,isAnonymous:n},(0,Xt.I)(Dn,m,g));var m,g;const v=e=>{d(e),t({type:"click",intent:"change-live-events-location"}),e?.geonameId&&o({pathname:String(e.geonameId)===u?.me?.profile?.location?.geonameId?"/concerts":Ln(e.geonameId,e.location)})};if(l){const e=En(u?.concertLocations);return{location:{geonameId:l.geonameId??Number(e?.geonameId),geohash:l.geohash??e?.geoHash,name:l.name??e?.name},onChangeLocation:v}}const h=u?.me?.profile?.location,p=En(u?.concertLocations);return{location:h?.geoHash||p?.geonameId?{geohash:h?.geoHash??p?.geoHash,geonameId:Number(h?.geonameId??p?.geonameId),name:h?.name??p?.name}:void 0,onChangeLocation:v}},Un=()=>{const{isAnonymous:e}=(0,i.d4)(R.Ht),[t,n]=(0,s.useState)("grid"),{location:a,onChangeLocation:o}=Fn(),r=ut(),[d,u]=(0,c.ok)(),{spec:m}=(0,k.r)(x.s,{}),p=(0,s.useMemo)((()=>m.headerFactory()),[m]),S=(0,I.s)(),D=e&&a?.name?j.Ru.get("live_events.location_concert_tickets",a.name):j.Ru.get("live_events.label"),E=()=>{const e=p.layoutToggleFactory().hitToggleState({stateBeforeToggle:t,stateAfterToggle:"grid"===t?"list":"grid"});S.logInteraction(e),n("grid"===t?"list":"grid")},L="interested"===d.get("filter"),F=L?ht.$:g.H;return(0,se.jsxs)("section",{children:[(0,se.jsxs)(y.z,{size:y.K.SMALL,backgroundColor:l.blueViolet100,children:[(0,se.jsx)(_.Y,{children:(0,se.jsx)(b.mm,{children:D})}),(0,se.jsx)(C.h,{children:(0,se.jsx)(N.X,{text:D})})]}),(0,se.jsxs)("div",{children:[(0,se.jsx)(f.K,{backgroundColor:l.blueViolet100}),(0,se.jsxs)("div",{className:jn,children:[(0,se.jsxs)("div",{className:fn,children:[L?(0,se.jsx)("div",{}):(0,se.jsxs)("div",{className:yn,children:[(0,se.jsx)(Ce.A,{headerSpec:p,locationStr:a?.name??"",handleLocationChange:o}),(0,se.jsx)(Mt,{spec:m})]}),(0,se.jsxs)("div",{className:_n,children:["grid"===t&&(0,se.jsx)(g.H,{"aria-label":j.Ru.get("concerts.feed_list_layout"),iconOnly:v.N,onClick:E,size:"small"}),"list"===t&&(0,se.jsx)(g.H,{"aria-label":j.Ru.get("concerts.feed_grid_layout"),iconOnly:h.D,onClick:E,size:"small"}),(0,se.jsx)(F,{size:"small",iconLeading:ln.E,onClick:()=>u({filter:L?"":"interested"}),children:j.Ru.get("concerts_interested")})]})]}),L?(0,se.jsx)(sn,{layout:t,spec:m}):(0,se.jsx)(kn,{spec:m,layout:t,location:{geoHash:a?.geohash,geonameId:a?.geonameId?String(a.geonameId):"",name:a?.name??""},dateRange:r})]})]})]})},wn=()=>(0,a.NC)(o.iNb)?(0,se.jsx)(Un,{}):(0,se.jsx)(cn,{})},38064:(e,t,n)=>{n.d(t,{bU:()=>c,fD:()=>i,he:()=>r,nm:()=>o});var a=n(42534);const o=(e,t)=>{if(!e)return"/concerts";const n=t?.normalize().replaceAll(/\W+/g,"-");return n?`/concerts/location/${e}-${n}`:`/concerts/location/${e}`},s=10;function i(e){if(0===e.length)return[];if(0===e[0].events.length)return[];const t=[];let n={date:e[0].events[0].openingDate.slice(0,s),events:[]};for(const a of e)for(const e of a.events){const a=e.openingDate.slice(0,s);n.date!==a&&(t.push(n),n={date:a,events:[]}),n.events.push(e)}return t.push(n),t}const r=e=>e.ticketers.some((e=>"spotify"===e.partnerDisplayName.toLowerCase())),c=e=>(0,a.x)(e,{representation:"date"})}}]);
//# sourceMappingURL=xpui-routes-collection-concerts.js.map