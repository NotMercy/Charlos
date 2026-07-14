const CHARLOS_COMMANDS = [
  {
    icon: '🔨',
    title: 'Moderation',
    desc: 'Keep your server safe and organized with these moderation tools.',
    commands: [
      { name: 'ban', desc: 'Bans a member from the server', usage: '<mention> <reason>' },
      { name: 'checkwarns', desc: 'Views a member\'s warning history', usage: '<mention>' },
      { name: 'createmuterole', desc: 'Auto-creates a properly configured muted role', usage: null },
      { name: 'createchannel', desc: 'Creates a new text or voice channel', usage: '<text> <text/voice>' },
      { name: 'deletechannel', desc: 'Deletes the specified channel', usage: '<#channel>' },
      { name: 'kick', desc: 'Removes a member from the server', usage: '<mention> <reason>' },
      { name: 'lock', desc: 'Locks a channel to stop messages', usage: '<reason>' },
      { name: 'mute', desc: 'Times out a member temporarily', usage: '<mention> <reason>' },
      { name: 'nick', desc: 'Changes a member\'s server nickname', usage: '<mention> <nickname>' },
      { name: 'purge', desc: 'Bulk deletes recent messages', usage: '<amount>' },
      { name: 'removewarns', desc: 'Clears a member\'s warnings', usage: '<mention>' },
      { name: 'slowmode', desc: 'Sets a channel\'s slowmode delay', usage: '<time>' },
      { name: 'unban', desc: 'Lifts a ban on a user', usage: '<userID>' },
      { name: 'unlock', desc: 'Unlocks a previously locked channel', usage: null },
      { name: 'unmute', desc: 'Removes a member\'s timeout', usage: '<mention>' },
      { name: 'warn', desc: 'Issues a warning to a member', usage: '<mention> <reason>' },
    ]
  },
  {
    icon: '💰',
    title: 'Economy',
    desc: 'Earn cash, play mini-games, and climb the global leaderboards.',
    commands: [
      { name: 'adventure', desc: 'Goes on a random cash-earning adventure', usage: null },
      { name: 'bal', desc: 'Checks a wallet balance', usage: null },
      { name: 'beg', desc: 'Begs for a small chance of cash', usage: null },
      { name: 'bomb', desc: 'Risks cash on a bomb minigame', usage: '<amount>' },
      { name: 'buy', desc: 'Purchases an item from the shop', usage: null },
      { name: 'chop', desc: 'Chops wood you can sell for cash', usage: null },
      { name: 'coinflip', desc: 'Bets cash on a coin flip', usage: '<amount>' },
      { name: 'collect', desc: 'Collects income from owned items', usage: null },
      { name: 'crime', desc: 'Commits a crime for a cash payout', usage: null },
      { name: 'daily', desc: 'Claims your daily cash reward', usage: null },
      { name: 'deposit', desc: 'Moves cash into your bank', usage: '<amount>' },
      { name: 'dice', desc: 'Rolls dice and bets cash', usage: '<amount>' },
      { name: 'dig', desc: 'Digs for ore you can sell for cash', usage: null },
      { name: 'explore', desc: 'Explores for random loot and cash', usage: null },
      { name: 'fish', desc: 'Fishes for fish you can sell for cash', usage: null },
      { name: 'hourly', desc: 'Claims your hourly cash reward', usage: null },
      { name: 'hunt', desc: 'Hunts animals for cash', usage: null },
      { name: 'inventory', desc: 'Views your owned items', usage: null },
      { name: 'leaderboard', desc: 'Shows the server\'s richest members', usage: null },
      { name: 'mine', desc: 'Mines for stone you can sell for cash', usage: null },
      { name: 'pay', desc: 'Sends cash to another member', usage: '<mention> <amount>' },
      { name: 'profile', desc: 'Views your economy profile and stats', usage: null },
      { name: 'rob', desc: 'Attempts to steal cash from someone', usage: '<mention>' },
      { name: 'roulette', desc: 'Bets cash on roulette', usage: '<amount>' },
      { name: 'search', desc: 'Searches around for spare cash', usage: null },
      { name: 'sell', desc: 'Sells an item from your inventory for cash', usage: '<item> <amount>' },
      { name: 'shop', desc: 'Browses items available to buy', usage: null },
      { name: 'withdraw', desc: 'Moves cash out of your bank', usage: '<amount>' },
      { name: 'work', desc: 'Works a job for cash', usage: null },
    ]
  },
  {
    icon: 'ℹ️',
    title: 'Information',
    desc: 'Get detailed statistics and info about users, roles, and the server.',
    commands: [
      { name: 'avatar', desc: 'Shows a user\'s avatar', usage: '<mention>' },
      { name: 'botinfo', desc: 'Displays stats about the bot', usage: null },
      { name: 'botperms', desc: 'Shows the bot\'s server permissions', usage: null },
      { name: 'channelinfo', desc: 'Shows info about a channel', usage: null },
      { name: 'emojiinfo', desc: 'Shows details about a server emoji', usage: '<emoji>' },
      { name: 'emojilist', desc: 'Lists all server emojis', usage: null },
      { name: 'invite', desc: 'Gets the bot\'s invite link', usage: null },
      { name: 'ping', desc: 'Checks the bot\'s latency', usage: null },
      { name: 'roleinfo', desc: 'Shows details about a role', usage: null },
      { name: 'rolelist', desc: 'Lists all server roles', usage: null },
      { name: 'serverinfo', desc: 'Shows stats about the server', usage: null },
      { name: 'servericon', desc: 'Shows the server\'s icon', usage: null },
      { name: 'support', desc: 'Gets the support server invite', usage: null },
      { name: 'uptime', desc: 'Shows how long the bot\'s been online', usage: null },
      { name: 'userbanner', desc: 'Shows a user\'s profile banner', usage: '<mention>' },
      { name: 'userinfo', desc: 'Shows details about a user', usage: '<mention>' },
      { name: 'vote', desc: 'Gets the bot\'s top.gg vote link', usage: null },
    ]
  },
  {
    icon: '🎉',
    title: 'Fun',
    desc: 'Cure your boredom with these entertaining games and tricks.',
    commands: [
      { name: '8ball', desc: 'Asks the magic 8-ball a question', usage: '<question>' },
      { name: 'choose', desc: 'Picks between multiple options', usage: '<option>, <option>' },
      { name: 'compliment', desc: 'Sends a random compliment', usage: null },
      { name: 'discord', desc: 'Generates a fake Discord chat screenshot', usage: '<mention> <text>' },
      { name: 'divorce', desc: 'Divorces your marriage partner', usage: null },
      { name: 'highlow', desc: 'Guess higher or lower', usage: null },
      { name: 'howiq', desc: 'Rates a user\'s "IQ" for laughs', usage: '<mention>' },
      { name: 'howsimp', desc: 'Rates a user\'s "simp" level for laughs', usage: '<mention>' },
      { name: 'howpp', desc: 'Generates a joke stat for laughs', usage: '<mention>' },
      { name: 'howgay', desc: 'Generates a joke stat for laughs', usage: '<mention>' },
      { name: 'joke', desc: 'Tells a random joke', usage: null },
      { name: 'marry', desc: 'Proposes marriage to a member', usage: '<mention>' },
      { name: 'meme', desc: 'Sends a random meme', usage: null },
      { name: 'numberguess', desc: 'Guess the secret number', usage: null },
      { name: 'pickupline', desc: 'Sends a random pickup line', usage: null },
      { name: 'rate', desc: 'Rates a user out of 10', usage: '<mention>' },
      { name: 'riddle', desc: 'Sends a random riddle', usage: null },
      { name: 'roast', desc: 'Sends a random roast', usage: null },
      { name: 'rps', desc: 'Plays rock-paper-scissors against the bot', usage: null },
      { name: 'ship', desc: 'Ships two users together', usage: '<mention> <mention>' },
      { name: 'spouse', desc: 'Shows your current marriage partner', usage: '<mention>' },
      { name: 'tod', desc: 'Truth or dare game', usage: null },
      { name: 'trivia', desc: 'Answer a trivia question', usage: null },
      { name: 'tweet', desc: 'Generates a fake tweet', usage: '<text>' },
      { name: 'wyr', desc: 'Would-you-rather question', usage: null },
    ]
  },
  {
    icon: '⚒️',
    title: 'Utility',
    desc: 'Helpful tools and search engines right at your fingertips.',
    commands: [
      { name: 'addemoji', desc: 'Adds a custom emoji to the server', usage: '<custom emoji>' },
      { name: 'afk', desc: 'Sets your AFK status and message', usage: '<reason>' },
      { name: 'anime', desc: 'Searches for anime information', usage: '<title>' },
      { name: 'base64', desc: 'Encodes or decodes base64 text', usage: '<encode/decode> <text>' },
      { name: 'binary', desc: 'Converts text to and from binary', usage: '<text>' },
      { name: 'book', desc: 'Searches for book information', usage: '<title>' },
      { name: 'calc', desc: 'Evaluates a math expression', usage: '<expression>' },
      { name: 'character', desc: 'Looks up an anime character', usage: '<name>' },
      { name: 'convert', desc: 'Converts between units of measurement', usage: '<amount> <from> <to>' },
      { name: 'colorinfo', desc: 'Shows details about a hex color', usage: '<hex>' },
      { name: 'crypto', desc: 'Checks cryptocurrency prices', usage: '<coin>' },
      { name: 'currency', desc: 'Converts between currencies', usage: '<from> <to> <amount>' },
      { name: 'define', desc: 'Looks up a word\'s definition', usage: '<word>' },
      { name: 'element', desc: 'Looks up a periodic table element', usage: '<name>' },
      { name: 'embed', desc: 'Builds a custom embed message', usage: '<title> | <description> | <footer> | <hex>' },
      { name: 'enlarge', desc: 'Enlarges an emoji or sticker', usage: '<emoji>' },
      { name: 'github', desc: 'Searches GitHub for a user or repo', usage: '<username>' },
      { name: 'lyrics', desc: 'Searches for song lyrics', usage: '<song>' },
      { name: 'manga', desc: 'Searches for manga information', usage: '<title>' },
      { name: 'mcskin', desc: 'Shows a Minecraft skin', usage: '<username>' },
      { name: 'morse', desc: 'Converts text to and from Morse code', usage: '<text>' },
      { name: 'movie', desc: 'Searches for movie information', usage: '<title>' },
      { name: 'pdex', desc: 'Looks up a Pokédex entry', usage: '<pokemon>' },
      { name: 'poll', desc: 'Creates a reaction poll', usage: '<question>' },
      { name: 'qr', desc: 'Generates a QR code', usage: '<text/link>' },
      { name: 'say', desc: 'Makes the bot say a message', usage: '<text>' },
      { name: 'shorten', desc: 'Shortens a long URL', usage: '<url>' },
      { name: 'snowflake', desc: 'Decodes a Discord snowflake ID', usage: '<ID>' },
      { name: 'song', desc: 'Identifies or searches for a song', usage: '<query>' },
      { name: 'steam', desc: 'Searches for a Steam game', usage: '<game>' },
      { name: 'sudo', desc: 'Sends a message as another user (staff)', usage: '<mention> <text>' },
      { name: 'suggestmanga', desc: 'Suggests a random manga', usage: '<genre>' },
      { name: 'suggestanime', desc: 'Suggests a random anime', usage: '<genre>' },
      { name: 'timestamp', desc: 'Shows how Discord timestamp formatting works', usage: null },
      { name: 'translate', desc: 'Translates text between languages', usage: '<from> <to> <text>' },
      { name: 'tvshow', desc: 'Searches for TV show information', usage: '<title>' },
      { name: 'urban', desc: 'Looks up an Urban Dictionary term', usage: '<term>' },
      { name: 'wallpaper', desc: 'Sends a random wallpaper image', usage: null },
      { name: 'weather', desc: 'Checks the weather for a location', usage: '<city>' },
      { name: 'wiki', desc: 'Searches Wikipedia', usage: '<query>' },
      { name: 'wordcount', desc: 'Counts words in text', usage: '<text>' },
      { name: 'xkcd', desc: 'Sends an XKCD comic', usage: null },
    ]
  },
  {
    icon: '🖼️',
    title: 'Image',
    desc: 'Generate hilarious memes, image filters, and roleplay actions.',
    commands: [
      { name: 'bite', desc: 'Sends a bite roleplay gif', usage: '<mention>' },
      { name: 'blur', desc: 'Blurs a user\'s avatar', usage: '<mention>' },
      { name: 'bonk', desc: 'Sends a bonk roleplay gif', usage: '<mention>' },
      { name: 'cat', desc: 'Sends a random cat image', usage: null },
      { name: 'changemymind', desc: 'Puts text on a "change my mind" meme', usage: '<text>' },
      { name: 'dog', desc: 'Sends a random dog image', usage: null },
      { name: 'drake', desc: 'Generates a Drake meme', usage: '<text>/<text>' },
      { name: 'drip', desc: 'Puts a user in "drip" meme gear', usage: '<mention>' },
      { name: 'feed', desc: 'Sends a feeding roleplay gif', usage: '<mention>' },
      { name: 'fox', desc: 'Sends a random fox image', usage: null },
      { name: 'greyscale', desc: 'Converts an avatar to greyscale', usage: '<mention>' },
      { name: 'gun', desc: 'Puts a gun meme filter on an avatar', usage: '<mention> <text>' },
      { name: 'handhold', desc: 'Sends a hand-holding roleplay gif', usage: '<mention>' },
      { name: 'heaven', desc: 'Sends a "welcome to heaven" meme', usage: '<mention>' },
      { name: 'highfive', desc: 'Sends a high-five roleplay gif', usage: '<mention>' },
      { name: 'hug', desc: 'Sends a hugging roleplay gif', usage: '<mention>' },
      { name: 'husbando', desc: 'Sends a random husbando image', usage: null },
      { name: 'invert', desc: 'Inverts the colors of an avatar', usage: '<mention>' },
      { name: 'jail', desc: 'Puts a user behind bars', usage: '<mention>' },
      { name: 'kabedon', desc: 'Sends a kabedon roleplay gif', usage: '<mention>' },
      { name: 'kiss', desc: 'Sends a kissing roleplay gif', usage: '<mention>' },
      { name: 'kitsune', desc: 'Sends a random kitsune image', usage: null },
      { name: 'laugh', desc: 'Sends a laughing roleplay gif', usage: '<mention>' },
      { name: 'neko', desc: 'Sends a random neko image', usage: null },
      { name: 'pat', desc: 'Sends a head-pat roleplay gif', usage: '<mention>' },
      { name: 'poke', desc: 'Sends a poking roleplay gif', usage: '<mention>' },
      { name: 'pooh', desc: 'Generates a fancy/regular Pooh meme', usage: '<text>/<text>' },
      { name: 'pout', desc: 'Sends a pouting roleplay gif', usage: '<mention>' },
      { name: 'pride', desc: 'Adds a pride filter to an avatar', usage: '<mention>' },
      { name: 'punch', desc: 'Sends a punching roleplay gif', usage: '<mention>' },
      { name: 'rip', desc: 'Generates a memorial "RIP" image', usage: '<mention>' },
      { name: 'salute', desc: 'Sends a salute roleplay gif', usage: '<mention>' },
      { name: 'sepia', desc: 'Applies a sepia filter to an avatar', usage: '<mention>' },
      { name: 'slap', desc: 'Sends a slapping roleplay gif', usage: '<mention>' },
      { name: 'stonks', desc: 'Generates a "stonks" meme', usage: '<mention>' },
      { name: 'supreme', desc: 'Turns your text into a Supreme-style logo', usage: '<text>' },
      { name: 'tableflip', desc: 'Sends a table-flip roleplay gif', usage: '<mention>' },
      { name: 'tickle', desc: 'Sends a tickling roleplay gif', usage: '<mention>' },
      { name: 'triggered', desc: 'Generates a "triggered" shake image', usage: '<mention>' },
      { name: 'waifu', desc: 'Sends a random waifu image', usage: null },
      { name: 'wanted', desc: 'Puts a user on a "wanted" poster', usage: '<mention>' },
      { name: 'wasted', desc: 'Applies a GTA-style "wasted" filter', usage: '<mention>' },
      { name: 'wide', desc: 'Stretches a user\'s avatar', usage: '<mention>' },
      { name: 'wink', desc: 'Sends a winking roleplay gif', usage: '<mention>' },
      { name: 'yeet', desc: 'Sends a yeeting roleplay gif', usage: '<mention>' },
    ]
  },
  {
    icon: '📁',
    title: 'Other',
    desc: 'Miscellaneous features that don\'t fit anywhere else.',
    commands: [
      { name: 'advice', desc: 'Sends a random piece of advice', usage: null },
      { name: 'aniquote', desc: 'Sends a random anime quote', usage: null },
      { name: 'bored', desc: 'Suggests something to do when bored', usage: null },
      { name: 'drink', desc: 'Sends a random drink recipe', usage: null },
      { name: 'emojify', desc: 'Converts text into emoji letters', usage: '<text>' },
      { name: 'fact', desc: 'Sends a random fact', usage: null },
      { name: 'food', desc: 'Sends a random food idea', usage: null },
      { name: 'history', desc: 'Sends a random historical event', usage: null },
      { name: 'inspire', desc: 'Sends an inspirational quote', usage: null },
      { name: 'iss', desc: 'Shows the ISS\'s current location', usage: null },
      { name: 'nasa', desc: 'Sends NASA\'s astronomy picture of the day', usage: null },
      { name: 'quake', desc: 'Shows recent earthquake data', usage: null },
      { name: 'quote', desc: 'Sends a random quote', usage: null },
      { name: 'randomword', desc: 'Sends a random word', usage: null },
      { name: 'reverse', desc: 'Reverses the given text', usage: '<text>' },
    ]
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Command explorer (tabs + panel + search) ----------
  const tabsEl = document.getElementById('cmdTabs');
  const panelEl = document.getElementById('cmdPanel');
  const searchInput = document.getElementById('cmdSearch');
  const searchCount = document.getElementById('cmdSearchCount');

  if (tabsEl && panelEl) {
    let activeIndex = 0;

    function escapeHTML(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }

    function cmdCardHTML(cmd, catIcon) {
      const usageText = cmd.usage ? `+${cmd.name} ${cmd.usage}` : `+${cmd.name}`;
      const usageLine = `<div class="cmd-card-usage">Usage: <code>${escapeHTML(usageText)}</code></div>`;
      return `
        <div class="cmd-card">
          <div class="cmd-card-name">${cmd.name}</div>
          <div class="cmd-card-desc">${cmd.desc}</div>
          ${usageLine}
        </div>`;
    }

    function renderTabs() {
      tabsEl.innerHTML = CHARLOS_COMMANDS.map((cat, i) => `
        <button class="cmd-tab${i === activeIndex ? ' active' : ''}" data-index="${i}">
          <span class="cmd-tab-icon">${cat.icon}</span>
          <span class="cmd-tab-text">
            <span class="cmd-tab-title">${cat.title}</span>
            <span class="cmd-tab-count">${cat.commands.length} commands</span>
          </span>
        </button>
      `).join('');

      tabsEl.querySelectorAll('.cmd-tab').forEach(btn => {
        btn.addEventListener('click', () => {
          activeIndex = parseInt(btn.dataset.index, 10);
          if (searchInput) searchInput.value = '';
          if (searchCount) searchCount.textContent = '';
          renderTabs();
          renderPanel();
        });
      });
    }

    function renderPanel() {
      const cat = CHARLOS_COMMANDS[activeIndex];
      panelEl.innerHTML = `
        <div class="cmd-panel-head">
          <span class="cmd-panel-icon">${cat.icon}</span>
          <div>
            <div class="cmd-panel-title">${cat.title}</div>
            <div class="cmd-panel-desc">${cat.desc}</div>
          </div>
        </div>
        <div class="cmd-card-list">
          ${cat.commands.map(cmd => cmdCardHTML(cmd, cat.icon)).join('')}
        </div>
      `;
    }

    function renderSearchResults(query) {
      const q = query.startsWith('+') ? query.slice(1) : query;
      const results = [];
      CHARLOS_COMMANDS.forEach(cat => {
        cat.commands.forEach(cmd => {
          if (cmd.name.toLowerCase().includes(q)) {
            results.push({ cmd, catIcon: cat.icon, catTitle: cat.title });
          }
        });
      });

      if (searchCount) {
        searchCount.textContent = `${results.length} match${results.length === 1 ? '' : 'es'}`;
      }

      if (!results.length) {
        panelEl.innerHTML = `<p class="cmd-search-empty visible">No commands match that search.</p>`;
        return;
      }

      panelEl.innerHTML = `
        <div class="cmd-panel-head">
          <span class="cmd-panel-icon">🔍</span>
          <div>
            <div class="cmd-panel-title">Search Results</div>
            <div class="cmd-panel-desc">Matching commands across all categories</div>
          </div>
        </div>
        <div class="cmd-card-list">
          ${results.map(r => {
            const usageText = r.cmd.usage ? `+${r.cmd.name} ${r.cmd.usage}` : `+${r.cmd.name}`;
            return `
            <div class="cmd-card">
              <div class="cmd-card-name">${r.catIcon} ${r.cmd.name}</div>
              <div class="cmd-card-desc">${r.cmd.desc}</div>
              <div class="cmd-card-usage">Usage: <code>${escapeHTML(usageText)}</code></div>
            </div>
          `;
          }).join('')}
        </div>
      `;
    }

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) {
          if (searchCount) searchCount.textContent = '';
          renderTabs();
          renderPanel();
          return;
        }
        tabsEl.querySelectorAll('.cmd-tab').forEach(b => b.classList.remove('active'));
        renderSearchResults(q);
      });
    }

    renderTabs();
    renderPanel();
  }

  // Fetch live developer avatar from Lanyard's full API (auto-updates when Arisu changes PFP)
  const devAvatarEl = document.getElementById('devAvatar');
  if (devAvatarEl) {
    fetch('https://api.lanyard.rest/v1/users/717255337803120681')
      .then(res => res.json())
      .then(data => {
        const user = data?.data?.discord_user;
        if (user?.avatar) {
          const ext = user.avatar.startsWith('a_') ? 'gif' : 'png';
          devAvatarEl.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=128`;
        }
      })
      .catch(() => {
        // Keep the quicklink fallback already set in the src attribute if the fetch fails
      });
  }

  // Nav shadow on scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Scroll-triggered reveal animations
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
  }

  // Count-up animation for hero stats
  const statNums = document.querySelectorAll('.stat-num[data-count]');
  if (statNums.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = el.getAttribute('data-count');
        const numeric = parseInt(target.replace(/\D/g, ''), 10);
        const prefix = target.match(/^\D*/)[0];
        const suffix = target.match(/\D*$/)[0];
        const duration = 1100;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = prefix + Math.round(numeric * eased) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        statObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    statNums.forEach(el => statObserver.observe(el));
  }

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Hero embed mockup rotation
  const embeds = [
    {
      icon: '📋',
      label: 'Help Menu',
      title: '📋 Charlos Help & Commands',
      desc: 'Multipurpose Discord bot with economy, moderation, fun games, and utility features. Browse commands by category.'
    },
    {
      icon: '🔨',
      label: 'Moderation',
      title: '🔨 Moderation Commands',
      desc: 'Keep your server safe and organized.',
      code: 'ban · mute · warn · purge · lock · kick'
    },
    {
      icon: '💰',
      label: 'Economy',
      title: '💰 Economy Commands',
      desc: 'Earn coins, play mini-games, climb the leaderboards.',
      code: 'daily · rob · mine · fish · shop · work'
    },
    {
      icon: '🎉',
      label: 'Fun',
      title: '🎉 Fun Commands',
      desc: 'Cure your boredom with games and tricks.',
      code: '8ball · rps · marry · trivia · roast'
    },
    {
      icon: '🖼️',
      label: 'Image',
      title: '🖼️ Image Commands',
      desc: 'Generate memes, filters, and roleplay actions.',
      code: 'hug · slap · pat · jail · wanted · drip'
    }
  ];

  const embedCard = document.querySelector('.embed-card');
  const dotsWrap = document.querySelector('.mockup-dots');
  const selectIcon = document.querySelector('.mockup-select .select-icon');
  const selectText = document.querySelector('.mockup-select .select-text');

  if (embedCard && dotsWrap) {
    let idx = 0;
    let timer;

    function render(i) {
      const e = embeds[i];
      embedCard.style.opacity = 0;
      setTimeout(() => {
        embedCard.innerHTML = `
          <div class="embed-title">${e.title}</div>
          <div class="embed-desc">${e.desc}</div>
          ${e.code ? `<span class="embed-code">${e.code}</span>` : ''}
        `;
        if (selectIcon) selectIcon.textContent = e.icon;
        if (selectText) selectText.textContent = e.label;
        embedCard.style.opacity = 1;
      }, 180);

      [...dotsWrap.children].forEach((d, di) => d.classList.toggle('active', di === i));
    }

    embeds.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', 'Show embed ' + (i + 1));
      b.addEventListener('click', () => {
        idx = i;
        render(idx);
        resetTimer();
      });
      dotsWrap.appendChild(b);
    });

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(() => {
        idx = (idx + 1) % embeds.length;
        render(idx);
      }, 3200);
    }

    render(0);
    resetTimer();
  }
});
