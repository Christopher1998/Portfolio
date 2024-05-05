(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();document.querySelector("#app").innerHTML=`
    <div id="fixed-wall">
        <div class="solar-system">
            <div id="sun"></div>
            <div class="mercury-orbit">
                <div class="mercury"></div>
            </div>
            <div class="venus-orbit">
                <div class="venus"></div>
            </div>
            <div class="earth-orbit">
                <div class="earth">
                    <div class="moon-orbit">
                        <div class="moon"></div>
                    </div>
                </div>
            </div>
            <div class="mars-orbit">
                <div class="mars"></div>
            </div>
            <div class="jupiter-orbit">
                <div class="jupiter"></div>
            </div>
            <div class="saturn-orbit">
                <div class="saturn">
                    <div class="saturn-rings"></div>
                </div>
            </div>
            <div class="uranus-orbit">
                <div class="uranus"></div>
            </div>
            <div class="neptune-orbit">
                <div class="neptune"></div>
            </div>
        </div> 
    </div>
    
    
    <header class="fst-cont">
    <h1 class="fst-tittle">Christopher Jiménez</h1>
    <p class="occupation-label">Computer Engineer Student</p>
    <div class="info-box"><p>I'm Christopher Jiménez, a computer enthusiast and software engineering student. 
    From a young age, I've been fascinated by the world of computers and technology, 
    always seeking ways to use them to create new and exciting things. 
    I love learning about the latest advancements in software and hardware, 
    and I'm always looking for new challenges to test my skills.</p></div>
    </header>
    <div class="projects-container">
    <h1 class="sec_title">Projects</h1>
    <div class="fst_p">
    <ol>
        <li><a class="lnk_p_t" href="https://christopher1998.github.io/Periodic_table/">Periodic Table</a></li>   
    </ol>
    </div>
    </div>
    <footer class="Hlinks"> 
    <div id="Gthb" class="gthb">
    <a href="https://github.com/Christopher1998">
    <img class="img_github" src="/Portfolio/assets/github.png">
    </a>
    <a href="https://www.linkedin.com/in/cristofer-jiménez-417540302/">
    <img class="img_lkn" src="/Portfolio/assets/linkedin.png">
    </a>
    </div></footer>
`;
