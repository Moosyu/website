const s_stylePath="/css/comment-widget-min.css",s_formId="1FAIpQLScfGWAve7dy54tUkVxhd8apXNcAxallNWV4K1yKCUMqJcBadQ",s_nameId="1345813367",s_websiteId="1029334929",s_textId="1058530777",s_pageId="1179760552",s_replyId="802495416",s_sheetId="1gdeW-A8Nhi-StMJb75n1QHQOQYKUBVXhfKnQF1Eo1Ts",s_timezone=12,s_daylightSavings=!0,s_dstStart=["September","Sunday",29,2],s_dstEnd=["April","Sunday",2,3],s_commentsPerPage=10,s_maxLength=500,s_maxLengthName=16,s_commentsOpen=!0,s_collapsedReplies=!0,s_longTimestamp=!1;let s_includeUrlParameters=!1;const s_fixRarebitIndexPage=!1,s_wordFilterOn=!0,s_filterReplacement="****",s_filteredWords=["nigger","faggot","nigga","rape","niggers","niggas","nigur","niiger","niigr","chink","niger","fag"],s_widgetTitle="leave a comment!",s_submitButtonLabel="submit",s_loadingText="loading comments... (or its broken)",s_noCommentsText="no comments yet!",s_closedCommentsText="comments are closed temporarily!",s_websiteText="website",s_replyButtonText="reply",s_mentionButton="@mention",s_replyingText="replying to",s_expandRepliesText="show replies",s_hideRepliesText="hide replies",s_leftButtonText="<<",s_rightButtonText=">>",c_cssLink=document.createElement("link");c_cssLink.type="text/css",c_cssLink.rel="stylesheet",c_cssLink.href="/css/comment-widget-min.css",document.getElementsByTagName("head")[0].appendChild(c_cssLink);const v_mainHtml=`
    <div id="c_inputDiv">
        <form autocomplete="off" id="c_form" onsubmit="c_submitButton.disabled = true; v_submitted = true;" method="post" target="c_hiddenIframe" action="https://docs.google.com/forms/d/e/1FAIpQLScfGWAve7dy54tUkVxhd8apXNcAxallNWV4K1yKCUMqJcBadQ/formResponse"></form>
    </div>
    <div id="c_container">loading comments... (or its broken)</div>
`,v_formHtml=`
    <h2 id="c_widgetTitle">leave a comment!</h2>
    <p>when i inevitably throw myself off a bridge its on you guys' shoulders</p>

    <div class="non-message">
        <div id="c_nameWrapper" class="c-inputWrapper">
            <input class="c-input c-nameInput" name="entry.${s_nameId}" id="entry.${s_nameId}" type="text" maxlength="16" placeholder="name (required)" required>
        </div>

        <div id="c_websiteWrapper" class="c-inputWrapper">
            <input class="c-input c-websiteInput" name="entry.${s_websiteId}" id="entry.${s_websiteId}" placeholder="website (optional)" type="url" pattern="https://.*">
        </div>
    </div>

    <div class="emoji-panel">
        <img class="emoji-listed" src="/assets/emojis/smile.webp" alt=":smile:" onclick="addEmoji('emoji1')">
        <img class="emoji-listed" src="/assets/emojis/annoyed.webp" alt=":annoyed:" onclick="addEmoji('emoji2')">
        <img class="emoji-listed" src="/assets/emojis/talk.webp" alt=":talk:" onclick="addEmoji('emoji3')">
        <img class="emoji-listed" src="/assets/emojis/pissed.webp" alt=":pissed:" onclick="addEmoji('emoji4')">
        <img class="emoji-listed" src="/assets/emojis/nervous.webp" alt=":nervous:" onclick="addEmoji('emoji5')">
        <img class="emoji-listed" src="/assets/emojis/cool.webp" alt=":cool:" onclick="addEmoji('emoji6')">
    </div>

    <div id="c_textWrapper" class="c-inputWrapper">
        <textarea class="c-input c-textInput" name="entry.${s_textId}" id="entry.${s_textId}" maxlength="500" placeholder="enter a message (please be nice)" required>
        </textarea>
        <span class="emoji" onclick="emojiWindow()">😊</span>
    </div>

    <input id="c_submitButton" name="c_submitButton" type="submit" value="submit" disabled>
`;document.getElementById("c_widget").innerHTML=v_mainHtml;const c_form=document.getElementById("c_form");c_form.innerHTML=v_formHtml;const c_container=document.getElementById("c_container");let v_pageNum=1,v_amountOfPages=1,v_commentMax=1,v_commentMin=1,v_filteredWords;v_filteredWords=RegExp(String.raw`\b(${v_filteredWords=s_filteredWords.join("|")})\b`,"ig");let c_submitButton;c_submitButton=document.getElementById("c_submitButton");let v_pagePath=window.location.pathname.replace(/\/+$/,"");(""===v_pagePath||"/index.html"===v_pagePath)&&(v_pagePath="/"),s_includeUrlParameters&&(v_pagePath+=window.location.search);const c_pageInput=document.createElement("input");c_pageInput.value=v_pagePath,c_pageInput.type="text",c_pageInput.style.display="none",c_pageInput.id="entry.1179760552",c_pageInput.name=c_pageInput.id,c_form.appendChild(c_pageInput);let c_replyingText=document.createElement("span");c_replyingText.style.display="none",c_replyingText.id="c_replyingText",c_form.appendChild(c_replyingText),c_replyingText=document.getElementById("c_replyingText");let c_replyInput=document.createElement("input");c_replyInput.type="text",c_replyInput.style.display="none",c_replyInput.id="entry."+s_replyId,c_replyInput.name=c_replyInput.id,c_form.appendChild(c_replyInput),c_replyInput=document.getElementById("entry."+s_replyId);let v_submitted=!1,c_hiddenIframe=document.createElement("iframe");function fixFrame(){v_submitted=!1,c_hiddenIframe.srcdoc="",getComments()}function getComments(){c_submitButton.disabled,c_replyingText.style.display="none",c_replyInput.value="",document.getElementById(`entry.${s_nameId}`).value="",document.getElementById(`entry.${s_websiteId}`).value="",document.getElementById(`entry.${s_textId}`).value="";let e=getSheet("https://docs.google.com/spreadsheets/d/1gdeW-A8Nhi-StMJb75n1QHQOQYKUBVXhfKnQF1Eo1Ts/gviz/tq?");e.then(e=>{let t=JSON.parse(e.split("\n")[1].replace(/google.visualization.Query.setResponse\(|\);/g,"")),n=t.table.cols.findIndex(e=>"Page"==e.label),s=[];if(t.table.parsedNumHeaders>0)for(r=0;r<t.table.rows.length;r++){let a;if((a=t.table.rows[r].c[n]?t.table.rows[r].c[n].v:"")==v_pagePath){let l={};for(c=0;c<t.table.cols.length;c++){let o;o=t.table.rows[r].c[c]?t.table.rows[r].c[c].v:"",l[t.table.cols[c].label]=o}l.Timestamp2=t.table.rows[r].c[0].f,s.push(l)}}0==s.length||Object.keys(s[0]).length<2?c_container.innerHTML="no comments yet!":displayComments(s),c_submitButton.disabled=!1})}function getSheet(e){return new Promise(function(t,n){fetch(e).then(e=>{e.ok?e.text().then(e=>{e||n("Invalid data pulled from sheet"),t(e)}):n("Could not find Google Sheet with that URL")})})}c_hiddenIframe.id="c_hiddenIframe",c_hiddenIframe.name="c_hiddenIframe",c_hiddenIframe.style.display="none",c_hiddenIframe.setAttribute("onload","if(v_submitted){fixFrame()}"),c_form.appendChild(c_hiddenIframe),c_hiddenIframe=document.getElementById("c_hiddenIframe");let a_commentDivs=[];function displayComments(e){a_commentDivs=[],c_container.innerHTML="";let t=[];for(i=0;i<e.length;i++)e[i].Reply&&(t.push(e[i]),e.splice(i,1),i--);for(v_amountOfPages=Math.ceil(e.length/10),v_commentMin=(v_commentMax=10*v_pageNum)-10,e.reverse(),i=0;i<e.length;i++){let n=createComment(e[i]),s=document.createElement("button");s.innerHTML="reply",s.value=n.id,s.setAttribute("onclick","openReply(this.value)"),s.className="c-replyButton",n.appendChild(s),n.style.display="none",i>=v_commentMin&&i<v_commentMax&&(n.style.display="block"),n.className="c-comment",c_container.appendChild(n),a_commentDivs.push(document.getElementById(n.id))}for(i=0;i<t.length;i++){let a=createComment(t[i]),l=t[i].Reply,o=document.getElementById(l),m;document.getElementById(l+"-replies")?m=document.getElementById(l+"-replies"):((m=document.createElement("div")).id=l+"-replies",m.style.display="none",m.className="c-replyContainer",o.appendChild(m)),a.className="c-reply",m.appendChild(a);let d=document.createElement("button");d.innerHTML="@mention",d.className="c-replyButton",a.appendChild(d),d.addEventListener("click",function(){let e=document.getElementById("entry."+s_textId);e.focus(),openReply(this.closest(".c-comment").id),e.value=`@${this.parentElement.id.split("|--|")[0]} `})}{let p=document.getElementsByClassName("c-replyContainer");for(i=0;i<p.length;i++){let u=p[i].childNodes.length,g=p[i].parentElement,y=document.createElement("button");y.innerHTML=s_expandRepliesText+` (${u})`,y.setAttribute("onclick","expandReplies(this.parentElement.id)"),y.className="c-expandButton",g.insertBefore(y,g.lastChild)}}if(v_amountOfPages>1){let h=document.createElement("div");(leftButton=document.createElement("button")).innerHTML="<<",leftButton.id="c_leftButton",leftButton.name="left",leftButton.setAttribute("onclick","changePage(this.name)"),1==v_pageNum&&(leftButton.disabled=!0),leftButton.className="c-paginationButton",h.appendChild(leftButton);let f=document.createElement("span");f.id="c_pageInfo",f.innerHTML=`1/${v_amountOfPages}`,h.appendChild(f),(rightButton=document.createElement("button")).innerHTML=">>",rightButton.id="c_rightButton",rightButton.name="right",rightButton.setAttribute("onclick","changePage(this.name)"),v_pageNum==v_amountOfPages&&(rightButton.disabled=!0),rightButton.className="c-paginationButton",h.appendChild(rightButton),h.id="c_pagination",c_container.appendChild(h)}}function createComment(e){let t=document.createElement("div"),n,s;s=convertTimestamp(e.Timestamp)[1];let a=e.Name+"|--|"+e.Timestamp2;t.id=a;let l=document.createElement("h3"),o=e.Name;if(o=o.replace(v_filteredWords,s_filterReplacement),l.innerText=o,l.className="c-name",t.appendChild(l),e.Website){let m=document.createElement("a");m.innerText="website",m.href=e.Website,m.className="c-site",t.appendChild(m)}let d=document.createElement("span");d.innerText=s,d.className="c-timestamp",t.appendChild(d);let p=document.createElement("p"),u=e.Text;return u=(u=u.replace(v_filteredWords,s_filterReplacement)).replace(/:(smile|annoyed|talk|pissed|nervous|cool):/g,function(e,t){let n={smile:"smile",annoyed:"annoyed",talk:"talk",pissed:"pissed",nervous:"nervous",cool:"cool"}[t];return n?`<img src="/assets/emojis/${n}.webp" class="c-emoji" alt="${n}">`:e}),p.innerHTML=sanitizeInput(u),p.className="c-text",t.appendChild(p),t}function sanitizeInput(e){let t=e.replace(/<(?!img\b)[^>]*>/gi,""),n=t.replace(/<img\b[^>]*src=["'](?!\/assets\/emojis\/)[^"']*["'][^>]*>/gi,""),s=n.replace(/^(@\w+)/,'<span class="highlight-mention">$1</span>');return s}function convertTimestamp(e){let t=e.split("(")[1].split(")")[0].split(","),n=new Date(t[0],t[1],t[2],t[3],t[4],t[5]),s=-((720+n.getTimezoneOffset())*1),a=new Date(n.getTime()+6e4*s);a=isDST(a);let l=a.toLocaleString("en-GB"),o=a.toLocaleDateString("en-GB");return[l,o]}function isDST(e){let t=[getMonthNum(s_dstStart[0]),getDayNum(s_dstStart[1]),s_dstStart[2],s_dstStart[3]],n=[getMonthNum(s_dstEnd[0]),getDayNum(s_dstEnd[1]),s_dstEnd[2],s_dstEnd[3]],s=e.getFullYear(),a=new Date(s,t[0],1);a=nthDayOfMonth(t[1],t[2],a,t[3]).getTime();let l=new Date(s,n[0],1);return l=nthDayOfMonth(n[1],n[2],l,n[3]).getTime(),(time=e.getTime())>=a&&time<l&&e.setHours(e.getHours()-1),e}function nthDayOfMonth(e,t,n,s){var a=0,l=new Date(n);for(l.setDate(1);a<t;)l.setDate(l.getDate()+1),l.getDay()==e&&a++;return l.setHours(s),l}function getDayNum(e){let t;switch(e.toLowerCase()){case"sunday":default:t=0;break;case"monday":t=1;break;case"tuesday":t=2;break;case"wednesday":t=3;break;case"thursday":t=4;break;case"friday":t=5;break;case"saturday":t=6}return t}function getMonthNum(e){let t;switch(e.toLowerCase()){case"january":t=0;break;case"february":t=1;break;case"march":t=2;break;case"april":t=3;break;case"may":t=4;break;case"june":t=5;break;case"july":t=6;break;case"august":t=7;break;case"september":t=8;break;case"october":t=9;break;case"november":t=10;break;case"december":t=11}return t}const link=document.createElement("a");function openReply(e){"none"==c_replyingText.style.display?(c_replyingText.innerHTML=`replying to ${e.split("|--|")[0]}...`,c_replyInput.value=e,c_replyingText.style.display="block"):(c_replyingText.innerHTML="",c_replyInput.value="",c_replyingText.style.display="none"),link.click()}function emojiWindow(){let e=document.querySelector(".non-message"),t=document.querySelector(".emoji-panel"),n="none"==e.style.display;e.style.display=n?"block":"none",t.style.display=n?"none":"flex"}function addEmoji(e){let t=document.getElementById("entry."+s_textId),n=t.selectionStart,s=t.value.substring(0,n),a=t.value.substring(n,t.value.length);t.value=s+` :${({emoji1:"smile",emoji2:"annoyed",emoji3:"talk",emoji4:"pissed",emoji5:"nervous",emoji6:"cool"})[e]||e}: `+a,t.focus()}function expandReplies(e){let t=document.getElementById(`${e}-replies`),n=document.getElementById(e),s=n.querySelector(".c-expandButton"),a=t.children.length;"none"==t.style.display?(t.style.display="block",s.innerHTML=`hide replies (${a})`):(t.style.display="none",s.innerHTML=s_expandRepliesText+` (${a})`)}function changePage(e){let t=document.getElementById("c_leftButton"),n=document.getElementById("c_rightButton"),s=document.getElementById("c_pageInfo"),a;switch(e){case"left":a=-1;break;case"right":a=1;break;default:a=0}let l=v_pageNum+a;if(!(l>v_amountOfPages)&&!(l<1))for(t.disabled=!1,n.disabled=!1,1==l&&(t.disabled=!0),l==v_amountOfPages&&(n.disabled=!0),s.innerHTML=`${l}/${v_amountOfPages}`,v_commentMin=(v_commentMax=10*(v_pageNum=l))-10,i=0;i<a_commentDivs.length;i++)a_commentDivs[i].style.display="none",i>=v_commentMin&&i<v_commentMax&&(a_commentDivs[i].style.display="block")}link.href="#c_inputDiv",document.getElementById("c_submitButton").addEventListener("click",function(){document.querySelector(".non-message").style.display="block",document.querySelector(".emoji-panel").style.display="none"}),document.querySelectorAll(".c-textInput").forEach(e=>{e.addEventListener("input",function(){this.style.height="0px",this.style.height=this.scrollHeight-7+"px"})}),getComments();