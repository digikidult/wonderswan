(() => {
  const $ = s => document.querySelector(s);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL = value => { try { const u = new URL(value); return u.protocol === 'https:' ? u.href : null; } catch { return null; } };
  const patchURL = r => r?.ownerApproved === true && /^downloads\/[A-Za-z0-9._+-]+\.ips$/.test(r.url) ? r.url : safeURL(r?.url);
  const released = p => p.verifiedRelease && (p.status === 'released' || p.verifiedRelease.ownerApproved === true) && /^\d{4}-\d{2}-\d{2}$/.test(p.verifiedRelease.verifiedOn) && p.verifiedRelease.format === 'IPS' && patchURL(p.verifiedRelease) && (p.verifiedRelease.ownerApproved === true ? /^[a-f0-9]{64}$/i.test(p.sha256?.ips || '') : safeURL(p.verifiedRelease.source)) && p.verifiedRelease.version && p.verifiedRelease.baseROM && p.verifiedRelease.baseChecksum && p.verifiedRelease.notes;
  const contentSections = p => [['翻譯範圍 / Translation',p.translationScope],['升級化內容 / Enhancements',p.enhancementDetails],['測試狀態 / Testing',p.testing],['已知問題 / Known issues',p.knownIssues],['補丁套用方法 / Patching',p.patchInstructions],['鳴謝 / Credits',p.credits]].filter(([,value])=>value && value !== '-').map(([title,value])=>`<section class="project-content"><h2>${escape(title)}</h2><p>${escape(value)}</p></section>`).join('');
  const checksums = p => `<section class="checksums" aria-label="SHA-256 校驗碼"><h2>SHA-256 校驗碼</h2><dl>${[['original','原版'],['ips','IPS 檔'],['patched','Patch 後']].map(([key,label])=>`<dt>${label}：</dt><dd>${p.sha256?.[key] ? `<code>${escape(p.sha256[key])}</code>` : '<span class="checksum-pending">待補充</span>'}</dd>`).join('')}</dl></section>`;
  const selectedVariants = new Map();
  const versionPicker = (p, selected) => p.releaseVariants?.length ? `<div class="version-picker"><label for="patch-version">選擇版本</label><select id="patch-version">${p.releaseVariants.map(v=>`<option value="${escape(v.id)}" ${v.id===selected.id?'selected':''}>${escape(v.label)}${v.release?'':'（暫無下載）'}</option>`).join('')}</select></div>` : '';
  function renderCards(filter='all') {
    const projects = window.PROJECTS.filter(p => filter === 'all' || (filter === 'released' ? released(p) : p.status === filter));
    $('#project-grid').innerHTML = projects.map(p => `<a class="card ${escape(p.theme)}" href="#project/${escape(p.id)}"><div class="cover"><img src="${escape(p.cover)}" alt="${escape(p.title)} 遊戲封面" width="640" height="440"><span class="cover-tag">WS / HK TRANSLATION</span></div><div class="card-body"><span class="badge">● ${escape(p.label)}</span><p class="subtitle">${escape(p.subtitle)}</p><h3>${escape(p.title)}</h3><p>${escape(p.summary)}</p><div class="card-bottom"><span>${p.build ? escape(p.build) : escape(p.devStatus || p.stage)}</span><strong>項目詳情 ↗</strong></div></div></a>`).join('');
    $('#empty').hidden = projects.length !== 0;
  }
  document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); renderCards(b.dataset.filter); }));
  function route() {
    const hash = location.hash.slice(1), detail = $('#detail-view'), home = $('#home-view');
    if (!hash.startsWith('project/')) { home.hidden = false; detail.hidden = true; document.title = 'DigiKidult — WonderSwan 香港中文化'; if(hash) requestAnimationFrame(()=>document.getElementById(hash)?.scrollIntoView()); return; }
    const p = window.PROJECTS.find(x => x.id === hash.slice(8)); home.hidden = true; detail.hidden = false;
    if (!p) { detail.innerHTML = '<h1>搵唔到呢個項目。</h1><a class="button" href="#projects">返回翻譯計劃</a>'; detail.focus(); return; }
    const variant = p.releaseVariants?.find(v=>v.id === (selectedVariants.get(p.id) || p.defaultVariant)) || p.releaseVariants?.[0];
    const active = variant ? {...p, verifiedRelease:variant.release, sha256:variant.sha256} : p;
    const r = active.verifiedRelease;
    detail.innerHTML = `<a class="text-link" href="#projects">← 返回全部作品 / All projects</a><div class="detail-hero ${escape(p.theme)}"><img src="${escape(p.cover)}" alt="${escape(p.title)} 遊戲封面" width="640" height="440"><div><p class="eyebrow">PROJECT ${escape(p.number)} / DIGIKIDULT</p><span class="badge">● ${escape(p.label)}</span><h1>${escape(p.title)}</h1><p>${escape(p.fullTitle)}</p><p>${escape(p.description)}</p></div></div><div class="detail-columns"><div>${contentSections(p)}<h2>版本紀錄 / Development notes</h2>${(p.notes.length ? p.notes : [{title:'版本資料待補充',text:'暫未提供版本紀錄。'}]).map(n=>`<article class="note"><h3>${escape(n.title)}</h3><p>${escape(n.text)}</p></article>`).join('')}<h2>下一步 / What's next</h2><p>${escape(p.next)}</p><h2>項目資料</h2><dl><dt>目標語言</dt><dd>香港繁體中文 · Cantonese / zh-HK</dd><dt>開發狀態</dt><dd>${escape(p.devStatus)}</dd><dt>優化版本</dt><dd>${escape(p.enhancement)}${p.enhancement==='—'?'（未提供資料）':p.enhancement==='TBC'?'（待確認）':''}</dd>${p.build ? `<dt>版本</dt><dd>${escape(p.build)}</dd>` : ''}<dt>目前階段</dt><dd>${escape(p.stage)}</dd><dt>資料來源</dt><dd>項目擁有人提供的進度；非公開發佈驗證。</dd></dl></div><aside class="download-panel"><p class="eyebrow">PATCH DOWNLOAD</p>${versionPicker(p, variant)}<p class="release-state" aria-live="polite">${variant ? escape(variant.label) + ' · ' : ''}${released(active) ? '可下載' : '暫無已核實下載'}</p>${released(active) ? `<h2>${escape(r.version)}</h2><a class="button" href="${escape(patchURL(r))}" download>下載 IPS 補丁 ↓</a>${safeURL(r.source) ? `<a class="text-link" href="${escape(safeURL(r.source))}" target="_blank" rel="noopener noreferrer">已核實發佈公告 ↗</a>` : ''}<p>核實日期：${escape(r.verifiedOn)}</p>` : '<h2>暫無已核實下載</h2><p>No verified public download.</p><p>未有已核實嘅 IPS 下載連結。完成翻譯或內部測試版本，都唔等於正式發佈。</p><div class="locked">暫無補丁下載 / Unavailable</div>'}${checksums(active)}</aside></div>`;
    const picker = $('#patch-version');
    if (picker) picker.addEventListener('change', () => { const y = window.scrollY; selectedVariants.set(p.id, picker.value); route(); window.scrollTo(0,y); $('#patch-version').focus({preventScroll:true}); });
    document.title = `${p.title} — DigiKidult`; window.scrollTo(0,0); detail.focus({preventScroll:true});
  }
  window.addEventListener('hashchange', route); renderCards(); route();
})();





