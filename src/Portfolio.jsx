<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sunho Song — VFX Compositor</title>
  <meta name="description" content="VFX Compositor Sunho Song | Demo Reel, Film/TV Credits, Contact" />
  <meta property="og:title" content="Sunho Song — VFX Compositor" />
  <meta property="og:description" content="Demo Reel, 작품, 경력 및 연락처" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/og-image.jpg" />
  <link rel="icon" href="/favicon.ico" />
  <style>
    :root {
      --bg: #0b0d12; /* deep blue-black */
      --panel: #12141b;
      --text: #e7e9ee;
      --muted: #aab0bd;
      --brand: #7dd3fc; /* soft cyan */
      --accent: #a78bfa; /* soft purple */
      --ring: #2dd4bf; /* teal */
      --radius: 18px;
      --shadow: 0 10px 30px rgba(0,0,0,0.35);
    }
    * { box-sizing: border-box; }
    html, body { height: 100%; }
    body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Apple SD Gothic Neo, "맑은 고딕", Arial, "Apple Color Emoji", "Segoe UI Emoji"; background: radial-gradient(1200px 900px at 80% -10%, rgba(125,211,252,0.08), transparent 60%), var(--bg); color: var(--text); line-height: 1.6; }
    a { color: var(--brand); text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* Layout */
    .container { width: min(1100px, 92vw); margin: 0 auto; }
    header { position: sticky; top: 0; z-index: 50; backdrop-filter: saturate(150%) blur(8px); background: rgba(11,13,18,0.6); border-bottom: 1px solid rgba(255,255,255,0.06); }
    .nav { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; }
    .brand { font-weight: 700; letter-spacing: 0.3px; font-size: 1.05rem; }
    .brand small { color: var(--muted); font-weight: 500; margin-left: 8px; }
    .menu { display: flex; gap: 18px; align-items: center; }
    .menu a { color: var(--text); font-weight: 600; font-size: 0.95rem; opacity: 0.9; }
    .menu a:hover { opacity: 1; }
    .cta { padding: 10px 14px; border-radius: 999px; background: linear-gradient(135deg, var(--brand), var(--accent)); color: #0a0c11; font-weight: 800; border: none; box-shadow: var(--shadow); }

    /* Hero */
    .hero { padding: 96px 0 40px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 28px; align-items: center; }
    .badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: 999px; background: rgba(125,211,252,0.08); color: #cdefff; border: 1px solid rgba(125,211,252,0.25); font-weight: 650; font-size: 0.85rem; }
    .badge svg { width: 16px; height: 16px; }
    h1 { font-size: clamp(2rem, 3.6vw, 3.2rem); line-height: 1.1; margin: 14px 0 12px; letter-spacing: -0.02em; }
    .sub { color: var(--muted); max-width: 60ch; }
    .reel-card { position: relative; overflow: hidden; border-radius: var(--radius); background: linear-gradient(180deg, rgba(167,139,250,0.12), rgba(125,211,252,0.08)); border: 1px solid rgba(255,255,255,0.08); box-shadow: var(--shadow); }
    .reel-card iframe, .reel-card video { width: 100%; aspect-ratio: 16 / 9; display: block; }

    /* Sections */
    section { padding: 64px 0; }
    .section-title { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 22px; }
    .section-title h2 { margin: 0; font-size: clamp(1.4rem, 2.4vw, 2rem); }
    .muted { color: var(--muted); font-size: 0.95rem; }

    /* Projects grid */
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    .card { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); transition: transform 0.2s ease, border-color 0.2s ease; }
    .card:hover { transform: translateY(-2px); border-color: rgba(125,211,252,0.28); }
    .thumb { display: block; width: 100%; aspect-ratio: 16/9; object-fit: cover; background: #0f1117; }
    .card-body { padding: 14px 14px 16px; }
    .chip { display: inline-block; margin-right: 6px; margin-bottom: 6px; padding: 4px 8px; border-radius: 999px; background: rgba(255,255,255,0.06); color: var(--muted); font-size: 12px; font-weight: 600; }

    /* About */
    .about { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .panel { padding: 18px; background: var(--panel); border-radius: var(--radius); border: 1px solid rgba(255,255,255,0.06); box-shadow: var(--shadow); }

    /* Footer */
    footer { padding: 40px 0 70px; color: var(--muted); border-top: 1px solid rgba(255,255,255,0.06); }

    /* Utilities */
    .row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0; }

    /* Responsive */
    @media (max-width: 980px) {
      .hero { grid-template-columns: 1fr; }
      .about { grid-template-columns: 1fr; }
      .grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 640px) {
      .menu { display: none; }
      .grid { grid-template-columns: 1fr; }
      .hero { padding-top: 72px; }
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header>
    <div class="container nav">
      <div class="brand">Sunho Song <small>VFX Compositor</small></div>
      <nav class="menu" aria-label="주 메뉴">
        <a href="#reel">Demo Reel</a>
        <a href="#projects">Works</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a class="cta" href="https://vimeo.com/763222691" target="_blank" rel="noopener">Watch Reel</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero container">
    <div>
      <span class="badge" aria-label="현재 상태">
        <!-- camera icon -->
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 8a3 3 0 0 1 3-3h1.2a1 1 0 0 0 .8-.4l1.2-1.6A2 2 0 0 1 12 2h2a2 2 0 0 1 1.6.8l1.2 1.6a1 1 0 0 0 .8.4H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8Z" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.4"/></svg>
        Available for freelance from July–September
      </span>
      <h1>Dark, cinematic comps that hold up in 4K.</h1>
      <p class="sub">Feature & streaming series 경험. Nuke 기반 파이프라인, Python 툴링, 인터랙티브 라이트/그린스크린/크로뮥 정교합성. 실사/CG 통합에 강점.</p>
    </div>
    <div class="reel-card" id="reel">
      <!-- Vimeo 임베드: 본인 릴 주소로 교체 -->
      <iframe src="https://player.vimeo.com/video/763222691?h=8e9a4f2a3e&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Demo Reel"></iframe>
    </div>
  </section>

  <!-- Projects / Credits -->
  <section id="projects" class="container">
    <div class="section-title">
      <h2>Selected Works & Credits</h2>
      <div class="row" aria-label="정렬">
        <label class="sr-only" for="sort">정렬</label>
        <select id="sort" aria-label="정렬" style="background: var(--panel); color: var(--text); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 8px 10px;">
          <option value="year-desc">연도순(최신)</option>
          <option value="year-asc">연도순(오래된)</option>
          <option value="alpha-asc">제목 A→Z</option>
          <option value="alpha-desc">제목 Z→A</option>
        </select>
        <a href="https://www.imdb.com/name/nm9611468/" target="_blank" rel="noopener" class="muted">IMDb</a>
      </div>
    </div>
    <div id="grid" class="grid" aria-live="polite">
      <!-- 카드 예시: 필요 개수만큼 복제하여 사용 -->
      <article class="card" data-title="The Acolyte" data-year="2024">
        <img class="thumb" src="/thumbs/acolyte.jpg" alt="The Acolyte 키아트" />
        <div class="card-body">
          <h3 style="margin: 0 0 6px;">The Acolyte (2024)</h3>
          <div class="muted" style="margin-bottom: 10px;">Disney+ — Compositor</div>
          <div>
            <span class="chip">Nuke</span>
            <span class="chip">Clean-up</span>
            <span class="chip">Interactive Light</span>
          </div>
        </div>
      </article>
      <article class="card" data-title="Titans S2" data-year="2020">
        <img class="thumb" src="/thumbs/titans-s2.jpg" alt="Titans season 2 스틸" />
        <div class="card-body">
          <h3 style="margin: 0 0 6px;">Titans S2 (2020)</h3>
          <div class="muted" style="margin-bottom: 10px;">HBO Max — Compositor</div>
          <div>
            <span class="chip">Keying</span>
            <span class="chip">Paint</span>
          </div>
        </div>
      </article>
      <article class="card" data-title="Baywatch" data-year="2017">
        <img class="thumb" src="/thumbs/baywatch.jpg" alt="Baywatch 포스터" />
        <div class="card-body">
          <h3 style="margin: 0 0 6px;">Baywatch (2017)</h3>
          <div class="muted" style="margin-bottom: 10px;">Feature Film — Compositor</div>
          <div>
            <span class="chip">Roto</span>
            <span class="chip">Comp</span>
          </div>
        </div>
      </article>
      <article class="card" data-title="A Series of Unfortunate Events S2" data-year="2018">
        <img class="thumb" src="/thumbs/asoue-s2.jpg" alt="ASOUE 시즌2 스틸" />
        <div class="card-body">
          <h3 style="margin: 0 0 6px;">A Series of Unfortunate Events S2 (2018)</h3>
          <div class="muted" style="margin-bottom: 10px;">Netflix — Compositor</div>
          <div>
            <span class="chip">Set Extension</span>
            <span class="chip">DMP</span>
          </div>
        </div>
      </article>
      <article class="card" data-title="Doom Patrol S2" data-year="2020">
        <img class="thumb" src="/thumbs/doompatrol-s2.jpg" alt="Doom Patrol 시즌2 스틸" />
        <div class="card-body">
          <h3 style="margin: 0 0 6px;">Doom Patrol S2 (2020)</h3>
          <div class="muted" style="margin-bottom: 10px;">HBO Max — Compositor</div>
          <div>
            <span class="chip">Tracking</span>
            <span class="chip">Grain</span>
          </div>
        </div>
      </article>
      <article class="card" data-title="Death Note" data-year="2017">
        <img class="thumb" src="/thumbs/deathnote.jpg" alt="Death Note 포스터" />
        <div class="card-body">
          <h3 style="margin: 0 0 6px;">Death Note (2017)</h3>
          <div class="muted" style="margin-bottom: 10px;">Netflix — Compositor</div>
          <div>
            <span class="chip">Lookdev</span>
            <span class="chip">Compositing</span>
          </div>
        </div>
      </article>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="container">
    <div class="section-title"><h2>About</h2></div>
    <div class="about">
      <div class="panel">
        <h3 style="margin-top:0">Profile</h3>
        <p>밴쿠버 기반 VFX Compositor. Nuke/Gizmo 개발과 파이프라인 자동화에 관심이 많고, 실사/CG 통합과 레퍼런스 기반의 물리적 정확성을 지향합니다. 리모트 파이프라인과 리뷰(ShotGrid/SyncSketch/RV)에 익숙합니다.</p>
        <ul>
          <li>툴: Nuke, Mocha, Silhouette, After Effects</li>
          <li>스크립팅: Python, AHK, Shell</li>
          <li>관심사: 인터랙티브 라이트, 그레인/매치무브, DMP 통합</li>
        </ul>
      </div>
      <div class="panel">
        <h3 style="margin-top:0">Awards & Mentions</h3>
        <p class="muted">필요시 업데이트</p>
        <ul>
          <li>예시: Project X — Best VFX Nominee</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="container">
    <div class="section-title"><h2>Contact</h2><span class="muted">협업 문의 환영</span></div>
    <div class="panel">
      <p>이메일: <a href="mailto:sunhosong@example.com">sunhosong@example.com</a> · LinkedIn · Vimeo</p>
      <form name="contact" method="post" data-netlify="true" style="display:grid; gap: 10px; max-width: 560px;">
        <input type="hidden" name="form-name" value="contact" />
        <label>이름<input name="name" required style="width:100%; padding:10px; border-radius:10px; border:1px solid rgba(255,255,255,0.12); background:var(--panel); color:var(--text)"/></label>
        <label>이메일<input name="email" type="email" required style="width:100%; padding:10px; border-radius:10px; border:1px solid rgba(255,255,255,0.12); background:var(--panel); color:var(--text)"/></label>
        <label>메시지<textarea name="message" required rows="5" style="width:100%; padding:10px; border-radius:10px; border:1px solid rgba(255,255,255,0.12); background:var(--panel); color:var(--text)"></textarea></label>
        <button class="cta" style="width:fit-content">Send</button>
      </form>
    </div>
  </section>

  <footer>
    <div class="container">© <span id="year"></span> Sunho Song. All rights reserved.</div>
  </footer>

  <script>
    // dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();

    // simple sorter for cards
    const grid = document.getElementById('grid');
    const select = document.getElementById('sort');
    const getCards = () => Array.from(grid.querySelectorAll('.card'));

    function sortCards(mode) {
      let cards = getCards();
      cards.sort((a,b) => {
        const ta = a.dataset.title.toLowerCase();
        const tb = b.dataset.title.toLowerCase();
        const ya = parseInt(a.dataset.year, 10);
        const yb = parseInt(b.dataset.year, 10);
        if (mode === 'year-desc') return yb - ya;
        if (mode === 'year-asc') return ya - yb;
        if (mode === 'alpha-asc') return ta.localeCompare(tb);
        if (mode === 'alpha-desc') return tb.localeCompare(ta);
        return 0;
      });
      // re-append
      cards.forEach(c => grid.appendChild(c));
    }
    select.addEventListener('change', e => sortCards(e.target.value));

    // initial
    sortCards('year-desc');
  </script>
</body>
</html>
