/* ===== System Admin Portfolio - Interactive Script ===== */

// ===== Translations (EN / FIL) =====
const translations = {
  en: {
    nav_home: "Home",
    nav_roles: "Roles",
    nav_skills: "Skills",
    nav_tools: "Tools",
    nav_terminal: "Terminal",
    nav_about: "About",
    theme_dark: "Dark mode",
    theme_light: "Light mode",
    greeting: "Welcome to",
    hero_title: "System Administrator",
    hero_subtitle: "Career Portfolio",
    hero_desc: "Explore the world of System Administration — the backbone of modern IT infrastructure. Discover roles, skills, tools, and more in this interactive professional portfolio.",
    btn_explore: "Explore Roles",
    btn_try_terminal: "Try Linux Terminal",
    scroll: "Scroll",
    tag_roles: "What We Do",
    roles_title: "Roles & Responsibilities",
    roles_desc: "A System Administrator ensures that IT systems run smoothly, securely, and efficiently.",
    role1_title: "OS Installation & Maintenance",
    role1_desc: "Install, configure, and maintain operating systems (Windows, Linux, Unix) across servers and workstations to ensure optimal performance and security.",
    role2_title: "User Accounts & Permissions",
    role2_desc: "Create, manage, and audit user accounts. Assign appropriate permissions and enforce least-privilege access to protect sensitive data and systems.",
    role3_title: "System Performance Monitoring",
    role3_desc: "Continuously monitor CPU, memory, disk, and network metrics. Identify bottlenecks and proactively resolve issues before they impact users.",
    role4_title: "Backups & Disaster Recovery",
    role4_desc: "Design and execute reliable backup strategies. Test recovery procedures regularly so that data can be restored quickly after failures or disasters.",
    role5_title: "Hardware & Software Troubleshooting",
    role5_desc: "Diagnose and resolve hardware failures, software conflicts, and connectivity problems. Document solutions and improve processes to prevent recurrence.",
    role6_title: "Security & Compliance",
    role6_desc: "Apply security patches, configure firewalls, monitor logs for threats, and ensure systems comply with organizational and regulatory policies.",
    tag_skills: "Core Competencies",
    skills_title: "Technical & Professional Skills",
    skills_desc: "Success in system administration requires a blend of deep technical knowledge and strong soft skills.",
    tech_skills: "Technical Skills",
    skill_os: "Operating System Administration",
    skill_net: "Networking (TCP/IP, DNS, DHCP)",
    skill_script: "Scripting (Bash, PowerShell, Python)",
    skill_virt: "Virtualization & Cloud",
    skill_sec: "Security & Hardening",
    prof_skills: "Professional Skills",
    soft1: "Problem-Solving",
    soft1_desc: "Analytical thinking to diagnose complex issues under pressure.",
    soft2: "Communication",
    soft2_desc: "Clear explanations for both technical teams and non-technical users.",
    soft3: "Time Management",
    soft3_desc: "Prioritizing tickets, projects, and maintenance windows effectively.",
    soft4: "Team Collaboration",
    soft4_desc: "Working seamlessly with developers, security, and support teams.",
    soft5: "Continuous Learning",
    soft5_desc: "Staying current with new technologies, tools, and best practices.",
    tag_tools: "Tech Stack",
    tools_title: "System Administration Tools",
    tools_desc: "These are some of the essential tools and technologies every System Administrator should know.",
    tool_win: "Enterprise-grade server OS for Active Directory, file services, and Windows-based infrastructure.",
    tool_ubuntu: "Popular Linux distribution widely used for web servers, cloud instances, and open-source stacks.",
    tool_ps: "Powerful scripting language and shell for automating Windows and cross-platform tasks.",
    tool_ssh: "Secure protocol for remote login and command execution on Linux/Unix systems.",
    tool_vb: "Virtualization platforms for creating and managing virtual machines in labs and production.",
    tool_ansible: "Infrastructure-as-Code tools for automated provisioning and configuration management.",
    tag_terminal: "Interactive Demo",
    terminal_title: "Try the Linux Command Prompt",
    terminal_desc: "Experience a simulated Linux terminal. Type common commands and see the output. Great for learning!",
    term_welcome: "Welcome to the interactive Linux terminal simulator!",
    term_help: "Type help to see available commands.",
    term_hints: "Try these commands:",
    tag_about: "The Creator",
    about_title: "About the Developer",
    about_course: "BS Information Technology / System Administration Track",
    about_intro: "Hi! I'm Miel Joy P. Ranes, an aspiring System Administrator passionate about building reliable, secure, and efficient IT infrastructures. I love troubleshooting, automating tasks, and learning new technologies that keep systems running 24/7.",
    about_interest: "My interest in the IT industry started with curiosity about how networks and servers work behind the scenes. Today, I actively explore Linux, cloud platforms, scripting, and cybersecurity to prepare myself for a rewarding career in System Administration and Maintenance.",
    stat1: "Uptime Goal",
    stat2: "Curiosity",
    stat3: "Passion",
    footer_text: "© 2026 Miel Joy P. Ranes. Built with ❤️ for System Administration."
  },
  fil: {
    nav_home: "Home",
    nav_roles: "Mga Tungkulin",
    nav_skills: "Mga Kasanayan",
    nav_tools: "Mga Tool",
    nav_terminal: "Terminal",
    nav_about: "Tungkol",
    theme_dark: "Dark mode",
    theme_light: "Light mode",
    greeting: "Maligayang pagdating sa",
    hero_title: "System Administrator",
    hero_subtitle: "Career Portfolio",
    hero_desc: "Tuklasin ang mundo ng System Administration — ang backbone ng modernong IT infrastructure. Alamin ang mga tungkulin, kasanayan, tools, at iba pa sa interactive na portfolio na ito.",
    btn_explore: "Tuklasin ang Mga Tungkulin",
    btn_try_terminal: "Subukan ang Linux Terminal",
    scroll: "Mag-scroll",
    tag_roles: "Ano ang Ginagawa Namin",
    roles_title: "Mga Tungkulin at Responsibilidad",
    roles_desc: "Tinitiyak ng System Administrator na maayos, secure, at epektibo ang pagtakbo ng mga IT system.",
    role1_title: "Pag-install at Pag-maintain ng OS",
    role1_desc: "Mag-install, mag-configure, at mag-maintain ng operating systems (Windows, Linux, Unix) sa servers at workstations para sa optimal na performance at seguridad.",
    role2_title: "User Accounts at Permissions",
    role2_desc: "Gumawa, mag-manage, at mag-audit ng user accounts. Mag-assign ng tamang permissions at ipatupad ang least-privilege access para protektahan ang sensitive data.",
    role3_title: "Pag-monitor ng System Performance",
    role3_desc: "Patuloy na i-monitor ang CPU, memory, disk, at network metrics. Tukuyin ang mga bottleneck at ayusin ang issues bago ito makaapekto sa mga user.",
    role4_title: "Backups at Disaster Recovery",
    role4_desc: "Mag-disenyo at magsagawa ng maaasahang backup strategies. Regular na i-test ang recovery procedures para mabilis na maibalik ang data pagkatapos ng failure.",
    role5_title: "Troubleshooting ng Hardware at Software",
    role5_desc: "Mag-diagnose at mag-ayos ng hardware failures, software conflicts, at connectivity problems. Idokumento ang solusyon at pagbutihin ang proseso.",
    role6_title: "Security at Compliance",
    role6_desc: "Mag-apply ng security patches, mag-configure ng firewalls, mag-monitor ng logs para sa threats, at tiyakin ang compliance sa policies.",
    tag_skills: "Pangunahing Kakayahan",
    skills_title: "Technical at Professional Skills",
    skills_desc: "Ang tagumpay sa system administration ay nangangailangan ng malalim na technical knowledge at malakas na soft skills.",
    tech_skills: "Technical Skills",
    skill_os: "Operating System Administration",
    skill_net: "Networking (TCP/IP, DNS, DHCP)",
    skill_script: "Scripting (Bash, PowerShell, Python)",
    skill_virt: "Virtualization at Cloud",
    skill_sec: "Security at Hardening",
    prof_skills: "Professional Skills",
    soft1: "Problem-Solving",
    soft1_desc: "Analytical thinking para mag-diagnose ng complex issues sa ilalim ng pressure.",
    soft2: "Communication",
    soft2_desc: "Malinaw na paliwanag para sa technical teams at non-technical users.",
    soft3: "Time Management",
    soft3_desc: "Prioritize ng tickets, projects, at maintenance windows nang epektibo.",
    soft4: "Team Collaboration",
    soft4_desc: "Pagtutulungan kasama ang developers, security, at support teams.",
    soft5: "Continuous Learning",
    soft5_desc: "Manatiling updated sa mga bagong teknolohiya, tools, at best practices.",
    tag_tools: "Tech Stack",
    tools_title: "Mga Tool sa System Administration",
    tools_desc: "Ito ang ilan sa mahahalagang tools at technologies na dapat alam ng bawat System Administrator.",
    tool_win: "Enterprise-grade server OS para sa Active Directory, file services, at Windows-based infrastructure.",
    tool_ubuntu: "Sikat na Linux distribution na malawakang ginagamit sa web servers, cloud instances, at open-source stacks.",
    tool_ps: "Makapangyarihang scripting language at shell para sa automation ng Windows at cross-platform tasks.",
    tool_ssh: "Secure protocol para sa remote login at command execution sa Linux/Unix systems.",
    tool_vb: "Virtualization platforms para gumawa at mag-manage ng virtual machines sa labs at production.",
    tool_ansible: "Infrastructure-as-Code tools para sa automated provisioning at configuration management.",
    tag_terminal: "Interactive Demo",
    terminal_title: "Subukan ang Linux Command Prompt",
    terminal_desc: "Maranasan ang simulated Linux terminal. Mag-type ng common commands at tingnan ang output. Maganda para sa pag-aaral!",
    term_welcome: "Maligayang pagdating sa interactive Linux terminal simulator!",
    term_help: "I-type ang help para makita ang available commands.",
    term_hints: "Subukan ang mga command na ito:",
    tag_about: "Ang Creator",
    about_title: "Tungkol sa Developer",
    about_course: "BS Information Technology / System Administration Track",
    about_intro: "Hi! Ako si Miel Joy P. Ranes, isang aspiring System Administrator na masigasig sa pagbuo ng maaasahan, secure, at epektibong IT infrastructures. Mahilig akong mag-troubleshoot, mag-automate ng tasks, at matuto ng bagong teknolohiya na nagpapatakbo ng systems 24/7.",
    about_interest: "Nagsimula ang interes ko sa IT industry dahil sa kuryusidad kung paano gumagana ang networks at servers sa likod ng eksena. Ngayon, aktibo akong nag-eexplore ng Linux, cloud platforms, scripting, at cybersecurity para ihanda ang sarili sa rewarding career sa System Administration and Maintenance.",
    stat1: "Uptime Goal",
    stat2: "Kuryusidad",
    stat3: "Passion",
    footer_text: "© 2026 Miel Joy P. Ranes. Ginawa nang may ❤️ para sa System Administration."
  }
};

