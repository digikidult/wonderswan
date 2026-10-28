/* Run `node update-catalog.cjs` after editing catalog.json. No dependencies. */
const fs=require('node:fs'),path=require('node:path');
const data=JSON.parse(fs.readFileSync(path.join(__dirname,'catalog.json'),'utf8'));
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const counts={完成:0,開發中:0,未開始:0,未有計劃:0};
data.forEach(g=>{if(!(g.status in counts))throw Error('Unknown status: '+g.status);counts[g.status]++;});
const rows=data.map(g=>`<tr><th scope="row"><div class="catalog-game"><a class="catalog-cover" href="${esc(g.cover)}" target="_blank" rel="noopener" aria-label="查看${esc(g.game)}遊戲封面大圖"><img src="${esc(g.cover)}" alt="${esc(g.game)}遊戲封面" width="76" height="96" loading="lazy"></a><span>${g.project?`<a href="#project/${esc(g.project)}">${esc(g.game)} ↗</a>`:esc(g.game)}</span></div></th><td>${esc(g.alias)}</td><td><span class="catalog-status ${g.status==='完成'?'done':g.status==='開發中'?'active':'waiting'}">${esc(g.status)}</span></td><td>${esc(g.enhanced)}</td></tr>`).join('\n');
const section=`<!-- CATALOG START -->
<section class="section catalog" id="catalog"><div class="section-heading"><div><p class="eyebrow">WONDERSWAN / COMPLETE GAME LIST</p><h2>重遊數碼世界</h2></div><p>香港演譯・全系列計劃一覽<br><small>狀態由 DigiKidult 提供</small></p></div>
<div class="catalog-summary"><span><strong>${data.length}</strong>遊戲／版本</span>${Object.entries(counts).map(([k,v])=>`<span><strong>${v}</strong>${k}</span>`).join('')}</div>
<div class="catalog-table" role="region" aria-label="完整遊戲計劃清單，可橫向捲動" tabindex="0"><table><caption>Digimon WonderSwan 翻譯計劃一覽</caption><thead><tr><th scope="col">Game</th><th scope="col">別名</th><th scope="col">Status</th><th scope="col">優化版本</th></tr></thead><tbody>${rows}</tbody></table></div>
<p class="catalog-key">「完成」為項目開發狀態，不代表已有公開下載。「優化版本」沿用項目資料：Yes＝有；TBC＝待確認；—＝未提供資料。優化版本與中文翻譯的發佈狀態分開處理。</p>
<p class="catalog-key">V龍獸版為香港英文版本；「格鬥之王2.0」為本頁別名。每個作品均可由遊戲名稱開啟獨立詳情頁；未提供的介紹及版本資料標示為待補充。</p></section>
<!-- CATALOG END -->`;
const file=path.join(__dirname,'index.html');let html=fs.readFileSync(file,'utf8');
if(html.includes('<!-- CATALOG START -->'))html=html.replace(/<!-- CATALOG START -->[\s\S]*?<!-- CATALOG END -->/,section);else html=html.replace('<section id="projects"',section+'\n<section id="projects"');
fs.writeFileSync(file,html);
console.log(`Updated ${data.length} games: ${JSON.stringify(counts)}`);

