(function(){
  "use strict";
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // reveal-on-scroll
  var targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if(reduced || !('IntersectionObserver' in window)){
    targets.forEach(function(t){ t.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(function(t){ io.observe(t); });
  }

  // nav visibility + solid background after hero
  var nav = document.getElementById('siteNav');
  var hero = document.getElementById('hero');
  if(nav && hero){
    var navIO = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        nav.classList.toggle('visible', !e.isIntersecting);
      });
    }, { threshold: 0.05 });
    navIO.observe(hero);
    window.addEventListener('scroll', function(){
      nav.classList.toggle('solid', window.scrollY > 40);
    }, { passive:true });
  }

  // active nav link
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var links = document.querySelectorAll('.nav-links a');
  if(sections.length && links.length){
    var navSpy = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          links.forEach(function(l){
            l.classList.toggle('active', l.getAttribute('href') === '#'+e.target.id);
          });
        }
      });
    }, { rootMargin: '-42% 0px -50% 0px', threshold: 0 });
    sections.forEach(function(s){ navSpy.observe(s); });
  }

  // ---------- audio player ----------
  var audio = document.getElementById('audioEl');
  var playBtn = document.getElementById('playBtn');
  var iconPlay = document.getElementById('iconPlay');
  var iconPause = document.getElementById('iconPause');
  var seek = document.getElementById('seek');
  var curTimeEl = document.getElementById('curTime');
  var durTimeEl = document.getElementById('durTime');
  var statusEl = document.getElementById('playerStatus');
  var titleEl = document.getElementById('playerTitle');
  var subEl = document.getElementById('playerSub');
  var trackEls = document.querySelectorAll('.player-track');

  function fmtTime(s){
    if(!isFinite(s) || s < 0) return '0:00';
    var m = Math.floor(s/60), sec = Math.floor(s%60);
    return m + ':' + (sec<10?'0':'') + sec;
  }

  function setActiveTrack(el){
    trackEls.forEach(function(t){ t.classList.remove('active'); });
    el.classList.add('active');
    titleEl.textContent = el.getAttribute('data-title');
    subEl.textContent = el.getAttribute('data-sub');
  }

  function loadTrack(el, autoplay){
    setActiveTrack(el);
    var src = el.getAttribute('data-src');
    audio.src = src;
    seek.style.setProperty('--prog','0%');
    seek.value = 0;
    curTimeEl.textContent = '0:00';
    durTimeEl.textContent = '—:—';
    statusEl.textContent = 'Loading — ' + el.getAttribute('data-title').replace('&middot;','·') + '…';
    if(autoplay){
      audio.play().catch(function(){ /* handled by error listener */ });
    }
  }

  if(audio && trackEls.length){
    trackEls.forEach(function(el){
      el.addEventListener('click', function(){ loadTrack(el, true); });
    });

    playBtn.addEventListener('click', function(){
      if(!audio.src){
        var first = document.querySelector('.player-track.active') || trackEls[0];
        loadTrack(first, true);
        return;
      }
      if(audio.paused){ audio.play().catch(function(){}); } else { audio.pause(); }
    });

    audio.addEventListener('play', function(){ iconPlay.style.display='none'; iconPause.style.display=''; statusEl.textContent=''; });
    audio.addEventListener('pause', function(){ iconPlay.style.display=''; iconPause.style.display='none'; });
    audio.addEventListener('loadedmetadata', function(){ durTimeEl.textContent = fmtTime(audio.duration); });
    audio.addEventListener('timeupdate', function(){
      curTimeEl.textContent = fmtTime(audio.currentTime);
      var pct = audio.duration ? (audio.currentTime/audio.duration*100) : 0;
      seek.value = pct;
      seek.style.setProperty('--prog', pct + '%');
    });
    audio.addEventListener('error', function(){
      statusEl.textContent = 'Audio preview not yet loaded for this movement.';
      iconPlay.style.display=''; iconPause.style.display='none';
    });
    audio.addEventListener('ended', function(){
      var active = document.querySelector('.player-track.active');
      var next = active && active.nextElementSibling;
      if(next && next.classList.contains('player-track')){ loadTrack(next, true); }
    });

    seek.addEventListener('input', function(){
      if(audio.duration){
        audio.currentTime = (seek.value/100) * audio.duration;
        seek.style.setProperty('--prog', seek.value + '%');
      }
    });
  }

  // ---------- platform links (placeholders) ----------
  var note = document.getElementById('platformNote');
  document.querySelectorAll('.platform-link').forEach(function(a){
    a.addEventListener('click', function(ev){
      ev.preventDefault();
      if(note){
        var platform = a.getAttribute('data-platform');
        note.textContent = 'The ' + platform.charAt(0).toUpperCase()+platform.slice(1) + ' link will be added here at release.';
      }
    });
  });
})();