let currentLang = "en";

// ===== Language Toggle =====
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "fil" ? "fil" : "en";
  document.getElementById("langLabel").textContent = lang === "en" ? "EN" : "FIL";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      // Preserve HTML inside some elements
      if (el.querySelector("strong")) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  updateThemeControl();
}

document.getElementById("langToggle").addEventListener("click", () => {
  setLanguage(currentLang === "en" ? "fil" : "en");
});

// ===== Theme Toggle =====
const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");
const themeIcon = themeToggle.querySelector("i");

function updateThemeControl() {
  const isDark = document.body.dataset.theme === "dark";
  const label = isDark ? translations[currentLang].theme_light : translations[currentLang].theme_dark;
  themeLabel.textContent = label;
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeIcon.className = isDark ? "fas fa-sun" : "fas fa-moon";
}

themeToggle.addEventListener("click", () => {
  document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light" : "dark";
  updateThemeControl();
});

// ===== Mobile Menu =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ===== Navbar scroll effect & active link =====
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Active section highlight
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navItems.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });

  // Back to top
  const backBtn = document.getElementById("backToTop");
  if (window.scrollY > 400) {
    backBtn.classList.add("visible");
  } else {
    backBtn.classList.remove("visible");
  }
});

document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Skill bars animation on scroll =====
const skillFills = document.querySelectorAll(".skill-fill");
const skillsSection = document.getElementById("skills");

const animateSkills = () => {
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    skillFills.forEach(fill => fill.classList.add("animate"));
  }
};
window.addEventListener("scroll", animateSkills);
animateSkills();

// ===== Background Particles =====
function createParticles() {
  const container = document.getElementById("particles");
  for (let i = 0; i < 25; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = (8 + Math.random() * 10) + "s";
    p.style.animationDelay = Math.random() * 8 + "s";
    p.style.fontSize = (7 + Math.random() * 8) + "px";
    container.appendChild(p);
  }
}
createParticles();

// ===== Profile Frame Sparkles =====
function createSparkles() {
  const container = document.getElementById("frameParticles");
  for (let i = 0; i < 12; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    const angle = (i / 12) * 360;
    const radius = 130 + Math.random() * 20;
    s.style.left = `calc(50% + ${Math.cos(angle * Math.PI / 180) * radius}px)`;
    s.style.top = `calc(50% + ${Math.sin(angle * Math.PI / 180) * radius}px)`;
    s.style.animationDelay = (Math.random() * 2) + "s";
    container.appendChild(s);
  }
}
createSparkles();

// ===== Interactive Linux Terminal Simulator =====
const terminalBody = document.getElementById("terminalBody");
const terminalInput = document.getElementById("terminalInput");

const commands = {
  help: () => `Available commands:
  help      - Show this help message
  ls        - List directory contents
  pwd       - Print working directory
  whoami    - Display current user
  date      - Show current date and time
  uname     - System information
  neofetch  - Display system info (fun!)
  echo      - Echo back your text (e.g. echo hello)
  clear     - Clear the terminal
  history   - Show command history
  fortune   - Get a random sysadmin quote`,

  ls: () => `Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
server-configs/  scripts/  backups/  logs/`,

  pwd: () => `/home/ranes`,

  whoami: () => `ranes`,

  date: () => new Date().toString(),

  uname: () => `Linux portfolio 6.5.0-sysadmin #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux`,

  neofetch: () => `
       .-/+oossssoo+/-.               ranes@sysadmin-portfolio
    \`:+ssssssssssssssssss+:\`           -------------------------
  -+ssssssssssssssssssyyssss+-         OS: Ubuntu 24.04 LTS x86_64
.ossssssssssssssssssdMMMNysssso.       Host: SysAdmin Portfolio
/ssssssssssshdmmNNmmyNMMMMhssssss/     Kernel: 6.5.0-sysadmin
+ssssssssshmydMMMMMMMNddddysssssss+    Uptime: 24 days, 7 hours
/sssssssshNMMMyhhyyyyhmNMMMNhssssss/   Packages: 1842 (dpkg)
.osssssssNMMMNy-:\`\`\`\`-:sNMMMysssssso.  Shell: bash 5.2.21
  -+sssssssydMNkdhyoysoydmNMysssss+-   Resolution: 1920x1080
    \`:+ssssssssssssssssssssss+:\`       DE: GNOME 46
       .-/+oossssoo+/-.                Theme: Soft-Dark
                                       Icons: Papirus
                                       Terminal: portfolio-term
                                       CPU: Virtual (4) @ 3.2GHz
                                       Memory: 2847MiB / 8192MiB`,

  clear: () => null,

  history: () => cmdHistory.map((c, i) => `  ${i + 1}  ${c}`).join("\n") || "  (empty)",

  fortune: () => {
    const quotes = [
      `"There is no place like 127.0.0.1"`,
      `"It's not a bug, it's a feature."`,
      `"sudo make me a sandwich"`,
      `"In case of fire: git commit, git push, leave building."`,
      `"A SysAdmin's job is never done... until the coffee runs out."`,
      `"Permission denied? Have you tried turning it off and on again?"`,
      `"rm -rf / — the only command you'll ever regret."`,
      `"Keep calm and check the logs."`
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
};

let cmdHistory = [];
let historyIndex = -1;

function appendLine(text, isHtml = false) {
  const line = document.createElement("div");
  line.className = "terminal-line";
  if (isHtml) {
    line.innerHTML = text;
  } else {
    line.innerHTML = `<span class="output">${text.replace(/\n/g, "<br>")}</span>`;
  }
  terminalBody.appendChild(line);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function runCommand(raw) {
  const input = raw.trim();
  if (!input) return;

  // Echo the command
  const cmdLine = document.createElement("div");
  cmdLine.className = "terminal-line";
  cmdLine.innerHTML = `<span class="prompt">ranes@portfolio:~$</span> <span style="color:#cdd6f4">${input}</span>`;
  terminalBody.appendChild(cmdLine);

  cmdHistory.push(input);
  historyIndex = cmdHistory.length;

  const parts = input.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1).join(" ");

  if (cmd === "clear") {
    terminalBody.innerHTML = "";
    return;
  }

  if (cmd === "echo") {
    appendLine(args || "");
    return;
  }

  if (commands[cmd]) {
    const result = commands[cmd]();
    if (result !== null) appendLine(result);
  } else {
    appendLine(`bash: ${cmd}: command not found. Type 'help' for available commands.`);
  }
}

terminalInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    runCommand(terminalInput.value);
    terminalInput.value = "";
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (historyIndex > 0) {
      historyIndex--;
      terminalInput.value = cmdHistory[historyIndex] || "";
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyIndex < cmdHistory.length - 1) {
      historyIndex++;
      terminalInput.value = cmdHistory[historyIndex] || "";
    } else {
      historyIndex = cmdHistory.length;
      terminalInput.value = "";
    }
  }
});

// Hint buttons
document.querySelectorAll(".hint-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const cmd = btn.getAttribute("data-cmd");
    terminalInput.value = cmd;
    terminalInput.focus();
    runCommand(cmd);
    terminalInput.value = "";
  });
});

// Focus terminal when clicking the window
document.querySelector(".terminal-window").addEventListener("click", () => {
  terminalInput.focus();
});

// ===== Initial welcome already in HTML =====
console.log("%c🚀 SysAdmin Portfolio loaded successfully!", "color: #e91e63; font-size: 14px; font-weight: bold;");
console.log("%cMiel Joy P. Ranes — System Administrator Career Portfolio", "color: #ad1457;");
